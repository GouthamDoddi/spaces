import makeStore from './make-store'

export const risks = {
  1: { value: 1, label: 'Risk 1' },
  2: { value: 2, label: 'Risk 2' },
  3: { value: 3, label: 'Risk 3' },
  4: { value: 3, label: 'Risk 4' },
}

export const outcomes = {
  1: { value: 1, label: 'Outcome 1' },
  2: { value: 2, label: 'Outcome 2' },
  3: { value: 3, label: 'Outcome 3' },
  4: { value: 3, label: 'Outcome 4' },
}

export const beneficiarySegments = {
  1: { value: 1, label: 'Governament' },
  2: { value: 2, label: 'Business' },
  3: { value: 3, label: 'Citizens' },
  4: { value: 3, label: 'Visitors' },
}

export const projectTypes = {
  1: { value: 1, label: 'Main' },
  2: { value: 2, label: 'Department' },
  3: { value: 3, label: 'Micro' },
  4: { value: 4, label: 'Special Project' },
}

export const projectCategoryTypes = {
  1: { value: 1, label: 'Website / Portals' },
  2: { value: 2, label: 'Mobile App' },
  3: { value: 3, label: 'E-Service' }
}

export const projectConsumerTypes = {
  1: { value: 1, label: 'Govenament' },
  2: { value: 2, label: 'Business' },
  3: { value: 3, label: 'Individual' }
}

export const roleTypes = {
  1: { value: 1, label: 'Director' },
  2: { value: 2, label: 'Manager' },
  3: { value: 3, label: 'Lead' },
  4: { value: 3, label: 'Employee' },
}

export const entityRoleTypes = {
  8: { value: 8, label: 'Manager' },
  9: { value: 9, label: 'Quality Controller' },
  10: { value: 10, label: 'Consultant' }
}

export const applicationTypes = {
  1: { value: 1, label: 'All' },
  2: { value: 2, label: 'Conditional' },
}

export const mandateLevelTypes = {
  1: { value: 1, label: 'M1' },
  2: { value: 2, label: 'M2' },
  3: { value: 3, label: 'M3' },
}

export const HMLTypes = {
  1: { value: 1, label: 'High' },
  2: { value: 2, label: 'Medium' },
  3: { value: 3, label: 'Low' },
}


export const userComplianceTypes = {
  1: { value: 1, label: 'Compliance: Fully complied' },
  2: { value: 2, label: 'Compliance: Partially complied' },
  3: { value: 3, label: 'Compliance: Non complied' },
  4: { value: 4, label: 'Unable to Test: Unable to Access' },
  5: { value: 5, label: 'Unable to Test: Missing Test Data ' },
  // 6: { value: 6, label: 'Not Testable: Missing Parameter ' },
  7: { value: 7, label: 'Not Testable: Content Validation' },
  8: { value: 8, label: 'Not Testable: Support Activity' },
  9: { value: 9, label: 'Requires Self-testing and Evidence' },
}

export const complianceProjectResults = {
  1: { value: 1, label: 'Fully Compliance' },
  2: { value: 2, label: 'Partially Compliance'},
  3: { value: 3, label: 'Non Compliance'},
}


export const policyFamilyTypes = {
  1: { value: 1, label: 'Agriculture' },
  2: { value: 2, label: 'Arts and Culture' },
  3: { value: 3, label: 'Defense' },
  4: { value: 4, label: 'Education' },
  5: { value: 5, label: 'Employment' },
  6: { value: 6, label: 'Environment' },
  7: { value: 7, label: 'Foreign Affairs' },
  8: { value: 8, label: 'Health' },
  9: { value: 9, label: 'ICT' },
  10: { value: 10, label: 'Immigration' },
  11: { value: 11, label: 'Industry' },
  12: { value: 12, label: 'Innovation' },
  13: { value: 13, label: 'Investment' },
  14: { value: 14, label: 'Labor' },
  15: { value: 15, label: 'Others' },
  16: { value: 16, label: 'Police & Justice' },
  17: { value: 17, label: 'Science' },
  18: { value: 18, label: 'Security' },
  19: { value: 19, label: 'Technology' },
  20: { value: 20, label: 'Trade' },
  21: { value: 21, label: 'Transport' }
}

