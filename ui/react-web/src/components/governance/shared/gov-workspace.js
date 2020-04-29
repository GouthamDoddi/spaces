import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
  // useRouteMatch
} from 'react-router-dom';

import Snapshot from './snapshot'
import Analysis from './analysis'
import Analyzer from './analyzers'
import ControlPanel from './control-panel'

import { useStore } from 'effector-react'


function rTo(asset, path) {
  return `/governance/${asset}/${path}`
}

function Link({to, className, children, asset}) {
  return (
    <NavLink to={rTo(asset, to)} className='menu' activeClassName='selected'>
      {children}
    </NavLink>
  )
}

function LinksTo({ path, data, asset, selectOptions }) {
  const elems = data.map((id, i) => {
    const info = selectOptions[path][id]
    if(info) {
      return (
        <Link to={`${path}/${id}`} className='menu' key={i} asset={asset}>
          <div className='title'> {info.name} </div>
          <div className='desc'>
            {info.desc}
          </div>
        </Link>
      )
    } else { return null }
  })

  return(
    <>
      {elems}
    </>
  )
}
export default function Element({ elements, selectOptions, asset }) {
  const loc = useLocation();
  // let match = useRouteMatch("/governance/:asset/:element");

  // const { asset } = match || 'ass'
  const state = useStore(elements.store)

  // console.log(state)
  const klass = loc.pathname.includes("snapshot") ? 'no-background' : ''

  return (
    <>
      <div className={`form-space ${klass}`}>
        <Switch>
          <Route path={rTo(asset, 'snapshot')}> <Snapshot /> </Route>
          <Route path={rTo(asset, 'analysis/:name')}> <Analysis /> </Route>
          <Route path={rTo(asset, 'analyzers/:name')}> <Analyzer /> </Route>
          <Route path={rTo(asset, 'control-panel')}> <ControlPanel options={selectOptions} elements={elements} /> </Route>
          <Route exact path=''> <Redirect to={rTo(asset, 'snapshot')} /> </Route>
        </Switch>

      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Elements </div>
          <Link to='snapshot' className='menu' asset={asset}>
            <div className='title'> Snapshot </div>
            <div className='desc'>
              The parametric data about the policy to identify, qualify, and manage across the lifecycle
            </div>
          </Link>

          <LinksTo data={state.analysis} path='analysis' asset={asset} selectOptions={selectOptions} />
          <LinksTo data={state.analyzers} path='analyzers' asset={asset} selectOptions={selectOptions} />
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
  overflow: auto;
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
    min-height: 71px;
    border-radius: 3px;
    background-color: #f4f7fa;
    border: 1px solid #f4f7fa;
    padding-left: 14px;
    padding-top: 9px;
    &:last-child {
      margin-bottom: 10px;
    }
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

