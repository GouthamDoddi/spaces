import React from 'react'

import styled from 'styled-components'

import Rink from './link'
import {Link, useLocation } from 'react-router-dom'

export default function Element({ data, useq }) {
  const { search } = useLocation()
  return (
    <Tabs>
      {        
        data.map((arr, i) => {
          return(
            useq ? <Link className={search?.includes(arr[1]) ? 'selected' : ''} to={arr[1]} key={i}> {arr[0]} </Link>  
            : <Rink to={arr[1]} key={i} className='t'> {arr[0]} </Rink> 
          )
        })
      }
    </Tabs>
  )
}

const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  border-radius: 3px;
  background-color: #f2f2f2;
  > * {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    border-bottom: 4px solid #f2f2f2;
    &.selected {
      font-weight: 800;
      color: ${p => p.theme.color};
      border-bottom: 4px solid ${p => p.theme.color};
    }
  }
`