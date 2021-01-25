import React from 'react'

import { createEvent, createStore } from 'effector'

import Input from './input'
import TextArea from './text'
import Checkbox from './checkbox'
import Select from './select'
import Search from './search'
import CheckboxBig from './checkbox2'
import RichText from './rich-text'
import Upload from './upload_generic'

import { EditIcon, SaveIcon, TranslateIcon, SaveBtn, DeleteIcon } from './icons.js'

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

export default function Element({children, onSubmit, store, saveBtn, ...others}) {
  return (
    <form onSubmit={(e) => submitted(e, onSubmit)} {...others}>
      {/* <Status>{ store && store.loading ? store.loadingMsg : ''} </Status> */}
      {children}
      {saveBtn ? <SaveBtn /> : null}
    </form>
  )
}


function ActionsElem(props) {
  const { className, edit } = props

  return(
    <div className={className}>
      <EditIcon className={edit ? 'selected' : null}/>
      <SaveIcon  />
      <TranslateIcon  />
    </div>
  )
}

export function toOpt(obj) {
  return(Object.values(obj))
}

export function ActionGroup({className, ...sprops}) {
  return(
    <div className={className}>
      <SaveBtn><input type='submit'/>  Save </SaveBtn>
    </div>
      
  )
}

export const Actions2 = styled(ActionGroup)`
  display: flex;
  justify-content: flex-end;
  height: 66px;
  padding: 17px 0 5px 0;
`

export const Actions = styled(ActionsElem)`
  display: flex;
  justify-content: flex-end;
  height: 66px;
  padding: 17px 0 5px 0;
`
 

export { Input, TextArea, Checkbox, Search, Select, CheckboxBig, RichText, Upload, DeleteIcon }

const Status = styled.div`
  position: absolute;
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
    .big {
      &textarea {
        grid-column: 1 / -1;
        grid-rows: span 2;
      }
    }
  }
  &.disable {
    input, textarea, .field, .default__control {
      pointer-events: none;
    }
  }

`

export const Submit = styled.label`
  cursor: pointer;
  align-self: flex-end;
  input[type='submit'] {
    display: none;
  }
  > div {
    width: 100%;
    text-align: center;
    background-color: ${p => p.theme.color};
    color: white;
    line-height: 38px;
  }
` 

// export const SaveBtn = styled.div`
//   background-color: ${p => p.theme.color};
//   height: 50px;
//   line-height: 50px;
//   padding: 0 20px;
//   color: #fff;
//   border-radius: 2px;
//   input[type='submit'] {
//     display: none;
    
//   }
// `
export const CancelBtn = styled(SaveBtn)`
  background-color: #777;
  border: 1px solid #fff;
  color: #000;
`