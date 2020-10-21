import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useParams } from 'react-router-dom'

import OptionList from './option-list'

import { beneficiaries, profiles } from '../../../store/master-data'

import projectStore from '../../../store/compliance/project'


export default function(props) {

  const { project_id } = useParams()
  const [bid, setBid] = useState(0)
  
  useEffect(() => {
    if( !bid) {
      beneficiaries.load()
    }

    if (projectStore.store.getState().data?.id != project_id ) {
      projectStore.load({project_id})
    }

    if(bid) { 
      profiles.load({bid}) 
    } else { profiles.addData(null)}
    
  }, [bid])


  return(
    <Container>
      <BoxGrid>
        <OptionList title='Beneficiary' description='Lorem ipsum dolor sit amet, consectetur' dataStore={beneficiaries.store}
          projectStore={projectStore}
          onClicked={(id) => {setBid(id)}}
          sid={bid}
          path='beneficiary'
          bidsKey='beneficiary_ids'
        >  </OptionList>
        <Spacer />
        <OptionList title='Profiles' description='Lorem ipsum dolor sit amet, consectetur'
          projectStore={projectStore}
          dataStore={profiles.store}
          path='profile'
          bidsKey='profile_ids'
          ></OptionList>
      </BoxGrid>
      
    </Container>
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
  grid-template-columns: minmax(280px, 320px) 32px minmax(280px, 320px);
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