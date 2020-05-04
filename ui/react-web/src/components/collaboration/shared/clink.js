import React from 'react'
import {
  NavLink
} from 'react-router-dom'

import { useLocation, matchPath } from 'react-router-dom'

export default function Link({to, className, children, asset}) {
  const location = useLocation();
  const { params } = matchPath(location.pathname, {path: '/:space/:asset'}) || {}

  const toPath = (to[0] === '/' || !params) ? to : `/${params.space}/${params.asset}/${to}`

  return (
    <NavLink to={toPath} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}