import React, {useEffect} from 'react'
import styled from 'styled-components'

import { useStore } from 'effector-react'

import { Switch, matchPath, Link, Route, useParams, useLocation } from 'react-router-dom'

import makeStore from '../../../store/make-store'

import { Add } from '../../tables/small'

import CasePopup from './case-popup'

import { useTo } from '../util'

const { store, load } = makeStore(({section_id, attr_id=0}) => `compliance/section/${section_id}/attr/${attr_id}/cases`)

const cm = {
  granted: '#f44e76',
  inreview: '#42d7b6',
  rejected: '#f7fafd'
}

function cc(st) {
  return cm[st.toLowerCase().replace(/\s/g,'')]
}

export default function(props) {
  const { section_id, attr_id=0 } = useParams()
  useEffect(() => {
    load({ section_id, attr_id })
  }, [attr_id, section_id])

  const data = useStore(store).data || []
  
  return(
    <>
      <Switch>
        <Route path={useTo('record/:section_id(\\d+)/attr/:attr_id(\\d+)/case/:case_id(\\d+|new)')}> <CasePopup loadP={load} /> </Route>
      </Switch>
      <Container>
        {
          data.map( (c, i) => <Case {...c} i={i}/> )
        }
        <Link to={useTo(`record/${section_id}/attr/${attr_id || 0}/case/new`, true)}> <Add /> </Link>
      </Container>
   </>
  )
}

function Case(props) {
  const { section_id, attr_id=0 } = useParams()
  const {title, id, status, description, i} = props
  return(
    <Box key={i} to={useTo(`record/${section_id}/attr/${attr_id}/case/${id}`, true)}>
      <Header>
        <Ticket>  {id} </Ticket>
        <Status color={cc(status)} > {status} </Status>
      </Header>
      <Title>{title}</Title>
      <Description> {description}</Description>
    </Box>
  )
}

const Container = styled.div`
  margin-top: 12px;
  position: relative;
  top: 0;
  left: 0;
  height: 412px;
  overflow: auto;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`
const Ticket = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`
const Box = styled(Link)`
  // &:first-child {
  //   margin-top: 20px;
  // }
  display: inline-block;
  width: 273px;
  height: 101px;
  border-radius: 3px;
  background-color: #f4f7fa;
  margin: 0 16px 10px 17px;
  padding: 10px 14px 15px 14px;
`
const Title = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 6px;
`
const Status = styled.div`
  color: ${p => p.color};
  font-size: 15px;
  font-weight: bold;
`

const Description = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: #98acbe;
`