export const policyCategoryTypes = {
  1: { value: 1, label: 'Data Management' },
  2: { value: 2, label: 'Data Privacy' },
  3: { value: 3, label: 'Ecommerce' },
  4: { value: 4, label: 'Eparticipation' },
  5: { value: 5, label: 'Epayment' },
  6: { value: 6, label: 'Online Services' },
  7: { value: 7, label: 'Open Data' }
}

export const policyOwnerTypes = {
  1: { value: 1, label: 'ADLSA' },
  2: { value: 2, label: 'MEC' },
  3: { value: 3, label: 'MEI' },
  4: { value: 4, label: 'MOF' },
  5: { value: 5, label: 'MOI' },
  6: { value: 6, label: 'MOJ' },
  7: { value: 7, label: 'MOPH' },
  8: { value: 8, label: 'MOTC' }
}

export const policyStatusTypes = {
  1: { value: 1, label: 'Active' },
  2: { value: 2, label: 'Inactive' },
  3: { value: 3, label: 'Work in progress' }
}

export const policyTriggerTypes = {
  1: { value: 1, label: 'Backlog' },
  2: { value: 2, label: 'Bill' },
  3: { value: 3, label: 'Event' },
  4: { value: 4, label: 'Petitio' }
}

export const riskTypes = {
  1: { value: 1, label: 'Operational Risk' },
  2: { value: 2, label: 'Strategic Risk' },
  3: { value: 3, label: 'Tactical Ris' }
}

export const outcomeTypes = {
  1: { value: 1, label: 'Operational ' },
  2: { value: 2, label: 'Strategic ' },
  3: { value: 3, label: 'Tactical ' }
}

export const policyStateTypes = {
  1: { value: 1, label: 'Ammend' },
  2: { value: 2, label: 'Draft' },
  3: { value: 3, label: 'Legislated/Active' },
  4: { value: 4, label: 'Proposed' },
  5: { value: 5, label: 'Re-Draft' },
  6: { value: 6, label: 'Terminate' }
}

export const caseQueueTypes = {
  1: { value: 1, label: 'Policy Backlog' },
  2: { value: 2, label: 'Exception Grounds' },
  3: { value: 3, label: 'Knowledge Tasks' },
  4: { value: 4, label: 'Initiative Requests' }
}

export const caseCategoryTypes = {
  1: { value: 1, label: 'Clarification' },
  2: { value: 2, label: 'Exception' },
  3: { value: 3, label: 'Support' },
  4: { value: 4, label: 'Relief' },
  5: { value: 5, label: 'Suggestions' },
  6: { value: 6, label: 'Others' }
}

export const casePriorityTypes = {
  1: { value: 1, label: 'P1 - Outmost priority with 4 hours TAT', badge: 'P1', color:'danger' },
  2: { value: 2, label: 'P2 - Moderate priority with 12 hours TAT', badge: 'P2', color:'primary' },
  3: { value: 3, label: 'P3 - Low priority with 48 hours TAT', badge: 'P3', color:'warning' },
}

export const statusTypes = {
  open: { value: 'open', label: 'Open' },
  review: { value: 'review', label: 'In Review' },
  'in-review': { value: 'in-review', label: 'In Review' },
  close: { value: 'close', label: 'Close' },
}

export const userRoleTypes = {
  1: { value: 1, label: 'Steering Committee' },
  3: { value: 3, label: 'Operational Committee' },
}

export let listOfUsers = {
  2: { value: 2, label: 'user.one@motc.qa' },
  3: { value: 3, label: 'user.two@motc.qa' },
  4: { value: 4, label: 'user.three@motc.qa' },
  5: { value: 5, label: 'user.four@motc.qa' },
  6: { value: 6, label: 'user.five@motc.qa' },
  7: { value: 7, label: 'user.six@motc.qa' },
  8: { value: 8, label: 'sai.k@softpathinfotech.com' },
  9: { value: 9, label: 'naveen.m@softpathinfotech.com' },
  10: { value: 10, label: 'yashila@softpathinfotech.com' },
  11: { value: 11, label: 'sireesha@softpathinfotech.com' },
  12: { value: 12, label: 'sandeep.k@softpathinfotech.com' },
  13: { value: 13, label: 'akshitha@softpathinfotech.com' },
  14: { value: 14, label: 'admin@bizraums.com' },
  15: { value: 15, label: 'moph@bizraums.com' },
}

export const kbTypes = {
  faq: { value: 'faq', label: 'FAQ' },
  sop: { value: 'sop', label: 'SOP' },
  template: { value: 'template', label: 'Template' },
}

