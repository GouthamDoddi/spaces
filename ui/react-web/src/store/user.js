import localStore from './local-store'
import { createEvent } from 'effector'
import { post } from './api'

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



export default store;
// export function token() {

// }

