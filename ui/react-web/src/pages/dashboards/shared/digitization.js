import React from 'react'

import styled from 'styled-components'
import { Select } from '../../../components/form'

export default function(props) {
  return (
    <Box>
      <header>
        <div className='title'> Digitization </div>
        <div className='actions'><Select></Select></div>
      </header>

    </Box>
  )
}


const Box = styled.div`
  max-width: 758px;

  > header {
    display: flex;
    justify-content: space-between;
    padding-left: 31px;
    padding-right: 20px;
    align-items: center; 
    width: 100%;  
    height: 73px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    border: 1px solid #BBBBBB;
    border-bottom: none;
  }

  > .info {
    height: 755px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #BBBBBB;
    opacity: 1;
  }
`