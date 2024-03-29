import { get, put, post, del } from './api'

import { createEvent, createStore } from 'effector'

import {toast} from 'react-toastify'

let toastId = null

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
  const cbChanged = createEvent('cbChanged')
  
  
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

  store.on(cbChanged, (s, { name, val }) => {
    return({ ...s,
      ...{data: {...s.data, [name]: val }}
    })
  })
  
  store.on(enableLoading, (store, msg) => {
    let dsp = msg
    if(!toastId){
      let type;
      if(typeof(msg) == 'object' && msg != null) {
        dsp = msg.msg
        type = msg.type
      }
      toastId = type ? toast[type](dsp) : toast(dsp)
    }
    return {...store, ...{loading: true, loadingMsg: dsp}}
  })
  
  store.on(disableLoading, (store) => {
    if(toastId) {
      toast.dismiss()
      toastId = null
    };
    return {...store, ...{loading: false, loadingMsg: ''}}
  })
  
  store.on(addData, (store, data) => {
    // console.log({...store, ...{data}})
    if(group_by && data) data = data.reduce(((acc, o) => (acc[o[group_by]] = o) && acc), {})
    return {...store, ...{data}}
  })
  
  store.on(addError, (store, error) => {
    if(error && typeof(error) == 'object' && Object.keys(error).length > 0) {
      const msg = Object.keys(error).map((k) => `${k} - ${error[k]}`)
      enableLoading({msg: msg.join(', '), type: 'error'})
    }
    
    return {...store, ...{error}}
  })
  
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
  
  function load(id, cb=null, empty=false) {
    if(empty || store.getState().data?.id != id) { addData(null) }
    
    if(id !== 'new') { 
      enableLoading('Fetching data')
      get(toPath(id), { success: (resp) => assignData(resp, cb), error: assignError }) 
    }    
  }
  
  function create({ data, cb, auth, ...others }) {
    enableLoading('Creating')
    post(toPath(others), { data, auth, success: (data) => {assignData(data, cb)}, error: assignError })
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
  return { store, load, create, update, changed, selectChange, cbChanged, addData, remove }
}


