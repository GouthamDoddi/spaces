import makeStore from './make-store'

const {store, load } = makeStore(({policy_id, id}) => `formulation/${policy_id}/policy-sections`)

export { store, load }