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

export const SubTabs = styled.div`
  grid-column: 1 / -1;
  height: 51px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
`

export const SubTab = styled(Link)`
  display: block;
  margin-left: 12px;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  text-align: left;
  padding: 0 10px;
  color: #666666;
  align-items: center;
  &.selected {
    color: #eb622b;
    border-bottom: 4px solid #eb622b;
  }
`