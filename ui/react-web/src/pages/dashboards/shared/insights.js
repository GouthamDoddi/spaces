import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import {issuesByGroup} from '../../../store/master-data'
import { useParams } from 'react-router-dom'
import rtl from 'styled-components-rtl'
import { get } from '../../../store/api'

import {Select} from '../../../components/form'
 
const selectOptions = [{label: 'Compliance Issues', value: 1}, { label: 'Challenges', value: 2}]
const defaultSelected = selectOptions[0]
export default function Insight({hideFilter, height, ...props}) {
  const {entity_id, project_id} = useParams()
  const [data, setData] = useState([])

  const [selectedType, setSelectedType] = useState(defaultSelected)
  useEffect(() => {
    if(entity_id) {
      if(project_id) {
        if(issuesByGroup[entity_id] && issuesByGroup[entity_id][project_id]) {
          setData(issuesByGroup[entity_id][project_id])
        }
      } else {
        if(issuesByGroup[entity_id]) {
          setData(Object.values(issuesByGroup[entity_id]).flat())  
        }
      }
    } else {
      setData(Object.values(issuesByGroup).flat().map((o) => Object.values(o)).flat().flat())
    }
  }, [entity_id, project_id])

  const COLORS = {NC: '#EB622B', PC: '#005CC8'}

  return (
    <Box>
      <header>
        <div>{selectedType.label}</div>
        { hideFilter ? null : 
          <Select
            options={selectOptions}
            onChange={(e) => {
              setSelectedType(e)
            }}
            value={selectedType}
          ></Select>
        }
      </header>
      { selectedType.value == 1 ? 
      <InnerBox>
      <Filter>   
        <Legend><Circle color='#EB622B' /> Non Compliant</Legend>
        <Legend><Circle color='#005CC8'/> Partially Compliant</Legend>
      </Filter>
      {
        data.length > 0 ? 
          <Cards height={height}>
            {
              data.map((o, i) => (
                <Card color={COLORS[o.compl]} key={i}>
                  <div className='bc'> {o.project_name} <span> > </span> {o.section_name} </div>
                  <div className='title'>{o.description}</div>
                  <div className='footer'>
                    <div className='tag'> {o.category}</div>
                    <div className='date'> {o.date} </div>
                  </div>
                </Card>
              ))
            }
          </Cards> : 
          <Cards><div className='no-data'> NO ISSUES </div></Cards>
      }

    </InnerBox> : <Challenges hideHeader />

      }
          </Box>
  )
}

export function Challenges({hideHeader, height, ...props}) {
  const {entity_id, project_id} = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    const path = ['reports', 'challenges', entity_id, project_id].filter((e) => e )
    get(path.join('/'), {success: (json) => {
      setData(json.data)
    }, error: (e) => { console.log(e)}})
  }, [entity_id, project_id])

  const COLORS = {NC: '#EB622B', PC: '#005CC8'}

  return (
    <Box>
      { hideHeader ? null : <header> Challenges </header>}

      <InnerBox>
        <Filter>   
 
        </Filter>
        {
          data.length > 0 ? 
            <Cards height={height}>
              {
                data.map((o, i) => (
                  <Card2 color={COLORS[o.compl]} key={i}>
                    <div className='bc'> {o.project.name} <span> > </span> {o.section.name} </div>
                    <div className='title'>{o.description}</div>
                    <div className='footer'>
                      <div className='tag'> {o.type.name}</div>
                      <div className='date'> {o.date} </div>
                    </div>
                  </Card2>
                ))
              }
            </Cards> : 
            <Cards><div className='no-data'> NO ISSUES </div></Cards>
        }

      </InnerBox>
    </Box>
  )
}

const ChallengeCard = styled.div`
  height: 104px;
  background: #F7F6F3 0% 0% no-repeat padding-box;
  > .footer {
    height: 30px;
    background: #E4E4E4 0% 0% no-repeat padding-box;

    > .tag {
      font: normal normal bold 12px/20px Muli;
      
      color: #FFFFFF;
      background: #EB622B 0% 0% no-repeat padding-box;
      border-radius: 11px;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }

    > .date {
      font: normal normal normal 12px/15px Muli;
      color: #000000;
    }
  }

`
const Box = styled.div`
  // max-width: 758px;
  // min-width: 758px;
  margin-top: 30px;
  flex: 1;
  // height: 990px;
  
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #BBBBBB;
  border-top-right: none;
  opacity: 1;


  > header {
    background: #EEEEEE 0% 0% no-repeat padding-box;
    height: 74px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    border: 1px solid #BBBBBB;
    ${rtl`
      padding-left: 25px;
    `}
    
  }
`

const InnerBox = styled.div`
  padding: 20px 0px 25px 20px;

`

const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  ${rtl`
    padding-right: 25px;
  `}
  
`

const Legend = styled.div`
  display: flex;
  font: normal normal normal 12px/15px Muli;
  color: #000000;
  ${rtl`
    margin-right: 30px;
  `}
  
`
const Circle = styled.div`
  ${rtl`
    margin-right: 5px;
  `}
  width: 15px;
  height: 15px;
  background: ${p => p.color} 0% 0% no-repeat padding-box;
  border-radius: 11px;

`

const Card = styled.div`
  height: 104px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  ${rtl`
    border-left: 2px solid ${p => p.color};
    margin-right: 20px;
  `}
  padding: 15px;
  margin-bottom: 12px;

  > .bc {
    font: normal normal normal 12px/18px Muli;
    color: #EB622B;
    text-transform: uppercase;
    opacity: 1;
     > span {
       color: #00000029;
     }
     margin-bottom: 3px;
  }
  > .title {
    font: normal normal 600 15px/27px Muli;
    color: #131313;
    height: 22px;
  }
  > .footer {
    display: flex;
    margin-top: 11px;
    justify-content: space-between;
    > .tag {
      font: normal normal normal 10px/20px Muli;
      padding: 2px 10px 2px 10px;
      color: #1A6B8F;
      background: #F5F5F5 0% 0% no-repeat padding-box;
      border-radius: 11px;
    }
    > .date {
      font: normal normal normal 12px/18px Muli;
      color: #999999;
      margin-top: 5px;
    }
  }
`


const Card2 = styled.div`
  height: 104px;
  background: #F7F6F3 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;  
  margin-bottom: 12px;
  margin-right: 15px;

  > .bc {
    font: normal normal normal 12px/18px Muli;
    color: #EB622B;
    text-transform: uppercase;
    
    opacity: 1;
     > span {
       color: #00000029;
     }
     margin-bottom: 3px;
    padding: 17px 15px 0 15px;
  }
  > .title {
    font: normal normal 600 15px/27px Muli;
    color: #131313;
    height: 30px;
    padding: 0 15px;
    // margin-top: 10px;
  }
  > .footer {
    display: flex;
    padding: 0 15px;
    height: 30px;
    background: #E4E4E4 0% 0% no-repeat padding-box;
    opacity: 1;
    margin-top: 6px;
    justify-content: space-between;
    > .tag {
      align-self: center;
      height: 20px;
      background: #EB622B 0% 0% no-repeat padding-box;
      border-radius: 11px;
      font: normal normal bold 12px/20px Muli;
      color: #FFFFFF;
      padding: 0px 15px 2px 15px;
    }
    > .date {
      font: normal normal normal 12px/18px Muli;
      color: #000;
      margin-top: 5px;
    }
  }
`


const Cards = styled.div`
  overflow: auto;
  height: ${p => p.height || '810px'};
  .no-data {
    text-align: center;
    margin-top: 100px;
  }
`

export {Insight}