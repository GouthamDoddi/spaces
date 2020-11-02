import styled from 'styled-components'
import React from 'react'

export default function(p){
  return (
    <Wrap {...p}>
      { p.type }
    </Wrap>
  )
}

const Wrap =  styled.div`
  width: 34px;
  height: 25px;
  border-radius: 5px;
  background-color: ${p => p.theme[p.type?.toLowerCase()]};
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`  
