import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useStore } from 'effector-react'

import Table, { Header, Row } from '../../shared/table'
import { Input } from '../../components/form'

import makeStore from '../../store/make-store'

import filter from '../../shared/filter'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { hostName } from '../../store/master-data'

const listStore = makeStore(({entity_id}) => `entities/${entity_id}/users`)
// const cudStore = makeStore('compliance/projects/list')

const columns1 = ".4fr 1fr 1fr 1fr 1fr"
export default (props) => {
  return (
    <Wrapper>  
      <ListView />

    </Wrapper>  
  )
}

function ListView(props) {
  const { entity_id } = useParams()

  useEffect(() => {
    listStore.load({entity_id})
  }, [entity_id])
  
  const data = useStore(listStore.store)?.data || []

  const [filterVal, setFilterVal] = useState('')



  return (
    <>
      <Input label='Filter' type='text' name='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''} 
          placeholder='Filter (or) Add' />
      <Table className='tbl' title='Compliance Projects' showAll={false}>
        <Header columns={columns1}>
          {
            ['#', 'First Name', 'Last Name', 'Email', 'Status'].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
          }
        </Header>
        { filter(data, {keys: ['first_name', 'last_name', 'email'], value: filterVal}).map((o, i) => (
          <Row key={i} columns={columns1} className='row' filter={{keys: [], val: filterVal}}>
            <Link> {i + 1} </Link>
            <Link> {o.first_name} </Link>
            <Link> {o.last_name} </Link>
            <Link> {o.email} </Link>
            <ShowStatus className='center' obj={o}/>
          </Row>
        ))}
      </Table>
    </>
  )
}

function AddNew(props) {

}

function ShowStatus({obj, className, ...props}) {
  const copy = () => {
    const link = `/set-password/${obj.temp_token}`
    link.select();
    link.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  if(obj.temp_token) {
    return(
      <a className={className}>
        <CopyToClipboard text={`${hostName}/#/set-password/${obj.temp_token}`}> 
          <span> Copy {obj.has_password ? 'Reset' : 'Invitation'} Link  </span>
        </CopyToClipboard>
      </a>
    )
  } else {
    return (
      <div>
        Reset Password
      </div>
    )
  }
}

const Wrapper = styled.div`
  margin: 30px 30px;

`