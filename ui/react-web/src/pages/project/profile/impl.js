import React, { useEffect, useState } from 'react'

import { Input, Select, toOpt } from '../../../components/form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'

import { roleTypes } from '../../../store/master-data'

import { useStore } from 'effector-react'
import { Table, Header, Row, Add } from '../../../components/tables/small'

import { CustomContainer, Content, RowContainer } from '../../../components/split-form-container'

const { store, load, create, update } =  makeStore(({project_id, id}) => `compliance/${project_id}/implementation-domains`)

const {changed, selectChange, addData, ...localState} = makeStore(({project_id, id}) => id ? `compliance/${project_id}/implementation-domains/${id}` : `compliance/${project_id}/implementation-domains`)


function submitted(project_id, id, data) {
  const cb = (resp) => {
    load({project_id})
  }
  data.project_id = project_id
  id ? localState.update({project_id, id, data, cb}) : localState.create({project_id, data, cb})
}

const columns = '1fr 1fr 1fr'
export default function(props) {

  const { project_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({project_id})
  }, [])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, domain, owner} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(project_id, id , data)} store={localStore}>      
      <div className='fields'>
        <Input label='Implementation Domain' name='domain' type='text' onChange={changed} value={ domain || ''} className='field' required />

        <Input label='Owner' name='owner' type='text' onChange={changed} value={ owner || ''} className='field' required />

        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Update' : 'Add'} </div>
        </label>

      </div>
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>ID</div>
            <div>Implementation Domain</div>
            <div>Owner</div>
          </Header> 

          <RowContainer>
            {
              listData.map((o, i) => (
                <Row onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {o.id} </div>
                  <div> {o.domain} </div>
                  <div> {o.owner} </div>
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