import React from 'react'

import styled from 'styled-components'
import Container from '../container'

import { PieChart, BarChart, Bar, BarSeries } from 'reaviz';

import { useParams, useRouteMatch } from 'react-router-dom'

import { elementOptions } from '../../../../store/governance'


import analysisData from '../../../../store/temp-data-analysis'



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
        // height={300}
        // width={300}

        series={
          <BarSeries
            bar={
              <Bar
                gradient={null}
                rounded={false}
                style={data => {
                  console.log('Style callback...', data);
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
  } else {
    return(<div> Requested other than Pie, Bar </div>)
  }
}

export default function(props) {
  const { name } = useParams()
  let {params} = useRouteMatch("/governance/:asset/analysis/:id") || {};
  // const x = elementOptions
  const item = elementOptions[params.asset]['analysis'][name]



  const info = analysisData[params.asset][name]

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
        height: 300px;
        width: 450px;
        margin-top: 100px;
      }
    }
  }

`