import React, { useEffect, useState } from 'react'
import Header from '../shared/header'
import styled from 'styled-components'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';
import { BarChart, Bar, Legend } from 'recharts';
import { qualityGateTypes } from '../../../store/master-data';
import { Select } from '../../../components/form'
import LeaderBoard from '../shared/leaderboard'
import Insights from '../shared/insights';
import { CircularProgressCard } from '../shared/progress-card';
import Downloads from '../shared/downloads';
import { useParams } from 'react-router';
import { get } from '../../../store/api';
import Filters from '../shared/filters'
import rtl from 'styled-components-rtl'
import { t, To, translateDate, numberToArabic, translateObjectKeys } from '../../../utils/translate'

// import Card from '../shared/card'




export default function({lang, setLang, ...props}) {

  const { entity_id, project_id } = useParams()

  const [report, setReport] = useState({})

  useEffect(() => {
    get(`reports/${entity_id}/db_project/${project_id}`, {success: (json) => {
      setReport(json.data)
    }})
  }, [entity_id, project_id])

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

  const gates = {
    1: {
      icon: { enabled: <SVGTUpMedal />, disabled: <SVGTUpMedalDisabled /> },
      eservices: '',
      website: '',
      mobile: ''
    },
    2: {
      icon: { enabled: <SVGNote />, disabled: <SVGNoteDisabled /> },
      eservices: '',
      website: '',
      mobile: ''
    },
    3: {
      icon: { enabled: <SVGMedal />, disabled: <SVGNoteDisabled /> }, 
      eservices: '',
      website: '',
      mobile: ''
    },
    4: {
      icon: { enabled: <SVGStar />, disabled: <SVGStarDisabled /> },
      eservices: '',
      website: '',
      mobile: ''
    },
    5: {
      icon: { enabled: <SVGRightTick />, disabled: <SVGRightTickDisabled /> },
      eservices: '',
      website: '',
      mobile: ''
    },

  }

  let latestBadge;
  Object.keys(gates).forEach((k, i) => {
    if (!latestBadge && report[`qgate${i+1}`]?.total === 1){
      latestBadge = gates[i+1].icon.enabled;
    }
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <Layout dir={lang == 'ar' ? 'rtl' : 'ltr'}>
      <Header viewType='Project View' viewName={report.name} lang={lang} setLang={setLang}></Header>
      <Content>
        <Filters {...{lang, setLang}} />
        <MainInfo>
          <div className='logo'> {t('Logo')} </div>
          <div className='info'>
            <div className='title'> <To o={report} k='name' /> </div>
            <div className='description'> <To o={report} k='description' /> </div>
            <div className='status'>
              <div>{t('Date of Start')}: {translateDate(report.start_date)}</div>
              <div>{t('Date of Release')}: {translateDate(report.end_date)}</div>
            </div>
          </div>
          <div className='progress'>
            <div className='round'>{numberToArabic(report.total_score, lang)}</div>
            <Badge>{latestBadge}</Badge>
          </div>
          <Spacer />
        </MainInfo>
        <CardHolder>
          <ProgressStatus> 
            <div> {numberToArabic(((report.total_completed_parameters / (report.total_parameters * 1.0)) * 100).toFixed(2), lang)} % {t('Completed')} </div>
            <Progress value={(report.total_completed_parameters / (report.total_parameters * 1.0)) * 100} max={100}> {38} </Progress>
          </ProgressStatus>
          <Cards>
            {
              Object.keys(gates).map((k, i) => (
              <Card key={k}>
                  <CardHeader><Icon>{report[`qgate${i+1}`]?.total === 1 ? gates[k].icon.enabled : gates[k].icon.disabled}</Icon> {t(qualityGateTypes[k]?.label)} - {numberToArabic((report[`qgate${i+1}`]?.total || 0).toFixed(2) * 100, lang)}% </CardHeader>
                  <CardInfo>
                    <div>
                      <div className='icon'> <WebFramework /></div>
                      <div className='progress'> 
                        <span> {t('Website Framework')} </span>
                        <Progress value={report[`qgate${i+1}`]?.Website * 100} max={100} color='#0064FE' bkcolor='#DCDFE8'></Progress>
                      </div>
                    </div>
                    <div>
                      <div className='icon'> <MobileFramework /></div>
                      <div className='progress'> 
                        <span> {t('Mobile Framework')} </span>
                        <Progress value={(report[`qgate${i+1}`] || {})['Mobile App'] * 100} max={100} color='#FF7F31' bkcolor='#DCDFE8'></Progress>
                      </div>
                    </div>
                    <div>
                      <div className='icon'> <EserviceFramework /></div>
                      <div className='progress'> 
                        <span> {t('E-Service Framework')} </span>
                        <Progress value={(report[`qgate${i+1}`] || {})['E-Service'] * 100} max={100} color='#043555' bkcolor='#DCDFE8'></Progress>
                      </div>
                    </div>

                  </CardInfo>
                  <CardFooter>
                    <CardFooterIcon> <SvgQuestion /> </CardFooterIcon>
                    <CardFooterIcon><SvgTime /></CardFooterIcon>
                    <CardFooterIcon> <SvgNote /> </CardFooterIcon>
                    <CardFooterIcon><SvgMsg /></CardFooterIcon>
                    <CardFooterIcon><SvgAlert /></CardFooterIcon>                
                  </CardFooter>
                </Card>
              ))
            }
            <Spacer></Spacer>       
          </Cards>
        </CardHolder> 

        <FlexWrapper>
        <Graph>
              
              <div className='header'>
                {t('swcta')}
                <Select
                  options={[{ label: 'All', value: 'all' }, { label: 'This Week' }, { label: 'This Month' }, { label: 'This Quarter' }, { label: 'This Year' }]}
                  value={{ label: 'All', value: 'all' }}
                />
              </div>
              <div className='info'>
                <div className='sections'>
                  <div className='title'> {t('Sections')} </div>
                  <ol>
                    {report.extras?.map((o, i) => (
                      <li key={i}>{numberToArabic(i + 1, lang)}. {t(o.name)}</li>
                    ))}
                  </ol>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={translateObjectKeys(report.extras, ['Fully Compliant', 'Partially Compliant', 'Non Compliant'])}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis tickMargin={lang === 'ar' ? 30 : undefined} tickFormatter={(value) => numberToArabic(value, lang)} />
                    <Tooltip label="{timeTaken}" labelFormatter={(i, a) => t((report.extras || [])[i]?.name)} formatter={(value) => numberToArabic(value, lang)} />
                    <Legend />
                    <Bar dataKey={t('fully_compliant')} stackId="a" fill="#008000" barSize={20} />
                    <Bar dataKey={t('partially_compliant')} stackId="a" fill="#005CC8" barSize={20} />
                    <Bar dataKey={t('non_compliant')} stackId="a" fill="#EB622B" barSize={20} />
                  </BarChart>
                </ResponsiveContainer>


              </div>
            </Graph>
          
            <LeaderBoard leaderBoardData={{
              'High Performing Entities': report.score_by_section?.slice(0, 5).map((a) => ({name: a[0], score: a[1]}) ),
              'Least Performing Entities': report.score_by_section?.reverse()?.slice(0,5).map((a) => ({name: a[0], score: a[1]})),
              
            }} type='Sections' lang={lang}>
            </LeaderBoard>
            <Spacer />
        </FlexWrapper>

        <FlexWrapper>
          <SmallCards>
            {
              [1, 2, 3].map((level) => {
                const l = ((report.compliance_by_mandate_level || {})[level] || {})
                return <div key={level}>
                  <CircularProgressCard level={level} lang={lang}
                    full={Math.ceil(l["Fully Compliant"])} 
                    par={Math.ceil(l['Partially Compliant'])} 
                    non={Math.ceil(l['Non Compliant'])} total={Math.ceil((l['Fully Compliant']+l['Partially Compliant']*.5).toFixed(2))}/>
                </div>    
              })
            }
          </SmallCards>
          <InsightsContainer>
            <Insights lang={lang} />
          </InsightsContainer>
          

        </FlexWrapper>

      </Content>
    </Layout>
  )
}
{/* <style>.a{fill:#d3dde5;}.b{fill:#1a6b8f;}</style> */}

const Badge = styled.div`
  padding: 0px 14px;
  position: relative;

  > span {
    font-size: 20px;
    font-weight: 800;
    padding-left: 14px;
    margin-left: 14px;
    border-left: 1px solid darkgray;

    > span {
      border-bottom: 1px solid darkgray;
      border-bottom-style: dashed;
    }
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // flex: 1;
  // height: 100%;
`

const Content = styled.div`
  align-items: center;
  flex-grow: 1;
  width: 100%;
  padding-bottom: 40px;
  // min-height: 460px;
  // position: relative;
`

const Cards = styled.div`
  display: flex;
  > div {
    ${rtl`
    margin-right: 40px;
    `}
    
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
  height: 499px;
  // background: transparent url('img/Rectangle 24.png') 0% 0% no-repeat padding-box;
  // background-color: #CA3F07;
  background-image: linear-gradient(#CA3F07, #a83304);
  opacity: 1;
  ${rtl`
  padding-left: 100px;
  `}

  /* total width */
  &::-webkit-scrollbar {
    background-color: transparent;
    height: 8px;
  }

  /* background of the scrollbar except button or resizer */
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* scrollbar itself */
  &::-webkit-scrollbar-thumb {
    background-color: #C9C9C9;
    border-radius: 4px;
  }

  /* set button(top and bottom of the scrollbar) */
  &::-webkit-scrollbar-button {
    display:none;
  }
`

const ProgressStatus = styled.div`
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
  &::-webkit-progress-bar { background-color: ${p => p.bkcolor || '#fff'}; }
  &::-webkit-progress-value { background: ${p => p.color}; }
  &::-moz-progress-bar { background: ${p => p.bkcolor || '#fff'}; }
  -webkit-appearance: none;
`

const Card = styled.div`
  top: 580px;
  ${rtl`
    left: 100px;
  `}
  
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
  position: relative;

  line-height: 54px;
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  ${rtl`
    padding-left: 82px;
  `}
  
`

const Icon = styled.div`
  position: absolute;
  left: 16px;
  top: -8px;
  border: 8px solid #eeeeee;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardInfo = styled.div`
  height: 206px;
  background-color: #fff;
  ${rtl`
  padding-left: 30px;
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
  // background-color: 

`
const Graph = styled.div`
  flex: 1;
  // background-color: #fff;

  > .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 73px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    border: 1px solid #BBBBBB;
    ${rtl`
      padding-left: 40px;
      padding-right: 20px;
    `}
    font: normal normal bold 20px/30px Muli;
    color: #666666;

    > div {
      width: fit-content;
      font-size: 16px;
      line-height: 1;
      height: 56px;
      > div > div {
        background-color: #FFFFFF;
      }
    }
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
        list-style: none;
        ${rtl`
          padding-left: 23px;
        `}
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


const InsightsContainer = styled.div`
  ${rtl`
  max-width: 534px;
  margin-right: 30px;
  `}
  
`

const CurrentStatusBox = styled.div`
  min-width: 454px;
  width: 454px;
  height: 255px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #DDDDDD;
  position: relative;
  // margin-right: 40px;
  > .label {
    position: absolute;
    top: 0;
    ${rtl`
    left: -8px;
    `}
    width: 100px;
    height: 39px;
  }

  > .label-text {
    position: absolute;
    top: 8px;
    ${rtl`
    left: 22px;
    `}
    color: #fff;
    font-size: 20px;
  }
  > .title {
    height: 25px;
    text-align: left;
    font-size: 20px;
    color: #1A6B8F;
    margin-top: 8px;
    ${rtl`
    margin-left: 110px;
    `}
  }

  > .info {
    display: flex;
    margin-top: 10px;
    > .graph {
      ${rtl`
      margin-right: 20px;
      `}
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
  > .logo {
    margin-top: 40px;
    ${rtl`
    margin-left: 100px;
    `}
    
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
    margin-top: 40px;
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
    > .status {
      font: normal normal bold 15px/22px Muli;
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
      display: flex;
      margin-top: 22px;
      > div:first-child {
        ${rtl`
        margin-right: 30px;
        `}
      }
    }
  }
  > .progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${rtl`
    margin-left: 20px;
    `}
    > .round {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 8px solid #EB622B;
      line-height: 74px;
      text-align: center;
      font-size: 24px;
      padding-top: 4px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
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

function MobileFramework() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14.057" height="24" viewBox="0 0 14.057 24"><g transform="translate(-139 -728)"><path style={{fill:'#ff7f31'}} d="M29.186,26H17.871A1.371,1.371,0,0,1,16.5,24.629V3.371A1.371,1.371,0,0,1,17.871,2H29.186a1.371,1.371,0,0,1,1.371,1.371V24.629A1.371,1.371,0,0,1,29.186,26ZM17.871,2.686a.686.686,0,0,0-.686.686V24.629a.686.686,0,0,0,.686.686H29.186a.686.686,0,0,0,.686-.686V3.371a.686.686,0,0,0-.686-.686Z" transform="translate(122.5 726)"/><path style={{fill:'#ff7f31'}} d="M30.214,11.686H16.843a.343.343,0,0,1,0-.686H30.214a.343.343,0,0,1,0,.686Z" transform="translate(122.5 720.086)"/><path style={{fill:'#ff7f31'}} d="M30.214,57.686H16.843a.343.343,0,0,1,0-.686H30.214a.343.343,0,0,1,0,.686Z" transform="translate(122.5 689.857)"/><path style={{fill:'#ff7f31'}} d="M34.576,63.341a1.264,1.264,0,1,1,1.264-1.264,1.264,1.264,0,0,1-1.264,1.264Zm0-1.843a.579.579,0,1,0,.579.578A.579.579,0,0,0,34.576,61.5Z" transform="translate(111.452 687.352)"/><path style={{fill:'#ff7f31'}} d="M35.086,7.436H32.343a.343.343,0,1,1,0-.686h2.743a.343.343,0,1,1,0,.686Z" transform="translate(112.314 722.878)"/></g></svg>
  )
}

function EserviceFramework() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23.414" height="24" viewBox="0 0 23.414 24"><g transform="translate(-134 -792)"><path style={{fill:'#043555'}} d="M28.661,12a10.721,10.721,0,0,0-.351-2.726l1.355-1L27.036,3.723,25.493,4.4a10.625,10.625,0,0,0-4.72-2.727L20.587,0H15.329l-.186,1.672A10.625,10.625,0,0,0,10.423,4.4L8.88,3.723,6.251,8.277l1.355,1a10.769,10.769,0,0,0,0,5.453l-1.355,1L8.88,20.277l1.543-.676a10.625,10.625,0,0,0,4.72,2.727L15.329,24h5.259l.186-1.672a10.625,10.625,0,0,0,4.72-2.727l1.543.676,2.629-4.554-1.355-1A10.721,10.721,0,0,0,28.661,12Zm-8.685,9.077-.491.109-.157,1.408H16.587l-.157-1.408-.491-.109a9.242,9.242,0,0,1-4.832-2.792l-.34-.37-1.3.569L8.1,16.11l1.14-.839-.151-.479a9.348,9.348,0,0,1,0-5.583l.151-.479L8.1,7.89,9.469,5.516l1.3.569.34-.37A9.242,9.242,0,0,1,15.94,2.923l.491-.109.157-1.408h2.741l.157,1.408.491.109a9.242,9.242,0,0,1,4.832,2.792l.34.37,1.3-.569L27.818,7.89l-1.14.839.151.479a9.348,9.348,0,0,1,0,5.583l-.151.479,1.14.839-1.371,2.374-1.3-.569-.34.37A9.242,9.242,0,0,1,19.976,21.077Z" transform="translate(127.749 792)"/><path style={{fill:'#043555'}} d="M123.728,201.654l-1-.984-2.572,2.626,2.626,2.572.984-1-1.621-1.588Z" transform="translate(19.188 600.736)"/><path style={{fill:'#043555'}} d="M314.871,201.654l1.588,1.621-1.621,1.588.984,1,2.626-2.572-2.572-2.626Z" transform="translate(-166.373 600.736)"/><path style={{fill:'#043555'}} d="M0,0H9.708V1.406H0Z" transform="matrix(0.206, -0.979, 0.979, 0.206, 144.024, 808.602)"/></g></svg>
  )
}

function WebFramework() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="27.199" height="24" viewBox="0 0 27.199 24"><path style={{fill: '#0064fe'}} d="M24.111,24H3.088A3.091,3.091,0,0,1,0,20.912V3.088A3.091,3.091,0,0,1,3.088,0H24.111A3.091,3.091,0,0,1,27.2,3.088V20.912A3.091,3.091,0,0,1,24.111,24ZM3.088.92A2.171,2.171,0,0,0,.92,3.088V20.912A2.171,2.171,0,0,0,3.088,23.08H24.111a2.171,2.171,0,0,0,2.168-2.168V3.088A2.171,2.171,0,0,0,24.111.92Zm0,0" transform="translate(0 0)"/><path style={{fill: '#0064fe'}} d="M241.51,245.354h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -228.375)"/><path style={{fill: '#0064fe'}} d="M241.51,295.963h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -275.659)"/><path style={{fill: '#0064fe'}} d="M241.51,144.135h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -133.806)"/><path style={{fill: '#0064fe'}} d="M241.51,194.744h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -181.09)"/><path style={{fill: '#0064fe'}} d="M26.739,80.65H.46a.46.46,0,0,1,0-.92H26.739a.46.46,0,0,1,0,.92Zm0,0" transform="translate(0 -74.492)"/><path style={{fill: '#0064fe'}} d="M80.56,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,80.56,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,80.56,26.138Zm0,0" transform="translate(-73.93 -23.562)"/><path style={{fill: '#0064fe'}} d="M30.126,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,30.126,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,30.126,26.138Zm0,0" transform="translate(-26.81 -23.562)"/><path style={{fill: '#0064fe'}} d="M131,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,131,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,131,26.138Zm0,0" transform="translate(-121.054 -23.562)"/><path style={{fill: '#0064fe'}} d="M62.8,154.11H54.46a.46.46,0,0,1-.46-.46v-9.975a.46.46,0,0,1,.46-.46H62.8a.46.46,0,0,1,.46.46v9.975A.46.46,0,0,1,62.8,154.11Zm-7.884-.92h7.424v-9.055H54.92Zm0,0" transform="translate(-50.452 -133.806)"/></svg>
  )
}

