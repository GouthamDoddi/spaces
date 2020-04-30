import React from 'react'

import styled from 'styled-components'
import Container from '../container'

import { PieChart, BarChart, BarSeries } from 'reaviz';

import { useParams, useRouteMatch } from 'react-router-dom'

import { elementOptions } from '../../../../store/governance'

import Dropdown from '../../../dropdown'

import analyzersData from '../../../../store/temp-data-analyzers'

function Chart({type, item}) {
  return (
      <BarChart
        // series={
        //   <BarSeries
        //     type="grouped"
        //   />
        // }
        // data={[
        //   {key: 'one', data: [{key: 'a', data: 2}]},
        //   {key: 'two', data: [{key: 'a', data: 2}]}
        // ]}
        data={[
          { key: 'One', data: 13 },
          { key: 'two', data: 27 },]}
      />
    )
}

export default function(props) {
  const { name } = useParams()
  let {params} = useRouteMatch("/governance/:asset/analyzers/:id") || {};
  // const x = elementOptions
  const item = elementOptions[params.asset]['analyzers'][name]

  const info = analyzersData[params.asset][name]

  if(!info) {
    return(
      <Container>
        <div> NO DATA </div>
      </Container>
    )
  }
  console.log(info.data)

  const { type } = props
  return(
    <Container>
      <Main>
        <div className='title'> {item.name} </div>
        <div className='filters'>
          {
            item.filters.map(
              (filter, i) => <Dropdown key={i} title={`Filter ${i+1}`} name={`filter${i+1}`} list={filter} />
            )
          }
        </div>
        <div className='chart'>
          <div className={`chart-container ${item.graph}`}>
            <Chart type={type} item={item} data={[]} />
          </div>
        </div>
      </Main>
    </Container>
  )
}


const Main = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  top: 0;
  left: 0;
  .filters {
    position: absolute;
    top: 12px;
    right: 40px;
    color: #000000;
    display: flex;
  }
  >.title {
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
        height: 300px;
        width: 450px;
        margin-top: 100px;
      }
    }
  }

`