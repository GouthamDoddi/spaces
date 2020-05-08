import React from 'react'

import styled, { withTheme } from 'styled-components'

// import {
//   // Switch,
//   // Route,
//   useLocation,
//   // useRouteMatch,
//   // Link
// } from 'react-router-dom';


// function rTo(path) {
//   return `/formulation/${path}`
// }


// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }


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
  const {className, children, theme} = props
  // let query = useQuery();

  // const name = query.get('menu-action')
  // const id = query.get('id')
  return (
    <div className={className}>

      { theme.fixed ? <div className='sized'> { children } </div> : children }

      {/* <MenuModal name={name} id={id} /> */}

    </div>

  )
}

export default withTheme(styled(Container)`
  position: relative;
  margin: 0 42px 40px 42px;

  top: 24px;
  display: flex;
  justify-content: center;
  min-width: 1440px;
  .sized {
    display: flex;

    min-width: 1440px;
    width: 1440px;
  }
`)

// export