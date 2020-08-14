import React, {useEffect} from 'react'

import styled from 'styled-components'

import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import AttributeCardView from './attribute-card-view'


import { useParams } from 'react-router-dom'

import CardView from './cards-view'


import { useTo } from '../util'
import ParamView from './param-view'


import  { store, load, attributeStore } from '../../../store/section-store'



function useLinkTo(path, exact=false) {
  return(useTo(`checklist/${path}`, exact))
}

export default function(props) {
  const { policy_id } = useParams()

  return(
    <Switch>
      <Route path={useLinkTo(':id(\\d+)/attrs')}> 
        <div className='form-space full-width no-background'> <AttributeCardView store={attributeStore.store} load={attributeStore.load} /> </div>
      </Route>
      <Route path={useLinkTo(':id(\\d+)/params/:attr_id(\\d+)')}><ParamView /></Route>
      <Route path={useLinkTo('')}> 
        <div className='form-space full-width no-background'><CardView store={store} load={load} />  </div>
      </Route>
    </Switch>
  )
}