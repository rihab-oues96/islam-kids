import chahada from "./assets/images/chahada.png";
import zakat from "./assets/images/zakat.png";
import sawm from "./assets/images/sawm.png";
import salat from "./assets/images/salat.png";
import hadj from "./assets/images/hadj.png";

import sadaka from "./assets/images/sadaka.png";
import doua from "./assets/images/doua.png";
import tasbih from "./assets/images/tasbih.png";
import ber from "./assets/images/ber.png";
import readingQuran from "./assets/images/reading-quran.png";
import revisionQuran from "./assets/images/revision-quran.png";
import hefdhQuran from "./assets/images/hefdh.png";
import kiam from "./assets/images/kiam.png";

import wakeUp from "./assets/images/wake-up.png";
import morEv from "./assets/images/morning-evening.png";
import douaPray from "./assets/images/doua-pray.png";
import wearing from "./assets/images/wearing.png";
import eating from "./assets/images/eating.png";
import home from "./assets/images/home.png";

export const Islam = [
  {
    id: "1",
    name: "الشهادتان",
    description: "شهادة أن لا إله إلا الله و أن محمداً رسول الله  ",
    image: chahada,
    video: "https://www.youtube.com/embed/bGmwbbgl5Io?start=7",
  },
  {
    id: "2",
    name: "الصلاة",
    description: "إقامة الصلاة",
    image: salat,
    video: "https://www.youtube.com/embed/b57JJK28D_A?start=2",
  },
  {
    id: "3",
    name: "الزكاة",
    description: "إيتاء الزكاة",
    image: zakat,
    video: "https://www.youtube.com/embed/imYu_yhQ5ME?start=2",
  },
  {
    id: "4",
    name: "الصوم ",
    description: "صوم رمضان",
    image: sawm,
    video: "https://www.youtube.com/embed/z-Fzyl_xt_M?start=9",
  },
  {
    id: "5",
    name: "الحج",
    description: "حج البيت من استطاع إليه سبيلا",
    image: hadj,
    video: "https://www.youtube.com/embed/rac1YiWTVOA?start=5",
  },
];

export const Tasks = [
  {
    id: "1",
    name: "صدقة",
    options: [],
    image: sadaka,
  },
  {
    id: "2",
    name: "دعاء",
    options: [],
    image: doua,
  },
  {
    id: "3",
    name: "تسبيح",
    options: [],
    image: tasbih,
  },
  {
    id: "4",
    name: "بر الوالدين",
    options: ["هدية", "خدمة", "", ""],
    image: ber,
  },
  {
    id: "5",
    name: "قراءة قرآن ",
    options: ["حزب", "جزء", "ثمن", "صفحة"],
    image: readingQuran,
  },
  {
    id: "6",
    name: "حفظ قرآن ",
    options: ["نصف صفحة", "صفحة"],
    image: hefdhQuran,
  },
  {
    id: "7",
    name: "مراجعة الحفظ ",
    options: ["نصف صفحة", "صفحة"],
    image: revisionQuran,
  },
  {
    id: "8",
    name: " قيام ليل ",
    options: ["", "ركعتين"],
    image: kiam,
  },
];

export const douaa = [
  {
    id: "01",
    name: "دعاء الاستيقاظ",
    image: wakeUp,
    content:
      "الحَمْدُ لِلَّهِ الذي أحْيانا بَعْدَ ما أماتَنا وإلَيْهِ النُّشُورُ",
    video: "https://www.youtube.com/embed/aCw52idvCT8",
  },

  {
    id: "02",
    name: "أذكار الصباح و المساء",
    image: morEv,
    content:
      "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا ، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
    video: "https://www.youtube.com/embed/RAdxPtu1TdY?start=16",
  },

  {
    id: "03",
    name: " أذكار الصلاة ",
    image: douaPray,
    content:
      "سبحان الله ( ثلاثا و ثلاثين مره ) ، الحمد لله  ( ثلاثا و ثلاثين مره ) ، الله أكبر ( ثلاثا و ثلاثين مره ) ... لا إله إلا الله وحده لا شريك له ، له الملك وله الحمد وهو على كل شئ قدير",
    video: "https://www.youtube.com/embed/mmwAcwhzutg?start=14",
  },

  {
    id: "04",
    name: "دعاء لبس الثياب",
    image: wearing,
    content: " الحمد لله الذي كساني هذا ورزقنيه من غير حول مني ولا قوة",
  },

  {
    id: "05",
    name: " أذكار الطعام",
    image: eating,
    content: " الحمد لله الذي أطعمني هذا ورزقنيه من غير حول مني و لا قوة ",
  },

  {
    id: "06",
    name: "دعاء الخروج و الدخول الى المنزل",
    image: home,
    content:
      "اللهم إني أسألك خير المولج، وخير المخرج، بسم الله ولجنا، وبسم الله خرجنا، وعلى الله ربنا توكلنا",
  },

  {
    id: "07",
    name: "دعاء دخول الخلاء",
    image: "",
    content: "",
  },

  {
    id: "08",
    name: "دعاء السفر",
    image: "",
    content: "",
  },

  {
    id: "09",
    name: "دعاء المرض",
    image: "",
    content: "",
  },

  {
    id: "010",
    name: " دعاء العطاس والتثاؤب",
    image: "",
    content: "",
  },

  {
    id: "011",
    name: "دعاء المطر و الرعد و الرياح",
    image: "",
    content: "",
  },

  {
    id: "012",
    name: "دعاء السوق",
    image: "",
    content: "",
  },
];
