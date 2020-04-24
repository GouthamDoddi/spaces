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
  margin-left: 20px;
  margin-right: 42px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  .header {
    flex: 1;
    min-width: 1027px;
    height: 97px;
    border-radius: 3px;
    box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
    background-color: #ffffff;
    margin-bottom: 25px;
  }
  .form-space {
    min-width: 693px;
    flex: 1;
    height: 466px;
    border-radius: 3px;
    box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
    background-color: #ffffff;
  }
  .widgets {
    width: 309px;
    height: 466px;
    min-width: 309px;
    margin-left: 25px;
  }
`