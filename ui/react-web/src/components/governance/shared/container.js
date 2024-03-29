import React from 'react'

import {
  Link,
  // useLocation,
  useRouteMatch
} from 'react-router-dom'


import styled from 'styled-components'

function Icon() {
  return(
    <svg  viewBox="0 -76 512 512"  xmlns="http://www.w3.org/2000/svg"><path d="m426.324219 39.609375c-6.535157-22.839844-27.585938-39.609375-52.496094-39.609375s-45.960937 16.769531-52.5 39.609375h-321.328125v30h321.332031c6.535157 22.835937 27.585938 39.609375 52.496094 39.609375s45.960937-16.773438 52.5-39.609375h85.671875v-30zm-52.496094 39.609375c-13.570313 0-24.609375-11.039062-24.609375-24.609375s11.042969-24.609375 24.609375-24.609375c13.570313 0 24.609375 11.039062 24.609375 24.609375s-11.039062 24.609375-24.609375 24.609375zm0 0"/><path d="m96.152344 125.480469c-24.910156 0-45.960938 16.773437-52.496094 39.609375h-43.65625v30h43.65625c6.535156 22.839844 27.589844 39.609375 52.5 39.609375s45.960938-16.769531 52.496094-39.609375h363.347656v-30h-363.347656c-6.535156-22.835938-27.589844-39.609375-52.5-39.609375zm0 79.21875c-13.566406 0-24.605469-11.039063-24.605469-24.609375 0-13.566406 11.039063-24.609375 24.605469-24.609375 13.570312 0 24.609375 11.042969 24.609375 24.609375 0 13.570312-11.039063 24.609375-24.609375 24.609375zm0 0"/><path d="m264.410156 250.964844c-24.910156 0-45.964844 16.769531-52.5 39.609375h-211.910156v30h211.910156c6.535156 22.835937 27.589844 39.609375 52.5 39.609375 24.90625 0 45.960938-16.773438 52.496094-39.609375h195.09375v-30h-195.09375c-6.535156-22.839844-27.589844-39.609375-52.496094-39.609375zm0 79.21875c-13.570312 0-24.609375-11.039063-24.609375-24.609375 0-13.570313 11.039063-24.609375 24.609375-24.609375 13.566406 0 24.609375 11.039062 24.609375 24.609375 0 13.570312-11.039062 24.609375-24.609375 24.609375zm0 0"/></svg>
  )
}
function rTo({ space, asset }, path) {
  return `/${space}/${asset}/${path}`
}

export default function(props) {
  const match = useRouteMatch("/:space/:asset/:element");
  const { children } = props
  return (
    <Container>
      { children }
      <Link to={rTo(match.params, 'control-panel')} className='oval'> <Icon /> </Link>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;

  .oval {
    width: 63px;
    height: 63px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background-color: #0091ff;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    right: 34px;
    bottom: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2);
    }
    svg {
      width: 24px;
      height: 24px;
      fill: #ffffff;
    }
  }
`