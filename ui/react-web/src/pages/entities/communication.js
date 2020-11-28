import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { useStore } from 'effector-react'

// import Table, { Header, Row } from '../../shared/table'
import { Table, Header, Row, Add } from '../../components/tables/small'
import { Input, Select, toOpt, TextArea } from '../../components/form'

import makeStore from '../../store/make-store'

import filter from '../../shared/filter'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { hostName, entityRoleTypes, projectCategoryTypes, projectTypes, entityCommType } from '../../store/master-data'

import { CustomContainer, Content, RowContainer } from '../../components/split-form-container'


const { store, load, create, update, changed, selectChange } = makeStore(({entity_id, id}) => id ? `entities/${entity_id}/communication/${id}` : `entities/${entity_id}/communication`)
const listStore = makeStore(({entity_id}) => `entities/${entity_id}/communication`)


const columns = ".4fr 1fr 1fr 1fr"
export default (props) => {
  const { entity_id } = useParams()
  const [selectedService, setSelectedService] = useState(null)
  const objStore = useStore(store)

  useEffect(() => {
    if(selectedService) {
      load({entity_id, id: selectedService})
    }
  }, [selectedService])

  const submitted = (data) => {
    const cb = (resp) => {
      listStore.load({entity_id})
    }
    data.entity_id = entity_id
    selectedService ? update({entity_id, id: selectedService, data, cb}) : create({entity_id, data, cb})
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
  const { entity_id } = useParams()

  const { setSelectedService, selectedService } = props

  useEffect(() => {
    listStore.load({entity_id})
  }, [entity_id])
  
  const data = useStore(listStore.store)?.data || []

  const [filterVal, setFilterVal] = useState('')

  console.log(data)

  return (
    // <Input label='Filter' type='text' name='filter' className='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''} 
    // placeholder='Filter (or) Add' />
    // filter(data, {keys: ['first_name', 'last_name', 'email'], value: filterVal})
      <Content>
        <Table className='table'>
          <Header columns={columns}>
            <div>#</div>
            <div>Name</div>
            <div>Date</div>
            <div>Type</div>
            {/* <div>notes</div> */}
          </Header> 

          <RowContainer>
            {
              data.map((o, i) => (
                <Row onClick={() => setSelectedService(o.id)} className={ o.id === selectedService ? 'selected row' : 'row'} key={i} columns={columns}> 
                  <div> {i+1} </div>
                  <div> {o.name} </div>
                  <div> {o.date} </div>
                  <div> {entityCommType[o.type_id]?.label} </div>
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
  const { entity_id } = useParams()
  const { id, name, type_id, notes, date, selectedService } = props
  
  return (
    <div className='fields'>
      <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} className='field' required />
      <Input label='Date' name='date' type='date' onChange={changed} value={ date || ''} className='field' required />
      <Select name='type_id' label='Project Type' 
          options={toOpt(entityCommType)}
          onChange={selectChange('type_id')}
          value={entityCommType[type_id]}
      />
      <TextArea style={{gridColumn: '1 / 3', gridRow: 'span 2' }} label='Notes' value={notes || ''} name='notes' onChange={changed} ignoreTextAreaHt />
      
      <label className='submit'>
        <input type='submit' />
        <div> {  selectedService ? 'Update' : 'Add'} </div>
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
  .filter {
    margin: 30px 30px;
  }

`