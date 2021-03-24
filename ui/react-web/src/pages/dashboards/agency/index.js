import React, { useState, useEffect } from 'react'
import Header from '../shared/header'
import styled, { css } from 'styled-components'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';

import { BarChart, Bar, Legend } from 'recharts';
import { qualityGateTypes } from '../../../store/master-data';
import { Select } from '../../../components/form'
import StatusChart from '../shared/status-chart'
import Download from '../shared/downloads'
import { SVGCheck, SVGCrown, SVGSolution, SVGCancel } from '../shared/icons'
import Filters from '../shared/filters'
import { get } from '../../../store/api'
import { BarProgressCard, CircularProgressCard } from '../shared/progress-card'
import { useParams } from 'react-router';
import Insights from '../shared/insights';
import Downloads from '../shared/downloads';

 // import Card from '../shared/card'


function dataSections() {
  return (
    [
        {name: 'Layout', 'Fully Compliant': 60, 'Partially Compliant': 14, 'Non Compliant': 10},
        {name: 'Authentication', 'Fully Compliant': 65, 'Partially Compliant': 7, 'Non Compliant': 2},
        {name: 'Website Registration', 'Fully Compliant': 50, 'Partially Compliant': 2, 'Non Compliant': 6},
        {name: 'Content: Information', 'Fully Compliant': 45, 'Partially Compliant': 10, 'Non Compliant': 8},
        {name: 'Search', 'Fully Compliant': 70, 'Partially Compliant': 8, 'Non Compliant': 4},
        {name: 'Accessibility', 'Fully Compliant': 12, 'Partially Compliant': 9, 'Non Compliant': 3},
        {name: 'ePayment', 'Fully Compliant': 54, 'Partially Compliant': 15, 'Non Compliant': 7},
        {name: 'Support', 'Fully Compliant': 78, 'Partially Compliant': 23, 'Non Compliant': 6},
        {name: 'General Requirements', 'Fully Compliant': 56, 'Partially Compliant': 12, 'Non Compliant': 1},
        {name: 'Security and Privacy', 'Fully Compliant': 70, 'Partially Compliant': 11, 'Non Compliant': 4},
      ]
  )
}

