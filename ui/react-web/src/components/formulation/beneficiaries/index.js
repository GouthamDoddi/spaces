import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'


import OptionList from './option-list'

const policyStore = makeStore(({policy_id}) => `formulation/metadata/${policy_id}`)

const beneficiaries = makeStore(`beneficiaries`)
const profiles = makeStore(({bid}) => `beneficiaries/${bid}/profiles`)
const details = makeStore(({pid}) => `beneficiary_profiles/${pid}/details`)

export default function(props) {

  const { policy_id } = useParams()
  const [bid, setBid] = useState(0)
  const [pid, setPid] = useState(0)

  useEffect(() => {
    if( !pid && !bid) {
      beneficiaries.load()
    }

    if (policyStore.store.getState().data?.id != policy_id ) {
      policyStore.load({policy_id})
    }

    if(bid) { 
      profiles.load({bid}) 
    } else { profiles.addData(null)}
    if(pid) { 
      details.load({pid}) 
    } else { details.addData(null)}
  }, [pid, bid])


  return(
    <>
      <div className='form-space'>
        <Container>
          <BoxGrid>
            <OptionList title='Beneficiary' description='Lorem ipsum dolor sit amet, consectetur' dataStore={beneficiaries.store}
              onClicked={(id) => {setBid(id); setPid(null)}}
              sid={bid}
              path='beneficiary'
              policyStore={policyStore}
              bidsKey='beneficiary_ids'
            >  </OptionList>
            <Spacer />
            <OptionList title='Profile' description='Lorem ipsum dolor sit amet, consectetur'
              dataStore={profiles.store}
              sid={pid}
              path='beneficiary_profile'
              policyStore={policyStore}
              bidsKey='beneficiary_profile_ids'
              onClicked={setPid}></OptionList>
            <Spacer />
            <OptionList title='Details' description='Lorem ipsum dolor sit amet, consectetur'
              dataStore={details.store}
              path='profile_detail'
              bidsKey='profile_detail_ids'
              policyStore={policyStore}
              ></OptionList>
            <Spacer />
          </BoxGrid>
          
        </Container>
      </div>

      <div className='widgets'>

      </div>
    </>
  )
}

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
  margin-left: 39px;
  margin-right: 18px;
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

const PassedByOptions = [
  { value: 1, label: 'passed by 1' },
  { value: 2, label: 'passed by 2' },
  { value: 3, label: 'passed by 3' },
]

