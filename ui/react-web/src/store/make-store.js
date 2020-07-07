import { get, put, post, del } from './api'

import { createEvent, createStore } from 'effector'


export default function makeStore(path, { group_by=null, defaultStore={ loading: false, loadMsg: '', data: null, error: null }}={}) {
    
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
      
  store.on(changed, (s, o) => {
    
    let e, i
    if(typeof(o) === 'object' && o.e) {
      e = o.e;
      i = o.i
    } else { e = o}
    
    
    let val = e.target.value
    let fld = e.target.name
    let data = {...s.data}
  
    if(i >= 0) {
      data[fld] = [...data[fld]]
      data[fld][i] = val
    } else {
      data[fld] = val  
    }
    return {
      ...s,
      ...{data}
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
    // console.log({...store, ...{data}})
    if(group_by && data) data = data.reduce(((acc, o) => (acc[o[group_by]] = o) && acc), {})
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
    // console.log("Adding Data")
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

  function remove({data, cb, ...others}) {
    const ans = window.confirm("Are you sure to delete?");
    if(ans) {
      enableLoading('deleting')
      del(toPath(others), { data, success: (data) => {assignData(data, cb)}, error: assignError })  
    }
  }
  return { store, load, create, update, changed, selectChange, addData, remove }
}