function SvgSBOrange() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="109.238" height="46" viewBox="0 0 109.238 46"><defs><filter id="a" x="0" y="0" width="109.238" height="46" filterUnits="userSpaceOnUse"><feOffset dy="1" input="SourceAlpha"/><feGaussianBlur stdDeviation="1.5" result="b"/><feFlood flood-opacity="0.161"/><feComposite operator="in" in2="b"/><feComposite in="SourceGraphic"/></filter></defs><g transform="translate(-62.439 -1707.5)"><g style={{filter:'url(#a)'}} transform="matrix(1, 0, 0, 1, 62.44, 1707.5)"><path style={{fill: '#eb622b'}} d="M3.7,37H103.938L83.734,0H3.7Z" transform="translate(0.8 3.5)"/></g><path style={{fill: '#ca3f07'}} d="M4.073,1.938V4.365H0Z" transform="translate(66.939 1706.635)"/></g></svg>
  )
}

function SVGTUpMedal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45.915 50"><g transform="translate(-1477.043 -482)"><g transform="translate(1456.293 482)"><circle fill='#8eb8f8' cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill='#043555' d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill='#043555' d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill='#5394f8' cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1458.91 401.163)"><g transform="translate(37.727 91)"><path fill='#fff' d="M194.453,101.808a1.349,1.349,0,0,0-1.345-1.345,1.345,1.345,0,1,0,0-2.691h-5.516a11.73,11.73,0,0,0,.807-4.754A2.024,2.024,0,0,0,186.381,91h-.4a.7.7,0,0,0-.646.511c-.666,2.591-1.706,5.564-4.332,6.167v9.734l2.327.772a6.706,6.706,0,0,0,2.126.35h6.31a1.345,1.345,0,1,0,0-2.691h1.345a1.345,1.345,0,1,0,0-2.691A1.349,1.349,0,0,0,194.453,101.808Z" transform="translate(-181 -91)"/></g><g transform="translate(31 96.426)"><path fill='#fff' d="M34.363,212H31.673a.672.672,0,0,0-.673.673v12.108a.672.672,0,0,0,.673.673h2.691a2.02,2.02,0,0,0,2.018-2.018v-9.417A2.02,2.02,0,0,0,34.363,212Zm0,10.763a.673.673,0,1,1,.673-.673A.673.673,0,0,1,34.363,222.763Z" transform="translate(-31 -212)"/></g></g></g></svg>
  )
}