export default function(props) {

  // const [gates, setGates] = useState([])
  // const [entityFilter, EntityFilterInput] = useInput({})
  const [entitiesForSelect, setEntitiesForSelect] = useState([])
  // const [selectedEntity, setSelectedEntity] = useState(defaultSelectedEntity)
  // const [leaderBoardData, setLeaderBoardData] = useState({"High Performing Entities":[{"name":"Ministry of Space","score":40},{"name":"Ministry of Justice","score":45},{"name":"Ministry of Public Health","score":62},{"name":"Supreme Judiciary Council","score":67},{"name":"Kahramaa","score":71}],"Least Performing Entities":[{"name":"Hamad Medical Corporation","score":32},{"name":"Ministry of Commerce and Industry","score":20},{"name":"Ministry of Transport & Communication","score":30},{"name":"Qatar Foundation","score":17},{"name":"Qatar University","score":12}]})
  
  const [report, setReport] = useState({})

  const { entity_id } = useParams()
  useEffect(() => {
    console.log(get)
    get('reports/entities', {success: (json) => { 
      // setGates(json.data)
      // setEntitiesForSelect([defaultSelectedEntity, ...json.data.map((o) => ({label: o.name, value: o.id}))])
      const scores = {23: 12, 5: 20, 2: 32, 11: 30, 22: 17, 25: 40, 8: 45, 10: 62, 13: 67, 3: 71, 7: 79 }
      const least = [23,5,2,11, 22]
      const most= [25, 8, 10, 13, 3]
      let ld = {'High Performing Entities': [], 'Least Performing Entities': []}

    }, error: () => []})


    get(`reports/entity/${entity_id}`, {success: (json) => {
      setReport(json.data)
    }})
  }, [entity_id])

  const data = [
    {
      name: 'Page A',
      dataset1: 2400,
      dataset2: 2400,
    },
    {
      name: 'Page B',
      dataset1: 1398,
      dataset2: 2210,
    },
    {
      name: 'Page C',
      dataset1: 9800,
      dataset2: 2290,
    },
    {
      name: 'Page D',
      dataset1: 3908,
      dataset2: 2000,
    },
    {
      name: 'Page E',
      dataset1: 4800,
      dataset2: 2181,
    },
    {
      name: 'Page F',
      dataset1: 3800,
      dataset2: 2500,
    },
    {
      name: 'Page G',
      dataset1: 4300,
      dataset2: 2100,
    },
  ];

  const gates = [
    {
      name: 'Project one',
      prog: 23
    },
    {
      name: 'Project two',
      prog: 34
    },
    {
      name: 'Project three',
      prog: 45
    }
  ]


  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
  ];

  const statusData = [
    {mandatory: 'M1', snippet: 'Mandate Level 1', overall: '60%'}, 
    { mandatory: 'M2', snippet: 'Mandate Level 2', overall: '48%'}, 
    {mandatory: 'M3', snippet: 'Mandate Level 3', overall: '53%'}
  ]


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <Layout>
      <Header viewType='Entity View'></Header>
      <Content>
        <Filters entities={entitiesForSelect}/>
        <MainInfo>
          <div className='logo'> Logo </div>
          <div className='info'>
            <div className='title'> {report.name} </div>
            <div className='description'> 
              { report. description }
              </div>
            <div className='status'>
              <div> <SVGCheck /> <span> 45 Completed </span> </div>
              <div> <SVGSolution /> <span> 27 Running </span> </div>
              <div> <SVGCancel /> <span> Not Started </span> </div>
            </div>
          </div>
          <div className='progress'>
            <div className='round'>{Math.ceil(report.score)}</div>
            <div> Compliance Score </div>
          </div>
          <Spacer />
        </MainInfo>
        <CardHolder>
          <div className='header'>
            <ProgressStatus> 
              <div> {report.progress?.toFixed(2)}% Completed </div>
              <Progress value={report.progress?.toFixed(2)} max={100} color='#3FBF11' > 38 </Progress>
            </ProgressStatus>
            <div className='search'>
              <div className='showing'> Showing {report.projects?.length || 0} Projects</div>
              <div className='spacer'></div>
            </div>
          </div>

          <Cards>
            {
              (report.projects || []).map((k, i) => (
              <Card key={i}>
                  <CardInfo>
                    <div className='info'>
                      <div className='logo'> Logo</div>
                      <div className='title'> 
                        <div> {k.name } </div>
                        <div className='progress'> 
                          <Progress value={k.progress?.toFixed(2)} height='5px' max={100} bkcolor='#DCDFE8'  color='#EB622B' showTag />  
                        </div>
                      </div>
                      <div className='chart'> 
                        <div className='data'> {Math.ceil(k.score) < 10 ? `0${Math.ceil(k.score)}` : Math.ceil(k.score)} </div>
                        <StatusChart prog={Math.ceil(k.score)}/> 
                      </div>
                    </div>
                    <div className='description'>
                      {k.description}
                    </div>
                  </CardInfo>
                  <CardFooter>
                    <CardFooterIcon> <SVGTUpMedal /> </CardFooterIcon>
                    <CardFooterIcon><SVGNote /></CardFooterIcon>
                    <CardFooterIcon> <SVGStar /> </CardFooterIcon>
                    <CardFooterIcon> <SVGMedal /></CardFooterIcon>
                    <CardFooterIcon> <SVGRightTick /></CardFooterIcon>                
                  </CardFooter>
                </Card>
              ))
            }
            <Spacer></Spacer>       
          </Cards>
        </CardHolder> 

        <FlexWrapper>
          <Graph>
              
              <div className='header'>Sectionwise Compliance Trend Analysis</div>
              <div className='info'>
                <div className='sections'>
                  <div className='title'> Sections </div>
                  <ol>
                    { dataSections().map((o, i) => (
                      <li key={i}>{o.name}</li>
                    ))}
                    
                  </ol>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={dataSections()}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis />
                    <Tooltip label="{timeTaken}" labelFormatter={(i, a) => (dataSections()[i]?.name)}/>
                    <Legend />
                    <Bar dataKey="Fully Compliant" stackId="a" fill="#008000" barSize={20} />
                    <Bar dataKey="Partially Compliant" stackId="a" fill="#005CC8" barSize={20} />
                    <Bar dataKey="Non Compliant" stackId="a" fill="#EB622B" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>


              </div>
            </Graph>
            <LeaderBoard>
              <div className='header'>
                <span class='title'> Leaderboard</span>
              </div>
              <div className='info'>
                <div className='title'> High Performing Sections </div>
                {report.high_sections?.map((o, i) => (
                  <>
                    <div>{i == 0 ? <SVGCrown left='-6px' /> : i + 1}</div>
                    <div>{o.name}</div>
                    <div>{o.score.toFixed(2)}</div>
                  </>
                ))}

                <>
                  <div className='title'> Least Performing Sections </div>
                    {report.low_sections?.map((o, i) => (
                      <>
                        <div>{i + 1}</div>
                        <div>{o.name}</div>
                        <div>{o.score.toFixed(2)}</div>
                      </>
                    ))}
                </>
                : null}
              </div>
            </LeaderBoard>
            <Spacer />
        </FlexWrapper>

        <FlexWrapper>
          <SmallCards>
            <div><CircularProgressCard /></div>
            <div><CircularProgressCard /></div>
            <div><CircularProgressCard /></div>
            <div><CircularProgressCard /></div>
          </SmallCards>
          
          <InsightsContainer>
            <Insights />
          </InsightsContainer>
          

        </FlexWrapper>
      </Content>
    </Layout>
  )
}
{/* <style>.a{fill:#d3dde5;}.b{fill:#1a6b8f;}</style> */}

