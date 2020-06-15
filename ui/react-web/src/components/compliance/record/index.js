import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Switch, matchPath, Link, Route, useParams, useLocation } from 'react-router-dom'
import SectionCard from './section-card'

import Cards from './cards'

// import Tabs from '../shared/tabs'

// import Cases from './cases'
// import Conv from './conv'

import records from '../../../store/temp-data-record'

import Attr from './attr'

import { useTo } from '../util'

import makeStore from '../../../store/make-store'

const sectionStore = makeStore(({project_id}) => `compliance/${project_id}/sections/applicable`)
const attributeStore = makeStore(({section_id}) => `compliance/attributes-for-section/${section_id}`)



function useLinkTo(path, exact=false) {
  return useTo(`record/${path}`, exact)
}

function buildBreadcrumb() {
  const {section_id, attr_id} = useParams()
  let list = [['> Sections', useLinkTo('', true)]]
  if(section_id) list.push(['> Attributes', useLinkTo(`sec/${section_id}`, true)])
  if(attr_id) list.push(['> Parameters', useLinkTo(`${section_id}/attr/${attr_id}/param`, true)])
  return list
}
// /records -> All Sections
// /records/sec/section_id -> All Attrs
// /records/attr/attr_id/params -> all Params
export default function (props) {

  const params = useParams()
  // const [breadcrumb, setBreadcrumb] = useState([])
  
  // useEffect(() => {
  //   setBreadcrumb(buildBreadcrumb())
  // }, [params])
  
  const breadcrumb = buildBreadcrumb()
  const secPathFn = ({id}) => useLinkTo(`sec/${id}`, true)
  return (
    <>
      <div className='form-space no-background'>
        <Breadcrumb>
          <div> Compliance Record </div>
          {
            breadcrumb.map((b, i) => <Link to={b[1]} key={i}> {b[0]} </Link>)
          }
        </Breadcrumb>
        <Content>
          <Switch>
            <Route path={useLinkTo(':section_id(\\d+)/attr/:attr_id(\\d+)/param')}> <div> Parameters </div> </Route>
            <Route path={useLinkTo('sec/:section_id(\\d+)')}> <Cards store={attributeStore} to={({section_id, id} ) => useLinkTo(`${section_id}/attr/${id}/param`, true)} /> </Route>
            <Route path={useLinkTo('')}> <Cards store={sectionStore} to={secPathFn}/> </Route>
          </Switch>
        </Content>
      </div>
      <div className='widgets'>
        <WidgetContainer>
          {/* <Tabs data={[['Cases', `?tab=cases`],['Conversation', `?tab=conv`]]} useq /> */}
          {/* <div className='content'> */}
            {/* {
              loc.search.includes('cases') ? 
                <Cases recid={id || 1} /> : <Conv recid={id || 1} />
            } */}
          {/* </div> */}
        </WidgetContainer>

      </div>
    </>
  )
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
  grid-gap: 14px;
  overflow: auto;
  height: 432px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  > div {
    &:last-child { margin-bottom: 10px;}
  }
`