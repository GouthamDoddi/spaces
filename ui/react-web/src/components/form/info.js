import React from 'react'

import styled from 'styled-components'

export default function({data, ...props}) {
  return (
    <Info>
      ⓘ
      <Text dangerouslySetInnerHTML={{__html: data}}></Text>
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
  width: 350px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  z-index: 1;
`