const InsightsContainer = styled.div`
  margin-right: 30px;
`

const SmallCards = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: baseline;
  > div {
    padding-right: 20px;
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F7FAFD;
  background: linear-gradient(0deg, #F0F7FD 460px, #FFFFFF 461px, #FFFFFF 100%);
  align-items: center;
  // flex: 1;
  // height: 100%;
`

const Content = styled.div`
  align-items: center;
  flex-grow: 1;
  width: 100%;
  background-color: #F7FAFD;
  padding-bottom: 40px;
  // min-height: 460px;
  // position: relative;
`

const Cards = styled.div`
  display: flex;
  > div {
    margin-right: 40px;
  }
`

const Spacer = styled.div`
  min-width: 30px;
  min-height: 100px;
`

const CardHolder = styled.div`
  min-width: 100%;
  width: 100%;
  overflow-x: scroll;
  height: 431px;
  // background: transparent url('img/Rectangle 24.png') 0% 0% no-repeat padding-box;
  // background-color: #CA3F07;
  // background-image: linear-gradient(#CA3F07, #a83304);
  background: url('/img/agency_cards_bk.jpg') left top repeat, url('/img/dashboards/dots-vertical.png') 30px 0px no-repeat;

  opacity: 1;
  padding-left: 100px;
  > .header {
    display: flex;
    justify-content: space-between;
    > .search {
      padding-top: 25px;
      display: flex;
      > .showing {
        font: normal normal bold 20px/30px Muli;
        color: #FFFFFF;
        margin-right: 30px;
        padding-top: 12px;
      }
      > .search {

      }
      > .spacer {
        width: 36px;
      }
    }
  }
`

const ProgressStatus = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 1;
  margin-top: 33px;
  margin-bottom: 43px;
  // > progress::-webkit-progress-bar { background-color: #fff; }
  // > progress::-webkit-progress-value { background: #3FBF11; }
  // > progress::-moz-progress-bar { background: #fff; }

  > progress {
    border-radius: 4px;
    width: 492px;
    height: 8px;
    color: ${p => p.color};
  }
`

const Progress = styled.progress`
  position: relative;
  height: ${p => p.height || '8px'};
  &::-webkit-progress-bar { 
    background-color: ${p => p.bkcolor || '#fff'};
    border-radius: 10px;
  }
  &::-webkit-progress-value { 
    background: ${p => p.color};
    border-radius: 10px;
  }
  &::-moz-progress-bar { 
    background: ${p => p.bkcolor || '#fff'};
    border-radius: 10px;
  }
  -webkit-appearance: none;
  border-radius: 10px;

  ${p => p.showTag && css`
    &::after {
      width: 38px;
      height: 16px;
      background: #FFEDE6 0% 0% no-repeat padding-box;
      border-radius: 3px;
      content: "${p => p.value}%";
      position: absolute;
      top: -16px;
      left: 0;
      text-align: center;
      width: 38px;
      font: normal normal normal 10px/15px Muli;
      letter-spacing: 0px;
      color: #EB622B;
    }
  `}
  
`

const Card = styled.div`
  top: 580px;
  left: 100px;
  width: 312px;
  height: 54px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  border-radius: 5px 5px 0px 0px;
  opacity: 1;
  // > div {
  //   padding-left: 32px;
  // }
`

const CardHeader = styled.div`
  width: 312px;
  height: 54px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  border-radius: 5px 5px 0px 0px;
  opacity: 1;

  line-height: 54px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  padding-left: 32px;
`

const CardInfo = styled.div`
  height: 155px;
  background-color: #fff;
  border-top-left-radius: 5px;  
  border-top-right-radius: 5px;
  > .info {
    display: flex;
    height: 78px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 5px;
    padding: 19px 16px;
    > .logo {
      width: 50px;
      height: 50px;
      background: #EB622B 0% 0% no-repeat padding-box;
      border-radius: 3px;
      text-align: center;
      font: normal normal bold 12px/18px Muli;
      line-height: 50px;
      color: #FFFFFF;
      text-transform: uppercase;
    }
    > .title {
      margin-left: 10px;
      text-align: left;
      font: normal normal bold 15px/22px Muli;
      color: #000000;
      flex: 1;
      > div:first-child {
        height: 33px;
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
  > .description {
    width: 301px;
    height: 72px;
    text-align: left;
    font: normal normal normal 12px/18px Muli;
    color: #666666;
    padding-left: 16px;
    overflow: hidden;
    text-overflow: ellipsis;

  }

`

const CardFooter = styled.div`
  height: 59px;
  display: flex;
  // background: #FFFFFF 0% 0% no-repeat padding-box;
  background: #FFEDE6 0% 0% no-repeat padding-box;
  border: 1px solid #DEDEDE;
  border-radius: 0px 0px 5px 5px;
  opacity: 1;
  padding-left: 27px;
  padding-top: 12px;
`

const CardFooterIcon = styled.div`
  width: 36px;
  height: 36px;
  // background: #D3DDE5 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  &  {
    margin-right: 20px;
  }
`

const FlexWrapper = styled.div`
  display: flex;
  padding-left: 70px;
  margin-top: 55px;
  // background-color: 

`

const Graph = styled.div`
  flex: 1;
  // background-color: #fff;

  > .header {
    height: 73px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    border: 1px solid #BBBBBB;
    border-bottom: none;
    padding-left: 40px;
    font: normal normal bold 20px/30px Muli;
    color: #666666;
    line-height: 73px;
  }

  > .info {
    display: flex;
    > .sections {
      min-width: 250px;
      background-color: rgb(243, 245, 251);
      margin-right: 20px;
      border-right: 1px solid #BBBBBB;
      .title {
        font: normal normal 600 18px/26px Muli;
        color: #000000;
        margin-top: 23px;
        padding-left: 23px;
      }
      > ol {
        padding-top: 20px;
        margin: 0;
        li {
          margin-top: 15px;
          font: normal normal normal 12px/17px;
          color: #000000;
        }
        
      }
    }
    height: 572px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #BBBBBB;
  }
`

const LeaderBoard = styled.div`
  margin-left: 40px;
  border: 1px solid #BBBBBB;
  background-color: #fff;
  > .header {
    width: 429px;
    min-width: 429px;
    height: 73px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    padding-left: 40px;
    border-bottom: 1px solid #BBBBBB;
    > .title {
      height: 23px;
      text-align: left;
      font-size: 18px;
      font-weight: 600;
      color: #666666;
      line-height: 73px;
      
    }
  }

  > .info {
    padding: 30px;
    display: grid;
    max-width: 429px;
    grid-template-columns: 50px 1fr 50px;
    grid-row-gap: 20px;
    > .title {
      grid-column: 1 / -1;
      text-align: left;
      font-size: 18px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 10px;
    }
  }

`

const CurrentStatusBox = styled.div`
  min-width: 454px;
  width: 454px;
  height: 255px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DDDDDD;
  position: relative;
  margin-right: 40px;
  > .label {
    position: absolute;
    top: 0;
    left: -8px;
    width: 100px;
    height: 39px;
  }

  > .label-text {
    position: absolute;
    top: 8px;
    left: 22px;
    color: #fff;
    font-size: 20px;
  }
  > .title {
    height: 25px;
    text-align: left;
    font-size: 20px;
    color: #1A6B8F;
    margin-top: 8px;
    margin-left: 110px;
  }

  > .info {
    display: flex;
    margin-top: 10px;
    > .graph {
      margin-right: 20px;
    }
  }

  > .mandate {
    position: absolute;
    bottom: 10px;
    right: 10px;
    text-align: left;
    font: italic normal 300 15px;
    letter-spacing: 0px;
    color: #CFCFCF;
  }
`

const LabelSquare = styled.div`
  display: flex;

  > .box {
    width: 15px;
    height: 15px;
    background-color: ${p => p.color};
    margin-right: 8px;
    margin-top: 3px;
  }
  font: normal normal 600 15px;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
  margin-bottom: 27px;
  // margin-top: 14px;
  &:first-child {
    margin-top: 35px;
  }
`

const MainInfo = styled.div`
height: 200px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DDDDDD;
display: flex;
padding-top: 40px;
> .logo {
  margin-left: 100px;
  width: 120px;
  height: 120px;
  background: #EB622B 0% 0% no-repeat padding-box;
  border-radius: 3px;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0px;
  color: #FFFFFF;
  line-height: 120px;
  text-align: center;
}
> .info {
  flex: 1;
  color: #000000;
  margin-left: 20px;
  > .title {
    font-weight: bold;
    font-size: 20px;
  }
  > .description {
    margin-top: 13px;
    height: 40px;
    font-weight: normal;
    font-size: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid #DDDDDD;
  }
  > .status {
    margin-top: 20px;
    display: flex;
    > div {
      width: 145px;
      height: 30px;
      display: flex;
      // flex-direction: column;
      align-items: center;
      border-radius: 15px;
      
      padding-left: 15px;
      font: normal normal bold 12px/18px Muli;
      color: #FFFFFF;
      box-shadow: 0px 1px 2px #00000029;  
      margin-right: 15px;
      span {
        margin-left: 10px;
      }
      &:first-child {
        background: #3FBF11 0% 0% no-repeat padding-box;
      }  
      &:nth-child(2) {
        background: #FFBF00 0% 0% no-repeat padding-box;
      }
      &:nth-child(3) {
        background: #CFCFCF 0% 0% no-repeat padding-box;
        color: #FFF;

      }
    }
  }
}
> .progress {
  
  margin-left: 20px;
  > .round {
    margin-left: 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 8px solid #FFBF00;
    padding-top: 17px;
    text-align: center;
    font: normal normal bold 35px/51px Muli;
    margin-bottom: 10px;
  }
  > div:last-child {
    text-transform: uppercase;
  }
}
`

function SvgQuestion() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
      <g transform="translate(-230 -851)"><circle fill='#d3dde5' cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)"/>
      <g transform="translate(-65.502 2.5)">
        <g transform="translate(311.5 872.015)"><rect fill='#1a6b8f' width="3" height="3"/></g>
      <g transform="translate(307 856.985)"><path fill='#1a6b8f' d="M139.834,89.522A6,6,0,0,0,128,90.947h3a3.011,3.011,0,1,1,6,.51,3.12,3.12,0,0,1-3.165,2.49,1.335,1.335,0,0,0-1.335,1.335h0v3.165h3v-1.71A6,6,0,0,0,139.834,89.522Z" transform="translate(-127.999 -84.918)"/></g></g></g>
    </svg>
  )
}

