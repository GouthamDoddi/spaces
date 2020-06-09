import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import StakeHolders from './stake-holders'
import Task from './task'
import Viewers from './viewers'
import { useTo } from '../util'

function useLinkTo(path, exact=false) {
  return(useTo(`operating-model/${path}`, exact))
}

function Link({to, className, children}) {
  return (
    <NavLink to={useLinkTo(to, true)} className='menu' activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export default function Element(props) {
  return (
    <>
      <div className='form-space'>
        <Switch>
          <Route path={useLinkTo('stake-holders')}> <StakeHolders /> </Route>
          <Route path={useLinkTo('task')}> <Task /> </Route>
          <Route path={useLinkTo('viewers')}> <Viewers /> </Route>
          <Route exact path=''> <Redirect to={useLinkTo('stake-holders', true)} /> </Route>
        </Switch>
      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Elements </div>
          <Link to='stake-holders' className='menu'>
            <div className='title'> Stake Holders </div>
            <div className='desc'>
              Invite Stakeholders to contribute on the compliance sections
            </div>
          </Link>
          <Link to='task' className='menu'>
            <div className='title'> Task </div>
            <div className='desc'>
              Project scope & beneficiary details
            </div>
          </Link>
          <Link to='viewers' className='menu'>
            <div className='title'> Viewers </div>
            <div className='desc'>
              Implementation Partners - Internal and External
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

