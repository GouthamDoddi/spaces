import { useStore } from 'effector-react'
import langStore from '../store/lang-store'

let lang = 'en'

export function setLang(l) {
  lang = l
}


export function To({ o, k, ...props }) {
  const lang = useStore(langStore.store)

  const key = (lang == 'en' ? k : `${k}_ar`)
  console.log("The Key", key)
  return o ? (o[key] || o[k] || null) : null
  // return "Hi"
}

export function T({ k }) {
  const lang = useStore(langStore.store)
  return lang == 'en' ? data[k].en : data[k].ar
}

export function t(k) {
  const d1 = data

  return (data[k?.toLowerCase()] || {})[lang] || k
}

export function to(o, k) {
  const key = (lang == 'en' ? k : `${k}_ar`)
  return o ? (o[key] || o[k] || null) : null
  // return "Hi"
}

export default { t, to, T, To, setLang }

export function numberToArabic(number, lang) {
  if (lang === 'ar' && (number || number === 0)) {
    let en_number = number.toString();
    let arabicDigits = "۰۱۲۳۴۵۶۷۸۹";
    let arabicMap = arabicDigits.split("");
    let arabic_number = en_number.replace(/\d/g, function (m) {
      return m === '.' ? '.' : arabicMap[parseInt(m)];
    });
    return arabic_number;
  } else {
    return number;
  }
}

// to plot graph data
export const translateObjectKeys = (aObject, keys = []) => {
  if (!aObject) {
    return aObject;
  }

  let v;
  let bObject = Array.isArray(aObject) ? [] : {};
  for (const k in aObject) {
    v = aObject[k];

    let tk = undefined;
    if (keys.includes(k)) {
      tk = t(k);
    }

    bObject[tk || k] = typeof v === 'object' ? translateObjectKeys(v, keys) : v;
  }

  return bObject;
};

