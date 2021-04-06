import React, { useState } from 'react'
import Header from '../shared/header'
import styled, { css } from 'styled-components'
import { Pie, PieChart } from 'recharts';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { entityCommType, qualityGateTypes } from '../../../store/master-data';
import { Select } from '../../../components/form'
import { Input } from '../../../components/form'
import { get } from '../../../store/api'
import { useEffect } from 'react';
import { SVGCrown, SVGCheck, SVGSolution, SVGCancel } from '../shared/icons'
import Progress from '../shared/progress'
import Filters from '../shared/filters'
import LeaderBoard from '../shared/leaderboard'
import Insights from '../shared/insights'
import { BarProgressCard, CircularProgressCard } from '../shared/progress-card'
import rtl from 'styled-components-rtl'
import { t, T, To, numberToArabic } from '../../../utils/translate';
// import Card from '../shared/card'

function useInput({ type = 'text' /*...*/ }) {
  const [value, setValue] = useState("");
  const input = <Input value={value} onChange={e => setValue(e.target.value)} type={type} />;
  return [value, input];
}


const defaultSelectedEntity = { label: 'All', value: 0 }
const defaultSelectedProject = { label: 'All', value: 0 }
export default function ({ lang, setLang, ...props }) {
  const [gates, setGates] = useState([])
  const [entityFilter, EntityFilterInput] = useInput({})
  const [entitiesForSelect, setEntitiesForSelect] = useState([])
  const [selectedEntity, setSelectedEntity] = useState(defaultSelectedEntity)


  const [report, setReport] = useState({})

  useEffect(() => {
    console.log(get)
    get('reports/entities', {
      success: (json) => {
        setGates(json.data)
        setEntitiesForSelect([defaultSelectedEntity, ...json.data.map((o) => ({ label: o.name, value: o.id }))])
      }, error: () => []
    })

    get('reports/db_state', {
      success: (json) => {
        setReport(json.data)
      }
    })
  }, [])


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  console.log("gates", gates)
  // rtl={lang=='ar'} className={lang} 
  return (
    <Layout dir={lang == 'ar' ? 'rtl' : 'ltr'}>
      <Header viewType='State View' viewName='Jawda' lang={lang} setLang={setLang}></Header>
      <Content>
        <Filters entities={gates} projects={[]} {...{ lang, setLang }} />
        <MainInfo>
          <div className='logo'> <img src='/img/logos/jawda.png' /> </div>
          <div className='info'>
            <div className='title'> <To o={report} k='name'></To> </div>
            <div className='description'>
              <To o={report} k='description'></To>
            </div>
            <div className='status'>
              <div> <span> {numberToArabic(report.total_projects, lang)} <T k='total_projects' /> </span> </div>
              <div> <SVGCheck /> <span> {numberToArabic(report.overall_projects_completed, lang)} <T k='completed' /> </span> </div>
              <div> <SVGSolution /> <span> {numberToArabic(report.overall_projects_wip, lang)} <T k='running' /> </span> </div>
              <div> {numberToArabic(Math.ceil(report.overall_projects_completed / report.overall_projects_wip * 100), lang)}% <span> <T k='adoption_rate' /> </span> </div>
            </div>
          </div>
          <div className='progress'>
            <div className='round'>{numberToArabic(Math.ceil(report.overall_score), lang)}</div>
            <div> <T k='compliance_score' /></div>
          </div>
          <Spacer />
        </MainInfo>
        <CardHolder>
          <div className='header'>
            <ProgressStatus>
              <div> {numberToArabic(report.overall_progress * 100, lang)}% <T k='completed' /> </div>
              <Progress color='#3FBF11' value={report.overall_progress * 100} max={100}> {38} </Progress>
            </ProgressStatus>
            <div className='search'>
              <div className='showing'> <T k='showing' /> {numberToArabic(gates.length, lang)} <T k={gates.length > 0 ? 'entities' : 'entity'} /></div>
              {EntityFilterInput}
              <div className='spacer'></div>
            </div>
          </div>

          <Cards>
            {
              (report.entities || []).map((k, i) => {
                // console.log(entityFilter.trim().length , k.name.toLowerCase())
                if (entityFilter.trim().length > 0 && !k.name.toLowerCase().includes(entityFilter.toLowerCase())) {
                  return null
                }
                return (

                  <CardWrapper onClick={() => { window.location.hash = `/agency/${k.id}` }} >
                    <StatusCard key={i}>
                      <div className='info'>
                        <div className='logo'> <img src={`/img/logos/entities/${k.id}.png`} /></div>
                        <div className='title'>
                          <div className='name'> <To o={k} k='name' /> </div>
                          <div className='progress'>
                            <Progress value={Math.ceil(k.progress * 100)} height='5px' max={100} bkcolor='#DCDFE8' width='90%'
                              color='#0064FE' tagBkColor='#EBF4FF' showTag tagColor='#0064FE' lang={lang} />
                          </div>
                        </div>
                        <div className='chart'>
                          <div className='data'> {numberToArabic(Math.ceil(k.score) < 10 ? `0${Math.ceil(k.score)}` : Math.ceil(k.score), lang)}</div>
                          <StatusChart prog={Math.ceil(k.score)} />
                        </div>
                      </div>

                      <div className='status'>
                        <div className='title'> <T k='projects' /></div>
                        <div className='info'>
                          <div className='status'>
                            <div className='value'> {numberToArabic(k.projects.completed, lang)} </div>
                            <div className='label'> {t('completed')}
                              <BarB color='#3FBF11' />
                            </div>

                          </div>
                          <div className='status'>
                            <div className='value'> {numberToArabic(k.projects.wip, lang)} </div>
                            <div className='label'>
                              {t('wip')}
                              <BarB color='#FFBF00' />
                            </div>

                          </div>
                          <div className='status'>
                            <div className='value'> {numberToArabic(k.projects.not_started, lang)} </div>
                            <div className='label'>
                              {t('not_started')}
                              <BarB color='#999999' />
                            </div>

                          </div>
                        </div>
                      </div>
                    </StatusCard>
                  </CardWrapper>
                )
              })
            }
            <Spacer></Spacer>
          </Cards>
        </CardHolder>

        <FlexWrapper>
          <Graph>

            <div className='header'>{t('swcta')}</div>
            <div className='info'>
              <div className='sections'>
                <div className='title'>{t('sections')}</div>
                <ol>
                  {report.section_wise_status?.map((o, i) => {
                    // const t1 = t 
                    // debugger
                    // if(o.name == 'eServices Profile') {
                    //   debugger
                    // }
                    return (<li key={i}>{t(o.name.trim())}</li>)
                  })}

                </ol>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart

                  width={500}
                  height={300}
                  data={report.section_wise_status || []}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <YAxis />
                  <Tooltip label="{timeTaken}" labelFormatter={(i, a) => (report.section_wise_status[i]?.name)} />
                  <Legend />
                  <Bar dataKey="Fully Compliant" stackId="a" fill="#008000" barSize={20} />
                  <Bar dataKey="Partially Compliant" stackId="a" fill="#005CC8" barSize={20} />
                  <Bar dataKey="Non Compliant" stackId="a" fill="#EB622B" barSize={20} />
                </BarChart>
              </ResponsiveContainer>


            </div>
          </Graph>
          <LeaderBoard leaderBoardData={{ 'Least Performing Entities': (report.low_entities || []), 'High Performing Entities': (report.high_entities || []) }}
            lang={lang} />
          <Spacer />
        </FlexWrapper>

        <FlexWrapper>
          <SmallCards>
            {
              ["1", "2", "3"].map((level) => {
                const l = ((report.compliance_by_mandate_level || {})[level] || {})
                return <div key={level}>
                  <CircularProgressCard level={level}
                    full={l["Fully Compliant"]}
                    par={l['Partially Compliant']}
                    non={l['Non Compliant']} total={(l['Fully Compliant'] + l['Partially Compliant'] * .5).toFixed(2)} />
                </div>
              })
            }
            {/* <div><CircularProgressCard level={1} full={(report.compliance_by_mandate_level || {})["1"]} par={20} non={40} total={60}/></div>
            <div><CircularProgressCard level={2} full={32} par={30} non={200} total={45}/></div>
            <div><CircularProgressCard level={3} full={40} par={20} non={50} total={67}/></div> */}
          </SmallCards>

          <InsightsContainer>
            <Insights />
          </InsightsContainer>


        </FlexWrapper>
      </Content>
    </Layout>
  )
}
{/* <style>.a{fill:#d3dde5;}.b{fill:#1a6b8f;}</style> */ }

