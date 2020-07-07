import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'

import { List, Table, Header, Row, Add, Top, PRow } from '../../tables/list2'

import { policyFamilyTypes, policyStatusTypes, policyOwnerTypes, policyStateTypes } from '../../../store/master-data'

import makeStore from '../../../store/make-store'
import {hasAction} from '../../../store/user'

const { store, load } = makeStore('compliance/projects/list')


const columns = '100px 1.5fr 0.6fr 1fr 1fr 0.5fr 1.2fr 1.2fr'
export default function(props) {
  useEffect(() => { 
    console.log(load())
  }, [])

  const [collapsed, setCollapsed] = useState(false)

  const listStore = useStore(store)
  const metadata = listStore.data || []
  return (
    <CustomList>
      <Top>
        Project List
      </Top>

      <Table className='table-compl'>
        <Header columns={columns}>
          <div className='first-t'> Code</div>
          <div>Project Name</div>
          <div>Project Owner</div>
          <div>Start Date</div>
          <div>End Date</div>
          <div>Status</div>
          <div>Tasks</div>
          <div>Score</div>
        </Header>

        {
            metadata.map((h,i) => (
              <Row key={i} columns={columns} className='first-t'>
                <Link to={`/compliance/${h.id}/profile`}> {('000' + h.id).slice(-3)} </Link>
                <Link to={`/compliance/${h.id}/profile`}> {h.name} </Link>
                <Link to={`/compliance/${h.id}/profile`}> {h.owner} </Link>
                <Link to={`/compliance/${h.id}/profile`}> {h.start_date} </Link>
                <Link to={`/compliance/${h.id}/profile`}> {h.end_date} </Link>
                <Link to={`/compliance/${h.id}/profile`}> {h.status || 'Start'} </Link>
                <Link to={`/compliance/${h.id}/profile`}> <Progress value={Math.floor(Math.random() * 40)} max={100}></Progress> </Link>
                <Link to={`/compliance/${h.id}/profile`}> <Progress value={Math.floor(Math.random() * 40)} max={100}></Progress> </Link>
              </Row>
            ))
        }
      </Table>
      { 
        hasAction('create_project') ? 
          <AddPolicy to='/compliance/new/profile'>
            <div> Create Project </div>
          </AddPolicy> : null
      }

    </CustomList>
  )
}

const Progress = styled.progress`
  &::-webkit-progress-bar { background-color: #e5eff8; }
  &::-webkit-progress-value { background: #f44e76; }
  &::-moz-progress-bar { background: #f44e76; }
  -webkit-appearance: none;
  width: 84.3%;
  height: 8px;
  color: #f44e76;
  border-radius: 5px;
`


const CustomList = styled(List)`
  // max-width: 1200px;
  min-width: 1027px;
  display: flex;
  flex-flow: column;
  position: relative;
  top: 0;
  left: 0;
  .table-compl {
    flex: 1;
    width: 100%;
    max-height: 513px;
  }

`

const AddPolicy = styled(Add)`
  > div {
    left: 5px;
  }
`
const headerData = [
  ['Code', 'name'],
  ['Policy Name', 'name'],
  ['Policy Owner', 'owner']
  ['Start Date', 'family_id'],
  ['Status', 'status'],
]

const Icon = styled.div`
  &.collapsed {
    background-image: url('/img/collapse.png');
  }
  &.expanded {
    background-image: url('/img/expand.png');
  }
  
  background-repeat: no-repeat;
  background-position: center;
`