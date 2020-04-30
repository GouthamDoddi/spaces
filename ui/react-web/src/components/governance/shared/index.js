import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation
} from 'react-router-dom';

import Snapshot from './snapshot'
import Analysis from './analysis'
import Analyzer from './analyzers'
import ControlPanel from './control-panel'

function rTo(path) {
  return `/governance/policy/${path}`
}

function Link({to, className, children}) {
  return (
    <NavLink to={rTo(to)} className='menu' activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export default function Element(props) {
  const loc = useLocation();

  const klass = loc.pathname.includes("snapshot") ? 'no-background' : ''
  return (
    <>
      <div className={`form-space ${klass}`}>
        <Switch>
          <Route path={rTo('snapshot')}> <Snapshot /> </Route>
          <Route path={rTo('analysis1')}> <Analysis /> </Route>
          <Route path={rTo('analysis2')}> <Analysis /> </Route>
          <Route path={rTo('analyzer1')}> <Analyzer type='pie' /> </Route>
          <Route path={rTo('analyzer2')}> <Analyzer type='bar' /> </Route>
          <Route path={rTo('control-panel')}> <ControlPanel /> </Route>
          <Route exact path=''> <Redirect to={rTo('snapshot')} /> </Route>
        </Switch>
      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Elements </div>
          <Link to='snapshot' className='menu'>
            <div className='title'> Snapshot </div>
            <div className='desc'>
              The parametric data about the policy to identify, qualify, and manage across the lifecycle
            </div>
          </Link>
          <Link to='analysis1' className='menu'>
            <div className='title'> Analysis </div>
            <div className='desc'>
              The contextual information required for policy formulation
            </div>
          </Link>
          <Link to='analysis2' className='menu'>
            <div className='title'> Analysis </div>
            <div className='desc'>
               The identified risks in policy making, propagation, and implementations
            </div>
          </Link>
          <Link to='analyzer1' className='menu'>
            <div className='title'> Analyzer </div>
            <div className='desc'>
               The purpose of the policy and what it is trying to achieve
            </div>
          </Link>
          <Link to='analyzer2' className='menu'>
            <div className='title'> Analyzer </div>
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
  height: 100%;
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

