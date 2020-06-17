import React from 'react'

import styled from 'styled-components'

import SimpleList from './simple-list'

import makeStore from '../../../store/make-store'

import { risks, outcomes, beneficiarySegments, riskTypes, outcomeTypes } from '../../../store/master-data'

const imdStore = makeStore(() => 'imp-domain')
const bStore = makeStore(() => 'benefits')
const riskStore = makeStore(({policy_id}) => `formulation/${policy_id}/risk`)
const iaStore = makeStore(({policy_id}) => `formulation/${policy_id}/impact-areas`)
const onoStore = makeStore(({policy_id}) => `formulation/${policy_id}/outcomes`)

export default function(props) {
  
  return(
    <Container>
      <SimpleList title='Implementation Domain' mStore={imdStore} />
      <SimpleList title='Benefits' mStore={bStore} />
      <SimpleList title='Risk' mStore={riskStore} refData={riskTypes} dKey='risk_id' />
      <SimpleList title='Impact Areas' mStore={iaStore} refData={beneficiarySegments} dKey='beneficiary_segment_id'/>
      <SimpleList title='Objectives and Outcomes' mStore={onoStore} refData={outcomeTypes} dKey='outcome_id' />
    </Container>
  )
}


const Container = styled.div`
  display: grid;
  margin-top: 17px;
  justify-content: center;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  grid-gap: 17px 15px;

`