import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation
} from 'react-router-dom';

import Snapshot from './shared/snapshot'
import Analysis from './shared/analysis'
import Analyzer from './shared/analyzers'
import ControlPanel from './shared/control-panel'

import {useStore} from 'effector-react'

import { policyElements as elements } from '../../store/governance'

function rTo(path) {
  return `/governance/landscape/${path}`
}

function Link({to, className, children}) {
  return (
    <NavLink to={rTo(to)} className='menu' activeClassName='selected'>
      {children}
    </NavLink>
  )
}

function LinksTo({ path, data }) {
  const elems = data.map((id, i) => {
    const info = selectOptions[path][id]
    if(info) {
      return (
        <Link to={`${path}/${id}`} className='menu' key={i}>
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
export default function Element(props) {
  const loc = useLocation();

  const state = useStore(elements)

  console.log(state)
  const klass = loc.pathname.includes("snapshot") ? 'no-background' : ''

  return (
    <>
      <div className={`form-space ${klass}`}>
        <Switch>
          <Route path={rTo('snapshot')}> <Snapshot /> </Route>
          <Route path={rTo('analysis/:name')}> <Analysis /> </Route>
          <Route path={rTo('analyzers/:name')}> <Analyzer /> </Route>
          <Route path={rTo('control-panel')}> <ControlPanel options={selectOptions} /> </Route>
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

          <LinksTo data={state.analysis} path='analysis' />
          <LinksTo data={state.analyzers} path='analyzers' />
        </Widget>
      </div>
    </>
  )
}

const selectOptions = {
  snapshot: {
    1: {name: 'Policies To Expire', id: 1}
  },
  analysis: {
    1: { name: 'Expiry Chart (Policy Count)', desc: 'Policy count by Expiry', grpah: 'bar', id: 1},
    2: { name: 'Policy Impact Area Chart', desc: 'Policy count by Impact Area', grpah: 'bar', id: 2},
    3: { name: 'Expiry Chart (Risk vs P. Family', desc: 'Risk count by Policy Family', grpah: 'bar', id: 3 }
  },
  analyzers: {
    1: {
          name: 'Compliance overheads index',  desc: 'Policy parameter count by Project Object',
          graph: 'bar', filters: [[{name: 'All'}, {name: 'Policy Family'}]], id: 1
      },
  }
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