const InsightsContainer = styled.div`
  ${rtl`
    margin-right: 30px;
  `}
`

const SmallCards = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: baseline;
  > div {
    ${rtl`
      padding-right: 20px;
    `}
  }
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #F7FAFD;
  background: linear-gradient(0deg, #F0F7FD 460px, #FFFFFF 461px, #FFFFFF 100%);
  align-items: center;
  ${p => p.rtl && css`
    direction: rtl;
  `}
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
  flex-wrap: wrap;
`

const Spacer = styled.div`
  min-width: 30px;
  min-height: 100px;
`

const CardHolder = styled.div`
  min-width: 100%;
  width: 100%;
  overflow-x: scroll;
  height: 592px;
  // background: transparent url('img/Rectangle 24.png') 0% 0% no-repeat padding-box;
  // background-color: #CA3F07;
  // background-image: linear-gradient(#CA3F07, #a83304);
  background: transparent url('img/db/cards-back.svg') 0% 0% no-repeat padding-box;
  opacity: 1;
  ${rtl`
    padding-left: 60px;
  `}
  
  > .header {
    display: flex;
    justify-content: space-between;
    > .search {
      padding-top: 25px;
      ${rtl` margin-right: 42px;`}
      display: flex;
      > .showing {
        font: normal normal bold 20px/30px Muli;
        color: #FFFFFF;
        ${rtl`
          margin-right: 30px;
          padding-top: 12px;
        `}
      }
      > .search {

      }
      > .spacer {
        width: 36px;
      }
    }
  }
`

const CardWrapper = styled.div`
  ${rtl`
    margin-left: 40px;
  `}
  
  margin-bottom: 40px;

`

const ProgressStatus = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  opacity: 1;
  margin-top: 33px;
  margin-bottom: 40px;
  ${rtl`
    margin-left: 40px;
  `}
  
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

const BarB = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  width: 25px;
  height: 5px;
  border-radius: 10px;
  background-color: ${p => p.color};
`


const CardInfo = styled.div`
  height: 206px;
  background-color: #fff;
  ${rtl`
    padding-left: 32px;
  `}
  

  > div {
    
    padding-top: 30px;
    padding-bottom: 10px;
    // height: 24px;
    display: flex;
    & .icon {
      width: 27px;
      min-width: 27px;
      height: 24px;
      display: flex;
      justify-content: center;
    }
    & .progress {
      margin-top: -5px;
      ${rtl`
        margin-left: 29px;
      `}
      
      height: 26px;
      span {
        text-align: left;
        font-size: 14px;
        color: #000000;
      }
      > progress { 
        position: relative;
        top: -8px;
        width: 164px; 
        height: 5px;
      }
    }
  }
`

const CardFooter = styled.div`
  height: 59px;
  display: flex;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DEDEDE;
  border-radius: 0px 0px 5px 5px;
  opacity: 1;
  ${rtl`
    padding-left: 27px;
  `}
  
  padding-top: 12px;
`

const CardFooterIcon = styled.div`
  width: 36px;
  height: 36px;
  background: #D3DDE5 0% 0% no-repeat padding-box;
  opacity: 1;
  border-radius: 50%;
  &  {
    ${rtl`
      margin-right: 20px;
    `}
    
  }
`

const FlexWrapper = styled.div`
  display: flex;
  ${rtl`
    padding-left: 70px;
  `}
  
  margin-top: 55px;
`

const Graph = styled.div`
  flex: 1;
  // background-color: #fff;

  > .header {
    height: 73px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    border: 1px solid #BBBBBB;
    ${rtl`
      padding-left: 40px;
    `}
    font: normal normal bold 20px/30px Muli;
    color: #666666;
    line-height: 73px;
  }

  > .info {
    display: flex;
    > .sections {
      min-width: 250px;
      background-color: rgb(243, 245, 251);
      ${rtl`
        margin-right: 20px;
        border-right: 1px solid #BBBBBB;
      `}
      .title {
        font: normal normal 600 18px/26px Muli;
        color: #000000;
        margin-top: 23px;
        ${rtl`
          padding-left: 23px;
        `}
        
      }
      > ol {
        padding-top: 20px;
        height: 600px;
        overflow: auto;
        margin: 0;
        li {
          margin-top: 15px;
          font: normal normal normal 12px/17px;
          color: #000000;
        }
        
      }
    }
    height: 654px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #BBBBBB;
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
    ${rtl` margin-left: 100px; `}
    
    width: 120px;
    height: 120px;
    // background: #1A6B8F 0% 0% no-repeat padding-box;
    border: 1px solid #1A6B8F;
    border-radius: 3px;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 0px;
    color: #FFFFFF;
    line-height: 120px;
    text-align: center;
    img {
      margin-top: 5px;
      width: 100px;
    }
  }
  > .info {
    flex: 1;
    color: #000000;
    ${rtl`
      margin-left: 20px;
    `}
    
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
    // > .status {
    //   margin-top: 20px;
    //   display: flex;

    //   > div {
    //     width: 145px;
    //     height: 30px;
    //     border-radius: 15px;
    //     padding-top: 6px;
    //     padding-left: 15px;
    //     font: normal normal bold 12px/18px Muli;
    //     color: #FFFFFF;
    //     box-shadow: 0px 1px 2px #00000029;  
    //     margin-right: 15px;
    //     &:first-child {
    //       background: #3FBF11 0% 0% no-repeat padding-box;
    //     }  
    //     &:nth-child(2) {
    //       background: #FFBF00 0% 0% no-repeat padding-box;
    //     }
    //     &:nth-child(3) {
    //       background: #FFFFFF 0% 0% no-repeat padding-box;
    //       color: #000000;
    //     }
    //   }
    // }
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
        
        ${rtl`
          padding-left: 15px;
          margin-right: 15px;
        `}
        font: normal normal bold 12px/18px Muli;
        color: #FFFFFF;
        box-shadow: 0px 1px 2px #00000029;  
        span {
          ${rtl`
            margin-left: 10px;
          `}
        }
        &:first-child {
          background: #FFFFFF 0% 0% no-repeat padding-box;
          color: #000;
        }  
        &:nth-child(2) {
          background: #3FBF11 0% 0% no-repeat padding-box;
        }  
        &:nth-child(3) {
          background: #FFBF00 0% 0% no-repeat padding-box;
        }
        &:nth-child(4) {
          background: #FFFFFF 0% 0% no-repeat padding-box;
          color: #000;
  
        }
      }
    }
  }
  > .progress {
    ${rtl`
      margin-left: 20px;
    `}
    width: 160px;

    > .round {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 8px solid #FFBF00;
      line-height: 82px;
      text-align: center;
      font-size: 32px;
      ${rtl`
        margin-left: 28px;
      `}
    }

    > div:last-child {
      ${rtl`
        margin-top: 10px;   
      `}
      text-align: center;
      text-transform: uppercase;
      font-size: 14px;
    }
  }
`

// const Filters = styled.div`
//   height: 121px;
//   background: #F7FAFD 0% 0% no-repeat padding-box;
//   padding-left: 100px;

//   display: flex;
//   justify-content: space-between;

//   .selectors {
//     align-self: center;
//     display: flex;
//     > div {
//       margin-right: 40px;
//     }
//   }

//   .actions {
//     align-self: center;
//     display: flex;
//     margin-right: 100px;
//     > div:first-child {
//       padding: 10px;
//       margin-right: 25px;
//     }
//     > div:last-child {
//       padding: 10px;
//       background-color: #EB622B;
//       color: #fff;
//       border-radius: 4px;
//     }
//   }
// `

function SvgQuestion() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
      <g transform="translate(-230 -851)"><circle fill='#d3dde5' cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)" />
        <g transform="translate(-65.502 2.5)">
          <g transform="translate(311.5 872.015)"><rect fill='#1a6b8f' width="3" height="3" /></g>
          <g transform="translate(307 856.985)"><path fill='#1a6b8f' d="M139.834,89.522A6,6,0,0,0,128,90.947h3a3.011,3.011,0,1,1,6,.51,3.12,3.12,0,0,1-3.165,2.49,1.335,1.335,0,0,0-1.335,1.335h0v3.165h3v-1.71A6,6,0,0,0,139.834,89.522Z" transform="translate(-127.999 -84.918)" /></g></g></g>
    </svg>
  )
}