function SVGNote() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45.915 50"><g transform="translate(-1599.042 -479)"><g transform="translate(1578.292 479)"><circle fill="#ff7474" cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill="#0064fe" d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill="#0064fe" d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill="#ff4f4f" cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1563.225 489.262)"><g transform="translate(51.2)"><g transform="translate(0)"><path fill="#fff" d="M62.217,4.82a.689.689,0,0,1-.689-.689V0H53.266A2.066,2.066,0,0,0,51.2,2.066V17.214a2.066,2.066,0,0,0,2.066,2.066H64.283a2.066,2.066,0,0,0,2.066-2.066V4.82Z" transform="translate(-51.2)"/></g></g><g transform="translate(62.906 0.403)"><g transform="translate(0)"><path fill="#fff" d="M341.333,10V13.04h3.039Z" transform="translate(-341.333 -10.001)"/></g></g></g></g></svg>
  )
}

function SVGRightTick() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45.915 50"><g transform="translate(-1667.084 -579)"><g transform="translate(1646.334 579)"><circle fill='#50d650' cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill='#ffbf00' d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill='#ffbf00' d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill='green' cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1681.193 542.445)"><g transform="translate(0 51.096)"><path fill='#fff' stroke='#fff' d="M17.5,51.312a.708.708,0,0,0-1-.017l-.017.017L4.946,62.846,1.2,59.1a.708.708,0,0,0-1,1l4.247,4.247a.708.708,0,0,0,1,0L17.481,52.313A.708.708,0,0,0,17.5,51.312Z" transform="translate(0 -51.096)"/></g></g></g></svg>
  )
}

