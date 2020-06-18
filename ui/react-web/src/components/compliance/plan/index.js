import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useParams
} from 'react-router-dom';

import {Widget, Title, Content, Element} from '../../elements'

import { useTo } from '../util'

import { useStore } from 'effector-react'

import makeStore from '../../../store/make-store'

import Context from './context'

const {store, load } = makeStore(({project_id, section_id}) => `compliance/${project_id}/sections/applicable`)

function useLinkTo(path, exact=false) {
  return(useTo(`plan/${path}`, exact))
}

function Link({to, className, children}) {
  return (
    <NavLink to={useLinkTo(to, true)} className='menu' activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export default function(props) {
  const { project_id } = useParams()
  
  useEffect(() => {
    load({project_id})
  },[])

  const sectionStore = useStore(store)

  const sections = sectionStore.data || []

  return (
    <>
      <div className='form-space'>
        <Switch>
          <Route path={useLinkTo('section/:section_id(\\d+)')}> <Context /> </Route>
          {/* <Route exact path=''> <Redirect to={useLinkTo('metadata', true)} /> </Route> */}
        </Switch>
      </div>
      <div className='widgets'>
        <Widget>
          <Title> Elements </Title>
          <Content>
            {
              sections.map((section, i) => (
                <Element to={useLinkTo(`section/${section.id}`, true)} className='menu' key={i}>
                  <div className='title'> {section.name} </div>
                  <div className='desc'>
                    {section.description}
                  </div>
                </Element>
              ))
            }
          </Content>

        </Widget>
      </div>
    </>
  )
}

