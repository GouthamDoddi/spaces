import React from 'react'
// import styled from 'styled-components'
import {
  // Switch,
  // Route,
  // NavLink,
  // RedirectX
} from 'react-router-dom';

import {
  Container,
  EditIcon,
  SaveIcon,
  TranslateIcon
} from '../shared-form-space'

import ProgressCard from '../../progress-card'
import Input from '../../form/input'

// function rTo(path) {
//   return `/formulation/bill/${path}`
// }

// function Link({to, className, children}) {
//   return (
//     <NavLink to={rTo(to)} className='menu' activeClassName='selected'>
//       {children}
//     </NavLink>
//   )
// }

export default function Element(props) {
  return (
    <>
      <div className='form-space'>
        <Container>
          <div className='actions'>
            <EditIcon color='#FD7635' fill='#FFEFE2'/>
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
      </div>
      <div className='widgets'>
        <ProgressCard title='Due Date'
          subtitle='DUe date of selected policy'
          days={23} color='#fd7635' date='13 April 2020' />
      </div>
    </>
  )
}
