import React from 'react'

import { createEvent, createStore } from 'effector'

import Input from './input'
import TextArea from './text'
import Checkbox from './checkbox'
import Select from './select'
import Search from './search'
import CheckboxBig from './checkbox2'

import { EditIcon, SaveIcon, TranslateIcon } from './icons.js'

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

function ActionsElem(props) {
  const { className } = props
  return(
    <div className={className}>
      <EditIcon />
      <SaveIcon  />
      <TranslateIcon  />
    </div>
  )
}

export const Actions = styled(ActionsElem)`
  display: flex;
  justify-content: flex-end;
  height: 66px;
  padding: 17px 0 5px 0;
`
 
export { Input, TextArea, Checkbox, Search, Select, CheckboxBig }

const Status = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
`



export const Container = styled(Element)`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin-left: 39px;
  margin-right: 18px;
  .container {
    overflow-y: auto;
    flex: 1;
    display: grid;
    grid-column-gap: 93px;
    grid-auto-rows: 78px;
    grid-template-columns: repeat(auto-fit, 265px);
    // grid-template-rows: repeat(2, 100px);
    > div {
      margin-top: 12px;
    }

  }
`