import React, { useEffect } from 'react'

import styled from 'styled-components'

import Modal from './modal'

import { useStore } from 'effector-react'

import Form, { TextArea, Select, toOpt, Input} from '../../form'

import { useQuery } from '../util'

import { 
  useParams,
} from 'react-router-dom'

import makeStore from '../../../store/make-store'
import { caseCategoryTypes, caseQueueTypes, casePriorityTypes, statusTypes } from '../../../store/master-data'

const {changed, selectChange, update, addData,   ...localState} = makeStore(({project_id, id}) =>  (id ? `compliance/${project_id}/tasks/${id}` : `compliance/${project_id}/tasks` ))


export default function({data, close, loadP}) {

  const {project_id} = useParams()


  useEffect(() => {
    addData(data)
  }, [data])
  const store = useStore(localState.store)
 
  const { id, title, description, priority, status, approver_notes, case_name } = store.data || {}

  const submit = () => {
    const cb = () => {
      loadP({project_id})
      close()
    }

    update({project_id, id, data: {title, description, priority, status, approver_notes, case_name }, cb})
  }

  return (
    <Modal close={close}>
      <Header> Edit Task </Header>
      <Content>
        <CaseInfo>
          <span> Reference Case: </span>
          <span> {case_name} </span>
        </CaseInfo>
        <CustomContainer>     
          <div className='fields'>
            <Input label='Title' name='title' type='text' onChange={changed} value={ title || ''} className='field' disabled />
            <Select name='priority' label='Priority' 
                options={toOpt(casePriorityTypes)}
                outerClass='field'
                onChange={selectChange('priority')}
                value={casePriorityTypes[priority] || ''} 
            />
            <Select name='status' label='status' 
                options={toOpt(statusTypes)}
                outerClass='field'
                onChange={selectChange('status')}
                value={statusTypes[status] || ''} 
            />
            <TextArea label='Description' name='description'  onChange={changed} value={ description || ''} className='field' disabled />
            <TextArea label='Approver Notes' name='approver_notes'  onChange={changed} value={ approver_notes || ''} className='field'  />
            <label className='submit' onClick={submit}>
              <div> { id ? 'Update' : 'Create'} </div>
            </label>

          </div>
        </CustomContainer>
      </Content>
    </Modal>
  )
}

const CaseInfo = styled.div`
  padding-left: 20px;
  span{
    &:last-child {
      color: ${p => p.theme.color}
    }
  }
`

const CustomContainer = styled.div`
  
  position: relative;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .fields {
    margin: 20px;
    margin-left: 20px;
    display: grid;
    grid-auto-rows: 78px;
    grid-template-columns: repeat(auto-fit, 265px);
    grid-column-gap: 50px;

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
`
const Container = styled.div`
  margin-top: 20px;
`


const Content = styled.div`
  padding: 20px 38px 20px 38px;
  position: relative;
  top: 0;
  left: 0;
`
const Info = styled.div`
  display: flex;
  padding-right: 40px;
  justify-content: space-between;
  margin-top: 35px;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  > div {
    span:first-child{ color: #687c9d; }
    &.status {
      margin-left: 30px;
      span:last-child {
        color: ${p => p.theme.color}
      }
    }
    &.ref { padding-right: 60px;}
    &.sla { span:last-child { color: #42d7b6 } }
  }
`

const Header = styled.div`
  display: flex;
  height: 92px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #e6f0f9;
  font-size: 15px;
  font-weight: 800;
  color: #000000;
  text-transform: uppercase;
`

const priorityOptions = [
  { value: 'p1', label: 'Priority P1', color: '#FF8B00' },
  { value: 'p2', label: 'Priority P2', color: '#FFC400' },
  { value: 'p3', label: 'Priority P3', color: '#36B37E' },
]