export const docGroupTypes = {
  standard: { value: 'standard', label: 'Standard' },
  policy: { value: 'policy', label: 'Policy' },
  guidelines: { value: 'guidelines', label: 'Guidelines' },
}

export const sponsorOptions = {
  'self-test': { value: 'self-test', label: 'Self Test' },
  'jawda': { value: 'jawda', label: 'Jawda' },
}

export const projectSponsorOptions = {
  2: { value: 'self-test', label: 'Self Test' },
  1: { value: 'jawda', label: 'Jawda' },
}

// export const notTestableReasons = {
//   1: { value: 1, label: 'Unable to Access' },
//   2: { value: 2, label: 'Missing Test Data ' },
//   3: { value: 3, label: 'Missing Parameter ' },
//   4: { value: 4, label: 'Content Validation' },
//   5: { value: 5, label: 'Support Activity' },
//   6: { value: 6, label: 'Requires Self-testing and Evidence' },
// }

export let entitiesData = {
  1: { id: 1, name: 'General Authority of Customs', short_name: 'GAC', label: 'GAC', value: 1, type: 'Authority', websites: 1, mobile: 1, eservices: 0, tested: 46, defects: 54, fixed: 0, score: 94, rank: 1 },
  2: { id: 2, name: 'Hamad Medical Corporation', short_name: 'HMC', label: 'HMC', value: 2, type: 'Agency', websites: 1, mobile: 0, eservices: 0, tested: 78, defects: 22, fixed: 0, score: 93, rank: 2 },
  3: { id: 3, name: 'Kahramaa', short_name: 'Kahramaa', label: 'Kahramaa', value: 3, type: 'Agency', websites: 1, mobile: 1, eservices: 3, tested: 75, defects: 34, fixed: 0, score: 91, rank: 3 },
  4: { id: 4, name: 'Ministry of Administrative Development, Labour and Social Affairs', short_name: 'ADLSA', label: 'ADLSA', value: 4, type: 'Ministry', websites: 1, mobile: 2, eservices: 3, tested: 33, defects: 45, fixed: 0, score: 88, rank: 4 },
  5: { id: 5, name: 'Ministry of Commerce and Industry', short_name: 'MOCI', label: 'MOCI', value: 5, type: 'MOCI', websites: 1, mobile: 1, eservices: 2, tested: 54, defects: 65, fixed: 0, score: 87, rank: 5 },
  6: { id: 6, name: 'Ministry of Education and Higher Education', short_name: 'MoEHE', label: 'MoEHE', value: 6, type: 'Ministry', websites: 1, mobile: 0, eservices: 5, tested: 27, defects: 44, fixed: 0, score: 87, rank: 5 },
  7: { id: 7, name: 'Ministry of Interior', short_name: 'MOI', label: 'MOI', value: 7, type: 'Ministry', websites: 1, mobile: 2, eservices: 8, tested: 25, defects: 31, fixed: 0, score: 84, rank: 6 },
  8: { id: 8, name: 'Ministry of Justice', short_name: 'MOJ', label: 'MOJ', value: 8, type: 'Ministry', websites: 0, mobile: 1, eservices: 3, tested: 11, defects: 57, fixed: 0, score: 79, rank: 7 },
  9: { id: 9, name: 'Ministry of Municipality and Environment', short_name: 'MME', label: 'MME', value: 9, type: 'Ministry', websites: 1, mobile: 1, eservices: 4, tested: 45, defects: 26, fixed: 0, score: 78, rank: 8 },
  10: { id: 10, name: 'Ministry of Public Health', short_name: 'MOPH', label: 'MOPH', value: 10, type: 'Ministry', websites: 1, mobile: 0, eservices: 1, tested: 74, defects: 41, fixed: 0, score: 78, rank: 8 },
  11: { id: 11, name: 'Ministry of Transport & Communication', short_name: 'MOTC', label: 'MOTC', value: 11, type: 'Ministry', websites: 0, mobile: 0, eservices: 1, tested: 62, defects: 0, fixed: 0, score: 75, rank: 9 },
  12: { id: 12, name: 'Primary Health Care Corporation', short_name: 'PHCC', label: 'PHCC', value: 12, type: 'Agency', websites: 1, mobile: 0, eservices: 0, tested: 25, defects: 18, fixed: 0, score: 71, rank: 10 },
  13: { id: 13, name: 'Supreme Judiciary Council', short_name: 'SJC', label: 'SJC', value: 13, type: 'Authority', websites: 0, mobile: 1, eservices: 1, tested: 15, defects: 22, fixed: 0, score: 64, rank: 11 },
  14: { id: 14, name: 'The General Retirement and Social Insurance Authority', short_name: 'GRSIA', label: 'GRSIA', value: 14, type: 'Authority', websites: 0, mobile: 0, eservices: 1, tested: 44, defects: 0, fixed: 0, score: 51, rank: 12 },
}

