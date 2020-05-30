import React from 'react'

import { createEvent, createStore } from 'effector'

import Input from './input'
import TextArea from './text'
import Checkbox from './checkbox'
import Select from './select'
import Search from './search'

import styled from 'styled-components'

function submitted(e, cb) {
  e.preventDefault()
  console.log(e)
  const fd = new FormData(e.target)
  let data = {} 
  for(let arr of fd.entries()) {
    data[arr[0]] = arr[1]
  }
  cb(data)
}

export function defineFormStore(store) {
  const changed = createEvent('changed')
    
  store.on(changed, (s, e) => ({
    ...s,
    ...{data: {...s.data, [e.target.name]: e.target.value}},
  }))
  
  return({changed})
}

export default function Element({children, onSubmit, store, ...others}) {
  return (
    <form onSubmit={(e) => submitted(e, onSubmit)} {...others}>
      <Status>{ store && store.loading ? store.loadingMsg : ''} </Status>
      {children}
    </form>
  )
}
 
export { Input, TextArea, Checkbox, Search, Select }

const Status = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
`