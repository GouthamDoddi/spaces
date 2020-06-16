import React, {useEffect} from 'react'
import styled from 'styled-components'

import { useStore } from 'effector-react'

import { Switch, matchPath, Link, Route, useParams, useLocation } from 'react-router-dom'

import makeStore from '../../../store/make-store'


import CasePopup from './case-popup'

import { useTo, useQuery } from '../util'

import CaseStatusCard from './status-card'
import SearchBar from './search-bar'

const { store, load } = makeStore(({project_id}) => `compliance/${project_id}/mycases`)

const cm = {
  granted: '#f44e76',
  inreview: '#42d7b6',
  rejected: '#f7fafd'
}

function cc(st) {
  return cm[st.toLowerCase().replace(/\s/g,'')]
}

export default function(props) {
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

      <div className='form-space no-background full-width'>
        <Container>
          <TopBar>
            <SearchBar placeholder='Search ticket number'/>
            <SearchBar placeholder='Search tag category'/>
          </TopBar>
          <CardsContainer >
            <Cards>
              {
                data.map( (c, i) => <CaseStatusCard {...c} key={i} to={useTo(`mycases?case_id=${c.id}&section_id=${c.section_id}&attr_id=${c.attribute_id}`, true)} /> )
              }
            </Cards>
          </CardsContainer>      
        </Container>
      </div>
    </>
  )
}

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
  grid-template-columns: repeat(auto-fit, 350px);
  grid-auto-rows: 120px;
  grid-gap: 15px;
`