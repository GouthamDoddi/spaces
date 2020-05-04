import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

function rTo(path) {
  return `/formulation/committees/${path}`
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
          <Route path={rTo('steering')}> <div> Selected Steering </div></Route>
          <Route path={rTo('executive')}> <div> Selected Executive </div> </Route>
          <Route path={rTo('operational')}> <div> Operational </div> </Route>
          <Route exact path=''> <Redirect to={rTo('steering')} /> </Route>
        </Switch>
      </div>
      <div className='widgets'>
        <Widget>
          <div className='title'> Elements </div>
          <Link to='steering' className='menu'>
            <div className='title'> Steering </div>
            <div className='desc'>
              This committee is the Owners of the policy and include policy commissioner and his team.
            </div>
          </Link>
          <Link to='executive' className='menu'>
            <div className='title'> Executive </div>
            <div className='desc'>
               This committee is responsible for creating policy canvas, checklist and operating model.
            </div>
          </Link>
          <Link to='operational' className='menu'>
            <div className='title'> Operational </div>
            <div className='desc'>
                This committee is responsible for creating policy canvas, checklist and operating model.
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

