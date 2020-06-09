
import makeStore from '../make-store'

const { store, update, load, create } = makeStore('compliance/projects')

export default store

export { update, load, create }


