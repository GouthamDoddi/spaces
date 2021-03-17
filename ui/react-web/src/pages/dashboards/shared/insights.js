import React from 'react'

import styled from 'styled-components'

export default function(props) {
  return (
    <Box>
      <header>
        Compliance Issues
      </header>
    </Box>
  )
}


const Box = styled.div`
  max-width: 758px;
  height: 990px;
  
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #BBBBBB;
  border-top-right: none;
  opacity: 1;

  > header {
    background: #EEEEEE 0% 0% no-repeat padding-box;
    height: 74px;
    border: 1px solid #BBBBBB;
  }
`