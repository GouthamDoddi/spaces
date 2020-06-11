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


export const objects = makeStore(`objects`)
export const subobjects = makeStore(({oid}) => `objects/${oid}/subobjects`)
export const questions = makeStore(({soid}) => `subobjects/${soid}/questions`)

export const beneficiaries = makeStore(`beneficiaries`)
export const profiles = makeStore(({bid}) => `beneficiaries/${bid}/profiles`)
export const details = makeStore(({pid}) => `beneficiary_profiles/${pid}/details`)
