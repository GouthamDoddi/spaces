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
  1: { value: 1, label: 'BS 1' },
  2: { value: 2, label: 'BS 2' },
  3: { value: 3, label: 'BS 3' },
  4: { value: 3, label: 'BS 4' },
}

export const projectTypes = {
  1: { value: 1, label: 'Type 1'},
  2: { value: 2, label: 'Type 2'},
  3: { value: 3, label: 'Type 3'},
}

export const roleTypes = {
  1: { value: 1, label: 'Director' },
  2: { value: 2, label: 'Manager' },
  3: { value: 3, label: 'Lead' },
  4: { value: 3, label: 'Employee' },
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
  1: { value: 1, label: 'Compliance: Fully complied'},
  2: { value: 2, label: 'Compliance: Partially complied'},
  3: { value: 3, label: 'Compliance: Non complied'}
}


export const policyFamilyTypes = {
  1: {value: 1, label: 'Agriculture'},
  2: {value: 2, label: 'Arts and Culture'},
  3: {value: 3, label: 'Defense'},
  4: {value: 4, label: 'Education'},
  5: {value: 5, label: 'Employment'},
  6: {value: 6, label: 'Environment'},
  7: {value: 7, label: 'Foreign Affairs'},
  8: {value: 8, label: 'Health'},
  9: {value: 9, label: 'ICT'},
  10: {value: 10, label: 'Immigration'},
  11: {value: 11, label: 'Industry'},
  12: {value: 12, label: 'Innovation'},
  13: {value: 13, label: 'Investment'},
  14: {value: 14, label: 'Labor'},
  15: {value: 15, label: 'Others'},
  16: {value: 16, label: 'Police & Justice'},
  17: {value: 17, label: 'Science'},
  18: {value: 18, label: 'Security'},
  19: {value: 19, label: 'Technology'},
  20: {value: 20, label: 'Trade'},
  21: {value: 21, label: 'Transport'}
}

export const policyCategoryTypes = {
  1: { value: 1, label: 'Data Management'},
  2: { value: 2, label: 'Data Privacy'},
  3: { value: 3, label: 'Ecommerce'},
  4: { value: 4, label: 'Eparticipation'},
  5: { value: 5, label: 'Epayment'},
  6: { value: 6, label: 'Online Services'},
  7: { value: 7, label: 'Open Data'}
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
 1: { value: 1, label: 'Active'},
 2: { value: 2, label: 'Inactive'},
 3: { value: 3, label: 'Work in progress'}
}

export const policyTriggerTypes = {
 1: { value: 1, label: 'Backlog'},
 2: { value: 2, label: 'Bill'},
 3: { value: 3, label: 'Event'},
 4: { value: 4, label: 'Petitio'}
}

export const riskTypes = {
 1: {value: 1, label: 'Operational Risk'},
 2: {value: 2, label: 'Strategic Risk'},
 3: {value: 3, label: 'Tactical Ris'}
}

export const outcomeTypes = {
  1: { value: 1, label: 'Operational '},
  2: { value: 2, label: 'Strategic '},
  3: { value: 3, label: 'Tactical '}
}

export const policyStateTypes = {
 1: { value: 1, label: 'Ammend'},
 2: { value: 2, label: 'Draft'},
 3: { value: 3, label: 'Legislated/Active'},
 4: { value: 4, label: 'Proposed'},
 5: { value: 5, label: 'Re-Draft'},
 6: { value: 6, label: 'Terminate'}
}

export const caseQueueTypes = {
  1: { value: 1, label: 'Policy Backlog'},
  2: { value: 2, label: 'Exception Grounds'},
  3: { value: 3, label: 'Knowledge Tasks'},
  4: { value: 4, label: 'Initiative Requests'}
}

export const caseCategoryTypes = {
  1: { value: 1, label: 'Clarification'},
  2: { value: 2, label: 'Exception'},
  3: { value: 3, label: 'Support'},
  4: { value: 4, label: 'Relief'},
  5: { value: 5, label: 'Suggestions'}
}

export const casePriorityTypes = {
  1: { value: 1, label: 'Priority P1'},
  2: { value: 2, label: 'Priority P2'},
  3: { value: 3, label: 'Priority P3'},
}

export const statusTypes = {
  open: { value: 'open', label: 'Open'},
  review: { value: 'review', label: 'In Review'},
  close: { value: 'close', label: 'Close'},
}

export const userRoleTypes = {
  1: { value: 1, label: 'Steering Committee'},
  3: { value: 3, label: 'Operational Committee'},
}

export const listOfUsers = {
  2: { value: 2, label: 'user.one@motc.qa'},
  3: { value: 3, label: 'user.two@motc.qa'},
  4: { value: 4, label: 'user.three@motc.qa'},
  5: { value: 5, label: 'user.four@motc.qa'},
  6: { value: 6, label: 'user.five@motc.qa'},
  7: { value: 7, label: 'user.six@motc.qa'},
  8: { value: 8, label: 'sai.k@softpathinfotech.com'},
  9: { value: 9, label: 'naveen.m@softpathinfotech.com'},
  10: { value: 10, label: 'yashila@softpathinfotech.com'},
  11: { value: 11, label: 'sireesha@softpathinfotech.com'},
  12: { value: 12, label: 'sandeep.k@softpathinfotech.com'},
}

export const kbTypes = {
  faq: { value: 'faq', label: 'FAQ'},
  sop: { value: 'sop', label: 'SOP'},
  template: { value: 'template', label: 'Template'},
}

export const docGroupTypes = {
  standard: { value: 'standard', label: 'Standard'},
  policy: { value: 'policy', label: 'Policy'},
  guidelines: { value: 'guidelines', label: 'Guidelines'},
}
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
export const subobjects = makeStore(({oid}) => `objects/${oid}/subobjects`, { group_by })
export const questions = makeStore(({soid}) => `subobjects/${soid}/questions`, { group_by })

export const beneficiaries = makeStore(`beneficiaries`, { group_by })
export const profiles = makeStore(({bid}) => `beneficiaries/${bid}/profiles`, { group_by })
export const details = makeStore(({pid}) => `beneficiary_profiles/${pid}/details`, { group_by })

