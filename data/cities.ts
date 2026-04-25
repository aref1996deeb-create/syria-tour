export interface City {
  slug: string;
  name: { ar: string; en: string };
  location: { ar: string; en: string };
  area: string;
  history: { ar: string; en: string };
  fullDescription: { ar: string; en: string };
  landmarks: { ar: string[]; en: string[] };
}

export const citiesData: City[] = [
  {
    slug: "damascus",
    name: { ar: "دمشق", en: "Damascus" },
    location: { ar: "جنوب غرب سوريا، تحيط بها الغوطة وجبل قاسيون.", en: "Southwest Syria" },
    area: "105 كم² (المدينة) - 18,032 كم² (المحافظة)",
    history: { 
      ar: "أقدم عاصمة مأهولة في التاريخ. تعود تسميتها للآرامية 'ديماسكوس' أي الأرض المروية. تُلقب بـ'الشام' و'مدينة الياسمين'. كانت عاصمة الخلافة الأموية ومركزاً حضارياً عالمياً.",
      en: "The oldest inhabited capital in history..."
    },
    fullDescription: { 
      ar: "دمشق هي قلب العروبة النابض، تمتاز بدمشق القديمة وأسوارها السبعة، وبيوتها ذات الباحات السماوية. هي مزيج فريد بين عبق التاريخ وأصالة التراث وعصرنة العاصمة الإدارية.",
      en: "The heart of Damascus is a living museum..."
    },
    landmarks: { ar: ["الجامع الأموي الكبير", "سوق الحميدية", "قلعة دمشق", "قصر العظم", "جبل قاسيون", "باب توما", "التكية السليمانية"], en: ["Umayyad Mosque", "Hamidiyah Souq", "Mount Qasioun"] }
  },
  {
    slug: "aleppo",
    name: { ar: "حلب", en: "Aleppo" },
    location: { ar: "شمال سوريا، نقطة وصل بين بلاد الرافدين والمتوسط.", en: "North Syria" },
    area: "18,482 كم²",
    history: { 
      ar: "ذكرت في الأكادية باسم 'حلبو'. قيل سميت حلب لأن إبراهيم الخليل كان 'يحلب' غنمه فيها ويتصدق بلبنها. هي من أقدم المدن وأهم مراكز طريق الحرير.",
      en: "One of the oldest continuously inhabited cities..."
    },
    fullDescription: { 
      ar: "العاصمة الاقتصادية ومدينة الفن والطرب. تشتهر بأسوارها وأسواقها التي تعد الأطول في العالم، وبعمارتها الحجرية المتينة وبصناعة صابون الغار العريق.",
      en: "The economic capital known for its cuisine and music..."
    },
    landmarks: { ar: ["قلعة حلب", "الأسواق القديمة", "حي الجديدة الأثري", "الجامع الكبير", "ساعة باب الفرج", "خان الشونة"], en: ["Aleppo Citadel", "Old Souks"] }
  },
  {
    slug: "homs",
    name: { ar: "حمص", en: "Homs" },
    location: { ar: "وسط سوريا على ضفاف نهر العاصي.", en: "Central Syria" },
    area: "42,223 كم² (أكبر محافظة مساحةً)",
    history: { 
      ar: "عُرفت قديماً باسم 'إيميسا'. تعود تسميتها الحالية لأصل يوناني أو آرامي. لُقبت بمدينة 'ابن الوليد' نسبة للصحابي خالد بن الوليد الذي دُفن فيها.",
      en: "Known as Emesa in ancient times..."
    },
    fullDescription: { 
      ar: "عقدة المواصلات السورية وقلب البلاد. تمتاز بتنوعها الطبيعي من ضفاف العاصي إلى قلعة الحصن الشامخة، ويُعرف أهلها بروح الدعابة والطيبة الكبيرة.",
      en: "The transport hub and the heart of Syria..."
    },
    landmarks: { ar: ["جامع خالد بن الوليد", "قلعة الحصن", "كنيسة أم الزنار", "دير مار جرجس", "ساعة حمص القديمة"], en: ["Krak des Chevaliers", "Khalid ibn al-Walid Mosque"] }
  },
  {
    slug: "hama",
    name: { ar: "حماة", en: "Hama" },
    location: { ar: "وسط سوريا، شمال مدينة حمص.", en: "Central Syria" },
    area: "8,883 كم²",
    history: { 
      ar: "اسمها مشتق من 'حماة' وتعني الحصن بالكنعانية. مدينة قديمة جداً ذكرت في التوراة. اشتهرت عبر العصور بنواعيرها التي صُنعت لري الأراضي المرتفعة.",
      en: "Derived from 'Hamath', meaning fortress..."
    },
    fullDescription: { 
      ar: "مدينة الأناقة والهدوء، يشقها نهر العاصي وتزينها النواعير الخشبية العملاقة التي لا تزال تدور منذ آلاف السنين. تشتهر بحلاوة الجبن الحموية والمناظر الخلابة.",
      en: "Famous for its wooden water wheels (Norias)..."
    },
    landmarks: { ar: ["نواعير حماة", "قصر العظم الحموي", "جامع أبي الفداء", "قلعة حماة", "حي الكيلانية"], en: ["Hama Norias", "Azem Palace"] }
  },
  {
    slug: "latakia",
    name: { ar: "اللاذقية", en: "Latakia" },
    location: { ar: "الساحل السوري، على البحر الأبيض المتوسط.", en: "Coastal Syria" },
    area: "2,297 كم²",
    history: { 
      ar: "أسسها سلوقس نيكاتور وسماها 'لاوديكيا' تيمناً بوالدته. هي موطن مملكة أوغاريت التي قدمت للعالم أول أبجدية في التاريخ.",
      en: "Home to the world's first alphabet in Ugarit..."
    },
    fullDescription: { 
      ar: "عروس الساحل وميناء سوريا الأول. تجمع بين سحر البحر والجبال الخضراء، وتعتبر المقصد السياحي الأول لمحبي الطبيعة والجمال البحري.",
      en: "Syria's main port and a coastal paradise..."
    },
    landmarks: { ar: ["أوغاريت", "كسب", "الشاطئ الأزرق", "المتحف الوطني", "الجامع المغربي", "رأس الشمرا"], en: ["Ugarit", "Kessab"] }
  },
  {
    slug: "tartus",
    name: { ar: "طرطوس", en: "Tartus" },
    location: { ar: "الساحل الجنوبي، شمال لبنان.", en: "Coastal Syria" },
    area: "1,892 كم²",
    history: { 
      ar: "عُرفت باسم 'أنترادوس' (أي المقابلة لأرواد). كانت معقلاً هاماً في العصور الفينيقية والصليبية. تضم جزيرة أرواد، الجزيرة المأهولة الوحيدة في سوريا.",
      en: "Known as Antarados in ancient times..."
    },
    fullDescription: { 
      ar: "مدينة فينيقية هادئة تمتاز بشواطئها النظيفة ومدينتها القديمة الحجرية. تعتبر بوابة العبور لجزيرة أرواد وتشتهر بمعالمها التاريخية مثل كاتدرائية طرطوس.",
      en: "A historic Phoenician city with a charming island..."
    },
    landmarks: { ar: ["جزيرة أرواد", "قلعة المرقب", "عمريت الأثرية", "كاتدرائية طرطوس", "صافيتا", "القدموس"], en: ["Arwad Island", "Marqab Castle"] }
  },
  {
    slug: "idlib",
    name: { ar: "إدلب", en: "Idlib" },
    location: { ar: "شمال غرب سوريا، قرب الحدود التركية.", en: "Northwest Syria" },
    area: "6,097 كم²",
    history: { 
      ar: "تلقب بـ'إدلب الخضراء'. قيل أن اسمها سرياني يعني 'مذبح الآلهة'. اشتهرت تاريخياً بكونها موطن مملكة 'إيبلا' العريقة صاحبة أكبر أرشيف مسماري.",
      en: "Known as 'Green Idlib', home of Ebla..."
    },
    fullDescription: { 
      ar: "تشتهر بمساحاتها الشاسعة المزروعة بأشجار الزيتون. تمتاز بطبيعة جبلية جميلة ومناخ معتدل، وتضم مئات المدن المنسية والمواقع الأثرية النادرة.",
      en: "Famous for olive groves and ancient Ebla..."
    },
    landmarks: { ar: ["مملكة إيبلا", "جبل الزاوية", "مدينة حارم", "قلعة شيزر", "سرمدا", "كنيسة قلب لوزة"], en: ["Ebla", "Mount Zawiya"] }
  },
  {
    slug: "deir-ez-zor",
    name: { ar: "دير الزور", en: "Deir ez-Zor" },
    location: { ar: "شرق سوريا على ضفاف نهر الفرات.", en: "East Syria" },
    area: "33,060 كم²",
    history: { 
      ar: "اسمها مشتق من 'الدير' الذي سكنه الرهبان و'الزور' وهي شجر الغار أو ضفة النهر. كانت محطة هامة للقوافل عبر التاريخ بين الشرق والغرب.",
      en: "The pearl of the Euphrates river..."
    },
    fullDescription: { 
      ar: "لؤلؤة الفرات السورية. تمتاز بالجسر المعلق التاريخي وبالكرم الحاتمي لأهلها. هي مركز إنتاج النفط والزراعة الفراتية الأصيلة.",
      en: "A key city on the Euphrates with a rich desert culture..."
    },
    landmarks: { ar: ["الجسر المعلق", "نهر الفرات", "آثار ماري (تل الحرير)", "موقع دورا أوروبوس", "متحف دير الزور"], en: ["Suspension Bridge", "Mari Ruins"] }
  },
  {
    slug: "raqqa",
    name: { ar: "الرقة", en: "Raqqa" },
    location: { ar: "شمال شرق سوريا، على نهر الفرات.", en: "Northeast Syria" },
    area: "19,616 كم²",
    history: { 
      ar: "أسسها سلوقس وسميت 'كالينيكوس'. أصبحت عاصمة الخلافة في عهد هارون الرشيد ولُقبت بـ'الرقة' لأنها تقع على أرض رقيقة (مستوية) بجانب النهر.",
      en: "The summer capital of Harun al-Rashid..."
    },
    fullDescription: { 
      ar: "درة الفرات وسلة سوريا الزراعية. تمتاز بوجود سد الفرات وبحيرة الأسد الخلابة، وتجمع بين التاريخ العباسي العريق والنهضة الزراعية الحديثة.",
      en: "Home to the Euphrates Dam and Lake Assad..."
    },
    landmarks: { ar: ["قلعة جعبر", "سد الفرات", "قصر البنات", "سور الرقة الأثري", "جامع الرقة الكبير"], en: ["Ja'bar Castle", "Euphrates Dam"] }
  },
  {
    slug: "hasakah",
    name: { ar: "الحسكة", en: "Hasakah" },
    location: { ar: "أقصى شمال شرق سوريا (الجزيرة).", en: "Northeast Syria" },
    area: "23,334 كم²",
    history: { 
      ar: "اسمها مشتق من 'الحسكة' وهو نوع من النبات. سكنتها حضارات موغلة في القدم مثل الحوريين. تعتبر نموذجاً رائعاً للتنوع الثقافي السوري.",
      en: "The heart of the Syrian Jazeera..."
    },
    fullDescription: { 
      ar: "أرض الخير والقمح والقطن. ترويها أنهار الخابور وجقجق، وتمتاز بمساحاتها الخضراء الشاسعة وتنوعها السكاني الجميل الذي يعكس لوحة سورية متكاملة.",
      en: "Syria's breadbasket, rich in wheat and diversity..."
    },
    landmarks: { ar: ["تل حلف الأثري", "جبل عبد العزيز", "بحيرة الخاتونية", "كنيسة مار جرجس", "تلال الجزيرة الأثرية"], en: ["Tell Halaf", "Khabur River"] }
  },
  {
    slug: "daraa",
    name: { ar: "درعا", en: "Daraa" },
    location: { ar: "جنوب سوريا، على الحدود الأردنية.", en: "South Syria" },
    area: "3,730 كم²",
    history: { 
      ar: "عُرفت قديماً باسم 'أذرعات'. هي مهد الحضارات في سهل حوران. كانت محطة رئيسية لقوافل الحجاج والتجارة عبر التاريخ بين دمشق والحجاز.",
      en: "The gateway to the south, known as Adhri'at..."
    },
    fullDescription: { 
      ar: "بوابة سوريا الجنوبية، تشتهر بسهولها الخصبة وبآثارها الرومانية المذهلة، وعلى رأسها مدرج بصرى الشام المبني من الحجر البازلتي الأسود الفريد.",
      en: "Home to the famous Bosra Roman theater..."
    },
    landmarks: { ar: ["مدرج بصرى الشام الأثري", "الجامع العمري", "تل شهاب (الشلالات)", "وادي اليرموك", "حمامات المزيريب"], en: ["Bosra Theater", "Al-Omari Mosque"] }
  },
  {
    slug: "as-suwayda",
    name: { ar: "السويداء", en: "As-Suwayda" },
    location: { ar: "أقصى جنوب سوريا، فوق مرتفعات جبل العرب.", en: "South Syria" },
    area: "5,550 كم²",
    history: { 
      ar: "سُميت بهذا الاسم نسبة للونها 'الأسود' البازلتي. عُرفت في العهد الروماني باسم 'سوادا' أو 'ديونيسيا'. هي معقل الثورة السورية الكبرى ضد الاحتلال الفرنسي.",
      en: "The black stone city, known as Soada..."
    },
    fullDescription: { 
      ar: "مدينة الجبل والكرامة. تمتاز ببيوتها الحجرية السوداء ومناخها الجبلي البارد شتاءً. تشتهر بزراعة العنب والتفاح وبكرامة أهلها وجودهم المشهود.",
      en: "Famous for its basalt architecture and vineyards..."
    },
    landmarks: { ar: ["قنوات (معبد هليوس)", "شهبا (روما الصغيرة)", "متحف السويداء", "موقع سيا الأثري", "صلخد"], en: ["Kanawat", "Shahba"] }
  },
  {
    slug: "quneitra",
    name: { ar: "القنيطرة", en: "Quneitra" },
    location: { ar: "جنوب غرب سوريا، في مرتفعات الجولان.", en: "Southwest Syria" },
    area: "1,861 كم²",
    history: { 
      ar: "اسمها تصغير 'قنطرة'. هي رمز الصمود السوري. مدينة تاريخية كانت محطة هامة على الطريق الواصل بين دمشق وفلسطين عبر مر العصور.",
      en: "The symbol of Syrian resilience in the Golan..."
    },
    fullDescription: { 
      ar: "تمتاز بطبيعة جبلية ساحرة ومياه وفيرة. تضم جبل الشيخ الشامخ ومواقع أثرية تعود للعصور الرومانية والبيزنطية، وهي مدينة السلام المحررة.",
      en: "A beautiful mountainous region with rich water resources..."
    },
    landmarks: { ar: ["جبل الشيخ", "مدينة القنيطرة المحررة", "تل أبو الندى", "موقع فيق الأثري", "بانياس الجولان"], en: ["Mount Hermon", "Quneitra"] }
  },
  {
    slug: "rif-dimashq",
    name: { ar: "ريف دمشق", en: "Rif Dimashq" },
    location: { ar: "تحيط بمدينة دمشق من كل الجهات.", en: "South Syria" },
    area: "18,032 كم²",
    history: { 
      ar: "تاريخها مرتبط بدمشق. تضم أقدم المواقع الدينية والسياحية في العالم، مثل 'معلولا' التي لا يزال سكانها يتحدثون لغة السيد المسيح (الآرامية).",
      en: "The diverse countryside surrounding the capital..."
    },
    fullDescription: { 
      ar: "قلب السياحة والاصطياف. تجمع بين الغوطة الخضراء وجبال القلمون الباردة. تضم أجمل المصايف (بلودان، الزبداني) وأعرق المعالم الدينية والأثرية.",
      en: "The destination for resorts and historic monasteries..."
    },
    landmarks: { ar: ["معلولا", "صيدنايا", "بلودان", "الزبداني", "بحيرة زرزر", "غوطة دمشق", "قبر الست (السيدة زينب)"], en: ["Maaloula", "Saydnaya", "Bloudan"] }
  }
];