function SvgNote() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">

      <g transform="translate(-230 -851)"><circle style={{ fill: '#d3dde5' }} cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)" />
        <g transform="translate(173.074 859.485)">
          <g transform="translate(67.798)"><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.5px' }} d="M80.949,4.848,76.206.1a.356.356,0,0,0-.252-.1H69.27A1.474,1.474,0,0,0,67.8,1.472V16.558A1.474,1.474,0,0,0,69.27,18.03H79.581a1.474,1.474,0,0,0,1.472-1.472V5.1A.356.356,0,0,0,80.949,4.848ZM76.31,1.217l3.527,3.526H77.069a.76.76,0,0,1-.759-.759V1.217Zm4.03,15.341a.76.76,0,0,1-.759.759H69.27a.76.76,0,0,1-.759-.759V1.472A.76.76,0,0,1,69.27.713H75.6V3.984a1.474,1.474,0,0,0,1.472,1.472H80.34Z" transform="translate(-67.798 0)" />
          </g>
          <g transform="translate(71.219 9.051)"><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.5px' }} d="M170.99,257.012h-5.7a.356.356,0,0,0,0,.713h5.7a.356.356,0,1,0,0-.713Z" transform="translate(-164.932 -257.012)" /></g><g transform="translate(71.219 11.234)"><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.5px' }} d="M170.99,347.4h-5.7a.356.356,0,0,0,0,.713h5.7a.356.356,0,1,0,0-.713Z" transform="translate(-164.932 -347.404)" /></g><g transform="translate(71.219 13.515)"><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.5px' }} d="M169.137,392.6h-3.848a.356.356,0,0,0,0,.713h3.848a.356.356,0,0,0,0-.713Z" transform="translate(-164.932 -392.601)" /></g></g></g>
    </svg>
  )
}

