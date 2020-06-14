import React, {useState, useEffect} from 'react'
import styled from 'styled-components'


import { useParams } from 'react-router-dom';

import Link from '../shared/link';

import data from '../../../store/temp-data-survey'

import makeStore from '../../../store/make-store'

import {useStore} from 'effector-react'

const {store, load, create} = makeStore(({project_id, section_id}) => `compliance/${project_id}/sections/${section_id}/questions`)


function ShowDone({type, dataid}) {
  const ans = ['A', 'B', 'C']
  let rows = []
  console.log(type)
  const sec = data[dataid];
  for(let i = 0; i < sec.total; i++) {
    let perc = Math.floor(Math.random() * 100)
    perc = (perc < 25 ? (26 + Math.floor(Math.random() * 20)) : perc)
    rows.push(
      <Result key={i}>
        <div className='rans'> { ans[Math.floor(Math.random() * sec.data[i].ans.data.length)] } </div>
        <div className='box'>
          <div className='rq'> {sec.data[i].q} </div>
          <progress max={100} value={perc} />
        </div>
        <div className='perc'> {perc}%</div>
      </Result>

    )
  }
  if(type === 'petition') {
    return(
      <Results>
        <div className='title'> RESULTS </div>
        { rows }
      </Results>
    )
  } else {
    return(
      <Done>
        <img src='/img/kb/done.svg' alt='done' />
        <div> Survey Complete! Thankyou for your time. </div>
        <button> Submit the Survey </button>
      </Done>
    )
  }
}

function submit(project_id, section_id, data) {
  const cb = (resp) => {
    console.log(resp)
  }
  create({data, project_id, section_id, cb})
}

export default function Element(props) {
  const { project_id, section_id, qid } = useParams()

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  useEffect(() => {
    load({project_id, section_id})
  },[])
  
  const qStore = useStore(store)

  const data = qStore.data || []

  const total = data.length

  let nextDisabled, prevDisabled;

  if(index >= total) { nextDisabled = true }
  if(index <= 0) { prevDisabled = true }

  let [enable, setEnable] = useState(false)
  
  const item = data[index] || {}

  const setAnswer = (e) => {
    const item = data[index]
    setAnswers({...answers, [item.id]: e.target.value})
    setEnable(true)
  }
  
  return (
    <>
      {
        nextDisabled ? <div> Done </div> :
          <Survey>
            <div className='progress'> Progress({index + 1}/{total}) </div>
            <div className='container'>
              <progress value={index + 1} max={total} />
              <div className='q'> {data[index]?.name} </div>
              {
                (item.possible_answers || []).map((a, i) => 
                    <div className='ans' key={i}> 
                      <input type='radio' name={`ans${qid}`} key={index} value={a} onChange={setAnswer} checked={answers[item.id] == a}/> {a} 
                    </div>)
              }
              <div className='actions'>
                <div onClick={() => setIndex(index - 1)} className={prevDisabled ? 'disabled' : ''}> Back </div>
                {
                  index === (total - 1) ? <div className={ !!!answers[item.id]? 'disabled' : ''} onClick={() => submit(project_id, section_id, answers)}> Submit </div> : 
                      <div onClick={() => setIndex(index + 1)} className={ !!!answers[item.id]? 'disabled' : ''}> Next </div>
                }
                
              </div>
            </div>
          </Survey>
      }

    </>

  )
}

const Results = styled.div`
  display: flex;
  flex-flow: column;
  .title {
    font-size: 15px;
    font-weight: 800;
    align-self: center;
    margin: 30px 0;
  }
  padding: 20px 53px;
`

const Result = styled.div`
  display: flex;
  width: 100%;
  font-weight: 700;
  color: #000000;
  .rans {
    min-width: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box {
    flex: 1;

    progress {
      width: 100%;
    }
  }
  .perc {
    margin-left: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

const Done = styled.div`
  display: flex;
  align-items: center;
  padding-top: 61px;
  flex-flow: column;
  img {
    width: 80px;
    height: 89px;
  }

  div {
    margin-top: 64px;
    font-size: 15px;
    font-weight: 700;
    color: #000000;
  }

  button {
    height: 38px;
    border-radius: 2px;
    background-color: #42d7b6;
    border: none;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    margin-top: 90px;
    padding: 10px 18px;
  }
`


const Survey = styled.div`
  font-size: 14px;
  font-weight: 500;
  .progress {
    text-align: center;
    margin-top: 60px;
  }

  .container {
    margin: 50px 53px;
    .q {
      margin-top: 50px;
      font-size: 15px;
      font-weight: 800;
    }
    .ans {
      margin-top: 40px;
      & + .ans {
        margin-top: 30px;
      }
      input {
        margin-right: 15px;
      }
    }
    .actions {
      display: flex;
      justify-content: center;
      margin-top: 60px;
      > div {
        display: inline-block;
        text-decoration: none;
        width: 160px;
        height: 38px;
        border-radius: 2px;
        background-color: #42d7b6;
        font-size: 14px;
        font-weight: 700;
        line-height: 38px;
        text-align: center;
        color: #ffffff;
        & + div {
          margin-left: 32px;
        }
      }
      .disabled {
        cursor: not-allowed;
        pointer-events: none;
        background-color: #CCC;
      }
    }

  }

  progress {
    height: 4px;
    width: 100%;
    -webkit-appearance: none;
  }

  progress::-webkit-progress-bar { background-color: #e5eff8; }

  progress::-webkit-progress-value { background: ${p => p.theme.color}; }
  progress::-moz-progress-bar { background: ${p => p.theme.color}; }
  .progress-value { color: ${p => p.theme.color}; }

`