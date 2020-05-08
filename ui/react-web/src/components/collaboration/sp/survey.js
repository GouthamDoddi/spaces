import React, {useState} from 'react'
import styled from 'styled-components'


import { useParams } from 'react-router-dom';

import Link from '../shared/clink';


function rTo(id, qid) {
  return `/collaboration/sp/${id}/${qid}`
}


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

export default function Element(props) {
  const { id, qid } = useParams()

  const total = data[id].total
  const item = data[id].data[qid - 1]

  // const next = ['Next', qid + 1]
  // const prev = ['Back', qid - 1]
  // let links = []
  let nextDisabled, prevDisabled;

  if(qid > total) { nextDisabled = true }
  if(qid <= 1) { prevDisabled = true }

  let [enable, setEnable] = useState(false)

  return (
    <>
      {
        nextDisabled ? <ShowDone {...data[id]} dataid={id}/> :
          <Survey>
            <div className='progress'> Progress({qid}/{total}) </div>
            <div className='container'>
              <progress value={qid} max={total} />
              <div className='q'> {item.q} </div>
              {
                item.ans.data.map(a => <div className='ans'> <input type='radio' name={`ans${qid}`} key={qid} onChange={(e) => {setEnable(true)}}/> {a} </div>)
              }
              <div className='actions'>
                <Link to={rTo(id, qid - 1)} className={prevDisabled ? 'disabled' : ''}> Back </Link>
                <Link to={rTo(id, (qid * 1) + 1)} className={ !enable ? 'disabled' : ''}> Next </Link>
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
      > a {
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
        & + a {
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


const data = {
  1: {
    type: 'survey',
    total: 2,
    data: [
      {
        q: 'Question 1?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2']
        }
      },
      {
        q: 'Question 2?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2', 'ans3']
        }
      },
    ]
  },
  2:  {
    type: 'petition',
    total: 3,
    data: [
      {
        q: 'Question 1?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2']
        }
      },
      {
        q: 'Question 2?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2', 'ans3']
        }
      },
      {
        q: 'Question 3?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2', 'ans3']
        }
      },
    ]
  },
  3:  {
    type: 'survey',
    total: 2,
    data: [
      {
        q: 'Question 1?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2']
        }
      },
      {
        q: 'Question 2?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2', 'ans3']
        }
      },
    ]
  },
  4:  {
    type: 'survey',
    total: 2,
    data: [
      {
        q: 'Question 1?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2']
        }
      },
      {
        q: 'Question 2?',
        ans:{
          type: 'radio',
          data: ['ans 1', 'ans 2', 'ans3']
        }
      },
    ]
  }
}