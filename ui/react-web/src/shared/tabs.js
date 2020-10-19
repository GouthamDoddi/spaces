import React from 'react'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export function Link({to="/", parent=false, className, children}) {
  return(
    <NavLink to={to} strict={parent} activeClassName="selected" className={className}> {children} </NavLink>
  )
}

export const Tab = styled(Link)`
  display: block;
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  border: solid 1px #bbbbbb;
  background-color: #dddddd;
  font-size: 18px;
  color: #666666;
  &.selected {
    border-bottom: none;
    background-color: #eeeeee;
  }

  + a {
    border-left: none;
  }
`

export const EmptyTab = styled.div`
  flex: 1;
  border-bottom: 1px solid #bbbbbb;
`