import React, {useEffect, useState} from 'react'

import styled from 'styled-components'

import { useParams } from 'react-router-dom'

import { useStore } from 'effector-react' 

import  Form, { TextArea, Input, Select } from '../../form'

import makeStore from '../../../store/make-store'


const {changed, selectChange, addData, store, load, update, create} = makeStore(({id}) => id ? `object-questions/${id}` : 'object-questions')

function toOpt(hash) {
  return(Object.values(hash))
}

function submitted(id, soid, loadQ, answers, data) {
  console.log(answers, data)  
  const cb = (resp) => {
    loadQ({soid})
  }
  data.subobject_id = soid
  data.possible_answers = answers
  id ? update({id, data, cb}) : create({data, cb})
}

const defaultAnswer = ''

export default function({qid, soid, loadQ, ...props}) {

  const qStore = useStore(store)
  const qData = qStore.data || {}
  let {id, name, type, answers, possible_answers } = qData


  useEffect(() => {
    console.log(qid)
    if(qid === 'new' && id) {
      qid = null
      addData(null)
    } else {
      if(qid != id) load({id: qid})
    
      if(type === 'radio' || type === 'checkbox') {
        setAnswers((possible_answers || []).length == 0 ? [defaultAnswer] : possible_answers)
      } else {
        setAnswers([])
      }  
    }
  }, [type, qid])

  const setAnswers = (answers) => { addData({...qData, ...{answers}})}
  if(!answers && possible_answers) {
    setAnswers(possible_answers)
  }

  return(

    <Question>
      <Title>
        Questionnaire
      </Title>
      <Form onSubmit={(data) => submitted(id , soid, loadQ, answers, data)} store={qStore}>
        <TextArea label='Question' name='name' onChange={changed} value={ name || ''} className='big' required />
        <Select name='type' label='Type' 
              options={toOpt(types)}
              outerClass='big'
              onChange={selectChange('type')}
              value={types[type] || ''} 
          />

        { 
          (answers?.length > 0) ? (<Label> Answer </Label>) : null
        }
        {
          (answers || []).map((ans, i) => 
            <div className='inputs' key={i}>
              <input className='answer' name='answers' key={i} onChange={(e) => changed({e, i})} value={ ans || ''} required />
              { i > 0 ? <div className='button remove' onClick={() => setAnswers(answers.filter((_, fl) => fl !== i))}> -  </div> : 
                  <div className='button add' onClick={() => setAnswers([...answers, ''])}> <div className='text'> + </div> </div> }
            </div>
          )
        }

        <label className='submit'>
          <input type='submit' />
          <div> { id ? 'Update' : 'Create'} </div>
        </label>
      </Form>

    </Question>
  )
}

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #687c9d;
  margin: 8px 0;
`
const Question = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 465px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  padding: 12px;
  .big {
    textarea {
      width: 278px;
      height: 38px;
      margin-bottom: 9px;
    }
    .default__control { width: 278px;}
  }

  .answer {
    height: 38px;
    margin-bottom: 5px;

    outline: none;
    border-radius: 2px;
    border: solid 1px #dedede;
    background-color: #efefef;
    font-size: 16px;
    padding-left: 5px;
    width: 230px;
    &:focus {
      border: solid 1px ${p => p.theme.color};
    }
  }
  .inputs {
    display: flex;

  }

  .button {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #fd7635;
    outline: none;
    border: none;  
    color: #fff;
    font-size: 28px;
    margin-left: 10px;
    margin-top: -2px;
    text-align: center;
    line-height: 38px;
  }

  label.submit {
    position: relative;
    top: 10px;
    cursor: pointer;
    align-self: flex-end;
    input[type='submit'] {
      display: none;
    }
    > div {
      width: 100%;
      text-align: center;
      background-color: ${p => p.theme.color};
      color: white;
      line-height: 38px;
    }
  }  
`

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 16px;
`

const types = {
  radio: { value: 'radio', label: 'Radio' },
  checkbox: { value: 'checkbox', label: 'Checkbox' },
  freeform: { value: 'freeform', label: 'Free Form' },
}