// export let entitiesData = entitiesData1

export const resetData = () => {
  entitiesData = window.mdata.entities
  listOfUsers = window.mdata.users
}

// export const enti

export const entityTypes = {
  1: { label: 'Ministry', value: 1 },
  2: { label: 'Agency', value: 2 },
  3: { label: 'Authority ', value: 3 },
  4: { label: 'Other', value: 4 }
}

export const paramVariations = {
  'web-en': { value: 'web-en', label: 'Web English' },
  'web-ar': { value: 'web-ar', label: 'Web Arabic' },
  'ios-ar': { value: 'ios-ar', label: 'iOS Arabic' },
  'android-ar': { value: 'android-ar', label: ' Android Arabic' },
  'ios-en': { value: 'ios-en', label: 'iOS English' },
  'android-en': { value: 'android-en', label: 'Android English' },
}

export const entityCommType = {
  1: { value: 1, label: 'Phone' },
  2: { value: 2, label: 'Email' },
  3: { value: 3, label: 'Meeting' },
}

export const projectIssueStatusTypes = {
  1: { value: 1, label: 'Open' },
  2: { value: 2, label: 'In Review' },
  3: { value: 3, label: 'Closed' },
}

export const testDataMethodTypes = {
  1: { value: 1, label: "Testing" },
  2: { value: 2, label: "Questionnaire" },
  3: { value: 3, label: "Evidence" },
  4: { value: 4, label: "Interview" },
  5: { value: 5, label: "Pre Questionnaire" },
}


export const qualityGateTypes = {
  1: { value: 1, label: "Pre Engagement" },
  2: { value: 2, label: "Content Engagement" },
  3: { value: 3, label: "Service Request" },
  4: { value: 4, label: "Post Request" },
  5: { value: 5, label: "Post Fulfilment" },
  6: { value: 6, label: "Questionnaire" },
}

export const supportedLanguages = {
  1: { value: 1, label: "English" },
  2: { value: 2, label: "Arabic" },
}

export const serviceStatusTypes = {
  1: { value: 1, label: 'Online' },
  2: { value: 2, label: 'Offline / Down' },
  3: { value: 3, label: 'Not Accessible' },
}

export const entityUserRole = {
  0: { label: 'Admin', value: 0 },
  7: { label: 'Entity Manager', value: 7 },
  8: { label: 'Tester', value: 8 },
  9: { label: 'Consultant', value: 9 },
  10: { label: 'Jawda Tester', value: 10 },
  11: { label: 'Jawda Test Manager', value: 11 },
  12: { label: 'Jawda Board Member', value: 12 },
  13: { label: 'Jawda Policies Manager', value: 13 },
  14: { label: 'Jawda Communications Manager', value: 14 }
}


