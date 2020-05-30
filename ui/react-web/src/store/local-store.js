import {createStore, createEvent} from 'effector'

import connectLocalStorage from "effector-localstorage/sync";
const storageUpdated = createEvent('storage updated')


    
export default function(storeName, defaultData) {

  const counterLocalStorage = connectLocalStorage(`user-data`)
    .onError((err) => console.log(err))
    .onChange(storageUpdated)

  const base = counterLocalStorage.init(defaultData)
  
  const store = createStore(base)
  store.watch(counterLocalStorage)
  
  return store
}





