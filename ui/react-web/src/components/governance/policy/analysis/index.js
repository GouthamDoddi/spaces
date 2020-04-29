import React from 'react'

import styled from 'styled-components'
import Container from '../container'

import { PieChart } from 'reaviz';

export default function(props) {
  return(
    <Container>
      <Main>
        <div className='title'> Analysis </div>

      </Main>
    </Container>
  )
}


const Main = styled.div`
  display: flex;
  flex-flow: column;
  .title {
    margin-top: 20px;
    margin-left: 34px;
    font-size: 15px;
    font-weight: 700;
    color: #000000;
  }
  .pie {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -40px;
    .pie-container {
      width: 518px;
      height: 518px;
    }
  }

`