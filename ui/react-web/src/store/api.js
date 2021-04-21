// const URL = 'http://'

import { resetData } from './master-data'
import store, { loggedIn, logout } from './user'

const path = (p) => p.includes('http') ? p : `/api/${p}`

const handleResp = async function(r, succ, error) {
  if (r.status < 400) {
    succ(await r.json())
  } else if(r.status === 401) {
    logout()
    goToLogin()
  } else {
    error(await r.json())
  }
}

function goToLogin() {
  window.location.hash = '/login'
}

const handleError = async function(error, r) {
  if (error) {
    error({status: 'error', data: 'Somehitng happend.'})
  };
}

const fetchWithAuth = function(url, { success, error, data, auth=true, ...options } ) {
  options.headers = { Authorization: store.getState().token }
  if(data) { 
    options.body = JSON.stringify({data})
    options.headers['Content-Type'] = 'application/json'
  }
  if( loggedIn() ||  !auth) {
    fetch(path(url), options).then((r) => handleResp(r, success, error), 
      (e) => handleError(error, e)) 
  }
}

function post(url, options={}) {
  options.method = 'post'
  fetchWithAuth(url, options)
}

function get(url, options={}) {
  options.method = 'get'
  fetchWithAuth(url, options)
}

function put(url, options={}) {
  options.method = 'put'
  fetchWithAuth(url, options)
}

function del(url, options={}) {
  options.method = 'delete'
  fetchWithAuth(url, options)
}

function masterData(res=null, cb=() =>{}) {
  fetchWithAuth((res ? `master-data/list/${res}` : 'master-data/list'), {
    success: (res) => {
      window.mdata = {...window.mdata, ...(res.data)}
      resetData()
      cb()
    },
    error: (res) => {
      console.error(res)
      cb()
    }
  })
}

export { post, get, put, del, masterData }