import React from 'react'

import styled from 'styled-components'

import {
  // Switch,
  // Route,
  useLocation,
  // useRouteMatch,
  // Link
} from 'react-router-dom';

// import { Task, Note, Survey, Meeting, Space } from './menu-actions'

// function rTo(path) {
//   return `/formulation/${path}`
// }


function useQuery() {
  return new URLSearchParams(useLocation().search);
}


// function MenuModal({ name, id }) {
//   switch(name) {
//     case 'task':
//       return <Task id={id || 'new'} />
//     case 'note':
//       return <Note id={id || 'new'} />
//     case 'meeting':
//       return <Meeting id={id || 'new'} />
//     case 'survey':
//       return <Survey id={id || 'new'} />
//     case 'space':
//       return <Space id={id || 'new'} />
//     default:
//       return null
//   }
// }

function Container(props) {
  const {className, children} = props
  let query = useQuery();

  const name = query.get('menu-action')
  const id = query.get('id')
  return (
    <div className={className}>
      { children }

      {/* <MenuModal name={name} id={id} /> */}
    </div>

  )
}

export default styled(Container)`
  position: relative;
  margin-left: 42px;
  top: 24px;
  display: flex;
`