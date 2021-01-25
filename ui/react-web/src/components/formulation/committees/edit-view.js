import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, Select } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import userStore from '../../../store/user'

import { riskTypes, userRoleTypes, listOfUsers } from '../../../store/master-data'
import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../tables/small'
import { DeleteIcon } from '../../form/icons'

// const { store, load  } =  makeStore(({policy_id, id}) => `formulation/${policy_id}/risk`)

// const {changed, selectChange, addData, ...localState} = makeStore(({policy_id, id}) => `formulation/${policy_id}/risk/${id}`)

function toOpt(hash) {
  return(Object.values(hash))
}

function exceptKeys(keys) {
  // const { info } = userStore.getState() 

  // const filteredUsers = toOpt(listOfUsers).reduce((acc, obj) => {
  //   if(obj.value != info.id && keys.includes(obj.value)) acc[obj.value] = obj
  //   return acc
  // })

  // return(filteredUsers)

  return(listOfUsers)
}

function submitted(policy_id, data, localState, load) {
  const cb = (resp) => {
    load({policy_id})
  }
  data.policy_id = policy_id
  localState.create({policy_id, data, cb})
}

const columns = '0.3fr 1fr 1fr 1fr 0.3fr'

export default function({type, ...props}) {

  const { store, load  } =  props.listStore

  const {changed, selectChange, addData, remove, ...localState} = props.specificStore


  const { policy_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  let filteredUsers = exceptKeys(store.map((o) => o.user_id))
  
  useEffect(() => {
    load({policy_id})
    
  }, [type])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, user_id, role_id} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(policy_id, data, localState, load)} store={localStore}>      
      <div className='fields'>

        <Select name='user_id' label='User Email / Group' 
            options={toOpt(filteredUsers)}
            outerClass='field'
            onChange={selectChange('user_id')}
            value={listOfUsers[user_id] || ''}
        />

        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Update' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>ID</div>
            <div> First Name</div>
            <div>Last Name</div>
            <div>Email</div>
            <div>Actions</div>
          </Header> 

          <RowContainer>
            {
              listData.map((o, i) => (
                <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {o.id} </div>
                  
                  <div> {o.first_name} </div>
                  <div> {o.last_name} </div>
                  <div> {o.email} </div>
                  <div onClick={() => remove({policy_id: policy_id, data: {user_id: o.id}, cb: () => load({policy_id})})}> <DeleteIcon /> </div>
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
    .field {
      // pointer-events: none;
    }
    label.submit {
      cursor: pointer;
      align-self: flex-end;
      margin-bottom: 12px;
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