function SvgNote() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
      
      <g transform="translate(-230 -851)"><circle style={{fill: '#d3dde5'}} cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)"/>
      <g transform="translate(173.074 859.485)">
        <g transform="translate(67.798)"><path style={{fill:'#1a6b8f', stroke:'#1a6b8f', strokeWidth: '0.5px'}} d="M80.949,4.848,76.206.1a.356.356,0,0,0-.252-.1H69.27A1.474,1.474,0,0,0,67.8,1.472V16.558A1.474,1.474,0,0,0,69.27,18.03H79.581a1.474,1.474,0,0,0,1.472-1.472V5.1A.356.356,0,0,0,80.949,4.848ZM76.31,1.217l3.527,3.526H77.069a.76.76,0,0,1-.759-.759V1.217Zm4.03,15.341a.76.76,0,0,1-.759.759H69.27a.76.76,0,0,1-.759-.759V1.472A.76.76,0,0,1,69.27.713H75.6V3.984a1.474,1.474,0,0,0,1.472,1.472H80.34Z" transform="translate(-67.798 0)"/>
        </g>
        <g transform="translate(71.219 9.051)"><path style={{fill:'#1a6b8f', stroke:'#1a6b8f', strokeWidth: '0.5px'}} d="M170.99,257.012h-5.7a.356.356,0,0,0,0,.713h5.7a.356.356,0,1,0,0-.713Z" transform="translate(-164.932 -257.012)"/></g><g transform="translate(71.219 11.234)"><path style={{fill:'#1a6b8f', stroke:'#1a6b8f', strokeWidth: '0.5px'}} d="M170.99,347.4h-5.7a.356.356,0,0,0,0,.713h5.7a.356.356,0,1,0,0-.713Z" transform="translate(-164.932 -347.404)"/></g><g transform="translate(71.219 13.515)"><path style={{fill:'#1a6b8f', stroke:'#1a6b8f', strokeWidth: '0.5px'}} d="M169.137,392.6h-3.848a.356.356,0,0,0,0,.713h3.848a.356.356,0,0,0,0-.713Z" transform="translate(-164.932 -392.601)"/></g></g></g>
    </svg>
  )
}

