import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

import makeStore from '../../../store/make-store'
import {useStore} from 'effector-react'

const {store, load, create} = makeStore(({project_id}) => `compliance/${project_id}/possible-questions`)


export default function(props) {
  const { project_id } = useParams()
  const qStore = useStore(store)
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  let [enable, setEnable] = useState(false)
  let [retake, setRetake] = useState(false)

  let nextDisabled, prevDisabled, total, data, item;
  if(qStore.data) {
    data = qStore.data.qs || []
    total = data.length
    if(index >= total) { nextDisabled = true }
    if(index <= 0) { prevDisabled = true }
    item = data[index] || {}
  }

  const setAnswer = (e) => {
    // const item = data[index]
    setAnswers({...answers, [item.id]: e.target.value})
    setEnable(true)
  }

  useEffect(() => {
    load({project_id})
  }, [project_id, retake])

  function SurveyE(props) {
    return(
      <Survey>
        <div className='progress'> Progress({index + 1}/{total}) </div>
        <div className='container'>
          <progress value={index + 1} max={total} />
          <div className='q'> {data[index]?.name} </div>
          {
            (item.possible_answers || []).map((a, i) => 
                <div className='ans' key={i}> 
                  <input type='radio' name={`ans${index}`} key={index} value={a} onChange={setAnswer} checked={answers[item.id] == a}/> {a} 
                </div>)
          }
          <div className='actions'>
            <div onClick={() => setIndex(index - 1)} className={prevDisabled ? 'disabled' : ''}> Back </div>
            {
              index === (total - 1) ? <div className={ !!!answers[item.id]? 'disabled' : ''} onClick={() => submit(project_id, answers)}> Submit </div> : 
                  <div onClick={() => setIndex(index + 1)} className={ !!!answers[item.id]? 'disabled' : ''}> Next </div>
            }
            
          </div>
        </div>
      </Survey>
    )
  }
  function ShowDone({answers}) {
    return(
      <Done>
        <img src='/img/kb/done.svg' alt='done' />
        <div> Survey Complete! Thank you for your time. </div>
        <button onClick={() => {setAnswers({}); setRetake(true)}}> Re - Take </button>
      </Done>
    )
  }

  function submit(project_id, data) {
    const cb = (resp) => {
      setRetake(false)
    }
    create({data, project_id, cb})
  }

  return(
    <div className='form-space full-width'>
      { data ? 
          ((qStore.data.done && !retake) ? <ShowDone /> : <SurveyE />)
        : null
      }
    </div>
  )
}

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