function SVGMedal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45.915 50"><g transform="translate(-1587 -538)"><g transform="translate(1566.25 538)"><circle fill='#ae94b9' cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill='#1a6b8f' d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill='#1a6b8f' d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill='#6c3782' cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1600 548)"><path fill='#fff' d="M19.68,8.213,17.879,8a8.041,8.041,0,0,0-.8-1.938L18.2,4.636a.584.584,0,0,0-.046-.754L16.3,2.025a.586.586,0,0,0-.754-.046L14.116,3.1a7.931,7.931,0,0,0-1.934-.8L11.967.5A.585.585,0,0,0,11.4,0H8.777a.583.583,0,0,0-.564.5L8,2.3a8,8,0,0,0-1.936.8L4.636,1.982a.585.585,0,0,0-.753.045L2.026,3.884a.585.585,0,0,0-.044.754L3.1,6.062A7.974,7.974,0,0,0,2.3,8L.5,8.215A.584.584,0,0,0,0,8.78V11.4a.585.585,0,0,0,.5.564l1.8.216a8.023,8.023,0,0,0,.8,1.934L1.983,15.545a.586.586,0,0,0,.046.754l1.853,1.857a.586.586,0,0,0,.753.046L6.061,17.08A7.944,7.944,0,0,0,8,17.88l.216,1.8a.583.583,0,0,0,.564.5H11.4a.582.582,0,0,0,.564-.5l.216-1.8a8.014,8.014,0,0,0,1.936-.8l1.426,1.12a.585.585,0,0,0,.753-.045L18.153,16.3a.585.585,0,0,0,.045-.755l-1.12-1.424a7.986,7.986,0,0,0,.8-1.935l1.8-.216a.583.583,0,0,0,.5-.564V8.778A.581.581,0,0,0,19.68,8.213Zm-9.589,6.922a5.045,5.045,0,1,1,5.045-5.045A5.045,5.045,0,0,1,10.091,15.135Z"/></g></g></svg>
  )
}

