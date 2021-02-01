import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useStore } from 'effector-react'

// import Table, { Header, Row } from '../../shared/table'
import { Table, Header, Row, Add } from '../../components/tables/small'
import { DeleteIcon, Input, Select, toOpt } from '../../components/form'

import makeStore from '../../store/make-store'

import filter from '../../shared/filter'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { hostName, entityRoleTypes } from '../../store/master-data'

import { CustomContainer, Content, RowContainer } from '../../components/split-form-container'


const { store, load, create, update, changed, selectChange, remove } = makeStore(({entity_id, id}) => id ? `entities/${entity_id}/users/${id}` : `entities/${entity_id}/users`)
const listStore = makeStore(({entity_id}) => `entities/${entity_id}/users`)
// const cudStore = makeStore('compliance/projects/list')

const columns = ".4fr 1fr 1fr 1fr 1fr 1fr 1fr"
export default (props) => {
  const { entity_id } = useParams()
  const [selectedUser, setSelectedUser] = useState(null)
  const objStore = useStore(store)

  useEffect(() => {
    if(selectedUser) {
      load({entity_id, id: selectedUser})
    }
  }, [selectedUser])

  const submitted = (data) => {
    const cb = (resp) => {
      listStore.load({entity_id})
    }
    selectedUser ? update({entity_id, id: selectedUser, data, cb}) : create({entity_id, data, cb})
  }

  const odata = objStore.data || {}
  return (
    
    <CustomContainer onSubmit={(data) => submitted(data)} store={objStore} minheight='590px'>
        <AddNew {...odata} selectedUser={selectedUser}/>
        <ListView setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
    </CustomContainer>


    
  )
}

function ListView(props) {
  const { entity_id } = useParams()

  const { setSelectedUser, selectedUser } = props

  useEffect(() => {
    listStore.load({entity_id})
  }, [entity_id])
  
  const data = useStore(listStore.store)?.data || []

  const [filterVal, setFilterVal] = useState('')

  // console.log(data)

  return (
    // <Input label='Filter' type='text' name='filter' className='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''} 
    // placeholder='Filter (or) Add' />
    // filter(data, {keys: ['first_name', 'last_name', 'email'], value: filterVal})
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>#</div>
            <div>First Name</div>
            <div>Last Name</div>
            <div>Email</div>
            <div>Role</div>
            <div>Status</div>
            <div> Actions </div>
          </Header> 

          <RowContainer>
            {
              data.map((o, i) => (
                <Row onClick={() => setSelectedUser(o.id)} className={ o.id === selectedUser ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {i+1} </div>
                  <div> {o.first_name} </div>
                  <div> {o.last_name} </div>
                  <div> {o.email} </div>
                  <div> {entityRoleTypes[o.entity_roles[entity_id]]?.label} </div>
                  <ShowStatus className='center' obj={o}/>
                  <div onClick={() => remove({entity_id, id: o.id, cb: () => listStore.load({entity_id})})}> <DeleteIcon /> </div>
                </Row>
              ))
              
            }
          </RowContainer>
        </Table>
        <Add onClick={() => setSelectedUser(null)} />
      </Content>
    
  )
}

function AddNew(props) {
  const { entity_id } = useParams()
  const { id, first_name, last_name, entity_roles={}, email, status, phone, selectedUser } = props
  const role_id = entity_roles[entity_id] || props.role_id

  console.log(entityRoleTypes, role_id)

  return (
    <div className='fields'>
      <Input label='First Name' name='first_name' type='text' onChange={changed} value={ first_name || ''} className='field' required />
      <Input label='Last Name' name='last_name' type='text' onChange={changed} value={ last_name || ''} className='field' required />
      <Input label='Email' name='email' type='email' onChange={changed} value={ email || ''} className='field' required />
      <Input label='Phone' name='phone' type='phone' onChange={changed} value={ phone || ''} className='field' />
      <Select name='role_id' label='Role'
          info="info about roles"
          options={toOpt(entityRoleTypes)}
          outerClass='field'
          onChange={selectChange('role_id')}
          value={entityRoleTypes[role_id] || ''} 
      />   
      
      <label className='submit'>
        <input type='submit' />
        <div> {  selectedUser ? 'Update' : 'Add'} </div>
      </label>
    </div>
  )
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
      <a className={className} style={{'line-height': '40px'}}>
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
  .filter {
    margin: 30px 30px;
  }

`