import React, { useEffect } from 'react'

import styled from 'styled-components'

import Breadcrumb from './breadcrumb'
import makeStore from '../../../store/make-store'
import { useParams, Link, Switch, Route, useRouteMatch } from 'react-router-dom'

import { useStore } from 'effector-react'
import { compliance, complianceAttr } from '../../routes'

import ParamsScreen from './params'

const sectionStore = makeStore(({project_id, filter}) => filter ? `compliance/${project_id}/sections/applicable-enhanced?filter=${filter}` : `compliance/${project_id}/sections/applicable-enhanced`)
const attributeStore = makeStore(({project_id, section_id, filter}) =>  filter ? `compliance/${project_id}/sections/${section_id}/attributes?filter=${filter}` :  `compliance/${project_id}/sections/${section_id}/attributes`)

export default function({filter, ...props}) {
  const {type} = useParams()
  let { path, url } = useRouteMatch();
  // console.log("path", path, url)
  return(
    <>      
      <Switch>

        <Route path={`${path}/:section_id(\\d+)/attrs`}>
          <AttributeScreen filter={filter} base={url} />
        </Route>
        <Route path={path}>
          <Breadcrumb base={url}/>
          <SectionsScreen filter={filter} base={url} />
        </Route>
      </Switch>
    </>
  )
}

function RenderCards({data, title, to, show='apcni', ...props}) {
  if(!!!data) {
    return (
      <Empty>Loading .... </Empty>
    )
  } else if (data.length === 0) {
    return <Empty>No Sections found. </Empty>
  }

  const showCounts = (o) => {
    const counts = []
    if(show.includes('a')) { counts.push(`Attributes: ${o.attribute_count || 'N/A'}`) }
    if(show.includes('p')) { counts.push(`Parameters: ${o.parameter_count || 'N/A'}`) }
    if(show.includes('c')) { counts.push(`Completed: ${o.completed_count ?? 'N/A'}`) }
    if(show.includes('i')) { counts.push(`In Review: ${o.in_review_count ?? 'N/A'}`) }
    if(show.includes('n')) { counts.push(`Not Tested: ${o.not_tested_count ?? 'N/A'}`) }
    
    return counts.join(' | ')
  }
  return(
    <Sections>
      <STitle> {title} </STitle>
    {
      data.map((o, i) => (
        <Section to={() => to(o.id)}>
          <Top>
            <Title> {o.name} </Title>
            <Descr> {o.description} </Descr>
          </Top>
          <Footer>
            {showCounts(o)}
          </Footer>
        </Section>
      ))
    }

    </Sections>
  )
}

function AttributeScreen({filter, base, ...props}) {
  const {project_id, section_id} = useParams()

  const { path, url } = useRouteMatch()
  
  useEffect(() => {
    attributeStore.load({project_id, section_id, filter})
  }, [project_id, section_id])

  const sourceData = useStore(attributeStore.store)

  const data = sourceData.data

  return(
    <Switch>
      <Route path={`${path}/:attr_id(\\d+)/params`}>        
        <ParamsScreen filters={filter} base={base} />
      </Route>
      <Route> 
        <Breadcrumb base={base}/>
        <RenderCards title='Attributes' show='pcni' data={data} to={(attr_id) => `${url}/${attr_id}/params`} /> 
      </Route>
    </Switch>
  )   
}

function SectionsScreen({filter, ...props}) {
  const {project_id} = useParams()
  const { path, url } = useRouteMatch()
  
  useEffect(() => {
    sectionStore.load({project_id, filter})
  }, [project_id, filter])

  const sourceData = useStore(sectionStore.store)

  const data = sourceData.data 

  return(
    <RenderCards title='Sections' data={data} to={(section_id) => `${url}/${section_id}/attrs`} />
  )
}


const Sections = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
`

const Section = styled(Link)`
  display: flex;
  height: 100px;
  border: solid 1px #cccccc;
  background-color: #eeeeee;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 20px;
  color: #666666;

`

const STitle = styled.div`
  font-size: 20px;
  margin-bottom: 5px;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`

const Top = styled.div`
  
`

const Descr = styled.div`
  font-size: 14px;
  text-align: left;
`

const Footer = styled.div`
  font-size: 14px;
  line-height: 0.81;
  text-align: left;

`

const Empty = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  font-size: 24px;  
`