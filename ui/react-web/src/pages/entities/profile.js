import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Input, Select, Actions2, Container, TextArea, toOpt } from '../../components/form'
import { reloadAuth } from '../../store/user'
import { useParams, Link } from 'react-router-dom'
// import makeStore from '../../../store/make-store'
// import { projectTypes, projectCategoryTypes, entitiesData, sponsorOptions } from '../../../store/master-data'
import { useStore } from 'effector-react'

// const { store, load, create, update, addData, changed, selectChange } =  makeStore(({project_id}) => project_id ? `compliance/projects/${project_id}` : 'compliance/projects')

function submitted(project_id, data) {
  const cb = (resp) => {
    reloadAuth()
    window.location.hash = `/projects/${resp.id}/profile/details`
  }
  // project_id === 'new' ? create({data, cb}) : update({project_id, data, cb}) 
}

// Full EN & AR name, short EN name, parent, focal point name, focal point contact email, focal point mobile, Remarks/Notes

export default function(props) {

  const { project_id } = useParams()
  
  useEffect(() => {
    
    // if(project_id && project_id !== 'new') { load({project_id}) }
    // if(project_id === 'new') { addData(null)}
  }, [])
  
  const projectStore = useStore(store)
  const { name, owner_id, type_id, category_id, start_date, end_date, sponsor,  description } = projectStore.data || {}

  return(
    <Container onSubmit={(data) => submitted(project_id,data)} store={projectStore} saveBtn>

      <div className='container'>
        <Input label='Name' type='text' name='name' onChange={changed} value={name || ''} required/>
        <Input label='Arabic Name' type='text' name='ar_name' onChange={changed} value={ar_name || ''} required/>
        <Input label='Short Name' type='text' name='short_name' onChange={changed} value={short_name || ''} required/>
        <Input label='Focal point name' type='text' name='focal_point_name' onChange={changed} value={focal_point_name || ''} required/>
        <Input label='Focal point email' type='text' name='focal_point_email' onChange={changed} value={focal_point_email || ''} required/>
        <Input label='Focal point mobile' type='text' name='focal_point_mobile' onChange={changed} value={focal_point_mobile || ''} required/>

        {/* <Input label='Sponsor' type='text' name='sponsor' onChange={changed} value={sponsor || ''}/> */}

        <TextArea style={{gridColumn: '1 / 3', gridRow: 'span 2' }}label='Remark/Notes' value={description || ''} name='notes' onChange={changed} />
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