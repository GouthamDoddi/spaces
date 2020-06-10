import React from 'react'

import styled from 'styled-components'

import {useLocation, NavLink, useParams } from 'react-router-dom'

import { useTo } from '../util'

function useLinkTo(path, exact=true) {
  const { id } = useParams()
  const eid = exact ?  id : ':id(\\d+|new)'
  return `${useTo(`checklist/${eid}`, exact)}/${path}`
}

function Link({to, className, children}) {
  return(
    <NavLink to={useLinkTo(to)} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}


export default function Element({ data, useq }) {
  const { id } = useParams()
  if (id && id === 'new') return null
  return (
    <Tabs>
      {        
        data.map((arr, i) => {
          return(<Link to={arr[1]} key={i} className='t'> {arr[0]} </Link>)
        })
      }
    </Tabs>
  )
}

const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  border-radius: 3px;
  background-color: #f2f2f2;
  > * {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    border-bottom: 4px solid #f2f2f2;
    &.selected {
      font-weight: 800;
      color: ${p => p.theme.color};
      border-bottom: 4px solid ${p => p.theme.color};
    }
  }
`