// ['Admin', 'Steering Committee', 'Executive Committee', 'Operating Committee', 'Ops Staff', 
//     'Support Staff', 'Beneficiary', 'Entity Admin',
//     'Entity Manager', 'Tester', 'Consultant', 'Jawda Tester', 'Jawda Test Manager', 'Jawda Board Member', 'Jawda Policies Manager', 'Jawda Communications Manager']
export const cleanedEntities = {
  0: { label: 'All', name: 'All', name_ar: 'الكل', value: 0 },
  9: { value: 9, label: 'Ministry of Municipality and Environment', "name": "Ministry of Municipality and Environment", "name_ar": "وزارة البلدية والبيئة", "id": 9, "description": "", "completed": 15, "wip": 10, "not_started": 9, "prog": 79 },
  1: { value: 1, label: 'General Authority of Customs', "name": "General Authority of Customs", "name_ar": "الهيئة العامة للجمارك", "id": 1, "description": "", "completed": 16, "wip": 10, "not_started": 29, "prog": 58 },
  14: { value: 14, label: 'The General Retirement and Social Insurance Authority', "name": "The General Retirement and Social Insurance Authority", "name_ar": "الهيئة العامة للتقاعد والتأمينات الاجتماعية", "id": 14, "description": "", "completed": 8, "wip": 9, "not_started": 4, "prog": 67 },
  2: { value: 2, label: 'Hamad Medical Corporation', "name": "Hamad Medical Corporation", "name_ar": "مؤسسة حمد الطبية", "id": 2, "description": "", "completed": 8, "wip": 1, "not_started": 5, "prog": 60 },
  3: { value: 3, label: 'Kahramaa', "name": "Kahramaa", "name_ar": "كهرماء", "id": 3, "description": "آلاء المنهالي - 44845742 - aalmenhali@km.qa\r\nعبير الخزاعي - 44845369 - aalkhuzaei@km.qa", "completed": 10, "wip": 10, "not_started": 30, "prog": 90 },
  4: { value: 4, label: 'Ministry of Administrative Development, Labour and Social Affairs', "name": "Ministry of Administrative Development, Labour and Social Affairs", "name_ar": "وزارة التنمية الادارية والعمل والشؤون الاجتماعية", "id": 4, "description": "", "completed": 14, "wip": 10, "not_started": 5, "prog": 55 },
  5: { value: 5, label: 'Ministry of Commerce and Industry', "name": "Ministry of Commerce and Industry", "name_ar": "وزارة التجارة والصناعة", "id": 5, "description": "", "completed": 3, "wip": 4, "not_started": 17, "prog": 73 },
  6: { value: 6, label: 'Ministry of Education and Higher Education', "name": "Ministry of Education and Higher Education", "name_ar": "وزارة التعليم والتعليم العالي", "id": 6, "description": "", "completed": 19, "wip": 1, "not_started": 2, "prog": 85 },
  7: { value: 7, label: 'Ministry of Interior', "name": "Ministry of Interior", "name_ar": "وزارة الداخلية", "id": 7, "description": "E-Services are out of scope for the current Pilot Exercise ", "completed": 7, "wip": 17, "not_started": 19, "prog": 63 },
  8: { value: 8, label: 'Ministry of Justice', "name": "Ministry of Justice", "name_ar": "وزارة العدل", "id": 8, "description": "", "completed": 1, "wip": 2, "not_started": 24, "prog": 54 },
  10: { value: 10, label: 'Ministry of Public Health', "name": "Ministry of Public Health", "name_ar": "وزارة الصحة العامة", "id": 10, "description": "", "completed": 8, "wip": 19, "not_started": 25, "prog": 85 },
  11: { value: 11, label: 'Ministry of Transport & Communication', "name": "Ministry of Transport & Communication", "name_ar": "وزارو المواصلات والاتصالات", "id": 11, "description": "", "completed": 15, "wip": 15, "not_started": 29, "prog": 85 },
  12: { value: 12, label: 'Primary Health Care Corporation', "name": "Primary Health Care Corporation", "name_ar": "مؤسسة الرعاية الصحية الاولية", "id": 12, "description": "", "completed": 6, "wip": 9, "not_started": 13, "prog": 56 },
  13: { value: 13, label: 'Supreme Judiciary Council', "name": "Supreme Judiciary Council", "name_ar": "المجلس الاعلى للقضاء", "id": 13, "description": "", "completed": 6, "wip": 23, "not_started": 23, "prog": 73 }

  // 9: {value: 9, "label":"Ministry of Municipality and Environment" ,"name":"Ministry of Municipality and Environment","id":9,"description":"","completed":20,"wip":22,"not_started":2,"prog":88},
  // 1: {value: 1, "label":"General Authority of Customs" ,"name":"General Authority of Customs","id":1,"description":"","completed":12,"wip":2,"not_started":11,"prog":54},
  // 14: {value: 14, "label":"The General Retirement and Social Insurance Authority" ,"name":"The General Retirement and Social Insurance Authority","id":14,"description":"","completed":14,"wip":15,"not_started":29,"prog":56},
  // 2: {value: 2, "label":"Hamad Medical Corporation" ,"name":"Hamad Medical Corporation","id":2,"description":"","completed":16,"wip":8,"not_started":7,"prog":61},
  // 3: {value: 3, "label":"Kahramaa" ,"name":"Kahramaa","id":3,"description":"آلاء المنهالي - 44845742 - aalmenhali@km.qa\r\nعبير الخزاعي - 44845369 - aalkhuzaei@km.qa","completed":17,"wip":16,"not_started":22,"prog":55},
  // 4: {value: 4, "label":"Ministry of Administrative Development, Labour and Social Affairs" ,"name":"Ministry of Administrative Development, Labour and Social Affairs","id":4,"description":"","completed":17,"wip":12,"not_started":19,"prog":55},
  // 5: {value: 5, "label":"Ministry of Commerce and Industry" ,"name":"Ministry of Commerce and Industry","id":5,"description":"","completed":19,"wip":2,"not_started":30,"prog":59},
  // 6: {value: 6, "label":"Ministry of Education and Higher Education" ,"name":"Ministry of Education and Higher Education","id":6,"description":"","completed":16,"wip":27,"not_started":12,"prog":74},
  // 7: {value: 7, "label":"Ministry of Interior" ,"name":"Ministry of Interior","id":7,"description":"E-Services are out of scope for the current Pilot Exercise ","completed":3,"wip":3,"not_started":26,"prog":58},
  // 8: {value: 8, "label":"Ministry of Justice" ,"name":"Ministry of Justice","id":8,"description":"","completed":8,"wip":20,"not_started":10,"prog":90},
  // 10: {value: 10, "label":"Ministry of Public Health" ,"name":"Ministry of Public Health","id":10,"description":"","completed":3,"wip":26,"not_started":4,"prog":78},
  // 11: {value: 11, "label":"Ministry of Transport \u0026 Communication" ,"name":"Ministry of Transport \u0026 Communication","id":11,"description":"","completed":12,"wip":26,"not_started":28,"prog":79},
  // 12: {value: 12, "label":"Primary Health Care Corporation" ,"name":"Primary Health Care Corporation","id":12,"description":"","completed":6,"wip":6,"not_started":6,"prog":90},
  // 13: {value: 13, "label":"Supreme Judiciary Council" ,"name":"Supreme Judiciary Council","id":13,"description":"","completed":14,"wip":25,"not_started":11,"prog":84}
}


