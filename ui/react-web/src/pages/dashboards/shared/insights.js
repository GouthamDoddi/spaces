import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import {issuesByGroup} from '../../../store/master-data'
import { useParams } from 'react-router-dom'
 
export default function(props) {
  const {entity_id, project_id} = useParams()
  const [data, setData] = useState([])
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
        Compliance Issues
      </header>
      <InnerBox>
        <Filter>   
          <Legend><Circle color='#EB622B' /> Non Compliant</Legend>
          <Legend><Circle color='#005CC8'/> Partially Compliant</Legend>
        </Filter>
        {
          data.length > 0 ? 
            <Cards>
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

      </InnerBox>
    </Box>
  )
}


const Box = styled.div`
  max-width: 758px;
  min-width: 758px;
  flex: 1;
  height: 990px;
  
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #BBBBBB;
  border-top-right: none;
  opacity: 1;


  > header {
    background: #EEEEEE 0% 0% no-repeat padding-box;
    height: 74px;
    line-height: 74px;
    border: 1px solid #BBBBBB;
    padding-left: 25px;
  }
`

const InnerBox = styled.div`
  padding: 20px 0px 25px 20px;

`

const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding-right: 25px;
`

const Legend = styled.div`
  display: flex;
  font: normal normal normal 12px/15px Muli;
  color: #000000;
  margin-right: 30px;
`
const Circle = styled.div`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  background: ${p => p.color} 0% 0% no-repeat padding-box;
  border-radius: 11px;

`

const Card = styled.div`
  height: 104px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  border-left: 2px solid ${p => p.color};
  padding: 15px;
  margin-bottom: 12px;
  margin-right: 20px;

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

const Cards = styled.div`
  overflow: scroll;
  height: 810px;
  .no-data {
    text-align: center;
    margin-top: 100px;
  }
`