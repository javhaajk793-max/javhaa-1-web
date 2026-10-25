import { Project, Hobby, Goal, Skill, GuestMessage, FunFact } from '../types';

export const DEFAULT_NETLIFY_SUBDOMAIN = 'silver-kataifi-352a93';

export const USER_INFO = {
  name: 'Жавхлан',
  nickname: 'Жавхаа',
  fullName: 'Жавхлан (Жавхаа)',
  age: 14,
  title: 'Залуу Программист & Вэб Хөгжүүлэгч',
  subtitle: '14 настай, вэб хөгжүүлэлт, AI болон шинэ технологид дурлагч',
  email: 'javhaajk793@gmail.com',
  location: 'Улаанбаатар, Монгол',
  schoolLevel: 'Ерөнхий боловсролын сургууль, 8-р анги',
  aboutBio: `Сайн байна уу! Намайг Жавхлан гэдэг (найзууд маань Жавхаа гэж дууддаг 👋). Би одоо 14 настай. Би 10 жилийн дараа мундаг Programmer болох том мөрөөдөлтэй. Сургалтандаа вэб хөгжүүлж сурах, AI хиймэл оюуныг сайн мэдэх, том том газруудын сайтыг хийж сурах зорилготойгоор суралцаж байна. Чөлөөт цагаараа Jujutsu Kaisen анимэ үзэх, CS2, PUBG, Mobile Legends тоглох, сагс, волейбол тоглох маш их дуртай!`,
  mantra: '10 жилийн дараа дэлхийн шилдэг Programmer болно!',
  dreamJobHeadline: 'Би 10 жилийн дараа programmer болно',
  dreamJobGoal: 'Том том газруудын сайт хөгжүүлэх',
  secretFact: 'Хэн ч мэдэхгүй нууц: Би нууцаар хоол иддэг 😄',
  favoriteVideoUrl: 'https://www.youtube.com/embed/G3r-nC-F6es?si=aQKbA5GrkF5JefBZ',
  animeImageUrl: 'https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg',
  programmerImageUrl: 'https://durhamcollege.ca/wp-content/uploads/Computer-Programmer.jpg',
};

export const FUN_FACTS: FunFact[] = [
  {
    id: 'anime',
    category: 'Дуртай анимэ',
    title: 'Jujutsu Kaisen',
    detail: 'Манга болон кино хувилбарыг нь бүтэн үзсэн!',
    emoji: '⛩️',
    imageUrl: 'https://i1.sndcdn.com/artworks-oa0jp2kWwqa6IbYI-C6rHlA-t500x500.jpg',
  },
  {
    id: 'games',
    category: 'Дуртай онлайн тоглоомууд',
    title: 'ML · PUBG · CS2 · Valorant',
    detail: 'Mobile Legends, PUBG Mobile, Counter-Strike 2, Valorant тоглох дуртай.',
    emoji: '🎮',
  },
  {
    id: 'food',
    category: 'Дуртай хоол',
    title: 'Цуйван ба Банштай шөл',
    detail: 'Амтат монгол цуйван, халуун банштай битүү шөлөнд хамгийн дуртай.',
    emoji: '🍜',
    imageUrl: 'https://eguur.mn/wp-content/uploads/2024/11/bituu-shul.jpg',
  },
  {
    id: 'sport',
    category: 'Дуртай спорт',
    title: 'Сагсан бөмбөг & Гар бөмбөг',
    detail: 'Basketball болон Volleyball тоглох дуртай, биеийн тамирын идэвхтэй.',
    emoji: '🏀',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-Xxxr0CEaJyoV7YCjgU0dpJpNNIkWXDu_pZiZu6H7RHrnIVU03rhHww&s=10',
  },
  {
    id: 'secret',
    category: 'Сонирхолтой баримт',
    title: 'Хэн ч мэдэхгүй нууц',
    detail: 'Би нууцаар хоол иддэг 😄',
    emoji: '🤫',
  },
  {
    id: 'purpose',
    category: 'Сургалтад сурч буй зорилго',
    title: 'Вэб хөгжүүлэх & AI сайн мэдэх',
    detail: 'Сайт хийж сурах, том том байгууллагуудын системийг хөгжүүлэгч болох.',
    emoji: '🚀',
  },
];

