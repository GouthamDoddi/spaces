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
  return data[k][lang] || k
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
  }
  	

}