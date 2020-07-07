import React from 'react'
import styled from 'styled-components'

export default function(props) {

  return <Box className={props.success ? 'success' : 'error'}/>
}


const Box = styled.div`
  position: fixed;
  bottom: 10px;
  left: 45%;
  width: 300px;
  height: 60px;
  border-radius: 5px;
  .success {
    background-color: green;
  }
  .error {
    background-color: red;
  }
`

