import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useParams,
} from 'react-router-dom';

import Profile from './profile'
import ObjectDetails from './object-details'
import BeneficiaryDetails from './beneficiary-details'
import Stakeholders from './stakeholders'
import Implementation from './implementation'

import { useTo } from '../util'

function useLinkTo(path, exact=false) {
  return(useTo(`profile/${path}`, exact))
}

function Link({to, className, children}) {
  return (
    <NavLink to={useLinkTo(to, true)} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export default function Element(props) {
  const { project_id } = useParams()
  const hide = project_id === 'new' ? 'hide' : null
  return (
    <>
      <div className='form-space'>
        <Switch>
          <Route path={useLinkTo('index')}> <Profile /> </Route>
          <Route path={useLinkTo('object-details')}> <ObjectDetails /> </Route>
          <Route path={useLinkTo('beneficiary-details')}> <BeneficiaryDetails /> </Route>
          <Route path={useLinkTo('stakeholders')}> <Stakeholders /> </Route>
          <Route path={useLinkTo('implementation')}> <Implementation /> </Route>
          <Route exact path=''> <Redirect to={useLinkTo('index', true)} /> </Route>
        </Switch>
      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Elements </div>
          <Link to='index' className='menu'>
            <div className='title'> Profile </div>
            <div className='desc'>
              The parametric static data about the project including owners and proposed dates
            </div>
          </Link>
          <Link to='object-details' className={`menu ${hide}`}>
            <div className='title'> Object Details </div>
            <div className='desc'>
              Object Details: Details about the objects and sub objects that constitute the project
            </div>
          </Link>
          <Link to='beneficiary-details' className={`menu ${hide}`}>
            <div className='title'> Beneficiary Details </div>
            <div className='desc'>
              Beneficiary Details: Details about the beneficiary that is impacted by the project (internal / external)
            </div>
          </Link>
          <Link to='stakeholders' className={`menu ${hide}`}>
            <div className='title'> Stakeholders </div>
            <div className='desc'>
              Stakeholders: The list of users who will work on the project and their contact details to ensure audit tracebility
            </div>
          </Link>
          <Link to='implementation' className={`menu ${hide}`}>
            <div className='title'> Implementation </div>
            <div className='desc'>
              Implementation: List of internal departments and their mapping to project roles to ensure accountability
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
    &.hide {
      display: none;
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