function SvgTime() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35">
      <g transform="translate(-184 -851)"><g transform="translate(-46)"><circle style={{ fill: '#d3dde5' }} cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)" /></g><g transform="translate(10894.745 -4875.541)"><path style={{ fill: '#1a6b8f' }} d="M138.248,106.056h19.014a.784.784,0,0,0,.679-.391,11.76,11.76,0,1,0-20.372,0A.784.784,0,0,0,138.248,106.056Zm9.507-16.464a10.2,10.2,0,0,1,9.044,14.9H138.711a10.2,10.2,0,0,1,9.044-14.9Z" transform="translate(-10841 5647)" /><path style={{ fill: '#1a6b8f' }} d="M161.568,201.568a.784.784,0,1,0,0-1.568h-.784a.784.784,0,0,0,0,1.568Z" transform="translate(-10862.656 5545.998)" /><path style={{ fill: '#1a6b8f' }} d="M328.784,201.568h.784a.784.784,0,1,0,0-1.568h-.784a.784.784,0,1,0,0,1.568Z" transform="translate(-11014.188 5545.998)" /><path style={{ fill: '#1a6b8f' }} d="M248.784,114.352a.784.784,0,0,0,.784-.784v-.784a.784.784,0,1,0-1.568,0v.784A.784.784,0,0,0,248.784,114.352Z" transform="translate(-10942.03 5625.373)" /><path style={{ fill: '#1a6b8f' }} d="M206.318,166.417a2.351,2.351,0,1,0,4.111-2.09,2.326,2.326,0,0,0-.7-.6l-5.018-4.1a.784.784,0,0,0-1.2.947Zm2.477-1.424a.777.777,0,0,0,.142.092.775.775,0,0,1,.261.212.784.784,0,1,1-1.377.667.781.781,0,0,0-.056-.159l-1.313-2.726Z" transform="translate(-10901.826 5582.571)" /></g></g>
    </svg>
  )
}

