import React from 'react'
import styled from 'styled-components'
import { Switch, matchPath, Link, Route, useParams, useLocation } from 'react-router-dom'
import SectionCard from './section-card'
import Tabs from '../shared/tabs'

import Cases from './cases'
import Conv from './conv'
import TaskCard from './task-card'

import records from '../../../store/temp-data-record'

import Attr from './attr'

function useTo(path) {
  return `/compliance/compl-management/${path}`
}

function rTo(path) {
  return `/compliance/compl-management/${path}`
}

function calcBreadCrumb(taskId, id, loc) {
  let res = [['Dashboard', '/compliance/compl-management']]
  console.log(taskId)
  if(taskId) {
    res.push(['> Compliance Record', `/compliance/compl-management/${taskId}`])
  }
  if(id) {
    res.push(['> Section', `/compliance/compl-management/${taskId}/${id}`])
  }
  if( loc.pathname.includes('param')) {
    res.push(['> Attribute', `/compliance/compl-management/${taskId}/${id}/param`])
  }
  // console.log(res)
  return res
}

export default function (props) {
  const data = Object.values(records)
  const cards = (p) => (data.map((rec, i) => 
    <SectionCard to={useTo(p && ((id * 1) === (rec.id * 1)) ? `${taskId}/${rec.id}/${p}` : `${taskId}/${rec.id}`)} 
      {...rec} i={i} className={(id * 1) === (rec.id * 1) ? 'selected' : ''} /> 
  ))
  const loc = useLocation()
  const { params } = matchPath(loc.pathname, {path: '/:space/compl-management/:taskId/:id?'}) || {}

  const { taskId, id } = params || {}

  if(!loc.search.includes('tab') && taskId) {
    window.location.hash = `${loc.pathname}?tab=cases`
  }

  const breadcrumb = calcBreadCrumb(taskId, id, loc)

  return (
    <>
      <div className='form-space no-background'>
        <Breadcrumb>
          { breadcrumb.map((b, i) => (
            <Link to={b[1]}> {b[0]} </Link>
          ))}
        </Breadcrumb>
        <Content>
          <Switch>
            <Route path={useTo(':taskId/:id/param')}> <Attr /> </Route>
            <Route path={useTo(':taskId/:id')}> {cards('param')} </Route>
            <Route path={useTo(':taskId')}> {cards(null)} </Route>
            <Route path={useTo('')}> <Tasks /> </Route>
          </Switch>
          
        </Content>
      </div>
      <div className='widgets'>
        <WidgetContainer>
          {
            taskId ? 
              <>
                <Tabs data={[['Cases', `?tab=cases`],['Conversation', `?tab=conv`]]} useq />
                {
                  loc.search.includes('cases') ? 
                  <Cases recid={id || 1} /> : <Conv recid={id || 1} />
                }
              </> :
              <>
                <Tabs data={[['Policy Family', ``]]} />
                {
                  policyFamily.map((item, i) => (
                    <PolicyCard {...item} key={i} />
                  ))
                }
              </>
          }

        </WidgetContainer>

      </div>
    </>
  )
}

function Tasks(props) {
  return (
    <>
      {
        Object.values(taskList).map((task, i) => (
          <Link to={rTo(task.id)} key={i}>
            <TaskCard {...task} i={i} />
          </Link>
        ))
      }
    </>
  )
}



function PolicyCard(props) {
  const { title, desc, active_tasks, key} = props
  return (
    <PCard key={key}>
      <Title> {title} </Title>
      <Desc> {desc} </Desc>
      <Status> Active Tasks: {active_tasks} </Status>
    </PCard>
  )
}

const policyFamily = [
  {title: 'Policy Family 1', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do ', active_tasks: 500 },
  {title: 'Policy Family 2', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do ', active_tasks: 500 },
  {title: 'Policy Family 3', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do ', active_tasks: 500 },
  {title: 'Policy Family 4', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do ', active_tasks: 500 },


]
const PCard = styled.div`
  width: 273px;
  height: 97px;
  border-radius: 3px;
  // border: solid 1px #f44e76;
  background-color: #f4f7fa;
  margin: 7px 16px 4px 17px;
  padding: 10px 14px 10px 14px;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 10px;
`

const Desc = styled.div`
  font-size: 10px;
  line-height: 1.1;
  color: #98acbe;
  margin-bottom: 12px;
`
const Status = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #7e9ab3;
`

const taskList = {
  1: { id: 1, sla: '+3 days', title: 'Title', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do', beneficiary_name: 'Beneficiary Name', status: 'Open'},
  2: { id: 2, sla: '+3 days', title: 'Title', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do', beneficiary_name: 'Beneficiary Name', status: 'Approved'},
  3: { id: 3, sla: '+3 days', title: 'Title', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do', beneficiary_name: 'Beneficiary Name', status: 'Open'},
  4: { id: 4, sla: '+3 days', title: 'Title', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do', beneficiary_name: 'Beneficiary Name', status: 'Under Review'},
  5: { id: 5, sla: '+3 days', title: 'Title', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do', beneficiary_name: 'Beneficiary Name', status: 'Under Review'},
  6: { id: 6, sla: '+3 days', title: 'Title', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do', beneficiary_name: 'Beneficiary Name', status: 'Under Review'},
  7: { id: 7, sla: '+3 days', title: 'Title', desc: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do adipiscing elit, sed do', beneficiary_name: 'Beneficiary Name', status: 'Under Review'},
}
const WidgetContainer = styled.div`
  height: 466px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
`

const Breadcrumb = styled.div`
  margin-bottom: 16px;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  color: #687c9d;
  > * {
    margin-right: 2px;
    &:last-child {
      font-weight: 700;
    }
  }
`
const Content = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-auto-rows: 104px;
  grid-gap: 4px 14px ;
  overflow: auto;
  height: 432px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  > div {
    &:last-child { margin-bottom: 10px;}
  }
`