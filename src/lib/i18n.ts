import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        tools: 'Tools',
        warehouse: 'Warehouse',
        soilCheck: 'Soil Check',
        profile: 'Profile',
        login: 'Login',
        logout: 'Logout',
        language: 'Language'
      },
      // Hero Section
      hero: {
        title: 'Smart Farming Platform',
        subtitle: 'Revolutionizing agriculture with modern technology and sustainable practices',
        getStarted: 'Get Started',
        learnMore: 'Learn More'
      },
      // Tools
      tools: {
        title: 'Farming Tools Marketplace',
        subtitle: 'Rent high-quality farming equipment for your agricultural needs',
        perDay: 'per day',
        perMonth: 'per month',
        perSeason: 'per season',
        rentNow: 'Rent Now',
        availability: 'Available',
        unavailable: 'Unavailable'
      },
      // Warehouse
      warehouse: {
        title: 'Storage & Warehouse',
        subtitle: 'Secure storage solutions for your agricultural products',
        perSqmDay: 'per sqm/day',
        perSqmMonth: 'per sqm/month',
        bookNow: 'Book Now',
        available: 'Available Space',
        sqm: 'sqm'
      },
      // Soil Check
      soil: {
        title: 'Soil Analysis',
        subtitle: 'Get detailed soil analysis and recommendations for optimal crop growth',
        moisture: 'Moisture %',
        ph: 'pH Level',
        nitrogen: 'Nitrogen Level',
        phosphorus: 'Phosphorus Level',
        potassium: 'Potassium Level',
        organicMatter: 'Organic Matter %',
        cropType: 'Crop Type',
        soilType: 'Soil Type',
        location: 'Location',
        analyze: 'Analyze Soil',
        recommendations: 'Recommendations'
      },
      // Auth
      auth: {
        signIn: 'Sign In',
        signUp: 'Sign Up',
        email: 'Email',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        fullName: 'Full Name',
        phone: 'Phone Number',
        role: 'Role',
        farmer: 'Farmer',
        toolProvider: 'Tool Provider',
        warehouseOwner: 'Warehouse Owner',
        createAccount: 'Create Account',
        alreadyHaveAccount: 'Already have an account?',
        dontHaveAccount: "Don't have an account?",
        forgotPassword: 'Forgot password?'
      },
      // Common
      common: {
        loading: 'Loading...',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        back: 'Back',
        next: 'Next',
        submit: 'Submit',
        search: 'Search',
        filter: 'Filter',
        sort: 'Sort',
        date: 'Date',
        price: 'Price',
        name: 'Name',
        description: 'Description',
        contact: 'Contact',
        phone: 'Phone',
        address: 'Address'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        tools: 'उपकरण',
        warehouse: 'गोदाम',
        soilCheck: 'मिट्टी जांच',
        profile: 'प्रोफाइल',
        login: 'लॉगिन',
        logout: 'लॉगआउट',
        language: 'भाषा'
      },
      hero: {
        title: 'स्मार्ट कृषि प्लेटफॉर्म',
        subtitle: 'आधुनिक तकनीक और टिकाऊ प्रथाओं के साथ कृषि में क्रांति',
        getStarted: 'शुरू करें',
        learnMore: 'और जानें'
      },
      tools: {
        title: 'कृषि उपकरण बाज़ार',
        subtitle: 'अपनी कृषि आवश्यकताओं के लिए उच्च गुणवत्ता वाले कृषि उपकरण किराए पर लें',
        perDay: 'प्रति दिन',
        perMonth: 'प्रति महीने',
        perSeason: 'प्रति सीज़न',
        rentNow: 'अभी किराए पर लें',
        availability: 'उपलब्ध',
        unavailable: 'अनुपलब्ध'
      },
      warehouse: {
        title: 'भंडारण और गोदाम',
        subtitle: 'आपके कृषि उत्पादों के लिए सुरक्षित भंडारण समाधान',
        perSqmDay: 'प्रति वर्ग मीटर/दिन',
        perSqmMonth: 'प्रति वर्ग मीटर/महीने',
        bookNow: 'अभी बुक करें',
        available: 'उपलब्ध स्थान',
        sqm: 'वर्ग मीटर'
      },
      soil: {
        title: 'मिट्टी विश्लेषण',
        subtitle: 'इष्टतम फसल विकास के लिए विस्तृत मिट्टी विश्लेषण और सिफारिशें प्राप्त करें',
        moisture: 'नमी %',
        ph: 'पीएच स्तर',
        nitrogen: 'नाइट्रोजन स्तर',
        phosphorus: 'फॉस्फोरस स्तर',
        potassium: 'पोटेशियम स्तर',
        organicMatter: 'जैविक पदार्थ %',
        cropType: 'फसल का प्रकार',
        soilType: 'मिट्टी का प्रकार',
        location: 'स्थान',
        analyze: 'मिट्टी का विश्लेषण करें',
        recommendations: 'सिफारिशें'
      },
      auth: {
        signIn: 'साइन इन',
        signUp: 'साइन अप',
        email: 'ईमेल',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्ड की पुष्टि करें',
        fullName: 'पूरा नाम',
        phone: 'फोन नंबर',
        role: 'भूमिका',
        farmer: 'किसान',
        toolProvider: 'उपकरण प्रदाता',
        warehouseOwner: 'गोदाम मालिक',
        createAccount: 'खाता बनाएं',
        alreadyHaveAccount: 'पहले से खाता है?',
        dontHaveAccount: 'खाता नहीं है?',
        forgotPassword: 'पासवर्ड भूल गए?'
      },
      common: {
        loading: 'लोड हो रहा है...',
        save: 'सेव करें',
        cancel: 'रद्द करें',
        delete: 'हटाएं',
        edit: 'संपादित करें',
        back: 'वापस',
        next: 'अगला',
        submit: 'जमा करें',
        search: 'खोजें',
        filter: 'फिल्टर',
        sort: 'क्रमबद्ध करें',
        date: 'दिनांक',
        price: 'कीमत',
        name: 'नाम',
        description: 'विवरण',
        contact: 'संपर्क',
        phone: 'फोन',
        address: 'पता'
      }
    }
  },
  ta: {
    translation: {
      nav: {
        home: 'முகப்பு',
        tools: 'கருவிகள்',
        warehouse: 'கிடங்கு',
        soilCheck: 'மண் பரிசோதனை',
        profile: 'சுயவிவரம்',
        login: 'உள்நுழைய',
        logout: 'வெளியேறு',
        language: 'மொழி'
      },
      hero: {
        title: 'ஸ்மார்ட் வேளாண்மை தளம்',
        subtitle: 'நவீன தொழில்நுட்பம் மற்றும் நிலையான நடைமுறைகளுடன் விவசாயத்தில் புரட்சி',
        getStarted: 'தொடங்குங்கள்',
        learnMore: 'மேலும் அறிக'
      },
      tools: {
        title: 'வேளாண் கருவிகள் சந்தை',
        subtitle: 'உங்கள் விவசாய தேவைகளுக்கு உயர்தர வேளாண் கருவிகளை வாடகைக்கு எடுங்கள்',
        perDay: 'ஒரு நாளுக்கு',
        perMonth: 'ஒரு மாதத்திற்கு',
        perSeason: 'ஒரு பருவத்திற்கு',
        rentNow: 'இப்போது வாடகைக்கு',
        availability: 'கிடைக்கிறது',
        unavailable: 'கிடைக்கவில்லை'
      },
      warehouse: {
        title: 'சேமிப்பு மற்றும் கிடங்கு',
        subtitle: 'உங்கள் விவசாய பொருட்களுக்கு பாதுகாப்பான சேமிப்பு தீர்வுகள்',
        perSqmDay: 'ஒரு சதுர மீ/நாள்',
        perSqmMonth: 'ஒரு சதுர மீ/மாதம்',
        bookNow: 'இப்போது முன்பதிவு',
        available: 'கிடைக்கும் இடம்',
        sqm: 'சதுர மீ'
      },
      soil: {
        title: 'மண் பகுப்பாய்வு',
        subtitle: 'சிறந்த பயிர் வளர்ச்சிக்கு விரிவான மண் பகுப்பாய்வு மற்றும் பரிந்துரைகளைப் பெறுங்கள்',
        moisture: 'ஈரப்பதம் %',
        ph: 'பிஎச் நிலை',
        nitrogen: 'நைட்ரஜன் நிலை',
        phosphorus: 'பாஸ்பரஸ் நிலை',
        potassium: 'பொட்டாசியம் நிலை',
        organicMatter: 'கரிம பொருள் %',
        cropType: 'பயிர் வகை',
        soilType: 'மண் வகை',
        location: 'இடம்',
        analyze: 'மண்ணை பகுப்பாய்வு செய்யுங்கள்',
        recommendations: 'பரிந்துரைகள்'
      },
      auth: {
        signIn: 'உள்நுழைய',
        signUp: 'பதிவு செய்க',
        email: 'மின்னஞ்சல்',
        password: 'கடவுச்சொல்',
        confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்துங்கள்',
        fullName: 'முழு பெயர்',
        phone: 'தொலைபேசி எண்',
        role: 'பங்கு',
        farmer: 'விவசாயி',
        toolProvider: 'கருவி வழங்குநர்',
        warehouseOwner: 'கிடங்கு உரிமையாளர்',
        createAccount: 'கணக்கை உருவாக்கு',
        alreadyHaveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
        dontHaveAccount: 'கணக்கு இல்லையா?',
        forgotPassword: 'கடவுச்சொல்லை மறந்துவிட்டீர்களா?'
      },
      common: {
        loading: 'ஏற்றுகிறது...',
        save: 'சேமிக்கவும்',
        cancel: 'ரத்து செய்யவும்',
        delete: 'நீக்கவும்',
        edit: 'திருத்தவும்',
        back: 'திரும்பு',
        next: 'அடுத்தது',
        submit: 'சமர்ப்பிக்கவும்',
        search: 'தேடவும்',
        filter: 'வடிகட்டி',
        sort: 'வரிசைப்படுத்து',
        date: 'தேதி',
        price: 'விலை',
        name: 'பெயர்',
        description: 'விவரணை',
        contact: 'தொடர்பு',
        phone: 'தொலைபேசி',
        address: 'முகவரி'
      }
    }
  },
  te: {
    translation: {
      nav: {
        home: 'హోమ్',
        tools: 'పరికరాలు',
        warehouse: 'గిడ్డంగి',
        soilCheck: 'నేల పరీక్ష',
        profile: 'ప్రొఫైల్',
        login: 'లాగిన్',
        logout: 'లాగౌట్',
        language: 'భాష'
      },
      hero: {
        title: 'స్మార్ట్ వ్యవసాయ వేదిక',
        subtitle: 'ఆధునిక సాంకేతికత మరియు స్థిరమైన పద్ధతులతో వ్యవసాయంలో విప్లవం',
        getStarted: 'ప్రారంభించండి',
        learnMore: 'మరింత తెలుసుకోండి'
      },
      tools: {
        title: 'వ్యవసాయ పరికరాల మార్కెట్',
        subtitle: 'మీ వ్యవసాయ అవసరాలకు అధిక-నాణ్యత వ్యవసాయ పరికరాలను అద్దెకు తీసుకోండి',
        perDay: 'రోజుకు',
        perMonth: 'నెలకు',
        perSeason: 'కాలానికి',
        rentNow: 'ఇప్పుడే అద్దెకు',
        availability: 'అందుబాటులో',
        unavailable: 'అందుబాటులో లేదు'
      },
      warehouse: {
        title: 'నిల్వ మరియు గిడ్డంగి',
        subtitle: 'మీ వ్యవసాయ ఉత్పత్తులకు సురక్షిత నిల్వ పరిష్కారాలు',
        perSqmDay: 'చ.మీ/రోజుకు',
        perSqmMonth: 'చ.మీ/నెలకు',
        bookNow: 'ఇప్పుడే బుక్ చేయండి',
        available: 'అందుబాటులో ఉన్న స్థలం',
        sqm: 'చ.మీ'
      },
      soil: {
        title: 'నేల విశ్లేషణ',
        subtitle: 'సరైన పంట వృద్ధికి వివరణాత్మక నేల విశ్లేషణ మరియు సిఫార్సులను పొందండి',
        moisture: 'తేమ %',
        ph: 'పిహెచ్ స్థాయి',
        nitrogen: 'నైట్రోజన్ స్థాయి',
        phosphorus: 'ఫాస్పరస్ స్థాయి',
        potassium: 'పొటాషియం స్థాయి',
        organicMatter: 'సేంద్రియ పదార్థం %',
        cropType: 'పంట రకం',
        soilType: 'నేల రకం',
        location: 'స్థానం',
        analyze: 'నేలను విశ్లేషించండి',
        recommendations: 'సిఫార్సులు'
      },
      auth: {
        signIn: 'సైన్ ఇన్',
        signUp: 'సైన్ అప్',
        email: 'ఇమెయిల్',
        password: 'పాస్‌వర్డ్',
        confirmPassword: 'పాస్‌వర్డ్ ను నిర్ధారించండి',
        fullName: 'పూర్తి పేరు',
        phone: 'ఫోన్ నంబర్',
        role: 'పాత్ర',
        farmer: 'రైతు',
        toolProvider: 'పరికరాల ప్రదాత',
        warehouseOwner: 'గిడ్డంగి యజమాని',
        createAccount: 'ఖాతా సృష్టించండి',
        alreadyHaveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
        dontHaveAccount: 'ఖాతా లేదా?',
        forgotPassword: 'పాస్‌వర్డ్ మర్చిపోయారా?'
      },
      common: {
        loading: 'లోడవుతోంది...',
        save: 'సేవ్ చేయండి',
        cancel: 'రద్దు చేయండి',
        delete: 'తొలగించండి',
        edit: 'సవరించండి',
        back: 'వెనుకకు',
        next: 'తర్వాత',
        submit: 'సమర్పించండి',
        search: 'వెతకండి',
        filter: 'ఫిల్టర్',
        sort: 'క్రమబద్ధీకరించండి',
        date: 'తేదీ',
        price: 'ధర',
        name: 'పేరు',
        description: 'వివరణ',
        contact: 'సంప్రదింపు',
        phone: 'ఫోన్',
        address: 'చిరునామా'
      }
    }
  },
  bn: {
    translation: {
      nav: {
        home: 'হোম',
        tools: 'সরঞ্জাম',
        warehouse: 'গুদাম',
        soilCheck: 'মাটি পরীক্ষা',
        profile: 'প্রোফাইল',
        login: 'লগইন',
        logout: 'লগআউট',
        language: 'ভাষা'
      },
      hero: {
        title: 'স্মার্ট কৃষি প্ল্যাটফর্ম',
        subtitle: 'আধুনিক প্রযুক্তি এবং টেকসই অনুশীলনের সাথে কৃষিতে বিপ্লব',
        getStarted: 'শুরু করুন',
        learnMore: 'আরও জানুন'
      },
      tools: {
        title: 'কৃষি সরঞ্জাম বাজার',
        subtitle: 'আপনার কৃষি প্রয়োজনের জন্য উচ্চ-মানের কৃষি সরঞ্জাম ভাড়া নিন',
        perDay: 'প্রতিদিন',
        perMonth: 'প্রতি মাসে',
        perSeason: 'প্রতি মৌসুমে',
        rentNow: 'এখনই ভাড়া নিন',
        availability: 'উপলব্ধ',
        unavailable: 'অনুপলব্ধ'
      },
      warehouse: {
        title: 'সংরক্ষণ এবং গুদাম',
        subtitle: 'আপনার কৃষি পণ্যের জন্য নিরাপদ সংরক্ষণ সমাধান',
        perSqmDay: 'প্রতি বর্গমিটার/দিন',
        perSqmMonth: 'প্রতি বর্গমিটার/মাস',
        bookNow: 'এখনই বুক করুন',
        available: 'উপলব্ধ স্থান',
        sqm: 'বর্গমিটার'
      },
      soil: {
        title: 'মাটি বিশ্লেষণ',
        subtitle: 'সর্বোত্তম ফসল বৃদ্ধির জন্য বিস্তারিত মাটি বিশ্লেষণ এবং সুপারিশ পান',
        moisture: 'আর্দ্রতা %',
        ph: 'পিএইচ স্তর',
        nitrogen: 'নাইট্রোজেন স্তর',
        phosphorus: 'ফসফরাস স্তর',
        potassium: 'পটাসিয়াম স্তর',
        organicMatter: 'জৈব পদার্থ %',
        cropType: 'ফসলের ধরন',
        soilType: 'মাটির ধরন',
        location: 'অবস্থান',
        analyze: 'মাটি বিশ্লেষণ করুন',
        recommendations: 'সুপারিশসমূহ'
      },
      auth: {
        signIn: 'সাইন ইন',
        signUp: 'সাইন আপ',
        email: 'ইমেইল',
        password: 'পাসওয়ার্ড',
        confirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন',
        fullName: 'পূর্ণ নাম',
        phone: 'ফোন নম্বর',
        role: 'ভূমিকা',
        farmer: 'কৃষক',
        toolProvider: 'সরঞ্জাম সরবরাহকারী',
        warehouseOwner: 'গুদাম মালিক',
        createAccount: 'অ্যাকাউন্ট তৈরি করুন',
        alreadyHaveAccount: 'ইতিমধ্যে অ্যাকাউন্ট আছে?',
        dontHaveAccount: 'অ্যাকাউন্ট নেই?',
        forgotPassword: 'পাসওয়ার্ড ভুলে গেছেন?'
      },
      common: {
        loading: 'লোড হচ্ছে...',
        save: 'সংরক্ষণ করুন',
        cancel: 'বাতিল',
        delete: 'মুছুন',
        edit: 'সম্পাদনা',
        back: 'ফিরে যান',
        next: 'পরবর্তী',
        submit: 'জমা দিন',
        search: 'অনুসন্ধান',
        filter: 'ফিল্টার',
        sort: 'সাজান',
        date: 'তারিখ',
        price: 'দাম',
        name: 'নাম',
        description: 'বিবরণ',
        contact: 'যোগাযোগ',
        phone: 'ফোন',
        address: 'ঠিকানা'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;