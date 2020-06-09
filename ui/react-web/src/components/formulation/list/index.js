import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useStore } from 'effector-react'
import { Link } from 'react-router-dom'

import { List, Table, Header, Row, Add, Top } from '../../tables/list'

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
          { headerData.map((arr,i) => 
            <div key={i}>{arr[0]}</div>
          )}
        </Header>

        {
            metadata.map((h,i) => (
              <Row key={i}>
                {headerData.map((arr,i) => <div key={i} className={arr[1]}>
                  <Link to={`/formulation/${h.id}/canvas`}> {h[arr[1]]} </Link>
                </div>)}
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
  ['Policy Name', 'name'],
  ['Policy Family', 'family_id'],
  ['Policy Status', 'status'],
  ['Policy Owner', 'owner']
]