function SVGStar() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="50" viewBox="0 0 45.915 50"><g transform="translate(-20.75)"><circle fill="#ffd15c" cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill="#40596b" d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill="#40596b" d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill="#f8b64c" cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/><path fill="#fff" d="M171.006,111.813a.752.752,0,0,0-.413-1.28l-5.679-.827a.74.74,0,0,1-.561-.413l-2.539-5.148a.751.751,0,0,0-1.348,0l-2.53,5.148a.782.782,0,0,1-.561.413l-5.679.827a.752.752,0,0,0-.413,1.28l4.1,4.006a.758.758,0,0,1,.217.659l-.965,5.65a.75.75,0,0,0,1.093.787l5.079-2.667a.733.733,0,0,1,.7,0l5.079,2.667a.754.754,0,0,0,1.093-.787l-.974-5.65a.74.74,0,0,1,.217-.659Z" transform="translate(-117.481 -93.516)"/></g></svg>
  )
}

function SVGStarDisabled() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="45.915" height="50" viewBox="0 0 45.915 50"><g transform="translate(-20.75)"><circle fill="#cfcfcf" cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill="#999" d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill="#999" d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill="#999" cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/><path fill="#fff" d="M171.006,111.813a.752.752,0,0,0-.413-1.28l-5.679-.827a.74.74,0,0,1-.561-.413l-2.539-5.148a.751.751,0,0,0-1.348,0l-2.53,5.148a.782.782,0,0,1-.561.413l-5.679.827a.752.752,0,0,0-.413,1.28l4.1,4.006a.758.758,0,0,1,.217.659l-.965,5.65a.75.75,0,0,0,1.093.787l5.079-2.667a.733.733,0,0,1,.7,0l5.079,2.667a.754.754,0,0,0,1.093-.787l-.974-5.65a.74.74,0,0,1,.217-.659Z" transform="translate(-117.481 -93.516)"/></g></svg>
  )
}

