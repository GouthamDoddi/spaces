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
import { caseCategoryTypes, caseQueueTypes, casePriorityTypes } from '../../../store/master-data'

const {changed, load, selectChange, update, create, ...localState} = makeStore(({section_id, attr_id=0, id}) =>  (id ? 
  `compliance/section/${section_id}/attr/${attr_id}/cases/${id}` : `compliance/section/${section_id}/attr/${attr_id}/cases`)
)

function submitted(project_id, section_id, attr_id=0, id, data, loadP) {
  const cb = (resp) => {
    loadP({project_id, section_id, attr_id})
  }

  id ? update({section_id, attr_id, id, data, cb}) : create({attr_id, section_id, data, cb})
}

export default function({loadP, ...props}) {
  let { project_id, section_id, attr_id, case_id} = useParams()

  let q = useQuery()
  if(!section_id) {
    section_id = q.get('section_id')
    attr_id = q.get('attr_id')
    case_id = q.get('case_id')
  }


  useEffect(() => {
    load({section_id, attr_id, id: case_id})
  }, [])
  const store = useStore(localState.store)

  const { id, title, description, type_id, priority, category_id, status } = store.data || {}
  return (
    <Modal >
      <Header> {id ? 'Edit Case' : 'Create Case'} </Header>
      <Content>
        <CustomContainer onSubmit={(data) => submitted(project_id, section_id, attr_id, id , data, loadP)} store={store}>     
          <div className='fields'>
            <Input label='Title' name='title' type='text' onChange={changed} value={ title || ''} className='field' /> 
            <Select name='type_id' label='Type' 
                options={toOpt(caseQueueTypes)}
                outerClass='field'
                onChange={selectChange('type_id')}
                value={caseQueueTypes[type_id] || ''} 
            />
            <Select name='category_id' label='Category' 
                options={toOpt(caseCategoryTypes)}
                outerClass='field'
                onChange={selectChange('category_id')}
                value={caseCategoryTypes[category_id] || ''} 
            />
            <Select name='priority' label='Priority' 
                options={toOpt(casePriorityTypes)}
                outerClass='field'
                onChange={selectChange('priority')}
                value={casePriorityTypes[priority] || ''} 
            />
            <TextArea label='Description' name='description' type='text' onChange={changed} value={ description || ''} className='field' />
            <label className='submit'>
              <input type='submit' />
              <div> { id ? 'Update' : 'Create'} </div>
            </label>

          </div>
        </CustomContainer>
      </Content>
    </Modal>
  )
}


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