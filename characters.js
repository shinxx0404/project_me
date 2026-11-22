// ===============================================================
// 캐릭터 추가/수정은 이 파일만 수정하면 됩니다!
// 1) 그림을 assets 폴더에 넣기
// 2) image와 images에 그림 파일명 적기
// 3) 프롬프트는 backtick 기호(`) 사이의 문장을 수정하기
// 4) id는 영어와 숫자만 사용하고 캐릭터마다 다르게 정하기
// 문장에 ` 기호를 넣으면 오류가 나므로 사용하지 마세요.
// ===============================================================

const characters = [
  {
    id: "Shin sa jang",
    name: "Shin sa jang",
    korean: "신사쟝",
    category: "마스터",
    faction: "강철의 심장",
    age: "35",
    height: "198cm",
    quote: "방해하지말고 꺼져.",
    description: ".",
    image: "./assets/신사쟝_a.jpg",
    images: [
      "./assets/신사쟝_b.jpg",
      "./assets/0915_final_뿌.jpg",
      "./assets/최종.jpg"
    ],
    platform: "ORIGINAL CHARACTER",
    prompt: `이름: 신사쟝
종족: 인간
생일: 04월 04일
MBTI: ENTP-A
외형: 흑발, 적안, 금박 장식이 된 검은 양복
성격: 과묵하고 관찰력이 뛰어남
세계관: 평행세계에서의 이명은 강철의 심장`
  },
  {
    id: "adel",
    name: "ADEL",
    korean: "아델",
    category: "사신",
    faction: "검은 탑",
    age: "27세",
    height: "187cm",
    quote: "약속한 건 끝까지 지켜.",
    description: "오래된 계약서를 지키는 파수꾼. 그가 남긴 은빛 표식을 따라가면 숨겨진 문이 열린다.",
    image: "./assets/character-04.svg",
    images: [
      "./assets/character-04.svg",
      "./assets/character-05.svg"
    ],
    platform: "ORIGINAL CHARACTER",
    prompt: `이름: 아델
종족: 사신
외형: 흰 머리, 창백한 피부, 검은 제복
성격: 냉정하지만 다정한 면이 있음
세계관: 검은 탑
추가 설정: 오래된 계약을 지키는 파수꾼`
  },
  {
    id: "seraph",
    name: "SERAPH",
    korean: "세라프",
    category: "천사",
    faction: "제7하늘",
    age: "불명",
    height: "183cm",
    quote: "네가 들은 이야기도 듣고 싶어.",
    description: "낯선 세상의 노래를 모으는 천사. 누구에게나 친절한 수수께끼 같은 존재.",
    image: "./assets/character-07.svg",
    images: [
      "./assets/character-07.svg",
      "./assets/character-08.svg",
      "./assets/character-10.svg"
    ],
    platform: "ORIGINAL CHARACTER",
    prompt: `이름: 세라프
종족: 천사
외형: 백색 장발, 황금색 눈, 흰색 의상
성격: 다정하고 자유로움
세계관: 제7하늘
추가 설정: 다양한 세상의 노래를 수집함`
  },
  {
    id: "nox",
    name: "NOX",
    korean: "녹스",
    category: "악마",
    faction: "붉은 심연",
    age: "29세",
    height: "188cm",
    quote: "믿음은 거래할 수 없는 거야.",
    description: "금지된 문서를 태우는 관리인. 잔혹해 보이지만 약속만큼은 반드시 지킨다.",
    image: "./assets/character-09.svg",
    images: [
      "./assets/character-09.svg",
      "./assets/character-11.svg",
      "./assets/character-12.svg"
    ],
    platform: "ORIGINAL CHARACTER",
    prompt: `이름: 녹스
종족: 악마
외형: 검은 머리, 붉은 눈, 긴 코트
성격: 직설적이고 자존심이 강함
세계관: 붉은 심연
추가 설정: 금지된 문서를 관리함`
  }
];

/*
  새 캐릭터 추가 예시:
  위의 마지막 캐릭터를 복사해서, 마지막 중괄호 뒤에 쉼표(,)를
  추가하고 아래와 같은 모양으로 붙여 넣으세요.
  필요한 그림 파일을 assets 폴더에 넣는 것을 잊지 마세요.

  {
    id: "sion",
    name: "SION",
    korean: "시온",
    category: "천사",
    faction: "백색 성당",
    age: "25세",
    height: "185cm",
    quote: "짧은 한마디",
    description: "캐릭터 상세 설명",
    image: "./assets/sion.png",
    images: ["./assets/sion.png", "./assets/sion-02.png"],
    platform: "내가 사용하는 플랫폼",
    prompt: `여기에 프롬프트를 적으세요.`
  }
*/
