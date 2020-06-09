import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, Input } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'
import { Add } from '../../tables/small'

const makeStoreFn = ({policy_id, object_id, id=null}) => id ? `formulation/${policy_id}/objects/${object_id}/sub-objects/${id}` : `formulation/${policy_id}/objects/${object_id}/sub-objects` 
const { store, load, create, update } =  makeStore(makeStoreFn)

const {changed, addData, ...localState} = makeStore(makeStoreFn)


function submitted(policy_id, object_id, id, data) {
  const cb = (resp) => {
    load({policy_id, object_id})
  }
  data.policy_id = policy_id
  data.policy_object_id = object_id
  id ? localState.update({policy_id, object_id, id, data, cb}) : localState.create({policy_id, object_id, data, cb})
}

export default function(props) {

  const { policy_id, object_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({policy_id, object_id})
  }, [object_id])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, name, description } = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(policy_id, object_id, id , data)} store={localStore}> 
      <Top> Sub Objects - { sectionId ? 'Update' : 'Create'}</Top>     
      <div className='fields'>

        <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} className='field name' />
        <TextArea label='Description' name='description' type='text' onChange={changed} value={ description || ''} className='field descr' />
        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Save' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Cards>
          {            
            listData.map((o, i) => (
              <Card className={ o.id === id ? 'selected' : ''} onClick={() => setSectionId(o.id)}>
                <CardTitle> {o.name} </CardTitle>
                <CardDesc> {o.description } </CardDesc>
              </Card>

            )) 
          }
        </Cards>

        <Add onClick={() => setSectionId(null)} />
      </Content>

    </CustomContainer>
  )
}

const Top = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
`

const Cards = styled.div`
  height: 277px;
  overflow: auto;
`

const CardTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
`

const CardDesc = styled.div`
  margin-top: 4px;
  font-size: 10px;
  line-height: 1.2;
  color: #98acbe;
`
const Card = styled.div`
  width: 285px;
  height: 71px;
  border-radius: 3px;
  background-color: #f4f7fa;
  margin-bottom: 10px;
  padding: 9px 10px 5px 14px;
  border: 1px solid #f4f7fa;
  &.selected {
    border: 1px solid ${p => p.theme.color}
  }
`

const RowContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
  min-height: 0;
`

const Content = styled.div`
  position: relative;
  top: 10px;
  left: 0;
`
const CustomContainer = styled(Form)`
  
  position: relative;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  .fields {
    margin-top: 10px;
    display: grid;
    grid-auto-rows: 70px;
    grid-template-columns: 220px 80px;

    .name {
      grid-column: 1 / -1;
      width: 100%;
      input {
        width: 285px;
      }
    }
    .descr {
      textarea {
        min-width: 150px;
      }
    }

    label.submit {
      cursor: pointer;
      align-self: flex-end;
      margin-left: 10px;
      input[type='submit'] {
        display: none;
      }
      > div {
        width: 80%;
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