function SvgMsg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><g transform="translate(-294 -851)"><g transform="translate(64)"><circle style={{ fill: '#d3dde5' }} cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)" /></g><g transform="translate(302.485 859.485)"><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.1px' }} d="M177.79,209.4a.528.528,0,1,1-.528-.528A.528.528,0,0,1,177.79,209.4Zm0,0" transform="translate(-170.51 -201.512)" /><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.1px' }} d="M14.956,3.961H13.5V3.075A3.073,3.073,0,0,0,10.429,0H3.074A3.072,3.072,0,0,0,0,3.075v9.9a.528.528,0,0,0,.866.406l3.248-2.707h.412v1.452A3.072,3.072,0,0,0,7.6,15.2h6.315l3.248,2.706a.528.528,0,0,0,.866-.406V7.035a3.072,3.072,0,0,0-3.074-3.074ZM3.923,9.619a.528.528,0,0,0-.338.122L1.056,11.848V3.074A2.017,2.017,0,0,1,3.074,1.057h7.355a2.017,2.017,0,0,1,2.018,2.018V7.6a2.02,2.02,0,0,1-2.018,2.018Zm13.051,6.756-2.528-2.107a.528.528,0,0,0-.338-.122H7.6a2.018,2.018,0,0,1-2.018-2.018V10.675h4.847a3.058,3.058,0,0,0,1.775-.566h2.468a.528.528,0,0,0,0-1.056H13.139a3.052,3.052,0,0,0,.355-1.207h1.179a.528.528,0,1,0,0-1.056H13.5V5.017h1.452a2.018,2.018,0,0,1,2.018,2.018Zm0,0" /><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.1px' }} d="M137.622,66.208a.886.886,0,1,1,.886.887.528.528,0,0,0-.528.528v.566a.528.528,0,1,0,1.056,0v-.111a1.943,1.943,0,1,0-2.471-1.87h0a.528.528,0,0,0,1.056,0Zm0,0" transform="translate(-131.757 -62.002)" /><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.1px' }} d="M216.185,321.332H209.4a.528.528,0,1,0,0,1.056h6.789a.528.528,0,0,0,0-1.056Zm0,0" transform="translate(-201.512 -310.016)" /></g></g></svg>
  )
}

