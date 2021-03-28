import localStore from './local-store'
import { createEvent } from 'effector'


const defaultData = 'en'
const store = localStore('lang', defaultData)


const setLang = createEvent('setLang')

store.on(setLang, (_, l) =>  {
  console.log("INside store", l)
  return l

} )

export default {store, setLang}