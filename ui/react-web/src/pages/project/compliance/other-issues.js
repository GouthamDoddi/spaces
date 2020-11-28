import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useStore } from 'effector-react'

import { Table, Header, Row, Add } from '../../../components/tables/small'
import { Input, Select, toOpt, TextArea, Upload } from '../../../components/form'

import makeStore from '../../../store/make-store'

import { projectIssueStatusTypes, projectTypes } from '../../../store/master-data'

import { CustomContainer, Content, RowContainer } from '../../../components/split-form-container'
// 'project', Integer, 'issues'

const { store, load, create, update, changed, selectChange } = makeStore(({project_id, id}) => id ? `compliance/project/${project_id}/issues/${id}` : `compliance/project/${project_id}/issues`)
const listStore = makeStore(({project_id}) => `compliance/project/${project_id}/issues`)


const columns = ".4fr 1fr 1fr 1fr"
export default (props) => {
  const { project_id } = useParams()
  const [selectedService, setSelectedService] = useState(null)
  const objStore = useStore(store)

  useEffect(() => {
    if(selectedService) {
      load({project_id, id: selectedService})
    }
  }, [selectedService])

  const submitted = (data) => {
    const cb = (resp) => {
      listStore.load({project_id})
    }
    data.project_id = project_id
    selectedService ? update({project_id, id: selectedService, data, cb}) : create({project_id, data, cb})
  }

  const odata = objStore.data || {}
  return (
    
    <CustomContainer onSubmit={(data) => submitted(data)} store={objStore} minheight='590px' ignoreTextAreaHt>
        <AddNew {...odata} selectedService={selectedService}/>
        <ListView setSelectedService={setSelectedService} selectedService={selectedService} />
    </CustomContainer>
  )
}

function ListView(props) {
  const { project_id } = useParams()

  const { setSelectedService, selectedService } = props

  useEffect(() => {
    listStore.load({project_id})
  }, [project_id])
  
  const data = useStore(listStore.store)?.data || []

  const [filterVal, setFilterVal] = useState('')

  console.log(data)

  return (
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>#</div>
            <div>Name</div>
            <div>Category</div>
            <div>Type</div>
            {/* <div>Description</div> */}
          </Header> 

          <RowContainer>
            {
              data.map((o, i) => (
                <Row onClick={() => setSelectedService(o.id)} className={ o.id === selectedService ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {i+1} </div>
                  <div> {o.name} </div>
                  <div> {o.language} </div>
                  <div> {projectIssueStatusTypes[o.status]?.label } </div>
                </Row>
              ))
              
            }
          </RowContainer>
        </Table>
        <Add onClick={() => window.location.reload()} />
      </Content>
    
  )
}

function AddNew(props) {
  const { project_id } = useParams()
  const { id, name, description, language, status, selectedService } = props
  
  return (
    <div className='fields'>
      <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} className='field' required />
      <Input label='Language' name='language' type='text' onChange={changed} value={ language || ''} className='field' required />
      <Select name='status' label='Status' 
          options={toOpt(projectIssueStatusTypes)}
          onChange={selectChange('status')}
          value={projectIssueStatusTypes[status]}
      />

      {id ? <Upload param_id={id} source='issues' /> : null }
      <TextArea style={{gridRow: 'span 2' }}label='Project Description' value={description || ''} name='description' onChange={changed} ignoreTextAreaHt />
      
      <label className='submit'>
        <input type='submit' />
        <div> {  selectedService ? 'Update' : 'Add'} </div>
      </label>
    </div>
  )
}

const Wrapper = styled.div`
  .filter {
    margin: 30px 30px;
  }

`