function SVGTUpMedalDisabled() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45.915" height="50" viewBox="0 0 45.915 50"><g transform="translate(-1477.043 -482)"><g transform="translate(1456.293 482)"><circle fill="#cfcfcf" cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill="#999" d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill="#999" d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill="#999" cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1458.91 401.163)"><g transform="translate(37.727 91)"><path fill="#fff" d="M194.453,101.808a1.349,1.349,0,0,0-1.345-1.345,1.345,1.345,0,1,0,0-2.691h-5.516a11.73,11.73,0,0,0,.807-4.754A2.024,2.024,0,0,0,186.381,91h-.4a.7.7,0,0,0-.646.511c-.666,2.591-1.706,5.564-4.332,6.167v9.734l2.327.772a6.706,6.706,0,0,0,2.126.35h6.31a1.345,1.345,0,1,0,0-2.691h1.345a1.345,1.345,0,1,0,0-2.691A1.349,1.349,0,0,0,194.453,101.808Z" transform="translate(-181 -91)"/></g><g transform="translate(31 96.426)"><path fill="#fff" d="M34.363,212H31.673a.672.672,0,0,0-.673.673v12.108a.672.672,0,0,0,.673.673h2.691a2.02,2.02,0,0,0,2.018-2.018v-9.417A2.02,2.02,0,0,0,34.363,212Zm0,10.763a.673.673,0,1,1,.673-.673A.673.673,0,0,1,34.363,222.763Z" transform="translate(-31 -212)"/></g></g></g></svg>
  )
}

