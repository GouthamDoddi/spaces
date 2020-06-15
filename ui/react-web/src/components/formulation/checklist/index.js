import React, {useEffect} from 'react'

import styled from 'styled-components'

import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import ModalView from './modal-view'

import { useParams } from 'react-router-dom'

import CardView from './cards-view'


import { useTo } from '../util'


import  { store, load } from '../../../store/section-store'



function useLinkTo(path, exact=false) {
  return(useTo(`checklist/${path}`, exact))
}

export default function(props) {
  const { policy_id } = useParams()

  return(
      <div className='form-space full-width'>
        <CardView store={store} load={load} />
      </div>

  )
}