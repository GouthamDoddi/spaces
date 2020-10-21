import React, { useEffect } from 'react'

import styled from 'styled-components'

import Breadcrumb from './breadcrumb'
import makeStore from '../../../store/make-store'
import { useParams, Link, Switch, Route } from 'react-router-dom'

import { useStore } from 'effector-react'
import { compliance, complianceAttr } from '../../routes'

import ParamsScreen from './params'

const sectionStore = makeStore(({project_id}) => `compliance/${project_id}/sections/applicable-enhanced`)
const attributeStore = makeStore(({project_id, section_id}) => `compliance/${project_id}/sections/${section_id}/attributes`)

export default function(props) {
  return(
    <>      
      <Switch>
        <Route path={complianceAttr({sub: ':attr_id(\\d+)/params'})}>
          <Breadcrumb />
          <ParamsScreen />
        </Route>
        <Route path={complianceAttr()}>
          <Breadcrumb />
          <AttributeScreen />
        </Route>
        <Route path={compliance()}>
          <Breadcrumb />
          <SectionsScreen />
        </Route>
      </Switch>
    </>
  )
}

function RenderCards({data, title, to, ...props}) {
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
            Attributes: {o.attribute_count} | Parameters: {o.parameter_count} | Completed: {o.completed_count} | Not Tested: {o.not_tested_count}
          </Footer>
        </Section>
      ))
    }

    </Sections>
  )
}

function AttributeScreen(props) {
  const {project_id, section_id} = useParams()
  
  useEffect(() => {
    attributeStore.load({project_id, section_id})
  }, [project_id, section_id])

  const sourceData = useStore(attributeStore.store)

  const data = sourceData.data || []

  return(<RenderCards title='Attributes' data={data} to={(attr_id) => complianceAttr({id: project_id, section_id, sub: `${attr_id}/params`, expand: true })} />)
}

function SectionsScreen(props) {
  const {project_id} = useParams()
  
  useEffect(() => {
    sectionStore.load({project_id})
  }, [project_id])

  const sourceData = useStore(sectionStore.store)

  const data = sourceData.data || []

  return(
    <RenderCards title='Attributes' data={data} to={(section_id) => complianceAttr({id: project_id, section_id, expand: true})} />
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