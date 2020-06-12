

import makeStore from '../make-store'

import { put } from '../api'


const policy = makeStore(({policy_id}) => policy_id ? `formulation/metadata/${policy_id}` : 'formulation/metadata')


export default policy
