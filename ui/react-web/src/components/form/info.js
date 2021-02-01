import React from 'react'

import styled from 'styled-components'

export default function({children, ...props}) {
  return (
    <Info>
      ⓘ
      <Text> {children} </Text>
    </Info>
  )
}



const Info = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 5px;
  &:hover {
    > div {
      visibility: visible;
    }
  }
`
const Text = styled.div`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
`