import React from 'react'
import {
  NavLink,
  useLocation, 
  matchPath
} from 'react-router-dom'

export default function Link({to, className, children}) {
  const location = useLocation();
  const { params } = matchPath(location.pathname, {path: '/:space/:asset/:ticket'}) || {}
  const { space, asset, ticket } = params || {}
  const toPath = (to[0] === '/' || !params) ? to : `/${space}/${asset}/${ticket}/${to}`

  return (
    <NavLink to={toPath} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}