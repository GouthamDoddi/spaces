import React from 'react'

import Input from '../../form/input'

import {
  Container,
  EditIcon,
  SaveIcon,
  TranslateIcon
} from './shared'

export default function(props) {
  return(
    <Container>
      <div className='actions'>
        <EditIcon color='#FD7635' fill='#FFEFE2' />
        <SaveIcon color='#FD7635' fill='#FFEFE2' />
        <TranslateIcon color='#FD7635' fill='#FFEFE2' />
      </div>

      <div className='container'>
        <form>
          <Input label='Lorem Ipsum' type='text' />
          <Input label='Lorem Ipsum' type='text' />
          <Input label='Lorem Ipsum' type='text' />
          <Input label='Lorem Ipsum' type='text' />
          <Input label='Lorem Ipsum' type='text' />
          <Input label='Lorem Ipsum' type='text' />
          <Input label='Lorem Ipsum' type='text' />
          <Input label='Lorem Ipsum' type='text' />
        </form>
      </div>
    </Container>
  )
}