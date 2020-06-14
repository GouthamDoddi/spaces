import {
  NavLink,
} from 'react-router-dom';

import styled from 'styled-components'
import React from 'react'

function Link({to, className, children}) {
  return (
    <NavLink to={to} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}

export const Widget = styled.div`
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  width: 100%;
  height: 466px;
  display: flex;
  flex-flow: column;
  overflow: auto;
`

export const Title = styled.div`
  margin-top: 19px;
  margin-left: 21px;
  font-size: 15px;
  font-weight: 800;
  color: #000000;
`

export const Content = styled.div`
  height: 420px;
  overflow: auto;
  padding-left: 18px;
  padding-right: 18px;
  margin-top: 4px;
  padding-top: 12px;
`

export const Element = styled(Link)`
  display: inline-block;
  margin-bottom: 10px;
  color: black;
  width: 273px;
  height: 71px;
  border-radius: 3px;
  background-color: #f4f7fa;
  border: 1px solid #f4f7fa;
  padding-left: 14px;
  padding-top: 9px;
  > .title {
    margin: 0;
  }
  > .desc {
    font-size: 10px;
    line-height: 1.2;
    color: #98acbe;
    margin-top: 4px;
  }
  &.selected {
    border: 1px solid ${p => p.theme.color}
  }
`