export const issuesByGroup = {
  3: {
    4: [
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Layout",
        "compl": "NC",
        "category": "Refresh",
        "description": "The website is not refreshed post previous policy",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Search",
        "compl": "NC",
        "category": "Technical Issue",
        "description": "It is technically difficult to implement the policy condition",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Search",
        "compl": "PC",
        "category": "Tools",
        "description": "Not enough tools to implement the condition",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Navigation, Content Structure, Sitemap",
        "compl": "PC",
        "category": "Refresh",
        "description": "The website is not refreshed post previous policy",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Accessibility",
        "compl": "NC",
        "category": "Awareness",
        "description": "Not aware of ecosystem services that can be used for compliance",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Accessibility",
        "compl": "PC",
        "category": "Guidelines",
        "description": "No clear guidelines on what or how to implement",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Search Engine Optimization",
        "compl": "NC",
        "category": "Tools",
        "description": "Not enough tools to implement the condition",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Content: Information",
        "compl": "NC",
        "category": "Update",
        "description": "Content is not updated",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Content: Graphics and Multimedia",
        "compl": "NC",
        "category": "Update",
        "description": "Content is not updated",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Support",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "Securtiy & Privacy",
        "compl": "NC",
        "category": "Oversight",
        "description": "Policy criteria was not implemented",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "ePayment",
        "compl": "NC",
        "category": "Oversight",
        "description": "Policy criteria was not implemented",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "General Requirements",
        "compl": "PC",
        "category": "Oversight",
        "description": "Policy criteria was not implemented",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "eServices Profile",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "eServices Information",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "eServices Functionality",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "eServices Functionality",
        "compl": "PC",
        "category": "Clarity",
        "description": "The policy criteria is ambiguous and not clear",
        "date": "29-Aug-2020"
      },
      {
        "entity_id": "3",
        "project_id": "4",
        "project_name": "Kahramaa-Site",
        "section_name": "eServices Management",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "29-Aug-2020"
      }
    ],
    5: [
      {
        "entity_id": "3",
        "project_id": "5",
        "project_name": "Kahramaa-Mobile",
        "section_name": "Layout",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "02-Sep-20220"
      },
      {
        "entity_id": "3",
        "project_id": "5",
        "project_name": "Kahramaa-Mobile",
        "section_name": "Layout",
        "compl": "NC",
        "category": "Guidelines",
        "description": "No clear guidelines on what or how to implement",
        "date": "02-Sep-20220"
      },
      {
        "entity_id": "3",
        "project_id": "5",
        "project_name": "Kahramaa-Mobile",
        "section_name": "Content-Information",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "02-Sep-20220"
      },
      {
        "entity_id": "3",
        "project_id": "5",
        "project_name": "Kahramaa-Mobile",
        "section_name": "Support: Chat, Helpline",
        "compl": "PC",
        "category": "Oversight",
        "description": "Policy criteria was not implemented",
        "date": "02-Sep-20220"
      },
      {
        "entity_id": "3",
        "project_id": "5",
        "project_name": "Kahramaa-Mobile",
        "section_name": "General Requirements",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "02-Sep-20220"
      }
    ]
  },
  4: {
    1: [
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Layout",
        "compl": "NC",
        "category": "Refresh",
        "description": "The website is not refreshed post previous policy",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Search",
        "compl": "NC",
        "category": "Technical Issue",
        "description": "It is technically difficult to implement the policy condition",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Search",
        "compl": "PC",
        "category": "Tools",
        "description": "Not enough tools to implement the condition",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Navigation, Content Structure, Sitemap",
        "compl": "PC",
        "category": "Refresh",
        "description": "The website is not refreshed post previous policy",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Accessibility",
        "compl": "NC",
        "category": "Awareness",
        "description": "Not aware of ecosystem services that can be used for compliance",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Accessibility",
        "compl": "PC",
        "category": "Guidelines",
        "description": "No clear guidelines on what or how to implement",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Search Engine Optimization",
        "compl": "NC",
        "category": "Tools",
        "description": "Not enough tools to implement the condition",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Content: Information",
        "compl": "NC",
        "category": "Update",
        "description": "Content is not updated",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Content: Graphics and Multimedia",
        "compl": "NC",
        "category": "Update",
        "description": "Content is not updated",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Support",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "11-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "1",
        "project_name": "ADLSA-Site",
        "section_name": "Securtiy & Privacy",
        "compl": "NC",
        "category": "Oversight",
        "description": "Policy criteria was not implemented",
        "date": "11-Jul-2020"
      }
    ],
    2: [
      {
        "entity_id": "4",
        "project_id": "2",
        "project_name": "AMERNI-Mobile",
        "section_name": "Layout",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "16-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "2",
        "project_name": "AMERNI-Mobile",
        "section_name": "Layout",
        "compl": "NC",
        "category": "Guidelines",
        "description": "No clear guidelines on what or how to implement",
        "date": "16-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "2",
        "project_name": "AMERNI-Mobile",
        "section_name": "General Requirements",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "16-Jul-2020"
      }
    ],
    3: [
      {
        "entity_id": "4",
        "project_id": "3",
        "project_name": "Mawared-Mobile",
        "section_name": "Layout",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "16-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "3",
        "project_name": "Mawared-Mobile",
        "section_name": "Layout",
        "compl": "NC",
        "category": "Guidelines",
        "description": "No clear guidelines on what or how to implement",
        "date": "16-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "3",
        "project_name": "Mawared-Mobile",
        "section_name": "General Requirements",
        "compl": "NC",
        "category": "Before Mandate",
        "description": "Implemented before mandate is introduced",
        "date": "16-Jul-2020"
      },
      {
        "entity_id": "4",
        "project_id": "3",
        "project_name": "Mawared-Mobile",
        "section_name": "Support: Chat, Helpline",
        "compl": "PC",
        "category": "Oversight",
        "description": "Policy criteria was not implemented",
        "date": "16-Jul-2020"
      }
    ]
  }
}
export const hostName = `${window.location.protocol}//${window.location.host}`
// export const policyFamilyTypes = {
//   ICT
// 	Transport
// 	Health
// 	Education
// 	Employment, Labor, Immigration
// 	Environment
// 	Science, Technology, Innovation
// 	Industry, Trade, Investment
// 	Agriculture
// 	Defense, Security, Foreign Affairs
// 	Arts and Culture
// 	Police & Justice
// 	Others
// }

const group_by = 'id'
export const objects = makeStore(`objects`, { group_by })
export const subobjects = makeStore(({ oid }) => `objects/${oid}/subobjects`, { group_by })
export const questions = makeStore(({ soid }) => `subobjects/${soid}/questions`, { group_by })

export const beneficiaries = makeStore(`beneficiaries`, { group_by })
export const profiles = makeStore(({ bid }) => `beneficiaries/${bid}/profiles`, { group_by })
export const details = makeStore(({ pid }) => `beneficiary_profiles/${pid}/details`, { group_by })

