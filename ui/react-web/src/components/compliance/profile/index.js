import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import Metadata from './metadata'
import Context from './context'
import Risk from './risk'
import Objectives from './objectives'
import ImpactArea from './objectives'

function rTo(path) {
  return `/compliance/profile/${path}`
}

function Link({to, className, children}) {
  return (
    <NavLink to={rTo(to)} className='menu' activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export default function Element(props) {
  return (
    <>
      <div className='form-space'>
        <Switch>
          <Route path={rTo('metadata')}> <Metadata /> </Route>
          <Route path={rTo('context')}> <Context /> </Route>
          <Route path={rTo('risk')}> <Risk /> </Route>
          <Route path={rTo('objectives')}> <Objectives /> </Route>
          <Route path={rTo('impact-area')}> <ImpactArea /> </Route>
          <Route exact path=''> <Redirect to={rTo('metadata')} /> </Route>
        </Switch>
      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Elements </div>
          <Link to='metadata' className='menu'>
            <div className='title'> Profile </div>
            <div className='desc'>
              The parametric data about the policy to identify, qualify, and manage across the lifecycle
            </div>
          </Link>
          <Link to='context' className='menu'>
            <div className='title'> Details </div>
            <div className='desc'>
              The contextual information required for policy formulation
            </div>
          </Link>
          <Link to='risk' className='menu'>
            <div className='title'> Implementation </div>
            <div className='desc'>
               The identified risks in policy making, propagation, and implementations
            </div>
          </Link>
          <Link to='objectives' className='menu'>
            <div className='title'> Stakeholders </div>
            <div className='desc'>
               The purpose of the policy and what it is trying to achieve
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
