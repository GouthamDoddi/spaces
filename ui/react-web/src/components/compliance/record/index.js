import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Switch, matchPath, Link, Route, useParams, useLocation } from 'react-router-dom'
import SectionCard from './section-card'

import { useTo } from '../util'
// import Tabs from '../shared/tabs'

// import Cases from './cases'
// import Conv from './conv'

import records from '../../../store/temp-data-record'

import Attr from './attr'



function useLinkTo(path, exact=false) {
  return useTo(`record/${path}`, exact)
}

function calcBreadCrumb(id, loc) {
  let res = [['Compliance Record', '/compliance/record']]
  
  
  if(id) {
    res.push(['> Section', `/compliance/record/${id}`])
  }
  if( loc.pathname.includes('param')) {
    res.push(['> Attribute', `/compliance/record/${id}/param`])
  }
  return res
}


// /records -> All Sections
// /records/sec/section_id -> All Attrs
// /records/attr/attr_id/params -> all Params
export default function (props) {
  // const { project_id, section_id, attr_id, param_id}

  useEffect(() => {

  }, [])

  return (
    <>
      <div className='form-space no-background'>
        {/* <Breadcrumb>
          { breadcrumb.map((b, i) => (
            <Link to={b[1]}> {b[0]} </Link>
          ))}
        </Breadcrumb> */}
        <Content>
          <Switch>
            <Route path={useLinkTo('attr/:attr_id(\\d+)/param')}> <div> Parameters </div> </Route>
            <Route path={useLinkTo('sec/:section_id(\\d+)')}> <div> attributes </div> </Route>
            <Route path={useLinkTo('')}> <div> sections</div> </Route>
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