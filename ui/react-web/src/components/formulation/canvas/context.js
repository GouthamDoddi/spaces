import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, Select, Input } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'

import { policyTriggerTypes, listOfUsers } from '../../../store/master-data'
import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../tables/small'

const { store, load, create, update } =  makeStore(({policy_id, id}) => `formulation/${policy_id}/context`)

const {changed, selectChange, addData, ...localState} = makeStore(({policy_id, id}) => `formulation/${policy_id}/context/${id}`)

function toOpt(hash) {
  return(Object.values(hash))
}

function submitted(policy_id, id, data) {
  const cb = (resp) => {
    load({policy_id})
    // window.location.hash = `/formulation/${policy_id}/`
  }
  data.policy_id = policy_id
  id ? localState.update({policy_id, id, data, cb}) : localState.create({policy_id, data, cb})
}

export default function(props) {

  const { policy_id } = useParams()

  const [contextId, setContextId] = useState(null)
  
  useEffect(() => {
    load({policy_id})
  }, [])
  
  console.log(store)
  const contextStore = useStore(store)
  const localStore = useStore(localState.store)
  // let trigger_id, trigger_type_id, notes, id;

  const contextData = contextStore.data || []
  let {id, name, trigger_type_id, notes} = localStore.data || {}

  // console.log(selectedData, contextId)


  if (contextId && id !== contextId) {
    addData(contextData.find(o => o.id === contextId))
  } else if(contextId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(policy_id, id , data)} store={contextStore}>      
      <div className='fields'>

        <Select name='trigger_type_id' label='Trigger Type' 
            options={toOpt(policyTriggerTypes)}
            outerClass='field'
            onChange={selectChange('trigger_type_id')}
            value={policyTriggerTypes[trigger_type_id] || ''} 
        />
        <Input label='Trigger Name' name='name' onChange={changed} value={ name || ''} className='field' type='text' />

        <TextArea label='Notes' name='notes' onChange={changed} value={ notes || ''} className='field' />
        <label className='submit'>
          <input type='submit' />
          <div> { contextId ? 'Update' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Table className='table'>
          <Header>
            <div>ID</div>
            <div>Trigger Name</div>
            <div>Trigger Type</div>
            <div>Last Updated By</div>
          </Header> 

          <RowContainer>
            {
              contextData.map((o, i) => (
                <Row onClick={() => setContextId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i}> 
                  <div> {o.id} </div>
                  
                  <div> {o.name} </div>
                  <div> {policyTriggerTypes[o.trigger_type_id]?.label} </div>
                  <div> {listOfUsers[o.created_by]?.label || 'Sathish'} </div>
                </Row>
              ))
              
            }
          </RowContainer>

        </Table>
        <Add onClick={() => setContextId(null)} />

      </Content>

    </CustomContainer>
  )
}

const RowContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
`

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  .table {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .row {
      cursor: pointer;
      &.selected {
        border: 1px solid ${p => p.theme.color};
      }
    }

  }
`
const CustomContainer = styled(Form)`
  
  position: relative;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .fields {
    margin: 20px;
    margin-left: 76px;
    display: grid;
    grid-auto-rows: 78px;
    grid-template-columns: repeat(auto-fit, 265px);
    grid-column-gap: 90px;

    label.submit {
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
    }    
  }

  .sub-parent {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-grow: 1;
  }
  .scrollable-content {
    background: white;
    flex-grow: 1;
    
    overflow: auto;
    
    /* for Firefox */
    min-height: 0;
  } 
`


const policyTriggers = {
  1: { value: 1, label: 'Trigger 1' },
  2: { value: 2, label: 'Trigger 2' },
  3: { value: 3, label: 'Trigger 3' },
}

const headerData = [
  ['ID', 'id'],
  ['Trigger', 'trigger_id'],
  ['Trigger Type', 'trigger_type_id'],
  ['Last Updated By', 'updated_user']
]