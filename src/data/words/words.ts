export type Difficulty = "easy" | "medium" | "hard";

export type Category =
  | "food"
  | "animals"
  | "countries"
  | "movies"
  | "celebrities"
  | "sports"
  | "professions"
  | "objects"
  | "places"
  | "brands"
  | "technology"
  | "nature"
  | "transportation"
  | "music"
  | "videoGames"
  | "random";

type WordEntry = {
  en: string;
  ar: string;
};

type WordPair = {
  category: Category;
  difficulty: Difficulty;
  words: [WordEntry, WordEntry];
};

export const wordPairs: WordPair[] = [
  {
    category: "food",
    difficulty: "easy",
    words: [
      { en: "Pizza", ar: "بيتزا" },
      { en: "Burger", ar: "برجر" },
    ],
  },
  {
    category: "food",
    difficulty: "easy",
    words: [
      { en: "Koshari", ar: "كشري" },
      { en: "Pasta", ar: "مكرونة" },
    ],
  },
  {
    category: "food",
    difficulty: "easy",
    words: [
      { en: "Mango", ar: "مانجا" },
      { en: "Apple", ar: "تفاحة" },
    ],
  },
  {
    category: "food",
    difficulty: "easy",
    words: [
      { en: "Chocolate", ar: "شوكولاتة" },
      { en: "Falafel", ar: "طعمية" },
    ],
  },
  {
    category: "food",
    difficulty: "medium",
    words: [
      { en: "Pancake", ar: "بان كيك" },
      { en: "Waffle", ar: "وافل" },
    ],
  },
  {
    category: "food",
    difficulty: "medium",
    words: [
      { en: "Sushi", ar: "سوشي" },
      { en: "Ramen", ar: "رامن" },
    ],
  },
  {
    category: "food",
    difficulty: "medium",
    words: [
      { en: "Donut", ar: "دونات" },
      { en: "Croissant", ar: "كرواسون" },
    ],
  },
  {
    category: "food",
    difficulty: "medium",
    words: [
      { en: "Lasagna", ar: "لازانيا" },
      { en: "Pasta", ar: "مكرونة" },
    ],
  },
  {
    category: "food",
    difficulty: "hard",
    words: [
      { en: "Quinoa", ar: "كينوا" },
      { en: "Caviar", ar: "كافيار" },
    ],
  },
  {
    category: "food",
    difficulty: "hard",
    words: [
      { en: "Kimchi", ar: "كيمتشي" },
      { en: "Nachos", ar: "ناتشوز" },
    ],
  },
  {
    category: "food",
    difficulty: "hard",
    words: [
      { en: "Tiramisu", ar: "تيراميسو" },
      { en: "Croissant", ar: "كرواسون" },
    ],
  },

  {
    category: "animals",
    difficulty: "easy",
    words: [
      { en: "Cat", ar: "قطة" },
      { en: "Dog", ar: "كلب" },
    ],
  },
  {
    category: "animals",
    difficulty: "easy",
    words: [
      { en: "Lion", ar: "أسد" },
      { en: "Elephant", ar: "فيل" },
    ],
  },
  {
    category: "animals",
    difficulty: "easy",
    words: [
      { en: "Monkey", ar: "قرد" },
      { en: "Rabbit", ar: "أرنب" },
    ],
  },
  {
    category: "animals",
    difficulty: "easy",
    words: [
      { en: "Horse", ar: "حصان" },
      { en: "Giraffe", ar: "زرافة" },
    ],
  },
  {
    category: "animals",
    difficulty: "medium",
    words: [
      { en: "Penguin", ar: "بطريق" },
      { en: "Flamingo", ar: "فلامنجو" },
    ],
  },
  {
    category: "animals",
    difficulty: "medium",
    words: [
      { en: "Kangaroo", ar: "كنغر" },
      { en: "Koala", ar: "كوالا" },
    ],
  },
  {
    category: "animals",
    difficulty: "medium",
    words: [
      { en: "Crocodile", ar: "تمساح" },
      { en: "Turtle", ar: "سلحفاة" },
    ],
  },
  {
    category: "animals",
    difficulty: "medium",
    words: [
      { en: "Peacock", ar: "طاووس" },
      { en: "Owl", ar: "بومة" },
    ],
  },
  {
    category: "animals",
    difficulty: "hard",
    words: [
      { en: "Hyena", ar: "ضبع" },
      { en: "Gazelle", ar: "غزال" },
    ],
  },
  {
    category: "animals",
    difficulty: "hard",
    words: [
      { en: "Panther", ar: "فهد أسود" },
      { en: "Panda", ar: "باندا" },
    ],
  },
  {
    category: "animals",
    difficulty: "hard",
    words: [
      { en: "Hippopotamus", ar: "فرس النهر" },
      { en: "Koala", ar: "كوالا" },
    ],
  },

  {
    category: "countries",
    difficulty: "easy",
    words: [
      { en: "Egypt", ar: "مصر" },
      { en: "Saudi Arabia", ar: "السعودية" },
    ],
  },
  {
    category: "countries",
    difficulty: "easy",
    words: [
      { en: "France", ar: "فرنسا" },
      { en: "Italy", ar: "إيطاليا" },
    ],
  },
  {
    category: "countries",
    difficulty: "easy",
    words: [
      { en: "America", ar: "أمريكا" },
      { en: "Germany", ar: "ألمانيا" },
    ],
  },
  {
    category: "countries",
    difficulty: "easy",
    words: [
      { en: "Brazil", ar: "البرازيل" },
      { en: "Turkey", ar: "تركيا" },
    ],
  },
  {
    category: "countries",
    difficulty: "medium",
    words: [
      { en: "Japan", ar: "اليابان" },
      { en: "China", ar: "الصين" },
    ],
  },
  {
    category: "countries",
    difficulty: "medium",
    words: [
      { en: "Spain", ar: "إسبانيا" },
      { en: "Greece", ar: "اليونان" },
    ],
  },
  {
    category: "countries",
    difficulty: "medium",
    words: [
      { en: "India", ar: "الهند" },
      { en: "Russia", ar: "روسيا" },
    ],
  },
  {
    category: "countries",
    difficulty: "medium",
    words: [
      { en: "Canada", ar: "كندا" },
      { en: "Australia", ar: "أستراليا" },
    ],
  },
  {
    category: "countries",
    difficulty: "hard",
    words: [
      { en: "Mexico", ar: "المكسيك" },
      { en: "Argentina", ar: "الأرجنتين" },
    ],
  },
  {
    category: "countries",
    difficulty: "hard",
    words: [
      { en: "Sweden", ar: "السويد" },
      { en: "Portugal", ar: "البرتغال" },
    ],
  },
  {
    category: "countries",
    difficulty: "hard",
    words: [
      { en: "Morocco", ar: "المغرب" },
      { en: "Thailand", ar: "تايلاند" },
    ],
  },

  {
    category: "movies",
    difficulty: "easy",
    words: [
      { en: "Titanic", ar: "تايتانيك" },
      { en: "Avatar", ar: "أفاتار" },
    ],
  },
  {
    category: "movies",
    difficulty: "easy",
    words: [
      { en: "Frozen", ar: "فروزن" },
      { en: "Coco", ar: "كوكو" },
    ],
  },
  {
    category: "movies",
    difficulty: "easy",
    words: [
      { en: "Shrek", ar: "شريك" },
      { en: "Barbie", ar: "باربي" },
    ],
  },
  {
    category: "movies",
    difficulty: "easy",
    words: [
      { en: "Joker", ar: "جوكر" },
      { en: "Batman", ar: "باتمان" },
    ],
  },
  {
    category: "movies",
    difficulty: "medium",
    words: [
      { en: "Spider-Man", ar: "سبايدر مان" },
      { en: "Superman", ar: "سوبرمان" },
    ],
  },
  {
    category: "movies",
    difficulty: "medium",
    words: [
      { en: "Inception", ar: "إنسبشن" },
      { en: "Interstellar", ar: "إنترستيلار" },
    ],
  },
  {
    category: "movies",
    difficulty: "medium",
    words: [
      { en: "Minions", ar: "مينيونز" },
      { en: "Aladdin", ar: "علاء الدين" },
    ],
  },
  {
    category: "movies",
    difficulty: "medium",
    words: [
      { en: "Gladiator", ar: "جلاديتور" },
      { en: "Mulan", ar: "مولان" },
    ],
  },
  {
    category: "movies",
    difficulty: "hard",
    words: [
      { en: "Parasite", ar: "باراسايت" },
      { en: "Jaws", ar: "الفك المفترس" },
    ],
  },
  {
    category: "movies",
    difficulty: "hard",
    words: [
      { en: "Rocky", ar: "روكي" },
      { en: "Hercules", ar: "هرقل" },
    ],
  },
  {
    category: "movies",
    difficulty: "hard",
    words: [
      { en: "Twilight", ar: "توايلايت" },
      { en: "Dune", ar: "ديون" },
    ],
  },

  {
    category: "celebrities",
    difficulty: "easy",
    words: [
      { en: "Salah", ar: "صلاح" },
      { en: "Messi", ar: "ميسي" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "easy",
    words: [
      { en: "Ronaldo", ar: "رونالدو" },
      { en: "Amr", ar: "عمرو دياب" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "easy",
    words: [
      { en: "Taylor", ar: "تايلور سويفت" },
      { en: "Shakira", ar: "شاكيرا" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "easy",
    words: [
      { en: "Nancy", ar: "نانسي عجرم" },
      { en: "Adel", ar: "عادل إمام" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "medium",
    words: [
      { en: "Zendaya", ar: "زيندايا" },
      { en: "Selena", ar: "سيلينا جوميز" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "medium",
    words: [
      { en: "Adele", ar: "أديل" },
      { en: "Dua", ar: "دوا ليبا" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "medium",
    words: [
      { en: "Drake", ar: "دريك" },
      { en: "The Weeknd", ar: "ذا ويكند" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "medium",
    words: [
      { en: "Sherihan", ar: "شيريهان" },
      { en: "Tamer", ar: "تامر حسني" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "hard",
    words: [
      { en: "Keanu", ar: "كيانو ريفز" },
      { en: "Cillian", ar: "كيليان مورفي" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "hard",
    words: [
      { en: "Beyoncé", ar: "بيونسيه" },
      { en: "Rihanna", ar: "ريهانا" },
    ],
  },
  {
    category: "celebrities",
    difficulty: "hard",
    words: [
      { en: "Mahmoud", ar: "محمود العسيلي" },
      { en: "Asser", ar: "آسر ياسين" },
    ],
  },

  {
    category: "sports",
    difficulty: "easy",
    words: [
      { en: "Football", ar: "كورة" },
      { en: "Basketball", ar: "كرة سلة" },
    ],
  },
  {
    category: "sports",
    difficulty: "easy",
    words: [
      { en: "Swimming", ar: "سباحة" },
      { en: "Running", ar: "جري" },
    ],
  },
  {
    category: "sports",
    difficulty: "easy",
    words: [
      { en: "Tennis", ar: "تنس" },
      { en: "Volleyball", ar: "كرة طائرة" },
    ],
  },
  {
    category: "sports",
    difficulty: "easy",
    words: [
      { en: "Boxing", ar: "ملاكمة" },
      { en: "Wrestling", ar: "مصارعة" },
    ],
  },
  {
    category: "sports",
    difficulty: "medium",
    words: [
      { en: "Karate", ar: "كاراتيه" },
      { en: "Fencing", ar: "مبارزة" },
    ],
  },
  {
    category: "sports",
    difficulty: "medium",
    words: [
      { en: "Gymnastics", ar: "جمباز" },
      { en: "Badminton", ar: "ريشة" },
    ],
  },
  {
    category: "sports",
    difficulty: "medium",
    words: [
      { en: "Cycling", ar: "عجل" },
      { en: "Squash", ar: "اسكواش" },
    ],
  },
  {
    category: "sports",
    difficulty: "medium",
    words: [
      { en: "Archery", ar: "رماية" },
      { en: "Handball", ar: "كرة يد" },
    ],
  },
  {
    category: "sports",
    difficulty: "hard",
    words: [
      { en: "Golf", ar: "جولف" },
      { en: "Polo", ar: "بولو" },
    ],
  },
  {
    category: "sports",
    difficulty: "hard",
    words: [
      { en: "Curling", ar: "كيرلنج" },
      { en: "Rowing", ar: "تجديف" },
    ],
  },
  {
    category: "sports",
    difficulty: "hard",
    words: [
      { en: "Rugby", ar: "رجبي" },
      { en: "Sailing", ar: "إبحار" },
    ],
  },

  {
    category: "professions",
    difficulty: "easy",
    words: [
      { en: "Doctor", ar: "دكتور" },
      { en: "Nurse", ar: "ممرض" },
    ],
  },
  {
    category: "professions",
    difficulty: "easy",
    words: [
      { en: "Teacher", ar: "مدرس" },
      { en: "Chef", ar: "شيف" },
    ],
  },
  {
    category: "professions",
    difficulty: "easy",
    words: [
      { en: "Pilot", ar: "طيار" },
      { en: "Driver", ar: "سواق" },
    ],
  },
  {
    category: "professions",
    difficulty: "easy",
    words: [
      { en: "Police", ar: "ظابط" },
      { en: "Actor", ar: "ممثل" },
    ],
  },
  {
    category: "professions",
    difficulty: "medium",
    words: [
      { en: "Dentist", ar: "دكتور أسنان" },
      { en: "Surgeon", ar: "جراح" },
    ],
  },
  {
    category: "professions",
    difficulty: "medium",
    words: [
      { en: "Photographer", ar: "مصور" },
      { en: "Journalist", ar: "صحفي" },
    ],
  },
  {
    category: "professions",
    difficulty: "medium",
    words: [
      { en: "Engineer", ar: "مهندس" },
      { en: "Architect", ar: "مهندس معماري" },
    ],
  },
  {
    category: "professions",
    difficulty: "medium",
    words: [
      { en: "Lawyer", ar: "محامي" },
      { en: "Scientist", ar: "عالم" },
    ],
  },
  {
    category: "professions",
    difficulty: "hard",
    words: [
      { en: "Detective", ar: "محقق" },
      { en: "Magician", ar: "ساحر" },
    ],
  },
  {
    category: "professions",
    difficulty: "hard",
    words: [
      { en: "Astronaut", ar: "رائد فضاء" },
      { en: "Veterinarian", ar: "دكتور بيطري" },
    ],
  },
  {
    category: "professions",
    difficulty: "hard",
    words: [
      { en: "Firefighter", ar: "مطافي" },
      { en: "Barber", ar: "حلاق" },
    ],
  },

  {
    category: "objects",
    difficulty: "easy",
    words: [
      { en: "Phone", ar: "موبايل" },
      { en: "Camera", ar: "كاميرا" },
    ],
  },
  {
    category: "objects",
    difficulty: "easy",
    words: [
      { en: "Chair", ar: "كرسي" },
      { en: "Table", ar: "ترابيزة" },
    ],
  },
  {
    category: "objects",
    difficulty: "easy",
    words: [
      { en: "Mirror", ar: "مراية" },
      { en: "Clock", ar: "ساعة" },
    ],
  },
  {
    category: "objects",
    difficulty: "easy",
    words: [
      { en: "Bottle", ar: "إزازة" },
      { en: "Bag", ar: "شنطة" },
    ],
  },
  {
    category: "objects",
    difficulty: "medium",
    words: [
      { en: "Remote", ar: "ريموت" },
      { en: "Wallet", ar: "محفظة" },
    ],
  },
  {
    category: "objects",
    difficulty: "medium",
    words: [
      { en: "Helmet", ar: "خوذة" },
      { en: "Suitcase", ar: "شنطة سفر" },
    ],
  },
  {
    category: "objects",
    difficulty: "medium",
    words: [
      { en: "Compass", ar: "بوصلة" },
      { en: "Binoculars", ar: "منظار" },
    ],
  },
  {
    category: "objects",
    difficulty: "medium",
    words: [
      { en: "Microscope", ar: "ميكروسكوب" },
      { en: "Telescope", ar: "تلسكوب" },
    ],
  },
  {
    category: "objects",
    difficulty: "hard",
    words: [
      { en: "Tripod", ar: "حامل كاميرا" },
      { en: "Projector", ar: "بروجيكتور" },
    ],
  },
  {
    category: "objects",
    difficulty: "hard",
    words: [
      { en: "Thermometer", ar: "ترمومتر" },
      { en: "Calculator", ar: "آلة حاسبة" },
    ],
  },
  {
    category: "objects",
    difficulty: "hard",
    words: [
      { en: "Stethoscope", ar: "سماعة طبيب" },
      { en: "Microscope", ar: "ميكروسكوب" },
    ],
  },

  {
    category: "places",
    difficulty: "easy",
    words: [
      { en: "School", ar: "مدرسة" },
      { en: "University", ar: "جامعة" },
    ],
  },
  {
    category: "places",
    difficulty: "easy",
    words: [
      { en: "Beach", ar: "بحر" },
      { en: "Park", ar: "جنينة" },
    ],
  },
  {
    category: "places",
    difficulty: "easy",
    words: [
      { en: "Mall", ar: "مول" },
      { en: "Restaurant", ar: "مطعم" },
    ],
  },
  {
    category: "places",
    difficulty: "easy",
    words: [
      { en: "Hospital", ar: "مستشفى" },
      { en: "Cinema", ar: "سينما" },
    ],
  },
  {
    category: "places",
    difficulty: "medium",
    words: [
      { en: "Airport", ar: "مطار" },
      { en: "Stadium", ar: "استاد" },
    ],
  },
  {
    category: "places",
    difficulty: "medium",
    words: [
      { en: "Museum", ar: "متحف" },
      { en: "Library", ar: "مكتبة" },
    ],
  },
  {
    category: "places",
    difficulty: "medium",
    words: [
      { en: "Hotel", ar: "فندق" },
      { en: "Aquarium", ar: "أكواريوم" },
    ],
  },
  {
    category: "places",
    difficulty: "medium",
    words: [
      { en: "Pharmacy", ar: "صيدلية" },
      { en: "Mosque", ar: "جامع" },
    ],
  },
  {
    category: "places",
    difficulty: "hard",
    words: [
      { en: "Embassy", ar: "سفارة" },
      { en: "Monastery", ar: "دير" },
    ],
  },
  {
    category: "places",
    difficulty: "hard",
    words: [
      { en: "Theatre", ar: "مسرح" },
      { en: "Castle", ar: "قلعة" },
    ],
  },
  {
    category: "places",
    difficulty: "hard",
    words: [
      { en: "Factory", ar: "مصنع" },
      { en: "Temple", ar: "معبد" },
    ],
  },

  {
    category: "brands",
    difficulty: "easy",
    words: [
      { en: "Nike", ar: "نايكي" },
      { en: "Adidas", ar: "أديداس" },
    ],
  },
  {
    category: "brands",
    difficulty: "easy",
    words: [
      { en: "Apple", ar: "أبل" },
      { en: "Samsung", ar: "سامسونج" },
    ],
  },
  {
    category: "brands",
    difficulty: "easy",
    words: [
      { en: "Coca-Cola", ar: "كوكاكولا" },
      { en: "Pepsi", ar: "بيبسي" },
    ],
  },
  {
    category: "brands",
    difficulty: "easy",
    words: [
      { en: "McDonald's", ar: "ماكدونالدز" },
      { en: "KFC", ar: "كنتاكي" },
    ],
  },
  {
    category: "brands",
    difficulty: "medium",
    words: [
      { en: "IKEA", ar: "إيكيا" },
      { en: "Lego", ar: "ليجو" },
    ],
  },
  {
    category: "brands",
    difficulty: "medium",
    words: [
      { en: "Netflix", ar: "نتفلكس" },
      { en: "Spotify", ar: "سبوتيفاي" },
    ],
  },
  {
    category: "brands",
    difficulty: "medium",
    words: [
      { en: "Puma", ar: "بوما" },
      { en: "Zara", ar: "زارا" },
    ],
  },
  {
    category: "brands",
    difficulty: "medium",
    words: [
      { en: "H&M", ar: "إتش آند إم" },
      { en: "Huawei", ar: "هواوي" },
    ],
  },
  {
    category: "brands",
    difficulty: "hard",
    words: [
      { en: "Dyson", ar: "دايسون" },
      { en: "Panasonic", ar: "باناسونيك" },
    ],
  },
  {
    category: "brands",
    difficulty: "hard",
    words: [
      { en: "Rolex", ar: "رولكس" },
      { en: "Lacoste", ar: "لاكوست" },
    ],
  },
  {
    category: "brands",
    difficulty: "hard",
    words: [
      { en: "Canon", ar: "كانون" },
      { en: "Nescafe", ar: "نسكافيه" },
    ],
  },

  {
    category: "technology",
    difficulty: "easy",
    words: [
      { en: "Laptop", ar: "لاب توب" },
      { en: "Tablet", ar: "تابلت" },
    ],
  },
  {
    category: "technology",
    difficulty: "easy",
    words: [
      { en: "Camera", ar: "كاميرا" },
      { en: "Printer", ar: "طابعة" },
    ],
  },
  {
    category: "technology",
    difficulty: "easy",
    words: [
      { en: "Internet", ar: "إنترنت" },
      { en: "Wi-Fi", ar: "واي فاي" },
    ],
  },
  {
    category: "technology",
    difficulty: "easy",
    words: [
      { en: "Robot", ar: "روبوت" },
      { en: "Headphones", ar: "سماعة" },
    ],
  },
  {
    category: "technology",
    difficulty: "medium",
    words: [
      { en: "Bluetooth", ar: "بلوتوث" },
      { en: "Wi-Fi", ar: "واي فاي" },
    ],
  },
  {
    category: "technology",
    difficulty: "medium",
    words: [
      { en: "Drone", ar: "درون" },
      { en: "Satellite", ar: "قمر صناعي" },
    ],
  },
  {
    category: "technology",
    difficulty: "medium",
    words: [
      { en: "Keyboard", ar: "كيبورد" },
      { en: "Microphone", ar: "مايك" },
    ],
  },
  {
    category: "technology",
    difficulty: "medium",
    words: [
      { en: "Hologram", ar: "هولوجرام" },
      { en: "Password", ar: "باسورد" },
    ],
  },
  {
    category: "technology",
    difficulty: "hard",
    words: [
      { en: "Blockchain", ar: "بلوك تشين" },
      { en: "Cryptography", ar: "تشفير" },
    ],
  },
  {
    category: "technology",
    difficulty: "hard",
    words: [
      { en: "Algorithm", ar: "خوارزمية" },
      { en: "Software", ar: "سوفت وير" },
    ],
  },
  {
    category: "technology",
    difficulty: "hard",
    words: [
      { en: "Hacker", ar: "هاكر" },
      { en: "Bluetooth", ar: "بلوتوث" },
    ],
  },

  {
    category: "nature",
    difficulty: "easy",
    words: [
      { en: "Tree", ar: "شجرة" },
      { en: "Flower", ar: "وردة" },
    ],
  },
  {
    category: "nature",
    difficulty: "easy",
    words: [
      { en: "Sun", ar: "شمس" },
      { en: "Moon", ar: "قمر" },
    ],
  },
  {
    category: "nature",
    difficulty: "easy",
    words: [
      { en: "Sea", ar: "بحر" },
      { en: "River", ar: "نهر" },
    ],
  },
  {
    category: "nature",
    difficulty: "easy",
    words: [
      { en: "Rain", ar: "مطر" },
      { en: "Desert", ar: "صحراء" },
    ],
  },
  {
    category: "nature",
    difficulty: "medium",
    words: [
      { en: "Volcano", ar: "بركان" },
      { en: "Earthquake", ar: "زلزال" },
    ],
  },
  {
    category: "nature",
    difficulty: "medium",
    words: [
      { en: "Rainbow", ar: "قوس قزح" },
      { en: "Lightning", ar: "برق" },
    ],
  },
  {
    category: "nature",
    difficulty: "medium",
    words: [
      { en: "Waterfall", ar: "شلال" },
      { en: "Glacier", ar: "نهر جليدي" },
    ],
  },
  {
    category: "nature",
    difficulty: "medium",
    words: [
      { en: "Thunder", ar: "رعد" },
      { en: "Cloud", ar: "سحابة" },
    ],
  },
  {
    category: "nature",
    difficulty: "hard",
    words: [
      { en: "Tornado", ar: "إعصار" },
      { en: "Tsunami", ar: "تسونامي" },
    ],
  },
  {
    category: "nature",
    difficulty: "hard",
    words: [
      { en: "Eclipse", ar: "كسوف" },
      { en: "Meteor", ar: "نيزك" },
    ],
  },
  {
    category: "nature",
    difficulty: "hard",
    words: [
      { en: "Drought", ar: "جفاف" },
      { en: "Earthquake", ar: "زلزال" },
    ],
  },

  {
    category: "transportation",
    difficulty: "easy",
    words: [
      { en: "Car", ar: "عربية" },
      { en: "Taxi", ar: "تاكسي" },
    ],
  },
  {
    category: "transportation",
    difficulty: "easy",
    words: [
      { en: "Bus", ar: "أتوبيس" },
      { en: "Train", ar: "قطر" },
    ],
  },
  {
    category: "transportation",
    difficulty: "easy",
    words: [
      { en: "Plane", ar: "طيارة" },
      { en: "Helicopter", ar: "هليكوبتر" },
    ],
  },
  {
    category: "transportation",
    difficulty: "easy",
    words: [
      { en: "Bicycle", ar: "عجلة" },
      { en: "Motorcycle", ar: "موتوسيكل" },
    ],
  },
  {
    category: "transportation",
    difficulty: "medium",
    words: [
      { en: "Tram", ar: "ترام" },
      { en: "Metro", ar: "مترو" },
    ],
  },
  {
    category: "transportation",
    difficulty: "medium",
    words: [
      { en: "Submarine", ar: "غواصة" },
      { en: "Yacht", ar: "يخت" },
    ],
  },
  {
    category: "transportation",
    difficulty: "medium",
    words: [
      { en: "Scooter", ar: "سكوتر" },
      { en: "Tuk-tuk", ar: "توك توك" },
    ],
  },
  {
    category: "transportation",
    difficulty: "medium",
    words: [
      { en: "Truck", ar: "نقل" },
      { en: "Boat", ar: "مركب" },
    ],
  },
  {
    category: "transportation",
    difficulty: "hard",
    words: [
      { en: "Ferry", ar: "عبّارة" },
      { en: "Canoe", ar: "زورق" },
    ],
  },
  {
    category: "transportation",
    difficulty: "hard",
    words: [
      { en: "Monorail", ar: "مونوريل" },
      { en: "Tram", ar: "ترام" },
    ],
  },
  {
    category: "transportation",
    difficulty: "hard",
    words: [
      { en: "Zeppelin", ar: "منطاد" },
      { en: "Rickshaw", ar: "ريكشا" },
    ],
  },
  {
    category: "music",
    difficulty: "easy",
    words: [
      { en: "Piano", ar: "بيانو" },
      { en: "Keyboard", ar: "كيبورد" },
    ],
  },
  {
    category: "music",
    difficulty: "easy",
    words: [
      { en: "Guitar", ar: "جيتار" },
      { en: "Violin", ar: "كمان" },
    ],
  },
  {
    category: "music",
    difficulty: "easy",
    words: [
      { en: "Drums", ar: "طبلة" },
      { en: "Flute", ar: "ناي" },
    ],
  },
  {
    category: "music",
    difficulty: "easy",
    words: [
      { en: "Singer", ar: "مطرب" },
      { en: "Song", ar: "أغنية" },
    ],
  },
  {
    category: "music",
    difficulty: "medium",
    words: [
      { en: "Saxophone", ar: "ساكسفون" },
      { en: "Trumpet", ar: "ترومبيت" },
    ],
  },
  {
    category: "music",
    difficulty: "medium",
    words: [
      { en: "Accordion", ar: "أكورديون" },
      { en: "Harp", ar: "هارب" },
    ],
  },
  {
    category: "music",
    difficulty: "medium",
    words: [
      { en: "Cello", ar: "تشيللو" },
      { en: "Violin", ar: "كمان" },
    ],
  },
  {
    category: "music",
    difficulty: "medium",
    words: [
      { en: "Opera", ar: "أوبرا" },
      { en: "Jazz", ar: "جاز" },
    ],
  },
  {
    category: "music",
    difficulty: "hard",
    words: [
      { en: "Theremin", ar: "ثيرمين" },
      { en: "Ocarina", ar: "أوكارينا" },
    ],
  },
  {
    category: "music",
    difficulty: "hard",
    words: [
      { en: "Bassoon", ar: "باسون" },
      { en: "Harpsichord", ar: "هاربسيكورد" },
    ],
  },
  {
    category: "music",
    difficulty: "hard",
    words: [
      { en: "Didgeridoo", ar: "ديدجيريدو" },
      { en: "Mandolin", ar: "مندولين" },
    ],
  },

  {
    category: "videoGames",
    difficulty: "easy",
    words: [
      { en: "Minecraft", ar: "ماينكرافت" },
      { en: "Roblox", ar: "روبلوكس" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "easy",
    words: [
      { en: "FIFA", ar: "فيفا" },
      { en: "GTA", ar: "جي تي إيه" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "easy",
    words: [
      { en: "Fortnite", ar: "فورتنايت" },
      { en: "PUBG", ar: "ببجي" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "easy",
    words: [
      { en: "Mario", ar: "ماريو" },
      { en: "Sonic", ar: "سونيك" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "medium",
    words: [
      { en: "Valorant", ar: "فالورانت" },
      { en: "Overwatch", ar: "أوفر واتش" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "medium",
    words: [
      { en: "Among Us", ar: "أمونج أس" },
      { en: "Clash", ar: "كلاش" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "medium",
    words: [
      { en: "Terraria", ar: "تيراريا" },
      { en: "Portal", ar: "بورتال" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "medium",
    words: [
      { en: "Tekken", ar: "تيكن" },
      { en: "Fortnite", ar: "فورتنايت" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "hard",
    words: [
      { en: "Hades", ar: "هاديس" },
      { en: "Elden", ar: "إلدن رينج" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "hard",
    words: [
      { en: "Celeste", ar: "سيليست" },
      { en: "Hollow", ar: "هولو" },
    ],
  },
  {
    category: "videoGames",
    difficulty: "hard",
    words: [
      { en: "Witcher", ar: "ويتشر" },
      { en: "Fallout", ar: "فول آوت" },
    ],
  },

  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Phone", ar: "موبايل" },
      { en: "Book", ar: "كتاب" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Table", ar: "ترابيزة" },
      { en: "Chair", ar: "كرسي" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Bread", ar: "عيش" },
      { en: "Milk", ar: "لبن" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Water", ar: "مياه" },
      { en: "Apple", ar: "تفاحة" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Shoes", ar: "جزمة" },
      { en: "Bag", ar: "شنطة" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Key", ar: "مفتاح" },
      { en: "Clock", ar: "ساعة" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Door", ar: "باب" },
      { en: "Window", ar: "شباك" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Pillow", ar: "مخدة" },
      { en: "Mirror", ar: "مراية" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Pen", ar: "قلم" },
      { en: "Cup", ar: "كوباية" },
    ],
  },
  {
    category: "random",
    difficulty: "easy",
    words: [
      { en: "Plate", ar: "طبق" },
      { en: "Spoon", ar: "معلقة" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Toothbrush", ar: "فرشة أسنان" },
      { en: "Comb", ar: "مشط" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Towel", ar: "فوطة" },
      { en: "Blanket", ar: "بطانية" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Wallet", ar: "محفظة" },
      { en: "Umbrella", ar: "شمسية" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Fridge", ar: "تلاجة" },
      { en: "Remote", ar: "ريموت" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Scissors", ar: "مقص" },
      { en: "Soap", ar: "صابون" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Shampoo", ar: "شامبو" },
      { en: "Cheese", ar: "جبنة" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Pasta", ar: "مكرونة" },
      { en: "Popcorn", ar: "فشار" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Butter", ar: "زبدة" },
      { en: "Chocolate", ar: "شوكولاتة" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Tomato", ar: "طماطم" },
      { en: "Potato", ar: "بطاطس" },
    ],
  },
  {
    category: "random",
    difficulty: "medium",
    words: [
      { en: "Onion", ar: "بصل" },
      { en: "Orange", ar: "برتقالة" },
    ],
  },
  {
    category: "random",
    difficulty: "hard",
    words: [
      { en: "Flashlight", ar: "كشاف" },
      { en: "Lighter", ar: "ولاعة" },
    ],
  },
  {
    category: "random",
    difficulty: "hard",
    words: [
      { en: "Hanger", ar: "شماعة" },
      { en: "Doormat", ar: "دواسة" },
    ],
  },
  {
    category: "random",
    difficulty: "hard",
    words: [
      { en: "Stapler", ar: "دباسة" },
      { en: "Grater", ar: "مبشرة" },
    ],
  },
  {
    category: "random",
    difficulty: "hard",
    words: [
      { en: "Charger", ar: "شاحن" },
      { en: "Extension", ar: "مشترك كهرباء" },
    ],
  },
  {
    category: "random",
    difficulty: "hard",
    words: [
      { en: "Thermos", ar: "ترمس" },
      { en: "Funnel", ar: "قمع" },
    ],
  },
  {
    category: "random",
    difficulty: "hard",
    words: [
      { en: "Strainer", ar: "مصفاة" },
      { en: "Colander", ar: "مصفاة مكرونة" },
    ],
  },
  {
    category: "random",
    difficulty: "hard",
    words: [
      { en: "Whisk", ar: "مضرب" },
      { en: "Ladle", ar: "مغرفة" },
    ],
  },
];
