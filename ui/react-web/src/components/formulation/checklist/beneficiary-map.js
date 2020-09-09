import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useParams } from 'react-router-dom'

import makeStore from '../../../store/make-store'


import OptionList from './option-list'
import {useTo} from '../util'

import { beneficiaries, profiles, details } from '../../../store/master-data'

import policyStore from '../../../store/formulation/policy'
import { sectionStore } from '../../../store/section-store'

export default function(props) {

  const { policy_id, id } = useParams()
  const [bid, setBid] = useState(0)
  const [pid, setPid] = useState(0)
  

  useEffect(() => {
    if( !pid && !bid) {
      beneficiaries.load()
    }

    if (policyStore.store.getState().data?.id != policy_id ) {
      policyStore.load({policy_id})
    }
    if (sectionStore.store.getState().data?.id != id ) {
      sectionStore.load({policy_id, id})
    }

    if(bid) { 
      profiles.load({bid}) 
    } else { profiles.addData(null)}
    
    if(pid) { 
      details.load({pid}) 
    } else { details.addData(null)}
  }, [bid, pid])


  return(
    <Container>
      <BoxGrid>
        <OptionList title='Beneficiary' description='' dataStore={beneficiaries.store}
          sectionStore={sectionStore}
          policyStore={policyStore}
          onClicked={(id) => {setBid(id); setPid(null)}}
          sid={bid}
          path='beneficiary'
          bidsKey='beneficiary_ids'
        >  </OptionList>
        <Spacer />
        <OptionList title='Profile' description=''
          sectionStore={sectionStore}
          policyStore={policyStore}
          dataStore={profiles.store}
          sid={pid}
          path='beneficiary_profile'
          bidsKey='beneficiary_profile_ids'
          onClicked={setPid}></OptionList>
        <Spacer />
        <OptionList title='Details' description=''
          sectionStore={sectionStore}
          policyStore={policyStore}        
          dataStore={details.store}
          // sid={qid}
          path='profile_detail'
          bidsKey='profile_detail_ids'
          // onClicked={setQid}
        ></OptionList>
        <Spacer />
      </BoxGrid>
      
    </Container>
  )
}

function EmptySpace() {
  return (
    <EmptyQArea>
      <div> Questionnaire </div>
      <div> Add / Update Questions after selecting sub objects </div>
    </EmptyQArea>
  )
}
const EmptyQArea = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 465px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  padding: 12px;

  div:first-child {
    font-size: 15px;
    font-weight: bold;
    color: #000000;
    margin-bottom: 16px;
  }

  div:nth-child(2) {
    font-size: 20px;
    margin-top: 150px;
    padding: 10px;
    color: #8fa8bf;
    text-align: center;
  }
`
const Spacer = styled.div`
  align-items: center;
  line-height: 400px;
  text-align: center;
  background-image: url('/img/shared/double-arrow.png');
  background-repeat: no-repeat;
  background-size: 29px 7px;
  background-position: center center;
`

const BoxGrid = styled.div`
  margin-top: 20px;
  width: 100%;
  display:grid;
  grid-template-columns: minmax(197px, 280px) 32px minmax(197px, 280px) 32px minmax(197px, 280px);
  grid-template-rows: auto;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  margin-left: 10px;
  margin-right: 10px;
  .container {
    overflow-y: auto;
    flex: 1;
    display: grid;
    grid-column-gap: 93px;
    grid-auto-rows: 78px;
    grid-template-columns: repeat(auto-fit, 265px);
    // grid-template-rows: repeat(2, 100px);
    > div {
      margin-top: 12px;
    }
  }
`