function SVGNoteDisabled() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45.915" height="50" viewBox="0 0 45.915 50"><g transform="translate(-1599.042 -479)"><g transform="translate(1578.292 479)"><circle fill="#cfcfcf" cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill="#999" d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill="#999" d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill="#999" cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1563.225 489.262)"><g transform="translate(51.2)"><g transform="translate(0)"><path fill="#fff" d="M62.217,4.82a.689.689,0,0,1-.689-.689V0H53.266A2.066,2.066,0,0,0,51.2,2.066V17.214a2.066,2.066,0,0,0,2.066,2.066H64.283a2.066,2.066,0,0,0,2.066-2.066V4.82Z" transform="translate(-51.2)"/></g></g><g transform="translate(62.906 0.403)"><g transform="translate(0)"><path fill="#fff" d="M341.333,10V13.04h3.039Z" transform="translate(-341.333 -10.001)"/></g></g></g></g></svg>
  )
}

function SVGMedalDisabled() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45.915" height="50" viewBox="0 0 45.915 50"><g transform="translate(-1587 -538)"><g transform="translate(1566.25 538)"><circle fill="#cfcfcf" cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill="#999" d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill="#999" d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill="#999" cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1600 548)"><path fill="#fff" d="M19.68,8.213,17.879,8a8.041,8.041,0,0,0-.8-1.938L18.2,4.636a.584.584,0,0,0-.046-.754L16.3,2.025a.586.586,0,0,0-.754-.046L14.116,3.1a7.931,7.931,0,0,0-1.934-.8L11.967.5A.585.585,0,0,0,11.4,0H8.777a.583.583,0,0,0-.564.5L8,2.3a8,8,0,0,0-1.936.8L4.636,1.982a.585.585,0,0,0-.753.045L2.026,3.884a.585.585,0,0,0-.044.754L3.1,6.062A7.974,7.974,0,0,0,2.3,8L.5,8.215A.584.584,0,0,0,0,8.78V11.4a.585.585,0,0,0,.5.564l1.8.216a8.023,8.023,0,0,0,.8,1.934L1.983,15.545a.586.586,0,0,0,.046.754l1.853,1.857a.586.586,0,0,0,.753.046L6.061,17.08A7.944,7.944,0,0,0,8,17.88l.216,1.8a.583.583,0,0,0,.564.5H11.4a.582.582,0,0,0,.564-.5l.216-1.8a8.014,8.014,0,0,0,1.936-.8l1.426,1.12a.585.585,0,0,0,.753-.045L18.153,16.3a.585.585,0,0,0,.045-.755l-1.12-1.424a7.986,7.986,0,0,0,.8-1.935l1.8-.216a.583.583,0,0,0,.5-.564V8.778A.581.581,0,0,0,19.68,8.213Zm-9.589,6.922a5.045,5.045,0,1,1,5.045-5.045A5.045,5.045,0,0,1,10.091,15.135Z"/></g></g></svg>
  )
}

