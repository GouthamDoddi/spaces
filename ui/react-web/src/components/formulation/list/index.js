import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'

import { List, Table, Header, Row, Add, Top, PRow } from '../../tables/list2'

import { policyStatusTypes, policyOwnerTypes } from '../../../store/master-data'

import userStore from '../../../store/user'

import makeStore from '../../../store/make-store'
import {hasAction} from '../../../store/user'

const { store, load } = makeStore('formulation/metadata')

export default function(props) {

  useEffect(() => { 
    console.log(load())
  }, [])

  const [collapsed, setCollapsed] = useState(false)

  const { auth } = userStore.getState()
  const listStore = useStore(store)
  const metadata = listStore.data || []
  return (
    <CustomList>
      <Top>
        Policy List
      </Top>

      <Table className='table'>
        <Header>
          <div></div>
          <div>Code</div>
          <div>Policy Name</div>
          <div>Role</div>
          <div>Policy Owner</div>
          <div>Publication Date</div>
          <div>Status</div>
          <div>Tasks</div>
          <div>Score</div>
        </Header>

        {
            metadata.map((h,i) => (
              <>
                <PRow key={i}>
                  <Icon className={collapsed === i ? 'collapsed': 'expanded'} onClick={() => setCollapsed(i === collapsed ? '': i)}></Icon>
                  <Link to={`/formulation/${h.id}/canvas`}> {('000' + h.id).slice(-3)} </Link>
                  <Link to={`/formulation/${h.id}/canvas`}> {h.name} </Link>
                  <Link to={`/formulation/${h.id}/canvas`}> {auth.policies[h.id]?.name} </Link>
                  <Link to={`/formulation/${h.id}/canvas`}> {policyOwnerTypes[h.owner_id]?.label} </Link>
                  <Link to={`/formulation/${h.id}/canvas`}> {h.publication_date} </Link>
                  <Link to={`/formulation/${h.id}/canvas`}> {policyStatusTypes[h.status || 1]?.label} </Link>
                  <Link to={`/formulation/${h.id}/canvas`}> <Progress value={Math.floor(1)} max={100}></Progress> </Link>
                  <Link to={`/formulation/${h.id}/canvas`}> <Progress value={Math.floor(Math.random() * 40)} max={100}></Progress> </Link>
                </PRow>
                {
                  collapsed === i ? 
                    h.sections.map((sec, i) => (
                      <Row key={i}>
                        <div></div>
                        <Link to={`/formulation/${h.id}/canvas`}> {('000' + sec.id).slice(-3)} </Link>
                        <Link to={`/formulation/${h.id}/canvas`}> {sec.name} </Link>
                        <Link to={`/formulation/${h.id}/canvas`}> {auth.policies[h.id]?.name} </Link>
                        <Link to={`/formulation/${h.id}/canvas`}> {policyOwnerTypes[h.owner_id]?.label} </Link>
                        <Link to={`/formulation/${h.id}/canvas`}> {h.publication_date} </Link>
                        <Link to={`/formulation/${h.id}/canvas`}> {policyStatusTypes[h.status || 1]?.label} </Link>
                        <Link to={`/formulation/${h.id}/canvas`}> <Progress value={Math.floor(1)} max={100}></Progress> </Link>
                        <Link to={`/formulation/${h.id}/canvas`}> <Progress value={Math.floor(Math.random() * 40)} max={100}></Progress> </Link>
                      </Row>
                    )) : null
                }
              </>
            ))
        }
      </Table>
      { 
        hasAction('create_policy') ? 
          <AddPolicy to='/formulation/new/canvas'>
            <div> Create Policy </div>
          </AddPolicy> : null
      }
    </CustomList>
  )
}

const Progress = styled.progress`
  &::-webkit-progress-bar { background-color: #e5eff8; }
  &::-webkit-progress-value { background: #fd7635; }
  &::-moz-progress-bar { background: #fd7635; }
  -webkit-appearance: none;
  width: 84.3%;
  height: 8px;
  color: #fd7635;
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
  .table {
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