function SvgTime() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
      <g transform="translate(-184 -851)"><g transform="translate(-46)"><circle style={{fill: '#d3dde5'}} cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)"/></g><g transform="translate(10894.745 -4875.541)"><path style={{fill: '#1a6b8f'}} d="M138.248,106.056h19.014a.784.784,0,0,0,.679-.391,11.76,11.76,0,1,0-20.372,0A.784.784,0,0,0,138.248,106.056Zm9.507-16.464a10.2,10.2,0,0,1,9.044,14.9H138.711a10.2,10.2,0,0,1,9.044-14.9Z" transform="translate(-10841 5647)"/><path style={{fill: '#1a6b8f'}} d="M161.568,201.568a.784.784,0,1,0,0-1.568h-.784a.784.784,0,0,0,0,1.568Z" transform="translate(-10862.656 5545.998)"/><path style={{fill: '#1a6b8f'}} d="M328.784,201.568h.784a.784.784,0,1,0,0-1.568h-.784a.784.784,0,1,0,0,1.568Z" transform="translate(-11014.188 5545.998)"/><path style={{fill: '#1a6b8f'}} d="M248.784,114.352a.784.784,0,0,0,.784-.784v-.784a.784.784,0,1,0-1.568,0v.784A.784.784,0,0,0,248.784,114.352Z" transform="translate(-10942.03 5625.373)"/><path style={{fill: '#1a6b8f'}} d="M206.318,166.417a2.351,2.351,0,1,0,4.111-2.09,2.326,2.326,0,0,0-.7-.6l-5.018-4.1a.784.784,0,0,0-1.2.947Zm2.477-1.424a.777.777,0,0,0,.142.092.775.775,0,0,1,.261.212.784.784,0,1,1-1.377.667.781.781,0,0,0-.056-.159l-1.313-2.726Z" transform="translate(-10901.826 5582.571)"/></g></g>
    </svg>
  )
}

