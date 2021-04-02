import React from 'react'

import styled from 'styled-components'

export default function CompliantCard({children, ...props}) {
  return (
    <Tr>
      { children}

    </Tr>
  )
}


const Tr= styled.tr`
  padding: 0;  
  height: 65px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  > td {
    
  }
`