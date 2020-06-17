import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'

import { List, Table, Header, Row, Add, Top } from '../../tables/list2'

import { policyFamilyTypes, policyStatusTypes, policyOwnerTypes, policyStateTypes } from '../../../store/master-data'

import makeStore from '../../../store/make-store'

const { store, load } = makeStore('formulation/metadata')

export default function(props) {
  useEffect(() => { 
    console.log(load())
  }, [])

  
  const listStore = useStore(store)
  const metadata = listStore.data || []
  return (
    <CustomList>
      <Top>
        Policy List
      </Top>

      <Table className='table'>
        <Header>
          <div>Code</div>
          <div>Policy Name</div>
          <div>Policy Owner</div>
          <div>Start Date</div>
          <div>Status</div>
        </Header>

        {
            metadata.map((h,i) => (
              <Row key={i}>
                <Link to={`/formulation/${h.id}/canvas`}> {('000' + h.id).slice(-3)} </Link>
                <Link to={`/formulation/${h.id}/canvas`}> {h.name} </Link>
                <Link to={`/formulation/${h.id}/canvas`}> {policyOwnerTypes[h.owner_id]?.label} </Link>
                <Link to={`/formulation/${h.id}/canvas`}> {h.start_date} </Link>
                <Link to={`/formulation/${h.id}/canvas`}> {policyStatusTypes[h.status || 1]?.label} </Link>
                {/* <Link to={`/formulation/${h.id}/canvas`}> {policyFamilyTypes[h.family_id]?.label} </Link>
                <Link to={`/formulation/${h.id}/canvas`}> {policyFamilyTypes[h.family_id]?.label} </Link>
                <Link to={`/formulation/${h.id}/canvas`}> {policyFamilyTypes[h.family_id]?.label} </Link> */}
              </Row>
            ))
        }
      </Table>
      <AddPolicy to='/formulation/new/canvas'>
        <div> Create Policy </div>
      </AddPolicy>
    </CustomList>
  )
}


const CustomList = styled(List)`
  max-width: 1200px;
  min-width: 1027px;
  display: flex;
  flex-flow: column;
  position: relative;
  top: 0;
  left: 0;
  .table {
    flex: 1;
    width: 100%;
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
