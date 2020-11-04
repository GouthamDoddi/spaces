import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input, Select, Actions2, Container, TextArea, toOpt } from '../../components/form'
import { reloadAuth } from '../../store/user'
import { useParams, Link } from 'react-router-dom'

import { entitiesData, entityTypes } from '../../store/master-data'
import { useStore } from 'effector-react'
import makeStore from '../../store/make-store'

const { store, load, create, update, addData, changed, selectChange } =  makeStore(({entity_id}) => `entities/${entity_id}` )


function submitted(entity_id, data) {
  const cb = (resp) => {
    load({entity_id})
  }
  update({entity_id, data, cb}) 
}


export default function(props) {

  const { entity_id } = useParams()
  
  const entityStore = useStore(store)
  
  useEffect(() => {
    load({entity_id})
  }, [entity_id])
  
  // const changed = (e) => {
  //   // setEntity({...entity, { e.target.name: e.target.value}})
  // }


  const { id, name, ar_name, short_name, label, type_id, focal_point_name, focal_point_email, focal_point_mobile, notes } = entityStore.data || {}

  return(
    <Container onSubmit={(data) => submitted(entity_id, data)} saveBtn>

      <div className='container'>
        <Input label='Name' type='text' name='name' onChange={changed} value={name || ''} required/>
        <Input label='Arabic Name' type='text' name='ar_name' onChange={changed} value={ar_name || ''} />
        <Input label='Short Name' type='text' name='short_name' onChange={changed} value={short_name || ''} required/>
        <Select name='type_id' label='Type'
            options={toOpt(entityTypes)}
            onChange={selectChange('type_id')}
            value={entityTypes[type_id]}
            maxMenuHeight={200}
        />
        <Input label='Focal point name' type='text' name='focal_point_name' onChange={changed} value={focal_point_name || ''} />
        <Input label='Focal point email' type='text' name='focal_point_email' onChange={changed} value={focal_point_email || ''} />
        <Input label='Focal point mobile' type='text' name='focal_point_mobile' onChange={changed} value={focal_point_mobile || ''} />

        {/* <Input label='Sponsor' type='text' name='sponsor' onChange={changed} value={sponsor || ''}/> */}

        <TextArea style={{gridColumn: '1 / 3', gridRow: 'span 2' }}label='Remark/Notes' value={notes || ''} name='notes' onChange={changed} />
      </div>
      {/* {
        project_id === 'new' ? <CancelBtn to='/projects'> Cancel </CancelBtn> : null
      } */}
      
    </Container>
  )
}


const CancelBtn = styled(Link)`
  padding: 10px 20px;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${p => p.theme.color};
  margin-bottom: 20px;
  color: #fff;
  border-radius: 3px;
`