function SvgAlert() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35"><g transform="translate(-349 -851)"><g transform="translate(119)"><circle style={{ fill: '#d3dde5' }} cx="17.5" cy="17.5" r="17.5" transform="translate(230 851)" /></g><g transform="translate(357.484 859.485)"><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.2px' }} d="M9.015,0A9.015,9.015,0,1,0,18.03,9.015,9.01,9.01,0,0,0,9.015,0Zm0,16.622a7.607,7.607,0,1,1,7.607-7.607A7.6,7.6,0,0,1,9.015,16.622Z" /><g transform="translate(8.311 4.538)"><path style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.2px' }} d="M236.7,128.877a.7.7,0,0,0-.7.7v4.535a.7.7,0,1,0,1.409,0v-4.535A.7.7,0,0,0,236.7,128.877Z" transform="translate(-236 -128.877)" /></g><g transform="translate(8.064 11.345)"><circle style={{ fill: '#1a6b8f', stroke: '#1a6b8f', strokeWidth: '0.2px' }} cx="0.951" cy="0.951" r="0.951" /></g></g></g></svg>
  )
}

function MobileFramework() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14.057" height="24" viewBox="0 0 14.057 24"><g transform="translate(-139 -728)"><path style={{ fill: '#ff7f31' }} d="M29.186,26H17.871A1.371,1.371,0,0,1,16.5,24.629V3.371A1.371,1.371,0,0,1,17.871,2H29.186a1.371,1.371,0,0,1,1.371,1.371V24.629A1.371,1.371,0,0,1,29.186,26ZM17.871,2.686a.686.686,0,0,0-.686.686V24.629a.686.686,0,0,0,.686.686H29.186a.686.686,0,0,0,.686-.686V3.371a.686.686,0,0,0-.686-.686Z" transform="translate(122.5 726)" /><path style={{ fill: '#ff7f31' }} d="M30.214,11.686H16.843a.343.343,0,0,1,0-.686H30.214a.343.343,0,0,1,0,.686Z" transform="translate(122.5 720.086)" /><path style={{ fill: '#ff7f31' }} d="M30.214,57.686H16.843a.343.343,0,0,1,0-.686H30.214a.343.343,0,0,1,0,.686Z" transform="translate(122.5 689.857)" /><path style={{ fill: '#ff7f31' }} d="M34.576,63.341a1.264,1.264,0,1,1,1.264-1.264,1.264,1.264,0,0,1-1.264,1.264Zm0-1.843a.579.579,0,1,0,.579.578A.579.579,0,0,0,34.576,61.5Z" transform="translate(111.452 687.352)" /><path style={{ fill: '#ff7f31' }} d="M35.086,7.436H32.343a.343.343,0,1,1,0-.686h2.743a.343.343,0,1,1,0,.686Z" transform="translate(112.314 722.878)" /></g></svg>
  )
}

