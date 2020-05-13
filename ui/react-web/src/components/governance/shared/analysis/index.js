import React from 'react'

import styled from 'styled-components'
import Container from '../container'

import { PieChart, BarChart, Bar, BarSeries } from 'reaviz';

import { useParams, useRouteMatch } from 'react-router-dom'

import { elementOptions } from '../../../../store/governance'


import analysisData from '../../../../store/temp-data-analysis'



function Chart({type, data, item}) {
  const fullData = data;
  if(item.graph === 'pie'){
    return(
      <PieChart
        data={data}
      />
    )
  } else if(item.graph === 'bar') {
    // console.log("IN BAR")
    return(
      <BarChart
        height={350}
        width={500}

        series={
          <BarSeries
            bar={
              <Bar
                gradient={null}
                rounded={false}
                style={data => {
                  // console.log(data)
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
  }  else if( item.graph === 'stacked-bar') {
    return (

      <BarChart
        height={350}
        width={500}
        data={data}
        series={
          <BarSeries
            type="grouped"
            bar={
              <Bar
                rounded={false}
                gradient={null}
                style={(data, i) => {
                  const main = fullData.find(d => d.key === data.key) || {}
                  const obj = main.data?.find(h => h.key === data.x) || {}
                  const color = obj['matadata']
                  return {
                    fill: color
                  };
                }}
              />
            }
            padding={0.8}
          />
        }
      />
    )
  } else {
    return(<div> Requested other than Pie, Bar </div>)
  }
}

export default function(props) {
  const { name } = useParams()
  let {params} = useRouteMatch("/:space/:asset/analysis/:id") || {};
  const item = elementOptions[params.asset]['analysis'][name]

  const info = analysisData[params.asset][name]

  if(!info) {
    return(
      <Container>
        <div> NO DATA </div>
      </Container>
    )
  }

  const { type } = props
  return(
    <Container>
      <Main>
        <div className='title'> Analysis - {item.name} - {item.graph} graph</div>
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
        height: 350px;
        width: 500px;
        margin-top: 100px;
      }
      &.stacked-bar {
        height: 350px;
        width: 500px;
        margin-top: 100px;
      }
    }
  }

`