export const translateDate = (date) => {
  return new Date(date).toLocaleDateString(lang === 'ar' ? 'ar-QA' : lang, { day: 'numeric', month: 'short', year: 'numeric' });
}

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
  jawda: {
    en: 'Jawda',
    ar: 'جودة'
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
  "high performing entities": {
    en: 'High Performing Entities',
    ar: 'مؤسسات عالية الأداء'
  },
  "least performing entities": {
    en: 'Least Performing Entities',
    ar: 'المؤسسات الأقل أداءً'
  },
  "high performing sections": {
    en: 'High Performing Sections',
    ar: 'أقسام عالية الأداء',
  },
  "least performing sections": {
    en: 'Least Performing Sections',
    ar: 'الأقسام الأقل أداءً'
  },
  mandate_level: {
    en: 'Mandate Level',
    ar: 'المستوى إلزامي'
  },
  home: {
    en: 'Home',
    ar: 'الصفحة الرئيسية'
  },
  update_dashboard: {
    en: 'Update Dashboard',
    ar: 'تحديث لوحة القيادة'
  },
  reset: {
    en: 'Reset',
    ar: 'إعادة تعيين'
  },
  all: {
    en: 'All',
    ar: 'الكل'
  },
  "pre engagement": {
    en: 'Pre Engagement',
    ar: 'قبل بدء التنفيذ',
  },
  "content engagement": {
    en: 'Content Engagement',
    ar: 'تنفيذ المحتوى'
  },
  "service request": {
    en: 'Service Request',
    ar: 'طلب الخدمة'
  },
  "post request": {
    en: 'Post Request',
    ar: 'ما بعد الطلب'
  },
  "post fulfilment": {
    en: 'Post Fulfilment',
    ar: 'ما بعد إتمام المهمة'
  },
  'website framework': {
    en: 'Website Framework',
    ar: 'إطار عمل الموقع'
  },
  'mobile framework': {
    en: 'Mobile Framework',
    ar: 'إطار المحمول',
  },
  'e-service framework': {
    en: 'E-Service Framework',
    ar: 'إطار الخدمة الإلكترونية',
  },
  'state view': {
    en: 'State View',
    ar: 'عرض الدولة'
  },

  "access and authentication": { en: "Access & Authentication", ar: "الوصول والمصادقة" },
  "design & layout": { en: "Design & Layout", ar: "المخطط (تصميم الموقع الالكتروني) " },
  "style guide": { en: "Style guide", ar: "دليل الأنماط المٌتبعة " },
  "information architecture": { en: "Information Architecture", ar: "التصفح، بنية المحتوى، خريطة الموقع " },
  "content information": { en: "Content -Information", ar: "المحتوى (المعلومات) " },
  "content (graphics and Multimedia)": { en: "Content (Graphics and Multimedia)", ar: "المحتوى (الرسومات والوسائط المتعددة) " },
  "content (eservices)": { en: "Content (Eservices)", ar: "المحتوى (الخدمات الإلكترونية) " },
  "search": { en: "Search", ar: "البحث " },
  "accessibility": { en: "Accessibility", ar: "سهولة الوصول " },
  "search engine optimization (seo)": { en: "Search Engine Optimization (SEO)", ar: "تحسين ظهور الموقع في نتائج محركات البحث (SEO) " },
  "search engine optimization": {en: "Search Engine Optimization", ar: "محرك البحث الامثل"},
  "performance and monitoring": { en: "Performance and monitoring", ar: "الأداء والمراقبة " },
  "epayment": { en: "ePayment", ar: "الدفع الالكتروني  " },
  "support (chat/helpline)": { en: "Support (chat/helpline)", ar: "الدعم (المحادثة / خط المساعدة) " },
  "general requirements": { en: "General requirements", ar: "متطلبات عامه  " },
  "security and privacy": { en: "Security and Privacy", ar: "الأمان والخصوصية" },
  "eservices profile": { en: "eservices Profile", ar: "الملف التعريفي للخدمات الإلكترونية " },
  "eservices information": { en: "eservices Information", ar: "المعلومات عن الخدمات الإلكترونية" },
  "eservices functionality": { en: "eservices Functionality", ar: "وظيفة الخدمات الالكترونية " },
  "eservices technical standards": { en: "eservices Technical Standards", ar: "المعايير الفنية للخدمات الإلكترونية " },
  "eservice management": { en: "eservice Management", ar: "إدارة الخدمات الإلكترونية " },
  "epayment": { en: "epayment", ar: "الدفع الإلكتروني " },
  "mobile app development and registration": { en: "Mobile App Development and Registration", ar: "تطوير تطبيقات الجوال " },
  "mobile app registration": {en: "Mobile App Registration", ar: "تسجيل تطبيقات الهاتف المتحرك"},
  "access & authentication": { en: "Access & Authentication", ar: "الوصول والمصادقة " },
  "layout": { en: "Layout", ar: "المخطط " },
  "layout, mobile": {en: "Layout, Mobile", ar: "تخطيط ، جوال"},
  "navigation, content structure, sitemap": {en: "Navigation, Content Structure, Sitemap", ar: "التنقل ، بنية المحتوى ، خريطة الموقع"},
  "stylesheet": { en: "Stylesheet", ar: "دليل الأنماط المٌتبعة " },
  "stylesheet and style guide": {en: "Stylesheet and style guide", ar: "ورقة الأنماط ودليل الأسلوب"},
  "information architecture": { en: "Information Architecture", ar: "هندسة المعلومات " },
  "content (information)": { en: "Content (Information)", ar: "المحتوى (المعلومات) " },
  "content: information": {en: "Content: Information", ar: "المحتوى: المعلومات"},
  "content (graphics and multimedia)": { en: "Content (Graphics and Multimedia)", ar: "المحتوى (الرسومات والوسائط المتعددة) " },
  "content: graphics and multimedia": {en: "Content: Graphics and Multimedia", ar: "المحتوى: الرسومات والوسائط المتعددة"},
  "content eservices": { en: "Content Eservices", ar: "المحتوى (الخدمات الإلكترونية) " },
  "search": { en: "Search", ar: "البحث " },
  "accessibility": { en: "Accessibility", ar: "سهولة الوصول " },
  "epayment": { en: "ePayment", ar: "الدفع الالكتروني" },
  "security and privacy": { en: "Security and Privacy", ar: "الأمان والخصوصية " },
  "support (chat/helpline)": { en: "Support (chat/helpline)", ar: "الدعم (المحادثة / خط المساعدة) " },
  "support: chat, helpline": {en: "Support: Chat, Helpline", ar: "الدعم: الدردشة ، خط المساعدة"},
  "support": {en: "Support", ar: "الدعم"},
  "eparticipation and open data": {en: "eParticipation and Open Data", ar: "المشاركة الإلكترونية والبيانات المفتوحة"},
  "authentication": {en: "Authentication", ar: "المصادقة"},
  "website registration": {
    en: 'Website Registration',
    ar: 'تسجيل الموقع'
  },
  "ministry of municipality and environment": {
    "en": "Ministry of Municipality and Environment",
    "ar": "وزارة البلدية والبيئة"
  },
  "general authority of customs": {
    "en": "General Authority of Customs",
    "ar": "الهيئة العامة للجمارك"
  },
  "the general retirement and social insurance authority": {
    "en": "The General Retirement and Social Insurance Authority",
    "ar": "الهيئة العامة للتقاعد والتأمينات الاجتماعية"
  },
  "hamad medical corporation": {
    "en": "Hamad Medical Corporation",
    "ar": "مؤسسة حمد الطبية"
  },
  "kahramaa": {
    "en": "Kahramaa",
    "ar": "كهرماء"
  },
  "ministry of administrative development, labour and social affairs": {
    "en": "Ministry of Administrative Development, Labour and Social Affairs",
    "ar": "وزارة التنمية الادارية والعمل والشؤون الاجتماعية"
  },
  "ministry of commerce and industry": {
    "en": "Ministry of Commerce and Industry",
    "ar": "وزارة التجارة والصناعة"
  },
  "ministry of education and higher education": {
    "en": "Ministry of Education and Higher Education",
    "ar": "وزارة التعليم والتعليم العالي"
  },
  "ministry of interior": {
    "en": "Ministry of Interior",
    "ar": "وزارة الداخلية"
  },
  "ministry of justice": {
    "en": "Ministry of Justice",
    "ar": "وزارة العدل"
  },
  "ministry of public health": {
    "en": "Ministry of Public Health",
    "ar": "وزارة الصحة العامة"
  },
  "ministry of transport & communication": {
    "en": "Ministry of Transport & Communication",
    "ar": "وزارو المواصلات والاتصالات"
  },
  "primary health care corporation": {
    "en": "Primary Health Care Corporation",
    "ar": "مؤسسة الرعاية الصحية الاولية"
  },
  "supreme judiciary council": {
    "en": "Supreme Judiciary Council",
    "ar": "المجلس الاعلى للقضاء"
  },
  "all": {
    "en": "All",
    "ar": "الجميع"
  },
  "total_projects": {
    "en": "Total Projects",
    "ar": "إجمالي المشاريع"
  },
  "showing": {
    "en": "Showing",
    "ar": "عرض",
  },
  "entities": {
    "en": "Entities",
    "ar": "جهات"
  },
  "sections": {
    "en": "Sections",
    "ar": "الأقسام"
  },
  "dashboards": {
    "en": "Dashboards",
    "ar": "لوحات القيادة"
  },
  "dashboard": {
    "en": "Dashboard",
    "ar": "لوحة القيادة"
  },
  "entity_management": {
    "en": "Entity Management",
    "ar": " إدارة الكيانات",
  },
  "project_management": {
    "en": "Project Management",
    "ar": "ادارة مشروع",
  },
  "case_management": {
    "en": "Case Management",
    "ar": "إدارة حالة"
  },
  "ground_management": {
    "en": "Ground Management",
    "ar": "إدارة الأرض"
  },
  "policy_grounds": {
    "en": "Policy Grounds",
    "ar": "أسس السياسة",
  },
  "resources": {
    "en": "Resources",
    "ar": "موارد"
  },
  "compliance": {
    "en": "Compliance",
    "ar": "الالتزام"
  },
  "project":{
    "en": "Project",
    "ar": "المشروع"
  },
  "entity": {
    "en": "Entity",
    "ar": "كيان"
  },
  "search_in_entities": {
    "en": "Search in entities",
    "ar": "البحث في الكيانات"
  },
  "sort_entities": {
    "en": "Sort entities",
    "ar": "فرز الكيانات"
  },
  'compliance_issues': {
    "en": "Compliance Issues",
    "ar": "قضايا الامتثال"
  },
  "challenges": {
    "en": "Challenges",
    "ar": "التحديات"
  },
  "kahramaa-site": {"en": "Kahramaa-Site", "ar": "موقع كهرماء",},
  "securtiy & privacy": {"en": "Securtiy & Privacy", "ar": "الأمانة و أمبير؛ خصوصية"},
  'eservices management': {"en": "eServices Management", "ar": "إدارة الخدمات الإلكترونية"},
  "kahramaa-mobile": {"en": "Kahramaa-Mobile", "ar": "كهرماء موبايل"},
  "content-information": {"en": "CONTENT-INFORMATION", "ar": "معلومات المحتوى"},
  "adlsa-site": {"en": "ADLSA-Site", "ar": "موقع ADLSA"},
  "amerni-mobile": {"en": "AMERNI-Mobile", "ar": "أميرني موبايل"},
  "mawared-mobile": {"en": "MAWARED-MOBILE", "ar": "مورد موبايل"},
  "the website is not refreshed post previous policy": {"en": "The website is not refreshed post previous policy", "ar": "لم يتم تحديث الموقع بعد السياسة السابقة"},
  "it is technically difficult to implement the policy condition": {
    "en": "It is technically difficult to implement the policy condition",
    "ar": "من الصعب من الناحية الفنية تنفيذ شرط السياسة"
  },
  "not enough tools to implement the condition": {
    "en": "Not enough tools to implement the condition",
    "ar": "لا توجد أدوات كافية لتنفيذ الشرط"
  },
  "not aware of ecosystem services that can be used for compliance": {
    "en": "Not aware of ecosystem services that can be used for compliance",
    "ar": "لست على علم بخدمات النظام البيئي التي يمكن استخدامها للامتثال"
  },
  "no clear guidelines on what or how to implement": {
    "en": "No clear guidelines on what or how to implement",
    "ar": "لا توجد مبادئ توجيهية واضحة حول ماذا أو كيفية التنفيذ"
  },
  "content is not updated": {
    "en": "Content is not updated",
    "ar": "لم يتم تحديث المحتوى"
  },
  "implemented before mandate is introduced": {
    "en": "Implemented before mandate is introduced",
    "ar": "نُفّذ قبل تقديم التفويض"
  },
  "policy criteria was not implemented": {
    "en": "Policy criteria was not implemented",
    "ar": "لم يتم تنفيذ معايير السياسة"
  },
  "the policy criteria is ambiguous and not clear": {
    "en": "The policy criteria is ambiguous and not clear",
    "ar": "معايير السياسة غامضة وغير واضحة"
  },
  "refresh": {
    "en": "Refresh",
    "ar": "ينعش"
  },
  "technical issue": {
    "en": "Technical Issue",
    "ar": "مسألة تقنية"
  },
  "tools": {
    "en": "Tools",
    "ar": "أدوات"
  },
  "awareness": {
    "en": "Awareness",
    "ar": "وعي"
  },
  "guidelines": {
    "en": "Guidelines",
    "ar": "القواعد الارشادية"
  },
  "update": {
    "en": "Update",
    "ar": "تحديث"
  },
  "before mandate": {
    "en": "Before Mandate",
    "ar": "قبل الانتداب"
  },
  "oversight": {
    "en": "Oversight",
    "ar": "الرقابة"
  },
  "clarity": {
    "en": "Clarity",
    "ar": "وضوح"
  },
  section_name: {
    en: 'Section Name',
    ar: 'اسم القسم',
  },
  'fully compliant': {
    en: 'Fully Compliant',
    ar: 'متوافق تماما'
  },
  'partially compliant': {
    en: 'Partially Compliant',
    ar: 'متوافق جزئيا'
  },
  'non compliant': {
    en: 'Non Compliant',
    ar: 'غير متوافق'
  },
  'logo': {
    en: 'Logo',
    ar: 'شعار',
  },
  'date of start': {
    en: 'Date of Start',
    ar: 'تاريخ البدء',
  },
  'date of release': {
    en: 'Date of Release',
    ar: 'تاريخ الإفراج',
  },
  'no issues': {
    en: 'No Issues',
    ar: 'لا توجد قضايا',
  },
  'issues': {
    en: 'Issues',
    ar: 'مشاكل',
  },
  'more': {
    en: 'more',
    ar: 'أكثر',
  },
  'sort': {
    en: 'Sort',
    ar: 'فرز',
  },
  'date asc': {
    en: 'Date Asc',
    ar: 'تاريخ تدريجي',
  },
  'date desc': {
    en: 'Date Desc',
    ar: 'تنازلي تاريخ',
  },
  'view all': {
    en: 'View All',
    ar: 'عرض الكل',
  },
  'view less': {
    en: 'View Less',
    ar: 'عرض أقل',
  }
}
