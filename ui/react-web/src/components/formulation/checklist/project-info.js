import React, { useEffect } from 'react'

import styled from 'styled-components'

import SimpleList from './simple-list'

import makeStore from '../../../store/make-store'

import { risks, outcomes, beneficiarySegments, riskTypes, outcomeTypes } from '../../../store/master-data'

import { policySection } from '../../../store/section-store'

import { useParams } from 'react-router-dom'

import { useStore } from 'effector-react'

const imdStore = makeStore(() => 'imp-domain')
const bStore = makeStore(() => 'benefits')
const riskStore = makeStore(({policy_id}) => `formulation/${policy_id}/risk`)
const iaStore = makeStore(({policy_id}) => `formulation/${policy_id}/impact-areas`)
const onoStore = makeStore(({policy_id}) => `formulation/${policy_id}/outcomes`)


export default function(props) {
  const { policy_id, id } = useParams()

  const { load, store } = policySection 

  const sStore = useStore(store)

  useEffect( () => {
    if(id !== 'new') load({policy_id, id})
  }, [ policy_id, id])



  return(
    <Container>
      <SimpleList title='Risk' mStore={riskStore} refData={riskTypes} dKey='risk_id' oIds={sStore.risk_ids || []} />
      <SimpleList title='Impact Areas' mStore={iaStore} refData={beneficiarySegments} dKey='beneficiary_segment_id' oIds={sStore.impact_area_ids || []} />
      <SimpleList title='Objectives and Outcomes' mStore={onoStore} refData={outcomeTypes} dKey='outcome_id' oIds={sStore.outcome_ids || []} />
      <SimpleList title='Implementation Domain' mStore={imdStore} oIds={sStore.impl_domain_ids || []} />
      <SimpleList title='Benefits' mStore={bStore} oIds={sStore.object_ids || []} />
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