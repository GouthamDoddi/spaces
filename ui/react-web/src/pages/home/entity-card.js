import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Pie, PieChart  } from 'recharts';
import { get } from '../../store/api'
import rtl from 'styled-components-rtl'
import Progress from '../dashboards/shared/progress'
import { to, t } from '../../utils/translate';


export default function({entities, setEntityCount, setProjectCounts, ...props}) {
  const [data, setData] = useState({})
  useEffect(() => {
    get('reports/db_state', {success: (json) => {
      setData(json.data);

      if (setEntityCount) {
        setEntityCount(json.data.entities?.length);
      }

      if (setProjectCounts) {
        if (json.data.entities) {
          setProjectCounts(json.data.entities.map(({ projects }) => projects).reduce(({ completed: prevCompleted, wip: prevWip, not_started: prevNot_started }, { completed, wip, not_started }) => ({
            completed: prevCompleted + completed,
            wip: prevWip + wip,
            not_started: prevNot_started + not_started,
          }), { completed: 0, wip: 0, not_started: 0 }));
        }
      }
    }})

  }, [])
  return (
    <CardHolder>
      { data.entities?.map((k, i) => (
        <CardWrapper onClick={() => {window.location.hash=`/agency/${k.id}`}} >
          <StatusCard key={i}>
            <div className='info'>
          <div className='logo'> <img src={`/img/logos/entities/${k.id}.png`} /></div>
          <div className='title'> 
            <div className='name'> {to(k, 'name')} </div>
            <div className='progress'> 
              <Progress value={Math.ceil(k.progress * 100)} height='5px' max={100} bkcolor='#DCDFE8' width='90%' 
                color='#0064FE' tagBkColor='#EBF4FF' showTag tagColor='#0064FE' />  
            </div>
          </div>
          <div className='chart'> 
            <div className='data'> {Math.ceil(k.score) < 10 ? `0${Math.ceil(k.score)}` : Math.ceil(k.score)}</div>
            <StatusChart prog={Math.ceil(k.score)}/> 
          </div>
        </div>

            <div className='status'>
          <div className='title'> Projects</div>
          <div className='info'>
            <div className='status'>
              <div className='value'> {k.projects.completed} </div>
              <div className='label'> {t('completed')} 
                <BarB color='#3FBF11' />
              </div>
              
            </div>
            <div className='status'>
              <div className='value'> {k.projects.wip} </div>
              <div className='label'> 
                {t('wip')} 
                <BarB color='#FFBF00' />
              </div>
              
            </div>
            <div className='status'>
              <div className='value'> {k.projects.not_started} </div>
              <div className='label'> 
                {t('not_started')}
                <BarB color='#999999' />
              </div>

            </div>
          </div>
        </div>
          </StatusCard>
        </CardWrapper>
    
      ))}
      </CardHolder>
    
  )
}


const CardWrapper = styled.div`

  margin-bottom: 40px;

`

const CardHolder = styled.div`
  
`

function StatusChart({width=50, height=50, innerRadius=14, outerRadius= 20, value=200, prog,...props}) {

  return (
    <PieChart width={50} height={50}>
      <Pie
        data={[{name: '', value: value}]}
        cx={15}
        cy={15}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        fill="#DCDFE8"
        startAngle={90-prog/100*360}
        endAngle={450}
      ></Pie>
      <Pie
        data={[{name: '', value: value}]}
        cx={15}
        cy={15}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        fill="#FFBF00"
        startAngle={90}
        endAngle={90-prog/100*360}
      ></Pie>

    </PieChart>
  )
}
const BarB = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  width: 25px;
  height: 5px;
  border-radius: 10px;
  background-color: ${p => p.color};
`

const StatusCard = styled.div`
  width: 100%;
  > .info {
    display: flex;
    height: 100px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 5px;
    padding: 19px 16px;
    > .logo {
      min-width: 50px;
      max-width: 50px;
      height: 50px;
      // background: #1A6B8F 0% 0% no-repeat padding-box;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #ccc;
      border-radius: 3px;
      text-align: center;
      font: normal normal bold 12px/18px Muli;
      line-height: 50px;
      color: #FFFFFF;
      text-transform: uppercase;
      > img {
        width: 50px;
      }
    }
    > .title {
      ${rtl`
        margin-left: 10px;
      `}
      font: normal normal bold 15px/22px Muli;
      color: #000000;
      flex: 1;
      > .name { 
        height: 33px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > .progress {

      }
    }
    > .chart {
      position: relative;
      left: 0;
      top: 0;
      width: 50px;
      height: 50px;
      > .data {
        position: absolute;
        top: 9px;
        left: 10px;
        font: normal normal bold 15px/22px Muli;
        color: #000000;

      }
    }
  }

  > .status {
    height: 90px;
    position: relative;
    top: -10px;
    background: #EBF4FF 0% 0% no-repeat padding-box;
    ${rtl `
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding-left: 14px;    
    `}
    padding-top: 4px;

    > .title {
      font: italic normal 300 15px/18px Muli;
      color: #999999;
      ${rtl`
        margin-left: 2px;
      `}
      
      width: 60px;
      border-bottom: 1px dashed #999999;
    }

    > .info {
      display: flex;
      width: 100%;
      justify-content: space-between;
      > .status {
        
        ${rtl`
          border-right: 1px solid #DCDFE8;
        `}
        
        height: 38px;
        display: flex;
        margin-top: 6px;
        flex: 1;
        &:last-child {
          border: none;
        }
        &:not(:first-child) {
          justify-content: center;
        }

        > .label {
          font: normal normal normal 12px/18px Muli;
          color: #666666;
          line-height: 38px;
          position: relative;
        }
        > .value { 
          font: normal normal 600 15px/22px Muli;
          color: #000000;
          ${
            rtl`
              margin-right: 6px;
          `}
          
          line-height: 38px;
        }
      }
    }
  }

`