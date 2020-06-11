import makeStore from './make-store'

const {store, load } = makeStore(({policy_id,}) => `formulation/${policy_id}/policy-sections`)

export const sectionStore = makeStore(({policy_id, id}) =>  id ? `formulation/${policy_id}/policy-sections/${id}` : `formulation/${policy_id}/policy-sections`)
export { store, load }