function EserviceFramework() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23.414" height="24" viewBox="0 0 23.414 24"><g transform="translate(-134 -792)"><path style={{ fill: '#043555' }} d="M28.661,12a10.721,10.721,0,0,0-.351-2.726l1.355-1L27.036,3.723,25.493,4.4a10.625,10.625,0,0,0-4.72-2.727L20.587,0H15.329l-.186,1.672A10.625,10.625,0,0,0,10.423,4.4L8.88,3.723,6.251,8.277l1.355,1a10.769,10.769,0,0,0,0,5.453l-1.355,1L8.88,20.277l1.543-.676a10.625,10.625,0,0,0,4.72,2.727L15.329,24h5.259l.186-1.672a10.625,10.625,0,0,0,4.72-2.727l1.543.676,2.629-4.554-1.355-1A10.721,10.721,0,0,0,28.661,12Zm-8.685,9.077-.491.109-.157,1.408H16.587l-.157-1.408-.491-.109a9.242,9.242,0,0,1-4.832-2.792l-.34-.37-1.3.569L8.1,16.11l1.14-.839-.151-.479a9.348,9.348,0,0,1,0-5.583l.151-.479L8.1,7.89,9.469,5.516l1.3.569.34-.37A9.242,9.242,0,0,1,15.94,2.923l.491-.109.157-1.408h2.741l.157,1.408.491.109a9.242,9.242,0,0,1,4.832,2.792l.34.37,1.3-.569L27.818,7.89l-1.14.839.151.479a9.348,9.348,0,0,1,0,5.583l-.151.479,1.14.839-1.371,2.374-1.3-.569-.34.37A9.242,9.242,0,0,1,19.976,21.077Z" transform="translate(127.749 792)" /><path style={{ fill: '#043555' }} d="M123.728,201.654l-1-.984-2.572,2.626,2.626,2.572.984-1-1.621-1.588Z" transform="translate(19.188 600.736)" /><path style={{ fill: '#043555' }} d="M314.871,201.654l1.588,1.621-1.621,1.588.984,1,2.626-2.572-2.572-2.626Z" transform="translate(-166.373 600.736)" /><path style={{ fill: '#043555' }} d="M0,0H9.708V1.406H0Z" transform="matrix(0.206, -0.979, 0.979, 0.206, 144.024, 808.602)" /></g></svg>
  )
}

