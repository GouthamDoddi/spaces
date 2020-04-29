import React from 'react'

import styled from 'styled-components'
import Container from '../container'

import { PieChart, BarChart } from 'reaviz';

import { useParams, useRouteMatch } from 'react-router-dom'

import { elementOptions } from '../../../../store/governance'


function Chart({type, data, item}) {
  console.log(item)
  if(item.graph === 'pie'){
    return(
      <PieChart
        data={[
          { key: 'One', data: 13 },
          { key: 'two', data: 27 },
        ]}
      />
    )
  } else if(item.graph === 'bar') {
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
  } else {
    return(<div> Requested other than Pie, Bar </div>)
  }
}

export default function(props) {
  const { name } = useParams()
  let match = useRouteMatch("/governance/:asset/analyzers/:id");
  // const x = elementOptions
  const item = elementOptions[match.params.asset]['analyzers'][name]

  const { type } = props
  return(
    <Container>
      <Main>
        <div className='title'> Analyzers - {item.name} - {item.graph} graph</div>
        <div className='chart'>
          <div className={`chart-container ${item.graph}`}>
            <Chart type={type} item={item} />
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