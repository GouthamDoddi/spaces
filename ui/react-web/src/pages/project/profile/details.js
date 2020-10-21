import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Input, Select, Actions2, Container, TextArea, toOpt } from '../../../components/form'
import { reloadAuth } from '../../../store/user'
import { useParams, Link } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { projectTypes, projectCategoryTypes, entitiesData } from '../../../store/master-data'
import { useStore } from 'effector-react'

const { store, load, create, update, addData, changed, selectChange } =  makeStore(({project_id}) => project_id ? `compliance/projects/${project_id}` : 'compliance/projects')

function submitted(project_id, data) {
  const cb = (resp) => {
    reloadAuth()
    window.location.hash = `/projects/${resp.id}/profile/details`
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
  const { name, owner_id, type_id, category_id, start_date, end_date, description } = projectStore.data || {}

  return(
    <Container onSubmit={(data) => submitted(project_id,data)} store={projectStore} saveBtn>

      <div className='container'>
        <Input label='Name' type='text' name='name' onChange={changed} value={name || ''} required/>
        {/* <Input label='Sponsor' type='text' name='sponsor' onChange={changed} value={sponsor || ''}/> */}
        {/* <Input label='Owner' type='text' name='owner' onChange={changed} value={owner || ''}/> */}
        <Select name='owner_id' label='Owner'
            options={toOpt(entitiesData)}
            onChange={selectChange('owner_id')}
            value={entitiesData[owner_id]}
            maxMenuHeight={200}
        />
        <Select name='category_id' label='Project Category' 
            options={toOpt(projectCategoryTypes)}
            onChange={selectChange('category_id')}
            value={projectCategoryTypes[category_id]}
        />
        <Select name='type_id' label='Project Type' 
            options={toOpt(projectTypes)}
            onChange={selectChange('type_id')}
            value={projectTypes[type_id]}
        />
        <Input label='Project start date' type='date' name='start_date' onChange={changed} value={start_date || ''}/>
        <Input label='Project end date' type='date' name='end_date' onChange={changed} value={end_date || ''}/>
        <TextArea style={{gridColumn: '1 / 3', gridRow: 'span 2' }}label='Project Description' value={description || ''} name='description' onChange={changed} />
      </div>
      {
        project_id === 'new' ? <CancelBtn to='/projects'> Cancel </CancelBtn> : null
      }
      
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