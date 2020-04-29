import React from 'react'

import styled from 'styled-components'
import Container from '../container'

import { PieChart, BarChart } from 'reaviz';


function Chart({type, data}) {
  if(type === 'pie'){
    return(
      <PieChart
        data={[
          { key: 'One', data: 13 },
          { key: 'two', data: 27 },
        ]}
      />
    )
  } else if(type === 'bar') {
    return(
      <BarChart
        height={300}
        width={300}
        data={[
          { key: 'Policy 1', data: 13 },
          { key: 'Policy 2', data: 6 },
        ]}
      />
    );
  }
}

export default function(props) {
  const { type } = props
  return(
    <Container>
      <Main>
        <div className='title'> Analyzers {type} </div>
        <div className='chart'>
          <div className={`chart-container ${type}`}>
            <Chart type={type} />
          </div>
        </div>
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
  .chart {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -40px;
    .chart-container {
      width: 518px;
      height: 518px;
      &.bar {
        height: 400px;
        width: 300px;
        margin-top: 100px;
      }
    }
  }

`