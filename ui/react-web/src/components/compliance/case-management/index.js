import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import { useStore } from 'effector-react'

import { Switch, matchPath, Link, Route, useParams, useLocation } from 'react-router-dom'

import makeStore from '../../../store/make-store'


import CasePopup from './about-ticket'

import CaseCatCards from './case-cat-cards'

import { useTo, useQuery } from '../util'

import CaseStatusCard from './status-card'
import SearchBar from './search-bar'

const { store, load } = makeStore(({project_id}) => `compliance/${project_id}/approver-cases`)

const cm = {
  granted: '#f44e76',
  inreview: '#42d7b6',
  rejected: '#f7fafd'
}

function cc(st) {
  return cm[st.toLowerCase().replace(/\s/g,'')]
}

export default function(props) {
  const [tab, setTab] = useState('cat')

  const { project_id } = useParams()

  useEffect(() => {
    load({ project_id })
  }, [])

  const data = useStore(store).data || []
  let query = useQuery();
  const case_id = query.get('case_id')

  return(
    <>
      { case_id ? <CasePopup loadP={load} /> : null }

      <div className='form-space no-background'>
        <Container>
          <TopBar>
            <SearchBar placeholder='Search ticket number'/>
            <SearchBar placeholder='Search tag category'/>
          </TopBar>
          <CardsContainer >
            <Cards>
              {
                data.map( (c, i) => <CaseStatusCard {...c} key={i} to={useTo(`case-management?case_id=${c.id}&section_id=${c.section_id}&attr_id=${c.attribute_id}`, true)} /> )
              }
            </Cards>
          </CardsContainer>      
        </Container>
      </div>
      <div className='widget'>
        <WidgetContainer>
          <>
            <Tabs> 
              <div onClick={() => setTab('cat')} className={tab ==='cat' ? 'selected' : null}>Case Categories</div>
              <div onClick={() => setTab('q')} className={tab ==='q' ? 'selected' : null}>Queues</div>
            </Tabs>
            <div className='content2'>
              { tab === 'cat' ? <CaseCatCards /> : <div>Queues </div> }
            </div>
          </>   
        </WidgetContainer>
      </div>
    </>
  )
}


const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  border-radius: 3px;
  background-color: #f2f2f2;
  > * {
    cursor: pointer;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    border-bottom: 4px solid #f2f2f2;
    &.selected {
      font-weight: 800;
      color: ${p => p.theme.color};
      border-bottom: 4px solid ${p => p.theme.color};
    }
  }
`
const WidgetContainer = styled.div`
  height: 466px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  .content {
    padding: 20px 14px;
    .details { margin-bottom: 20px; }
  }
  .content2 {
    padding: 0 0px;
    margin-bottom: 10px;
  }
`

const Widget = styled.div`
  height: 466px;
  box-shadow: rgba(155, 204, 244, 0.24) 0px 2px 7px 0px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
`
const Container = styled.div`
  display: flex;
  flex-flow: column;
  > div {
    // border: 1px solid #ccc;
  }
`

const TopBar = styled.div`
  display: flex;
  justify-content: right;
  height: 32px;
  width: 100%;
  justify-content: flex-end;
  > * {
    margin-left: 10px;
  }
`

const CardsContainer = styled.div`
  padding: 12px;
  height: 425px;
  margin-top: 10px;
  overflow: auto;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
`
const Cards = styled.div`
  display: grid;
  background-color: #ffffff;
  grid-template-columns: repeat(auto-fit, 360px);
  grid-auto-rows: 120px;
  grid-gap: 15px;
`