function WebFramework() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27.199" height="24" viewBox="0 0 27.199 24"><path style={{ fill: '#0064fe' }} d="M24.111,24H3.088A3.091,3.091,0,0,1,0,20.912V3.088A3.091,3.091,0,0,1,3.088,0H24.111A3.091,3.091,0,0,1,27.2,3.088V20.912A3.091,3.091,0,0,1,24.111,24ZM3.088.92A2.171,2.171,0,0,0,.92,3.088V20.912A2.171,2.171,0,0,0,3.088,23.08H24.111a2.171,2.171,0,0,0,2.168-2.168V3.088A2.171,2.171,0,0,0,24.111.92Zm0,0" transform="translate(0 0)" /><path style={{ fill: '#0064fe' }} d="M241.51,245.354h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -228.375)" /><path style={{ fill: '#0064fe' }} d="M241.51,295.963h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -275.659)" /><path style={{ fill: '#0064fe' }} d="M241.51,144.135h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -133.806)" /><path style={{ fill: '#0064fe' }} d="M241.51,194.744h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -181.09)" /><path style={{ fill: '#0064fe' }} d="M26.739,80.65H.46a.46.46,0,0,1,0-.92H26.739a.46.46,0,0,1,0,.92Zm0,0" transform="translate(0 -74.492)" /><path style={{ fill: '#0064fe' }} d="M80.56,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,80.56,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,80.56,26.138Zm0,0" transform="translate(-73.93 -23.562)" /><path style={{ fill: '#0064fe' }} d="M30.126,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,30.126,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,30.126,26.138Zm0,0" transform="translate(-26.81 -23.562)" /><path style={{ fill: '#0064fe' }} d="M131,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,131,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,131,26.138Zm0,0" transform="translate(-121.054 -23.562)" /><path style={{ fill: '#0064fe' }} d="M62.8,154.11H54.46a.46.46,0,0,1-.46-.46v-9.975a.46.46,0,0,1,.46-.46H62.8a.46.46,0,0,1,.46.46v9.975A.46.46,0,0,1,62.8,154.11Zm-7.884-.92h7.424v-9.055H54.92Zm0,0" transform="translate(-50.452 -133.806)" /></svg>
  )
}

function SvgSBOrange() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="109.238" height="46" viewBox="0 0 109.238 46"><defs><filter id="a" x="0" y="0" width="109.238" height="46" filterUnits="userSpaceOnUse"><feOffset dy="1" input="SourceAlpha" /><feGaussianBlur stdDeviation="1.5" result="b" /><feFlood flood-opacity="0.161" /><feComposite operator="in" in2="b" /><feComposite in="SourceGraphic" /></filter></defs><g transform="translate(-62.439 -1707.5)"><g style={{ filter: 'url(#a)' }} transform="matrix(1, 0, 0, 1, 62.44, 1707.5)"><path style={{ fill: '#eb622b' }} d="M3.7,37H103.938L83.734,0H3.7Z" transform="translate(0.8 3.5)" /></g><path style={{ fill: '#ca3f07' }} d="M4.073,1.938V4.365H0Z" transform="translate(66.939 1706.635)" /></g></svg>
  )
}


const StatusCard = styled.div`
  width: 401px;
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
      max-width: 265px;
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
    ${rtl`
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
      > .status {
        
        ${rtl`
          border-right: 1px solid #DCDFE8;
        `}
        
        height: 38px;
        display: flex;
        margin-top: 6px;
        width: 130px;
        
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
          ${rtl`
              margin-right: 6px;
          `}
          
          line-height: 38px;
        }
      }
    }
  }

`

function StatusChart({ width = 50, height = 50, innerRadius = 14, outerRadius = 20, value = 200, prog, ...props }) {

  return (
    <PieChart width={50} height={50}>
      <Pie
        data={[{ name: '', value: value }]}
        cx={15}
        cy={15}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        fill="#DCDFE8"
        startAngle={90 - prog / 100 * 360}
        endAngle={450}
      ></Pie>
      <Pie
        data={[{ name: '', value: value }]}
        cx={15}
        cy={15}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        fill="#FFBF00"
        startAngle={90}
        endAngle={90 - prog / 100 * 360}
      ></Pie>

    </PieChart>
    //   <PieChart width={800} height={400}>
    //   <Pie
    //     data={data}
    //     cx={120}
    //     cy={200}
    //     innerRadius={60}
    //     outerRadius={80}
    //     fill="#8884d8"
    //     startAngle={90}
    //     endAngle={-195}
    //     direction="right"
    //     dataKey="value"
    //   ></Pie>
    // </PieChart>
  )
}
// function StatusCard(props) {
//   return (
//     <StatusCard>

//     </div>
//   )
// }