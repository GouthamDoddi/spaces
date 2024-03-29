import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import { useParams } from 'react-router-dom'

import Metadata from './metadata'
import Context from './context'
import Risk from './risk'
import Objectives from './objectives'
import ImpactArea from './impact-areas'

import { useTo } from '../util'

function useLinkTo(path, exact=false) {
  return(useTo(`canvas/${path}`, exact))
}

function Link({to, className, children}) {
  return (
    <NavLink to={useLinkTo(to, true)} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export default function Element(props) {
  const { policy_id } = useParams()
  const hide = policy_id === 'new' ? 'hide' : null
  
  return (
    <>
      <div className='form-space'>
        <Switch>
          <Route path={useLinkTo('metadata')}> <Metadata /> </Route>
          <Route path={useLinkTo('context')}> <Context /> </Route>
          <Route path={useLinkTo('risk')}> <Risk /> </Route>
          <Route path={useLinkTo('objectives')}> <Objectives /> </Route>
          <Route path={useLinkTo('impact-area')}> <ImpactArea /></Route>
          <Route exact path=''> <Redirect to={useLinkTo('metadata', true)} /> </Route>
        </Switch>
      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Elements </div>
          <Link to='metadata' className='menu'>
            <div className='title'> Metadata </div>
            <div className='desc'>
              The parametric data about the policy to identify, qualify, and manage across the lifecycle
            </div>
          </Link>
          <Link to='context' className={`menu ${hide}`}>
            <div className='title'> Context</div>
            <div className='desc'>
              The contextual information required for policy formulation
            </div>
          </Link>
          <Link to='risk' className={`menu ${hide}`}>
            <div className='title'> Risk </div>
            <div className='desc'>
               The identified risks in policy making, propagation, and implementations
            </div>
          </Link>
          <Link to='objectives' className={`menu ${hide}`}>
            <div className='title'> Objectives </div>
            <div className='desc'>
               The purpose of the policy and what it is trying to achieve
            </div>
          </Link>
          <Link to='impact-area' className={`menu ${hide}`}>
            <div className='title'> Impact Area </div>
            <div className='desc'>
              The areas and the impact the policy has in the intended domains
            </div>
          </Link>
        </Widget>
      </div>
    </>
  )
}


const Widget = styled.div`
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  width: 100%;
  height: 466px;
  display: flex;
  flex-flow: column;
  .title {
    margin-top: 22px;
    margin-left: 21px;
    font-size: 15px;
    font-weight: 800;
    color: #000000;
  }
  .menu {
    margin-left: 18px;
    margin-top: 10px;
    width: 273px;
    height: 71px;
    border-radius: 3px;
    background-color: #f4f7fa;
    border: 1px solid #f4f7fa;
    padding-left: 14px;
    padding-top: 9px;
    .title {
      margin: 0;
    }
    &.hide {
      display: none;
    }
    .desc {
      font-size: 10px;
      line-height: 1.2;
      color: #98acbe;
      margin-top: 4px;
    }
    &.selected {
      border: 1px solid ${p => p.theme.color}
    }
  }
`

