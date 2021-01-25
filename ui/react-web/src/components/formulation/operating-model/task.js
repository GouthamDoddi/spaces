import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, Select, Actions, Container, Input, DeleteIcon } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import {roleTypes, applicationTypes} from '../../../store/master-data'
import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../tables/small'

const { store, load, create, update } =  makeStore(({policy_id}) => `formulation/${policy_id}/policy-op-tasks`)

const {changed, selectChange, addData, remove, ...localState} = makeStore(({policy_id, id}) => id ? `formulation/${policy_id}/policy-op-tasks/${id}`: `formulation/${policy_id}/policy-op-tasks`)

function toOpt(hash) {
  return(Object.values(hash))
}

function submitted(policy_id, id, data) {
  const cb = (resp) => {
    load({policy_id})
  }
  data.policy_id = policy_id
  id ? localState.update({policy_id, id, data, cb}) : localState.create({policy_id, data, cb})
}

const columns = '1fr 1fr .5fr 1fr 0.5fr'

export default function(props) {

  const { policy_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({policy_id})
  }, [])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, name, description, application_type, role_id, order} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(policy_id, id , data)} store={localStore}>      
      <div className='fields'>
        <Input label='Task Name' name='name' type='text' onChange={changed} value={ name || ''} className='field' />
        <Select name='role_id' label='Role' 
            options={toOpt(roleTypes)}
            outerClass='field'
            onChange={selectChange('role_id')}
            value={roleTypes[role_id] || ''} 
        />
        <Input label='Order' name='order' type='number' onChange={changed} value={ order || ''} className='field' />
        <Select name='application_type' label='Application' 
            options={toOpt(applicationTypes)}
            outerClass='field'
            onChange={selectChange('application_type')}
            value={applicationTypes[application_type] || ''} 
        />
        <TextArea label='Task Description' name='description' type='text' onChange={changed} value={ description || ''} className='field' />
        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Update' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>Task Name</div>
            <div>Role</div>
            <div>Order</div>
            <div>Application</div>
            <div>Actions</div>
          </Header> 

          <RowContainer>
            {
              listData.map((o, i) => (
                <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {o.name} </div>
                  <div> {roleTypes[o.role_id]?.label} </div>
                  <div> {o.order} </div>
                  <div> {applicationTypes[o.application_type]?.label} </div>
                  <div onClick={() => remove({id: o.id, policy_id: policy_id, cb: () => {load({policy_id}); setSectionId(null)}})}> <DeleteIcon /> </div>
                </Row>
              ))
              
            }
          </RowContainer>
        </Table>
      <Add onClick={() => setSectionId(null)} />
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

const riskTypes = {
  1: { value: 1, label: 'Risk 1' },
  2: { value: 2, label: 'Risk 2' },
  3: { value: 3, label: 'Risk 3' },
  4: { value: 3, label: 'Risk 4' },
}


const impactTypes = {
  low: { value: 'low', label: 'Low' },
  medium: { value: 'medium', label: 'Medium' },
  high: { value: 'high', label: 'High' },
}

const probabilityTypes = {
  'high-neg': { value: 'high-neg', label: 'High Negative' },
  'low-neg': { value: 'low-neg', label: 'Low Negative' },
  'low-pos': { value: 'low-pos', label: 'Low Positive' },
  'high-pos': { value: 'high-pos', label: 'High Positive' },
}

const headerData = [
  ['ID', 'id'],
  ['Risk', 'risk_id'],
  ['Trigger Type', 'trigger_type_id'],
  ['Last Updated By', 'updated_user']
]