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


const group_by = 'id'
export const objects = makeStore(`objects`, { group_by })
export const subobjects = makeStore(({oid}) => `objects/${oid}/subobjects`, { group_by })
export const questions = makeStore(({soid}) => `subobjects/${soid}/questions`, { group_by })

export const beneficiaries = makeStore(`beneficiaries`, { group_by })
export const profiles = makeStore(({bid}) => `beneficiaries/${bid}/profiles`, { group_by })
export const details = makeStore(({pid}) => `beneficiary_profiles/${pid}/details`, { group_by })
