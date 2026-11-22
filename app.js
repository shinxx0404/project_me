// 검색, 페이지 이동, 캐릭터 상세 화면을 움직이는 코드입니다.
// 코딩 초보자는 이 파일을 수정하지 않아도 됩니다.
const $ = id => document.getElementById(id);
const pageIds = ["home", "profile", "archive", "character"];
const searchInput = $("character-search");
let selectedCategory = "ALL";

function textNode(tag, className, value) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  el.textContent = value;
  return el;
}

function renderFilters() {
  const categories = ["ALL", ...new Set(characters.map(c => c.category))];
  const row = $("category-filters");
  row.replaceChildren();
  for (const category of categories) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = category;
    const active = category === selectedCategory;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
    button.addEventListener("click", () => {
      selectedCategory = category;
      renderFilters();
      renderArchive();
    });
    row.appendChild(button);
  }
}

function renderArchive() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const shown = characters.filter(c => {
    const categoryMatch = selectedCategory === "ALL" || c.category === selectedCategory;
    const searchMatch = [c.name, c.korean, c.category, c.faction]
      .join(" ").toLocaleLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });
  const grid = $("char-grid");
  grid.replaceChildren();
  shown.forEach((c, i) => {
    const card = document.createElement("a");
    card.className = "char-card";
    card.href = `#character/${encodeURIComponent(c.id)}`;
    card.setAttribute("aria-label", `${c.korean} 캐릭터 상세 보기`);
    const image = document.createElement("img");
    image.src = c.image;
    image.alt = `${c.korean} 대표 일러스트`;
    image.loading = "lazy";
    const info = textNode("div", "char-meta", "");
    info.append(
      textNode("span", "char-kind", `${c.category} / ${c.faction}`),
      textNode("span", "char-name", c.name),
      textNode("span", "char-korean", c.korean)
    );
    card.append(image, info);
    grid.appendChild(card);
  });
  $("archive-count").textContent = `${shown.length} / ${characters.length}`;
  $("no-results").hidden = shown.length !== 0;
}

function detail(id) {
  const c = characters.find(c => c.id === id);
  if (!c) return false;
  const cover = $("detail-cover");
  cover.src = c.image;
  cover.alt = `${c.korean} 일러스트`;
  $("detail-number").textContent = `${c.category} / ORIGINAL CHARACTER`;
  $("detail-title").textContent = c.name;
  $("detail-korean").textContent = c.korean;
  $("detail-quote").textContent = c.quote || "";
  $("detail-description").textContent = c.description || "";
  $("detail-category").textContent = c.category || "—";
  $("detail-faction").textContent = c.faction || "—";
  $("detail-age").textContent = c.age || "—";
  $("detail-height").textContent = c.height || "—";
  $("prompt-platform").textContent = `PLATFORM / ${c.platform || "ORIGINAL"}`;
  $("prompt-box").value = c.prompt || "";
  $("copy-status").textContent = "";

  const gallery = $("detail-gallery");
  gallery.replaceChildren();
  const images = c.images && c.images.length ? c.images : [c.image];
  images.forEach((src, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery-item";
    btn.setAttribute("aria-label", `${c.korean} 갤러리 이미지 ${i+1} 확대`);
    const image = document.createElement("img");
    image.src = src;
    image.alt = `${c.korean} 추가 이미지 ${i+1}`;
    image.loading = "lazy";
    btn.appendChild(image);
    btn.addEventListener("click", () => {
      $("lightbox-image").src = src;
      $("lightbox-image").alt = `${c.korean} 이미지 ${i+1}`;
      $("image-dialog").showModal();
    });
    gallery.appendChild(btn);
  });
  document.title = `${c.korean} — NIGHTFALL ARCHIVE`;
  return true;
}

function navigate() {
  const raw = decodeURIComponent((location.hash || "#home").slice(1));
  const [route, ...parts] = raw.split("/");
  let target = pageIds.includes(route) ? route : "home";
  if (target === "character" && !detail(parts.join("/"))) {
    target = "archive";
  }
  pageIds.forEach(id => {
    $(`view-${id}`).hidden = id !== target;
  });
  document.querySelectorAll("[data-nav]").forEach(link => {
    const isActive = link.dataset.nav === (target === "character" ? "archive" : target);
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (target !== "character") document.title = "NIGHTFALL — PERSONAL ARCHIVE";
  window.scrollTo(0, 0);
}

$("prompt-copy").addEventListener("click", async () => {
  const value = $("prompt-box").value;
  let ok = false;
  try {
    if (!navigator.clipboard) throw new Error("clipboard unsupported");
    await navigator.clipboard.writeText(value);
    ok = true;
  } catch (_) {
    const area = $("prompt-box");
    area.focus();
    area.select();
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
  }
  $("copy-status").textContent = ok ? "프롬프트가 복사되었습니다." : "자동 복사가 제한되었습니다. 텍스트를 선택한 뒤 Ctrl+C 또는 Command+C를 눌러 주세요.";
});

$("image-close").addEventListener("click", () => $("image-dialog").close());
$("image-dialog").addEventListener("click", event => {
  if (event.target === $("image-dialog")) $("image-dialog").close();
});
searchInput.addEventListener("input", renderArchive);
window.addEventListener("hashchange", navigate);
renderFilters();
renderArchive();
navigate();
