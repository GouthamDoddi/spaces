import React from 'react'

import styled from 'styled-components'


export const Tab = styled.div`
  padding: 0 20px;
  height: 60px;
  line-height: 60px;
  border: solid 1px #bbbbbb;
  background-color: #dddddd;
  font-size: 18px;
  color: #666666;
  &.selected {
    border-bottom: none;
    background-color: #eeeeee;
  }

  + div {
    border-left: none;
  }
`

export const EmptyTab = styled.div`
  flex: 1;
  border-bottom: 1px solid #bbbbbb;
`