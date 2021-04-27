import localStore from './local-store'
import { createEvent } from 'effector'
import { post } from './api'
import { any, path} from 'rambda'

const defaultData = {token: null, info: {}}
const store = localStore('user-data', defaultData)

const clear = createEvent('clear')
const addToken = createEvent('addToken')
const addError = createEvent('addError')
// const addInfo = createEvent('addInfo')
const addData = createEvent('addData')

export const login = createEvent('login')

store.on(login, (store, { email, password }) =>  {
    addError(null)
    post('login',{
      auth: false,
      success: handleLogin,
      error: handleErrorLogin,
      data: { email, password }
    })
  }
)

store.on(addToken, (store, token) => ({...store, ...{token}}))
store.on(addData, (store, data) => ({...store, ...{...data}}))
store.on(addError, (store, error) => {
  return({...store, ...{error}})
})

function handleLogin( resp ) {
  
  if(resp.status === 'success' && resp.data.token) {
    addError(null)
    addData(resp.data)
    // addToken(resp.data.token)
  } else {
    addError('Invlid email / password')
  }
}


function handleReload( resp ) {
  
  if(resp.status === 'success' && resp.data.token) {
    addData(resp.data)
    window.location.reload()
    // console.log(window.location.hash.replace('#', ''))
    // window.location.hash = window.location.hash.replace('#', '')
  }
}

function handleErrorLogin( resp ) {
  addError('Invlid email / password')
  console.log(resp)
}

store.on(clear, (store) => defaultData )

export function logout() {
  clear()
  window.location.hash = '/login'
}

export function loggedIn() {
  const { token } = store.getState()
  return token && (token.length > 0)
}

export function role() {
  const { info } = store.getState() || {}
  return info.role
}

export const isMOTCUser = () => role() == 0;

export const isJAWDAUser = () => [11, 12, 13, 14, 15].includes(role());

export function hasSpaceAccess(space) {
  const { auth } = store.getState()
  return auth?.self?.permissions?.all || !!((auth?.self?.permissions || {})[space])
}

export function hasAssetAccess(type, type_id, space, asset) {
  const { auth } = store.getState()
  const currentSpace = (auth[type][type_id]?.permissions || {})[space] || {}
  return auth?.self?.permissions?.all || !!(currentSpace[asset]) || !!(currentSpace.all)
}

export function hasSelfAssetAccess(space, asset) {
  const { auth } = store.getState()
  const currentSpace = (auth.self?.permissions || {})[space] || {}
  return auth?.self?.permissions?.all || !!(currentSpace[asset]) || !!(currentSpace.all)
}

export function hasAction(action) {
  const { auth } = store.getState()
  const permissions = auth?.self?.permissions || {}
  return permissions.all || (permissions.actions || []).includes(action)
}

export function reloadAuth() {
  post('login',{
    auth: true,
    success: handleReload,
    error: handleErrorLogin,
  })
}

export function hasMenuAccess(p, access='R') {
  const { all_roles } = store.getState()
  if(all_roles.includes(0)) { return true }
  return any((role) => (path([role, ...p], window.basicAuth) || '').includes(access), all_roles)
}

export function menuItemsByRole() {
  const r = role()
  const menuItems = {
   'home' : { name: 'Home', path: '/a-dashboard', icon: 'dashboard.svg' }, 
   'db' : { name: 'dashboard', path: '/board', icon: 'projects.svg'},
   'em' : { name: 'Entities', path: '/entities', icon: 'projects.svg'},
   'pm' : { name: 'Projects', path: '/projects', icon: 'projects.svg'},
   'res' : { name: 'Resources', path: '/resources', icon: 'resources.svg'}
  }
    // { name: 'Case Management', path: '/cm'},
    // { name: 'Grounds Management', path: '/gm'},
  if( r == 0 || r >= 11 ) {
    return Object.values(menuItems)
  } else if( r == 10 || r == 8) {
    return [menuItems.home, menuItems.pm, menuItems.res]
  } else if(r == 7 ) {
    return [menuItems.home, menuItems.db, menuItems.pm, menuItems.res]
  } else {
    return [menuItems.home]
  }
}

window.pth = path
window.any = any
window.hasM = hasMenuAccess
export default store;
// export function token() {

// }