function SVGRightTickDisabled() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="45.915" height="50" viewBox="0 0 45.915 50"><g transform="translate(-1667.084 -579)"><g transform="translate(1646.334 579)"><circle fill="#cfcfcf" cx="19.852" cy="19.852" r="19.852" transform="translate(23.811 0)"/><g transform="translate(20.75 31.407)"><path fill="#999" d="M27.581,319.7,20.75,331.541l7.972-.423,3.622,7.116,6.319-10.955A19.832,19.832,0,0,1,27.581,319.7Z" transform="translate(-20.75 -319.641)"/><path fill="#999" d="M316.1,319.1a19.839,19.839,0,0,1-11.053,7.618l6.339,10.974,3.622-7.116,7.972.423Z" transform="translate(-277.068 -319.1)"/></g><circle fill="#999" cx="14.39" cy="14.39" r="14.39" transform="translate(29.274 5.463)"/></g><g transform="translate(1681.193 542.445)"><g transform="translate(0 51.096)"><path fill="#fff" d="M17.5,51.312a.708.708,0,0,0-1-.017l-.017.017L4.946,62.846,1.2,59.1a.708.708,0,0,0-1,1l4.247,4.247a.708.708,0,0,0,1,0L17.481,52.313A.708.708,0,0,0,17.5,51.312Z" transform="translate(0 -51.096)"/></g></g></g></svg>
  )
}
