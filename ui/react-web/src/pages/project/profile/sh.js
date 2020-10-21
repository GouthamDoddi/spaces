import React, { useEffect, useState } from 'react'

import { Input, Select, toOpt } from '../../../components/form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'

import { roleTypes } from '../../../store/master-data'

import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../../components/tables/small'

import { CustomContainer, Content, RowContainer } from '../../../components/split-form-container'

const { store, load } =  makeStore(({project_id, id}) => `compliance/${project_id}/stake-holders`)

const {changed, selectChange, addData, ...localState} = makeStore(({project_id, id}) => id ? `compliance/${project_id}/stake-holders/${id}` : `compliance/${project_id}/stake-holders`)


function submitted(project_id, id, data) {
  const cb = (resp) => {
    load({project_id})
  }
  data.project_id = project_id
  id ? localState.update({project_id, id, data, cb}) : localState.create({project_id, data, cb})
}

const columns = '1fr 1fr 1fr 1fr'
export default function(props) {

  const { project_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({project_id})
  }, [])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, role_id, name, email, status} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(project_id, id , data)} store={localStore}>      
      <div className='fields'>
        <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} className='field' required />
        <Select name='role_id' label='Role' 
            options={toOpt(roleTypes)}
            outerClass='field'
            onChange={selectChange('role_id')}
            value={roleTypes[role_id] || ''} 
        />
        <Input label='Email ID / LDAP Group ' name='email' type='email' onChange={changed} value={ email || ''} className='field' required />
        
        
        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Update' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>Name</div>
            <div>Role</div>
            <div>Email</div>
            <div>Status</div>
          </Header> 

          <RowContainer>
            {
              listData.map((o, i) => (
                <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {o.name} </div>
                  
                  <div> {roleTypes[o.id]?.label} </div>
                  <div> {o.email} </div>
                  <div> {o.status} </div>
                </Row>
              ))
              
            }
          </RowContainer>
        </Table>
      <Add onClick={() => setSectionId(null)} />
      </Content>

    </CustomContainer>
  )
}