export const PROJECTS_LIST: Project[] = [
  {
    id: 'dream-job',
    title: 'Мөрөөдлийн ажил',
    filename: 'mergjil',
    category: 'Карьер & Зорилго',
    description: 'Би 10 жилийн дараа programmer болно. Код бичих, программ бичих, том том газруудын сайт хөгжүүлэх алсын хараа.',
    fullDetails: 'Миний бие 10 жилийн дараа Programmer болно. Юу хийдэг вэ: Программ бичих, код бичих. Хэрэгтэй ур чадвар: Код бичих, компьютер дээр илүү ихийг мэдэх, физикийг судлах. Миний төлөвлөгөө: HTML суралцах, илүү суралцах, өөрөө тоглоом зохиох. Яагаад энэ ажил вэ: Том том газруудын сайт хөгжүүлэх!',
    techStack: ['HTML5', 'CSS3', 'Flexbox', 'Web Layout'],
    features: [
      'Би 10 жилийн дараа programmer болно',
      'Хэрэгтэй ур чадвар: Код бичих, физик судлах',
      'Миний төлөвлөгөө: HTML суралцах, тоглоом зохиох',
      'Зорилго: Том газруудын сайт хөгжүүлэх',
    ],
    iconName: 'briefcase',
    accentColor: 'from-amber-500 to-rose-500',
    glowColor: 'rgba(244, 63, 94, 0.35)',
  },
  {
    id: 'my-youtube',
    title: 'Миний YouTube',
    filename: 'my-youtube',
    category: 'Контент & Загвар',
    description: 'YouTube интерфейсийг бүтээсэн төсөл. Хайлт, Нүүр, Shorts, Subscriptions, ангилал (Бүгд, Хөгжим, Тоглоом, Live, Аниме) цэстэй.',
    fullDetails: 'YouTube хуудасны бодит бүтцийг HTML болон CSS ашиглан хийсэн. Хайлтын талбар, хажуугийн sidebar цэс, ангиллын chips (Бүгд, Хөгжим, Тоглоом, Live, Аниме) болон хувийн профайл зураг my-photo.png-ийг холбон зохион байгуулсан.',
    techStack: ['HTML5', 'CSS3', 'YouTube UI Design', 'Flexbox'],
    features: [
      'YouTube-ийн бүрэн Header & Хайлтын талбар',
      'Sidebar цэс (Нүүр, Shorts, Subscriptions)',
      'Сэдэв сонгох chips (Тоглоом, Аниме, Хөгжим)',
      'Хувийн дуртай бичлэгүүдийн тоглуулагч',
    ],
    iconName: 'youtube',
    accentColor: 'from-red-500 to-pink-600',
    glowColor: 'rgba(239, 68, 68, 0.35)',
  },
  {
    id: 'tusul',
    title: 'Тоглоомын сайт',
    filename: 'tusul.html',
    category: 'Web Arcade & Төсөл',
    description: 'JavaScript болон CSS ашиглан хийсэн интерактив мини тоглоомууд, тооцоолуур, сорилт бүхий бүтээлч төслийн хуудас.',
    fullDetails: 'HTML, CSS, JS гурвыг хамтатган хийсэн хамгийн анхны цогц төслүүдийн нэг. Хэрэглэгчийн товшилт, онооны тоолуур, тоглоомын логикийг өөрөө кодчилон шийдсэн.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM Logic'],
    features: [
      'Интерактив тоглоомын логик',
      'Бодит цагийн онооны самбар',
      'Түвшин ахих боломж ба дууны эффект',
      'Дахин эхлүүлэх ухаалаг товчлуурууд',
    ],
    iconName: 'gamepad',
    accentColor: 'from-violet-500 to-indigo-600',
    glowColor: 'rgba(139, 92, 246, 0.35)',
  },
  {
    id: 'togloom',
    title: 'Малаа хашаандаа',
    filename: 'togloom.html',
    category: 'Монгол Уламжлалт Тоглоом',
    description: 'Монгол ахуйг харуулсан мал сүргээ чононоос хамгаалж, цаг дуусахаас өмнө хашаандаа оруулах хөгжилтэй интерактив вэб тоглоом.',
    fullDetails: 'Монголын 5 хошуу мал (морь, тэмээ, үхэр, хонь, ямаа)-ыг хээрийн бэлчээрээс аюулгүйгээр хашаанд нь цуглуулах тоглоом. Хүүхдүүдэд сонирхолтой, хурдан шалмаг хөдөлгөөн шаардсан бүтээлч төсөл.',
    techStack: ['HTML5 Canvas / DOM', 'CSS Animations', 'JavaScript Events'],
    features: [
      'Монгол таван хошуу малын хөдөлгөөнт дүрүүд',
      'Хулганаар чирж эсвэл товшиж хашаанд оруулах механик',
      'Таймер болон амжилтын оноо',
      'Ялалтын баярт салют ба мэдэгдэл',
    ],
    iconName: 'shield',
    accentColor: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16, 185, 129, 0.35)',
  },
];

