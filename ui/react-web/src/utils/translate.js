import { useStore } from 'effector-react'
import langStore from '../store/lang-store'

let lang = 'en'

export function setLang(l) {
  lang = l
}


export function To({o, k, ...props}) {
  const lang = useStore(langStore.store)
  
  const key = (lang == 'en' ? k : `${k}_ar`)
  console.log("The Key",  key)
  return o ? (o[key] || o[k] || null) : null
  // return "Hi"
}

export function T({k}) {
  const lang = useStore(langStore.store)
  return lang == 'en' ? data[k].en : data[k].ar
}

export function t(k) {
  const d1 = data

  return (data[k.toLowerCase()] || {})[lang] || k
}

export function to(o, k) {
  const key = (lang == 'en' ? k : `${k}_ar`)
  return o ? (o[key] || o[k] || null) : null
  // return "Hi"
}

export default {t, to, T, To, setLang}

const data = {
  filter_by_entity: {
    ar: 'تصفية حسب المؤسسة',
    en: 'Filter by Entity'
  },
  filter_by_project: {
    ar: 'تصفية حسب المشروع',
    en: 'Filter by Project'
  },
  not_started: {
    en: 'Not Started',
    ar: 'لم تبدأ'
  },
  wip: {
    en: 'WIP',
    ar: 'تحت التنفيذ'
  },
  completed: {
    en: 'Completed',
    ar: 'مكتمل',
  },
  projects: {
    en: 'Projects',
    ar: 'المشاريع'
  },
  compliance_score: {
    en: 'Compliance Score',
    ar: 'نتيجة التوافق'
  },
  jawda_description: {
    en: 'Qatar Digital Government (QDG) is a cross-governmental, stakeholder-led initiative formed to foster cooperation and champion the cause of digital government in Qatar.',
    ar: 'حكومة قطر الرقمية (QDG) هي مبادرة مشتركة بين الحكومات يقودها أصحاب المصلحة تم تشكيلها لتعزيز التعاون ودعم قضية الحكومة الرقمية في قطر.'
  },
  adoption_rate: {
    en: 'Adoption Rate',
    ar: 'نسبة الاعتماد'
  },
  running: {
    en: 'Running',
    ar: 'جار العمل'
  },
  leaderboard: {
    ar: 'لوحة المتصدرين',
    en: 'Leaderboard'
  },
  swcta: {
    ar: 'قسم تحليل اتجاه التوافق',
    en: 'Section Wise Compliance Trend Analysis'
  },

  fully_compliant: {
    en: 'Fully Compliant',
    ar: 'متوافق تماما'
  },
  partially_compliant: {
    en: 'Partially Compliant',
    ar: 'متوافق جزئيا'

  },
  non_compliant: {
    en: 'Non Compliant',
    ar: 'غير متوافق'
  },
  hpe: {
    en: 'High Performing Entities',
    ar: 'مؤسسات عالية الأداء'
  },
  lpe: {
    en: 'Least Performing Entities',
    ar: 'المؤسسات الأقل أداءً'
  },
  mandate_level: {
    en: 'Mandate Level',
    ar: 'المستوى إلزامي'
  },
  home: {
    en: 'Home',
    ar: 'الصفحة الرئيسية'
  },
  view_dashboard: {
    en: 'View Dashboard',
    ar: 'عرض لوحة المراقبة'
  },
  reset: {
    en: 'Reset',
    ar: 'إعادة تعيين'
  },
  all: {
    en: 'All',
    ar: 'الكل'
  },

  "website registration": { en: "Website Registration ",ar: "تسجيل الموقع الالكتروني "},
  "access & authentication": { en: "Access & Authentication",ar: "الوصول والتحقق "},
  "design & layout": { en: "Design & Layout",ar: "المخطط (تصميم الموقع الالكتروني) "},
  "style guide": { en: "Style guide",ar: "دليل الأنماط المٌتبعة "},
  "information architecture": { en: "Information Architecture",ar: "التصفح، بنية المحتوى، خريطة الموقع "},
  "content information": { en: "Content -Information",ar: "المحتوى (المعلومات) "},
  "content (graphics and Multimedia)": { en: "Content (Graphics and Multimedia)",ar: "المحتوى (الرسومات والوسائط المتعددة) "},
  "content (eservices)": { en: "Content (Eservices)",ar: "المحتوى (الخدمات الإلكترونية) "},
  "search": { en: "Search",ar: "البحث "},
  "accessibility": { en: "Accessibility",ar: "سهولة الوصول "},
  "search engine optimization (seo)": { en: "Search Engine Optimization (SEO)",ar: "تحسين ظهور الموقع في نتائج محركات البحث (SEO) "},
  "performance and monitoring": { en: "Performance and monitoring",ar: "الأداء والمراقبة "},
  "epayment": { en: "ePayment",ar: "الدفع الالكتروني  "},
  "support (chat/helpline)": { en: "Support (chat/helpline)",ar: "الدعم (المحادثة / خط المساعدة) "},
  "general requirements": { en: "General requirements",ar: "متطلبات عامه  "},
  "security and privacy": { en: "Security and Privacy",ar: "الأمان والخصوصية "},
  "eservices profile": { en: "eservices Profile",ar: "الملف التعريفي للخدمات الإلكترونية "},
  "eservices information": { en: "eservices Information",ar: "المعلومات عن الخدمات الإلكترونية "},
  "eservices functionality": { en: "eservices Functionality",ar: "وظيفة الخدمات الالكترونية "},
  "eservices technical standards": { en: "eservices Technical Standards",ar: "المعايير الفنية للخدمات الإلكترونية "},
  "eservice management": { en: "eservice Management",ar: "إدارة الخدمات الإلكترونية "},
  "epayment": { en: "epayment",ar: "الدفع الإلكتروني "},
  "mobile app development and registration": { en: "Mobile App Development and Registration",ar: "تطوير تطبيقات الجوال "},
  "access & authentication": { en: "Access & Authentication",ar: "الوصول والمصادقة "},
  "layout": { en: "Layout",ar: "المخطط "},
  "stylesheet": { en: "Stylesheet",ar: "دليل الأنماط المٌتبعة "},
  "information architecture": { en: "Information Architecture",ar: "هندسة المعلومات "},
  "content (information)": { en: "Content (Information)",ar: "المحتوى (المعلومات) "},
  "content (graphics and multimedia)": { en: "Content (Graphics and Multimedia)",ar: "المحتوى (الرسومات والوسائط المتعددة) "},
  "content eservices": { en: "Content Eservices",ar: "المحتوى (الخدمات الإلكترونية) "},
  "search": { en: "Search",ar: "البحث "},
  "accessibility": { en: "Accessibility",ar: "سهولة الوصول "},
  "epayment": { en: "ePayment",ar: "الدفع الالكتروني "},
  "security and privacy": { en: "Security and Privacy",ar: "الأمان والخصوصية "},
  "support (chat/helpline)": { en: "Support (chat/helpline)",ar: "الدعم (المحادثة / خط المساعدة) "},
        

}