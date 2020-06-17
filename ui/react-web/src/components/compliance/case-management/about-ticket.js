import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Modal from './modal'

import CreateTask from './create-task'
import Cc from './cc'

import { useQuery } from '../util'
import { useStore } from 'effector-react'

import { Select, toOpt } from '../../form'

import makeStore from '../../../store/make-store'

import {caseCategoryTypes, casePriorityTypes, caseQueueTypes} from '../../../store/master-data'

import { 
  Link,
  matchPath
 } from 'react-router-dom'

 const {changed, selectChange, ...caseState } = makeStore(({section_id, attr_id=0, id}) =>  `compliance/section/${section_id}/attr/${attr_id}/cases/${id}`)

function rTo() { return '' }

export default function(props) {
  const query = useQuery()
  const section_id = query.get('section_id')
  const attr_id = query.get('attr_id')
  const case_id = query.get('case_id')

  const [tab, setTab] = useState('tasks')

  useEffect(() => {
    caseState.load({section_id, attr_id, id: case_id})
  },[])

  const caseStore = useStore(caseState.store)
  const { asset } = { asset: 'case-management'}

  const data = caseStore.data || {}
  const { title, type_id, sla, beneficiary_name, description, status, category_id, section_name, attribute_name, priority } = data
  return (
    <Modal>
      <Header> {title} </Header>
      <Content>
        <Info>
          <div> 
            <span className='type'> Type: </span>
            <span> {caseQueueTypes[type_id]?.label} </span>
          </div>
          <div className='status'> 
            <span> status: </span>
            <span> {status} </span>
          </div>
          <div className='sla'> 
            <span> SLA: </span>
            <span> {7} Days </span>
          </div>
        </Info>
        <Info>
          <div className='ben'> 
            <span> Beneficiary Name: </span>
            <span> {beneficiary_name} </span>
          </div>
          <div className='ref'> 
            <span> Referance: </span>
            <span> {[section_name, attribute_name].join(' > ')}  </span>
          </div>
        </Info>
        <Info>
          <div className='desc'> 
            <span> Description: </span>
            <span> {description} </span>
          </div>
        </Info>

        <Form> 
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
        </Form>
        
        <Container>
          <Tabs>
            <div onClick={() => setTab('tasks')} className={tab ==='tasks' ? 'selected' : null}> Create / View Tasks </div>
            <div onClick={() => setTab('closure')} className={tab ==='closure' ? 'selected' : null}> Closure Comments </div>
          </Tabs>

          <TabContent>
              { tab === 'tasks' ? <CreateTask /> : <Cc /> }
          </TabContent>
          
          <Actions>
            <Link to={''}> 
              <button> Close </button>
            </Link>
            <button className='save'> Save </button>
            <button> Hold </button>
          </Actions>
        </Container>

      </Content>
    </Modal>
  )
}

const Container = styled.div`
  margin-top: 20px;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  button {
    width: 160px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px ${p => p.theme.color};
    color: ${p => p.theme.color};
    margin-right: 20px;
    &.save { 
      background-color: ${p => p.theme.color};
      color: #fff;
    }
  }
` 

const TabContent = styled.div`
  background-color: #f4f4f4;
  padding: 5px 10px 0 10px;
`

const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  border-radius: 3px;
  background-color: #f2f2f2;
  > * {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    border-bottom: 4px solid #f2f2f2;
    &.selected {
      font-weight: 800;
      color: ${p => p.theme.color};
      border-bottom: 4px solid ${p => p.theme.color};
    }
  }
`

const Content = styled.div`
  padding: 10px 38px 20px 38px;
  position: relative;
  top: 0;
  left: 0;
`
const Info = styled.div`
  display: flex;
  padding-right: 40px;
  justify-content: space-between;
  margin-top: 20px;
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

const Form = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 340px 250px;
  grid-template-rows: 40px 30px;
  grid-gap: 12px;
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