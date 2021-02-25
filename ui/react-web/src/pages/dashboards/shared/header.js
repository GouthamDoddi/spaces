import styled from 'styled-components'
import React from 'react'

export default function({children, ...props}) {
  return(
    <Outline>
      {children}
    </Outline>
  )
}
const Outline = styled.div`
  display: sticky;
  top: 0px;
  left: 0px;

  height: 60px;
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  // box-shadow: 0px 3px 5px #00000012;
  line-height: 60px;
`

