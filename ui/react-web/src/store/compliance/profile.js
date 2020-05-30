
import makeStore from '../make-store'

const { store, update, load, create } = makeStore('compliance/projects')

export default store

export { update, load, create }


// import { get, put, post } from '../api'

// import { createEvent, createStore } from 'effector'


// const path = '/papi/compliance/projects'

// const toPath = (...options) => {
//   opt = options.filter(s => s && (s + '').length > 0)
//   return opt.length > 0 ? `${path}/${opt.join('/')}` : path
// }

// const defaultStore = { loading: false, loadMsg: '', data: null, error: null }

// const store = createStore(defaultStore)

// const enableLoading = createEvent('enableLoading')
// const disableLoading = createEvent('disableLoading')
// const addData = createEvent('addData')


// store.on(enableLoading, (store, msg) => (
//   {...store, ...{loading: true, loadingMsg: msg}}
// ))

// store.on(disableLoading, (store) => (
//   {...store, ...{loading: false, loadingMsg: ''}}
// ))

// store.on(addData, (store, data) => (
//   {...store, ...{data}}
// ))

// store.on(addError, (store, error) => (
//   {...store, ...{error}}
// ))


// function assignData(resp, cb) {
//   const { data } = resp
//   disableLoading()
//   addData( data )
//   if(cb) { cb(data) }
// }

// function assignError(resp) {
//   disableLoading()
//   addError(resp.data)
// }

// export function load(id) {
//   enableLoading('Fetching data')
//   addData(null)
//   get(toPath(id), { success: assignData, error: assignError })
// }

// export function create({ id, cb }) {
//   enableLoading('Creating')
//   get(toPath(id), { success: (data) => {assignData(data, cb)}, error: assignError })
// }



// export default store