function SvgMsg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><g transform="translate(-294 -851)"><g transform="translate(64)"><circle style={{fill:'#d3dde5'}} cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)"/></g><g transform="translate(302.485 859.485)"><path style={{fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.1px'}} d="M177.79,209.4a.528.528,0,1,1-.528-.528A.528.528,0,0,1,177.79,209.4Zm0,0" transform="translate(-170.51 -201.512)"/><path style={{fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.1px'}} d="M14.956,3.961H13.5V3.075A3.073,3.073,0,0,0,10.429,0H3.074A3.072,3.072,0,0,0,0,3.075v9.9a.528.528,0,0,0,.866.406l3.248-2.707h.412v1.452A3.072,3.072,0,0,0,7.6,15.2h6.315l3.248,2.706a.528.528,0,0,0,.866-.406V7.035a3.072,3.072,0,0,0-3.074-3.074ZM3.923,9.619a.528.528,0,0,0-.338.122L1.056,11.848V3.074A2.017,2.017,0,0,1,3.074,1.057h7.355a2.017,2.017,0,0,1,2.018,2.018V7.6a2.02,2.02,0,0,1-2.018,2.018Zm13.051,6.756-2.528-2.107a.528.528,0,0,0-.338-.122H7.6a2.018,2.018,0,0,1-2.018-2.018V10.675h4.847a3.058,3.058,0,0,0,1.775-.566h2.468a.528.528,0,0,0,0-1.056H13.139a3.052,3.052,0,0,0,.355-1.207h1.179a.528.528,0,1,0,0-1.056H13.5V5.017h1.452a2.018,2.018,0,0,1,2.018,2.018Zm0,0"/><path style={{fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.1px'}} d="M137.622,66.208a.886.886,0,1,1,.886.887.528.528,0,0,0-.528.528v.566a.528.528,0,1,0,1.056,0v-.111a1.943,1.943,0,1,0-2.471-1.87h0a.528.528,0,0,0,1.056,0Zm0,0" transform="translate(-131.757 -62.002)"/><path style={{fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.1px'}} d="M216.185,321.332H209.4a.528.528,0,1,0,0,1.056h6.789a.528.528,0,0,0,0-1.056Zm0,0" transform="translate(-201.512 -310.016)"/></g></g></svg>
  )
}

