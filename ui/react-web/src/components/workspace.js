import React from 'react'

import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function NormalLink(props) {
  const { to, className, children } = props;
  return (
    <NavLink to={to} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}

function NormalLinks(props) {
  const { prefix, data, className } = props
  return(
    <div className={className}>
      {
        data.map((obj) => <Link to={`/${prefix}/${obj.path}`} key={obj.path}> {obj.name} </Link>)
      }
    </div>
  )
}

export const Links = styled(NormalLinks)`
  display: flex;
  margin-left: 15px;
  align-items: center;
  height: 100%;
`
const Link = styled(NormalLink)`
  padding: 8px 8px;
  font-size: 14px;
  font-weight: 500;
  color: #687c9d;
  text-align: center;
  flex: 1;
  & + & {
    margin-right: 6px;
  }
  &.selected {
    border-radius: 16px;
    background-color: #e4e8ee;
    color: ${props => props.theme.color};
    font-weight: 600;
  }
`

export default styled.div`
  margin: 0 0px 0px 20px;
  display: grid;
  width: 100%;
  min-width: 1027px;
  grid-template-columns: auto 309px;
  grid-template-rows: 97px auto;
  grid-gap: 25px;
  .header {
    grid-column: 1 / -1;
    min-width: 1027px;
    height: 97px;
    border-radius: 3px;
    box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
    background-color: #ffffff;
  }
  .form-space {
    min-width: 693px;
    height: 466px;
    border-radius: 3px;
    box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
    background-color: #ffffff;
    &.no-background {
      border: none;
      box-shadow: none;
      background-color: transparent;
    }
    &.full-height {
      height: auto;
    }
  }
  .widgets {
    width: 309px;
    min-height: 466px;
    min-width: 309px;
    overflow: auto;
  }
`