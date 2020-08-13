import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useParams } from 'react-router-dom'

import Form, { RichText, Input } from '../../../form'
import { Table, Header, Row, Add } from '../../../tables/small'

// import { useParams } from 'react-router-dom'
import makeStore from '../../../../store/make-store'
import { useStore } from 'effector-react'

const { store, load  } =  makeStore(({attr_id, type, parameter_id}) => `formulation/section-contents/${attr_id}/${type}?parameter_id=${parameter_id}`)

const {changed, selectChange, addData, ...localState} = makeStore(({attr_id, type, id}) => (
  id ? `formulation/section-contents/${attr_id}/${type}/${id}`: `formulation/section-contents/${attr_id}/${type}`)
)

function toOpt(hash) {
  return(Object.values(hash))
}

function submitted(attr_id, type, id, data) {
  const cb = (resp) => {
    load({attr_id, type, parameter_id: data.parameter_id})
  } 
  id ? localState.update({attr_id, type, id, data, cb}) : localState.create({attr_id, type, data, cb})
}

export default function({type='wiki', parameterId, ...props}) {

  const { attr_id } = useParams()

  useEffect(() => {
    load({type, attr_id, parameter_id: parameterId})
  }, [type, parameterId])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || {}
  
  let {id, description,  parameter_id} = listData

  return (
    <CustomContainer onSubmit={(data) => submitted(attr_id, type, id , data)} store={localStore}>      
      <div className='fields'>
        <RichText label='Wiki (Steps)' name='description' data={ description || ''} className='field' />
        <Input label='Wiki (Steps)' name='parameter_id' type='hidden' value={ parameter_id || parameterId} className='hidden' />
        <label className='submit'>
          <input type='submit' />
          <div> Update </div>
        </label>
      </div>
    </CustomContainer>
  )
}




const Title = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 10px;
`
const Description = styled.div`
  font-size: 10px;
  line-height: 1.1;
  color: #98acbe;
  margin-bottom: 10px;
`

const CustomContainer = styled(Form)`
  
  position: relative;
  top:0;
  left: 0;
  

  .fields {
    .demo-editor { 
      height: 250px;
    }
    .field {
      margin-top: 10px;
    }
    .hidden {
      display: none;
    }
    label.submit {
      cursor: pointer;
      
      input[type='submit'] {
        display: none;
      }
      > div {
        width: 100px;
        margin: 0 auto;
        text-align: center;
        background-color: ${p => p.theme.color};
        color: white;
        line-height: 38px;
      }
    }    
  }
`