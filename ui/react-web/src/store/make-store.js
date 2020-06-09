import { get, put, post } from './api'

import { createEvent, createStore } from 'effector'


export default function makeStore(path, defaultStore={ loading: false, loadMsg: '', data: null, error: null }) {
    
  const toPath = (...options) => {
    if(typeof(path) === 'function') {
      return path(options[0])
    } else {
      const opt = options.filter(s => s && (s + '').length > 0)
      return opt.length > 0 ? `${path}/${opt.join('/')}` : path  
    }
  }
  
  const store = createStore(defaultStore)
  
  const enableLoading = createEvent('enableLoading')
  const disableLoading = createEvent('disableLoading')
  const addData = createEvent('addData')
  const addError = createEvent('addError')

  const changed = createEvent('changed')
  const selectChanged = createEvent('selectChanged')
      
  store.on(changed, (s, e) => {
    return {
      ...s,
      ...{data: {...s.data, [e.target.name]: e.target.value}}
    }
  })

  store.on(selectChanged, (s, { name, obj }) => {
    return({ ...s,
      ...{data: {...s.data, [name]: obj.value}}
    })
  })
  
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
  
  function selectChange(name) {
    return (obj) => selectChanged({name, obj})
  }
  
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
  
  function load(id, empty=false) {
    if(empty || store.getState().data?.id != id) { addData(null) }
    if(id !== 'new') { 
      enableLoading('Fetching data')
      get(toPath(id), { success: assignData, error: assignError }) 
    }    
  }
  
  function create({ data, cb, ...others }) {
    enableLoading('Creating')
    post(toPath(others), { data, success: (data) => {assignData(data, cb)}, error: assignError })
  }
  
  function update({ data, cb, ...others }) {
    enableLoading('Updating')
    put(toPath(others), { data, success: (data) => {assignData(data, cb)}, error: assignError })
  }
  return { store, load, create, update, changed, selectChange, addData }
}


