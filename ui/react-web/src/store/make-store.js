import { get, put, post } from './api'

import { createEvent, createStore } from 'effector'


export default function makeStore(path, defaultStore={ loading: false, loadMsg: '', data: null, error: null }) {
    
  const toPath = (...options) => {
    const opt = options.filter(s => s && (s + '').length > 0)
    return opt.length > 0 ? `${path}/${opt.join('/')}` : path
  }
  
  const store = createStore(defaultStore)
  
  const enableLoading = createEvent('enableLoading')
  const disableLoading = createEvent('disableLoading')
  const addData = createEvent('addData')
  const addError = createEvent('addError')
  
  const allEvents = [enableLoading, disableLoading, addData, addError]
  
  store.on(enableLoading, (store, msg) => (
    {...store, ...{loading: true, loadingMsg: msg}}
  ))
  
  store.on(disableLoading, (store) => (
    {...store, ...{loading: false, loadingMsg: ''}}
  ))
  
  store.on(addData, (store, data) => {
    console.log({...store, ...{data}})
    return {...store, ...{data}}
  })
  
  store.on(addError, (store, error) => (
    {...store, ...{error}}
  ))
  
  
  function assignData(resp, cb) {
    const { data } = resp
    disableLoading()
    console.log("Adding Data")
    addData( data )
    if(cb) { cb(data) }
  }
  
  function assignError(resp) {
    disableLoading()
    addError(resp.data)
  }
  
  function load(id) {
    addData(null)
    if(id !== 'new') { 
      enableLoading('Fetching data')
      get(toPath(id), { success: assignData, error: assignError }) 
    }    
  }
  
  function create({ id, data, cb }) {
    enableLoading('Creating')
    post(toPath(id), { data, success: (data) => {assignData(data, cb)}, error: assignError })
  }
  
  function update({ id, data, cb }) {
    enableLoading('Updating')
    put(toPath(id), { data, success: (data) => {assignData(data, cb)}, error: assignError })
  }
  return { store, load, create, update, allEvents }
}