export const HOBBIES: Hobby[] = [
  {
    id: 'anime',
    title: 'Jujutsu Kaisen үзэх',
    icon: 'tv',
    description: 'Дуртай анимэ Jujutsu Kaisen-ий манга болон кино хувилбарыг нь бүгдийг бүтэн үзсэн.',
    tag: 'Анимэ',
  },
  {
    id: 'gaming',
    title: 'CS2, ML, PUBG, Valorant',
    icon: 'gamepad-2',
    description: 'Онлайн тоглоомууд тоглож, стратеги боловсруулах дуртай.',
    tag: 'Тоглоом',
  },
  {
    id: 'sports',
    title: 'Сагсан бөмбөг & Волейбол',
    icon: 'palette',
    description: 'Биеийн тамираар хичээллэж сагс, волейбол тоглох сонирхолтой.',
    tag: 'Спорт',
  },
  {
    id: 'coding',
    title: 'Вэб код бичих & AI',
    icon: 'code',
    description: 'Вэб хөгжүүлж сурах, AI хиймэл оюуныг судалж, том том газруудын сайт хийж сурах.',
    tag: 'Програмчлал',
  },
];

export const SKILLS: Skill[] = [
  {
    name: 'HTML5 Бүтэц',
    level: 90,
    description: 'Вэб хуудасны үндсэн бүтэц, линкүүд, div хайрцгууд, зураг, iframe холболт',
    category: 'frontend',
  },
  {
    name: 'CSS3 Дизайн',
    level: 85,
    description: 'Flexbox байршил, border-radius, өнгө зохицол, YouTube болон мергжил хуудасны дизайн',
    category: 'frontend',
  },
  {
    name: 'JavaScript Суурь',
    level: 78,
    description: 'Интерактив үйлдлүүд, даралт, DOM элементүүд, мини тоглоомын логик',
    category: 'frontend',
  },
  {
    name: 'Netlify Cloud Байршуулалт',
    level: 95,
    description: 'silver-kataifi-352a93.netlify.app сайт дээрээ хуудсуудаа амжилттай байршуулсан',
    category: 'deployment',
  },
  {
    name: 'AI & Шинэ Технологи',
    level: 80,
    description: 'Хиймэл оюун судлах, ухаалаг функцүүдийг вэбдээ хэрэгжүүлэх эрмэлзэл',
    category: 'creativity',
  },
  {
    name: 'Компьютер & Логик сэтгэлгээ',
    level: 88,
    description: 'Компьютерийн бүтэц, физикийн үндэс судлах, програмчлалын алдаа олох',
    category: 'creativity',
  },
];

export const GOALS: Goal[] = [
  {
    id: '1',
    year: 'Одоо (14 нас)',
    title: 'Вэб хөгжүүлэлт & AI-г сайн сурах',
    description: 'HTML, CSS сайн эзэмшиж, AI хиймэл оюуныг ойлгон вэб сайтууд бүтээж сурах.',
    status: 'явагдаж_байгаа',
  },
  {
    id: '2',
    year: '15-17 нас',
    title: 'Өөрөө бие даан тоглоом зохиох',
    description: 'Шинэ түвшний тоглоом бүтээж, физик болон математикийн логикийг гүнзгийрүүлэн судлах.',
    status: 'ирээдүйд',
  },
  {
    id: '3',
    year: '10 жилийн дараа',
    title: 'Дэлхийн түвшний Programmer болох',
    description: 'Том том байгууллагуудын томоохон систем, сайтуудыг найдвартай хөгжүүлдэг мэргэжилтэн болох.',
    status: 'ирээдүйд',
  },
];

export const DEFAULT_GUEST_MESSAGES: GuestMessage[] = [
  {
    id: 'msg-1',
    senderName: 'Багш',
    message: 'Жавхлан маш сайн байна! Jujutsu Kaisen, тоглоом болон вэб төслүүд чинь үнэхээр сэтгэл татам болжээ. 10 жилийн дараа мундаг programmer болно шүү!',
    date: '2026.10.17',
    emoji: '🚀',
  },
  {
    id: 'msg-2',
    senderName: 'Найз Тэмүүлэн',
    message: 'Нууцаар хоол иддэг нууц чинь илэрчихлээ шүү хэхэ 😂 Гэхдээ вэб сайт чинь үнэхээр тасархай болсон байна!',
    date: '2026.10.17',
    emoji: '🔥',
  },
];
