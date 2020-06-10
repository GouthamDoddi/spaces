import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useParams } from 'react-router-dom'
import ShowQuestion from './show_question'
import makeStore from '../../../store/make-store'


import OptionList from './option-list'
import {useTo} from '../util'

const policyStore = makeStore(({policy_id}) => `formulation/metadata/${policy_id}`)

const objects = makeStore(`objects`)
const subobjects = makeStore(({oid}) => `objects/${oid}/subobjects`)
const questions = makeStore(({soid}) => `subobjects/${soid}/questions`)

export default function(props) {

  const { policy_id } = useParams()
  const [oid, setOid] = useState(0)
  const [soid, setSoid] = useState(0)
  const [qid, setQid] = useState(0)

  useEffect(() => {
    if( !soid && !oid) {
      objects.load()
    }

    if (policyStore.store.getState().data?.id != policy_id ) {
      policyStore.load({policy_id})
    }

    if(oid) { 
      subobjects.load({oid}) 
    } else { subobjects.addData(null)}
    
    if(soid) { 
      questions.load({soid}) 
    } else { questions.addData(null)}
  }, [oid, soid])


  return(
    <>
      <div className='form-space'>
        <Container>
          <BoxGrid>
            <OptionList title='Objects' description='Lorem ipsum dolor sit amet, consectetur' dataStore={objects.store}
              onClicked={(id) => {setOid(id); setSoid(null)}}
              sid={oid}
              path='object'
              policyStore={policyStore}
              bidsKey='object_ids'
            >  </OptionList>
            <Spacer />
            <OptionList title='Sub Objects' description='Lorem ipsum dolor sit amet, consectetur'
              dataStore={subobjects.store}
              sid={soid}
              path='subobject'
              policyStore={policyStore}
              bidsKey='subobject_ids'
              onClicked={setSoid}></OptionList>
            <Spacer />
            <OptionList title='Questions' description='Lorem ipsum dolor sit amet, consectetur'
              dataStore={questions.store}
              sid={qid}
              path='question'
              bidsKey='question_ids'
              policyStore={policyStore}
              onClicked={setQid}
              addButton={!!soid}></OptionList>
            <Spacer />
          </BoxGrid>
          
        </Container>
      </div>

      <div className='widgets'>
        { qid ? <ShowQuestion qid={qid} soid={soid} loadQ={questions.load}/> : <EmptySpace/>}  
      </div>
    </>
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

