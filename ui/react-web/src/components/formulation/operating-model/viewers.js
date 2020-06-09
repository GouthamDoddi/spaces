import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, Select, Actions, Container, Input } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../tables/small'

const { store, load, create, update } =  makeStore(({policy_id, id}) => `formulation/${policy_id}/risk`)

const {changed, selectChange, addData, ...localState} = makeStore(({policy_id, id}) => `formulation/${policy_id}/risk/${id}`)

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

export default function(props) {

  const { policy_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({policy_id})
  }, [])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, risk_id, impact, probability, description} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(policy_id, id , data)} store={localStore}>      
      <div className='fields'>

        <Select name='risk_id' label='Risk' 
            options={toOpt(riskTypes)}
            outerClass='field'
            onChange={selectChange('risk_id')}
            value={riskTypes[risk_id] || ''} 
        />
        <Select name='impact' label='Impact' 
            options={toOpt(impactTypes)}
            outerClass='field'
            onChange={selectChange('impact')}
            value={impactTypes[impact] || ''} 
        />
        <Select name='probability' label='Probability' 
            options={toOpt(probabilityTypes)}
            outerClass='field'
            onChange={selectChange('probability')}
            value={probabilityTypes[probability] || ''} 
        />

        <TextArea label='Description' name='description' type='text' onChange={changed} value={ description || ''} className='field' />
        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Update' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Table className='table'>
          <Header>
            <div>ID</div>
            <div>Risk</div>
            <div>Probability</div>
            <div>Impact</div>
          </Header> 

          <RowContainer>
            {
              listData.map((o, i) => (
                <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i}> 
                  <div> {o.id} </div>
                  
                  <div> {riskTypes[o.risk_id]?.label} </div>
                  <div> {probabilityTypes[o.probability]?.label} </div>
                  <div> {impactTypes[o.impact]?.label} </div>
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