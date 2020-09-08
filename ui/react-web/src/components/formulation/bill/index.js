import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, Select, Input } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../tables/small'
import ProgressCard from '../../progress-card'

const { store, load } =  makeStore(({policy_id}) => `formulation/${policy_id}/bill-decree`)

const {changed, selectChange, addData, remove, ...localState} = makeStore(({policy_id, id}) => id ? `formulation/${policy_id}/bill-decree/${id}` : `formulation/${policy_id}/bill-decree`)

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

const columns = '1fr 1fr 1fr 1fr .3fr'
export default function(props) {

  const { policy_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({policy_id})
  }, [])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  const { name, number, doc_ref, number1,
    effective_date, ownership, passed_by, version, id } = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <>
      <div className='form-space'>
      <CustomContainer onSubmit={(data) => submitted(policy_id, id , data)} store={localStore}>      
        <div className='fields'>

          <Input label='Bill / Decree Name' type='text' name='name' onChange={changed} value={name || ''}/>
          <Input label='Bill / Decree Number' type='text' name='number' onChange={changed} value={number || ''}/>
          <Input label='Document Reference' type='text' name='doc_ref' onChange={changed} value={doc_ref || ''}/>
          
          <Input label='Effective Date' value={effective_date || ''}
            type='date' name='effective_date' onChange={changed} 
          />
          <Input label='Ownership' type='text' name='ownership' onChange={changed} value={ownership || ''}/>
          <Input label='Passed By' type='text' name='passed_by' onChange={changed} value={passed_by || ''}/>

        </div>
        <label className='submit'>
            <input type='submit' />
            <div> { sectionId ? 'Update' : 'Add'} </div>
          </label>
        <Content>
          <Table className='table'>
            <Header columns={columns}>
              <div>Name</div>
              <div>Number</div>
              <div>Effective Date</div>
              <div>Passed By</div>
              <div>Actions</div>
            </Header> 

            <RowContainer>
              {
                listData.map((o, i) => (
                  <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i} columns={columns}>
                    <div> {o.name} </div>
                    <div> {o.number} </div>
                    <div> {o.effective_date} </div>
                    <div> {o.passed_by} </div>
                    <div onClick={() => remove({id: o.id, policy_id: policy_id, cb: () => load({policy_id})})}> &#128465; </div>
                  </Row>
                ))
                
              }
            </RowContainer>
          </Table>
          <Add className='add-btn' onClick={() => setSectionId(null)} />
        </Content>

      </CustomContainer>
    </div>

      <div className='widgets'>
      <ProgressCard title='Due Date'
        subtitle='Due date of selected policy'
        days={23} color='#fd7635' date='13 April 2020' />
    </div>  
    </>
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

  .add-btn {
    right: 45px;
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
  
  label.submit {
    height: 38px;
    cursor: pointer;
    width: 265px;
    margin-bottom: 8px;
    margin-left: 76px;
    margin-top: -12px;
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
  .fields {
    margin: 20px;
    margin-left: 76px;
    display: grid;
    grid-auto-rows: 72px;
    grid-template-columns: repeat(auto-fit, 265px);
    grid-column-gap: 90px;  
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

const PassedByOptions = [
  { value: 1, label: 'passed by 1' },
  { value: 2, label: 'passed by 2' },
  { value: 3, label: 'passed by 3' },
]