function SvgAlert() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><g transform="translate(-349 -851)"><g transform="translate(119)"><circle style={{fill: '#d3dde5'}} cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)"/></g><g transform="translate(357.484 859.485)"><path style={{fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.2px'}} d="M9.015,0A9.015,9.015,0,1,0,18.03,9.015,9.01,9.01,0,0,0,9.015,0Zm0,16.622a7.607,7.607,0,1,1,7.607-7.607A7.6,7.6,0,0,1,9.015,16.622Z"/><g transform="translate(8.311 4.538)"><path style={{fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.2px'}} d="M236.7,128.877a.7.7,0,0,0-.7.7v4.535a.7.7,0,1,0,1.409,0v-4.535A.7.7,0,0,0,236.7,128.877Z" transform="translate(-236 -128.877)"/></g><g transform="translate(8.064 11.345)"><circle style={{fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.2px'}} cx="0.951" cy="0.951" r="0.951"/></g></g></g></svg>
  )
}

function SVGTUpMedal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 45.915 50"><g transform="translate(-1477.043 -482)"><g transform="translate(1456.293 482)"><circle fill='#8eb8f8' cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill='#043555' d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill='#043555' d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill='#5394f8' cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1458.91 401.163)"><g transform="translate(37.727 91)"><path fill='#fff' d="M194.453,101.808a1.349,1.349,0,0,0-1.345-1.345,1.345,1.345,0,1,0,0-2.691h-5.516a11.73,11.73,0,0,0,.807-4.754A2.024,2.024,0,0,0,186.381,91h-.4a.7.7,0,0,0-.646.511c-.666,2.591-1.706,5.564-4.332,6.167v9.734l2.327.772a6.706,6.706,0,0,0,2.126.35h6.31a1.345,1.345,0,1,0,0-2.691h1.345a1.345,1.345,0,1,0,0-2.691A1.349,1.349,0,0,0,194.453,101.808Z" transform="translate(-181 -91)"/></g><g transform="translate(31 96.426)"><path fill='#fff' d="M34.363,212H31.673a.672.672,0,0,0-.673.673v12.108a.672.672,0,0,0,.673.673h2.691a2.02,2.02,0,0,0,2.018-2.018v-9.417A2.02,2.02,0,0,0,34.363,212Zm0,10.763a.673.673,0,1,1,.673-.673A.673.673,0,0,1,34.363,222.763Z" transform="translate(-31 -212)"/></g></g></g></svg>
  )
}

function SVGNote() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 45.915 50"><g transform="translate(-1599.042 -479)"><g transform="translate(1578.292 479)"><circle fill="#ff7474" cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill="#0064fe" d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill="#0064fe" d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill="#ff4f4f" cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1563.225 489.262)"><g transform="translate(51.2)"><g transform="translate(0)"><path fill="#fff" d="M62.217,4.82a.689.689,0,0,1-.689-.689V0H53.266A2.066,2.066,0,0,0,51.2,2.066V17.214a2.066,2.066,0,0,0,2.066,2.066H64.283a2.066,2.066,0,0,0,2.066-2.066V4.82Z" transform="translate(-51.2)"/></g></g><g transform="translate(62.906 0.403)"><g transform="translate(0)"><path fill="#fff" d="M341.333,10V13.04h3.039Z" transform="translate(-341.333 -10.001)"/></g></g></g></g></svg>
  )
}

function SVGRightTick() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 45.915 50"><g transform="translate(-1667.084 -579)"><g transform="translate(1646.334 579)"><circle fill='#50d650' cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill='#ffbf00' d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill='#ffbf00' d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill='green' cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1681.193 542.445)"><g transform="translate(0 51.096)"><path fill='#fff' stroke='#fff' d="M17.5,51.312a.708.708,0,0,0-1-.017l-.017.017L4.946,62.846,1.2,59.1a.708.708,0,0,0-1,1l4.247,4.247a.708.708,0,0,0,1,0L17.481,52.313A.708.708,0,0,0,17.5,51.312Z" transform="translate(0 -51.096)"/></g></g></g></svg>
  )
}

