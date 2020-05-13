import React from 'react'

import styled from 'styled-components'


export default function Element(props) {
  const { className, label, id, ...others} = props
  return(
    <Box className={className}>
      <input type="checkbox" id={id} {...others} />
      <label for={id}> {label}</label>
    </Box>
  )
}

const Box = styled.div`
  font-size: 14px;
  color: #687c9d;
`