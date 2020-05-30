import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from 'effector-react'

import { createEvent, createStore } from 'effector'

import Form, { Input, TextArea, defineFormStore } from '../../form'

import profileStore, { create, update, load } from '../../../store/compliance/profile'

import {
  Container,
  EditIcon,
  SaveIcon,
  TranslateIcon
} from './shared'

const { changed } = defineFormStore(profileStore) 

function submitted(id, data) {
  const cb = (resp) => {
    window.location.hash = `/compliance/${resp.id}/profile/metadata`
  }
  id === 'new' ? create({data, cb}) : update({id, data, cb}) 
}

export default function(props) {
  const { id } = useParams()
  
  useEffect(() => {
    load(id)
  }, [])
  
  const store = useStore(profileStore)

  const data = store.data || {}

  return(
    <Container onSubmit={(data) => submitted(id,data)} store={store}>
      <div className='actions'>
        <EditIcon space='cps' />
        <SaveIcon space='cps' />
        <TranslateIcon space='cps' />
      </div>

      <div className='container'>
        <Input label='Project Name' type='text' name='name' onChange={changed} value={data.name || ''} required />
        <Input label='Sponsor' name='sponsor' type='text' onChange={changed} value={data.sponsor || ''} />
        <Input label='Owner' name='owner' type='text' />
        <Input label='Project Type' name='type' type='text' />
        <Input label='Project start date' name='start_date' type='date' onChange={changed} value={data.start_date || ''} />
        <Input label='Project end date' name='end_date' type='text' onChange={changed} value={data.end_date || ''} />
        <TextArea label='Project Description' name='description' onChange={changed} value={data.description || ''} />
      </div>
    </Container>
  )
}