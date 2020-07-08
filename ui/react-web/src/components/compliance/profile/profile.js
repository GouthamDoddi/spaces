import React, { useEffect } from 'react'

import { Input, Select, Actions, Container, TextArea, toOpt } from '../../form'
import { reloadAuth } from '../../../store/user'
import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { projectTypes } from '../../../store/master-data'
import { useStore } from 'effector-react'

const { store, load, create, update, addData, changed, selectChange } =  makeStore(({project_id}) => project_id ? `compliance/projects/${project_id}` : 'compliance/projects')

function submitted(project_id, data) {
  const cb = (resp) => {
    reloadAuth()
    window.location.hash = `/compliance/${resp.id}/profile/index`
  }
  project_id === 'new' ? create({data, cb}) : update({project_id, data, cb}) 
}


export default function(props) {

  const { project_id } = useParams()
  
  useEffect(() => {
    if(project_id && project_id !== 'new') { load({project_id}) }
    if(project_id === 'new') { addData(null)}
  }, [])
  
  const projectStore = useStore(store)
  const { name, sponsor, owner, type_id, start_date, end_date, description } = projectStore.data || {}

  return(
    <Container onSubmit={(data) => submitted(project_id,data)} store={projectStore}>
      <Actions />

      <div className='container'>
        <Input label='Name' type='text' name='name' onChange={changed} value={name || ''}/>
        <Input label='Sponsor' type='text' name='sponsor' onChange={changed} value={sponsor || ''}/>
        <Input label='Owner' type='text' name='owner' onChange={changed} value={owner || ''}/>
        <Select name='type_id' label='Project Type' 
            options={toOpt(projectTypes)}
            onChange={selectChange('type_id')}
            value={projectTypes[type_id]}
        />
        <Input label='Project start date' type='date' name='start_date' onChange={changed} value={start_date || ''}/>
        <Input label='Project end date' type='date' name='end_date' onChange={changed} value={end_date || ''}/>
        <TextArea label='Project Description' value={description || ''} name='description' onChange={changed} />
      </div>
    </Container>
  )
}
