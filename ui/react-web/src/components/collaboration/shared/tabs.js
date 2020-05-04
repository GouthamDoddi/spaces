import React from 'react'

import styled from 'styled-components'

import Link from './clink'

export default function Element({ data }) {
  return (
    <Tabs>
      {
        data.map((arr, i) => <Link to={arr[1]} key={i}> {arr[0]} </Link> )
      }
    </Tabs>
  )
}

const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #e7fffa;
  > * {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #42d7b6;
    border-bottom: 4px solid #e7fffa;
    &.selected {
      font-weight: 800;
      color: #42d7b6;
      border-bottom: 4px solid #44d7b6;
    }
  }
`