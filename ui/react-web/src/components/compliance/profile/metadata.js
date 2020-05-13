import React from 'react'

import Input from '../../form/input'
import Text from '../../form/text'

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
        <EditIcon space='cps' />
        <SaveIcon space='cps' />
        <TranslateIcon space='cps' />
      </div>

      <div className='container'>
        <form>
          <Input label='Project Name' type='text' />
          <Input label='Sponsor' type='text' />
          <Input label='Owner' type='text' />
          <Input label='Project Type' type='text' />
          <Input label='Project start date' type='date' />
          <Input label='Project duration' type='text' />
          <Text label='Project Description' />
        </form>
      </div>
    </Container>
  )
}