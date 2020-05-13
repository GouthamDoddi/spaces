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
          <Input label='Owner' type='text' />
          <Input label='Reviewer' type='text' />
          <Input label='Responsible' type='text' />
          <Input label='Target Date' type='date' />
          <Text label='Notes' />
        </form>
      </div>
    </Container>
  )
}