import React from 'react'

import styled from 'styled-components'
import Container from '../container'

import { PieChart, BarChart, Bar, BarSeries } from 'reaviz';

import { useParams, useRouteMatch } from 'react-router-dom'

import { elementOptions } from '../../../../store/governance'


import analyzersData from '../../../../store/temp-data-analyzers'

import Dropdown from '../../../dropdown'

function Chart({type, data, item}) {

  if(item.graph === 'pie'){
    return(
      <PieChart
        data={data}
      />
    )
  } else if(item.graph === 'bar') {
    return(
      <BarChart

        series={
          <BarSeries
            bar={
              <Bar
                gradient={null}
                rounded={false}
                style={data => {
                  // console.log('Style callback...', data);
                  return {
                    fill: data.metadata
                  };
                }}
              />
            }
          />
        }
        data={data}
      />
    );
  } else if( item.graph === 'stacked-bar') {
    return (

      <BarChart
        height={300}
        width={300}
        data={data}
        series={
          <BarSeries
            type="grouped"
            bar={
              <Bar
                rounded={false}
                gradient={null}
              />
            }
            padding={0.8}
          />
        }
      />
    )
  }

   else {
    return(<div> Requested other than Pie, Bar </div>)
  }
}

export default function(props) {
  const { name } = useParams()
  let {params} = useRouteMatch("/:space/:asset/analyzers/:id") || {};
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
        <div className='title'> Analysis - {item.name} - {item.graph} graph</div>
        <div className='filters'>
          {
            item.filters.map(
              (filter, i) => <Dropdown key={i} title={`Filter ${i+1}`} name={`filter${i+1}`} list={filter} />
            )
          }
        </div>
        <div className='chart'>
          <div className={`chart-container ${item.graph}`}>
            <Chart type={type} item={item} data={info.data} />
          </div>
        </div>
      </Main>
    </Container>
  )
}


const Main = styled.div`
  display: flex;
  flex-flow: column;
  .filters {
    position: absolute;
    top: 12px;
    right: 40px;
    color: #000000;
    display: flex;
  }
  > .title {
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
      &.stacked-bar {
        height: 300px;
        width: 450px;
        margin-top: 100px;
      }
    }
  }

`