function SVGStar() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" viewBox="0 0 45.915 50"><g transform="translate(-1587 -538)"><g transform="translate(1566.25 538)"><circle fill='#ae94b9' cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill='#1a6b8f' d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill='#1a6b8f' d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill='#6c3782' cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1600 548)"><path fill='#fff' d="M19.68,8.213,17.879,8a8.041,8.041,0,0,0-.8-1.938L18.2,4.636a.584.584,0,0,0-.046-.754L16.3,2.025a.586.586,0,0,0-.754-.046L14.116,3.1a7.931,7.931,0,0,0-1.934-.8L11.967.5A.585.585,0,0,0,11.4,0H8.777a.583.583,0,0,0-.564.5L8,2.3a8,8,0,0,0-1.936.8L4.636,1.982a.585.585,0,0,0-.753.045L2.026,3.884a.585.585,0,0,0-.044.754L3.1,6.062A7.974,7.974,0,0,0,2.3,8L.5,8.215A.584.584,0,0,0,0,8.78V11.4a.585.585,0,0,0,.5.564l1.8.216a8.023,8.023,0,0,0,.8,1.934L1.983,15.545a.586.586,0,0,0,.046.754l1.853,1.857a.586.586,0,0,0,.753.046L6.061,17.08A7.944,7.944,0,0,0,8,17.88l.216,1.8a.583.583,0,0,0,.564.5H11.4a.582.582,0,0,0,.564-.5l.216-1.8a8.014,8.014,0,0,0,1.936-.8l1.426,1.12a.585.585,0,0,0,.753-.045L18.153,16.3a.585.585,0,0,0,.045-.755l-1.12-1.424a7.986,7.986,0,0,0,.8-1.935l1.8-.216a.583.583,0,0,0,.5-.564V8.778A.581.581,0,0,0,19.68,8.213Zm-9.589,6.922a5.045,5.045,0,1,1,5.045-5.045A5.045,5.045,0,0,1,10.091,15.135Z"/></g></g></svg>
  )
}

function SVGMedal() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="32.141" height="35" viewBox="0 0 32.141 35"><g opacity='0.3' transform="translate(-20.75 0)"><circle fill='#cfcfcf' cx="13.897" cy="13.897" r="13.897" transform="translate(22.893 0)"/><g transform="translate(20.75 21.985)"><path fill='#999' d="M25.531,319.7l-4.781,8.288,5.581-.3,2.535,4.981,4.423-7.668A13.883,13.883,0,0,1,25.531,319.7Z" transform="translate(-20.75 -319.659)"/><path fill='#999' d="M312.787,319.1a13.888,13.888,0,0,1-7.737,5.333l4.437,7.682,2.535-4.981,5.581.3Z" transform="translate(-285.462 -319.1)"/></g><circle fill='#999' cx="10.073" cy="10.073" r="10.073" transform="translate(26.717 3.824)"/><path fill='#fff' d="M165.021,109.387a.526.526,0,0,0-.289-.9l-3.975-.579a.518.518,0,0,1-.393-.289l-1.778-3.6a.525.525,0,0,0-.944,0l-1.771,3.6a.547.547,0,0,1-.393.289l-3.975.579a.526.526,0,0,0-.289.9l2.873,2.8a.531.531,0,0,1,.152.462l-.675,3.955a.525.525,0,0,0,.765.551l3.555-1.867a.513.513,0,0,1,.489,0l3.555,1.867a.528.528,0,0,0,.765-.551l-.682-3.955a.518.518,0,0,1,.152-.462Z" transform="translate(-121.328 -96.579)"/></g></svg>
  )
}



function SvgSBOrange() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="109.238" height="46" viewBox="0 0 109.238 46"><defs><filter id="a" x="0" y="0" width="109.238" height="46" filterUnits="userSpaceOnUse"><feOffset dy="1" input="SourceAlpha"/><feGaussianBlur stdDeviation="1.5" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-62.439 -1707.5)"><g style={{filter:'url(#a)'}} transform="matrix(1, 0, 0, 1, 62.44, 1707.5)"><path style={{fill: '#eb622b'}} d="M3.7,37H103.938L83.734,0H3.7Z" transform="translate(0.8 3.5)"/></g><path style={{fill: '#ca3f07'}} d="M4.073,1.938V4.365H0Z" transform="translate(66.939 1706.635)"/></g></svg>
  )
}