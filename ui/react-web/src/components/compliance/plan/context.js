import React, { useEffect } from 'react'

import { Input, Select, Actions, Container, TextArea, toOpt } from '../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { projectTypes } from '../../../store/master-data'
import { useStore } from 'effector-react'

const { store, load, create, update, changed } =  makeStore(({project_id, section_id}) => section_id ? `compliance/${project_id}/plans/${section_id}` : `compliance/${project_id}/plans`)

function submitted(project_id, id, section_id, data) {
  const cb = (resp) => {
    load({project_id, section_id: section_id})
  }
  data.section_id = section_id
  data.project_id = project_id
  id ? update({project_id, section_id, data, cb}) : create({project_id, data, cb})
}


export default function(props) {

  const { project_id, section_id } = useParams()
  
  useEffect(() => {
    load({project_id, section_id})
  }, [section_id])
  
  const sectionStore = useStore(store)
  const { id, owner, reviewer, responsible, target_date, description } = sectionStore.data || {}

  return(
    <Container onSubmit={(data) => submitted(project_id, id, section_id, data)} store={sectionStore}>
      <Actions />

      <div className='container'>
        <Input label='Owner' type='text' name='owner' onChange={changed} value={owner || ''}/>
        <Input label='Reviewer' type='text' name='reviewer' onChange={changed} value={reviewer || ''}/>
        <Input label='Responsible' type='text' name='responsible' onChange={changed} value={responsible || ''}/>
        <Input label='Target Date' type='date' name='target_date' onChange={changed} value={target_date || ''}/>
        <TextArea label='Notes' value={description || ''} name='description' onChange={changed} />
      </div>
    </Container>
  )
}
