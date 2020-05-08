import React, { useState } from 'react';

import styled from 'styled-components';

import Tabs from './kb-tabs'

import { useParams } from 'react-router-dom'



function Question(props) {
  const { q, ans, i, section } = props
  let [show, setShow] = useState(false)
  console.log(show)
  return (
    <QstnBox className={show ? 'show' : ''} key={`${section}${i}`}>
      <div className='q'>
        <div className='text'> {q} </div>
        <button className='action' onClick={() => setShow(!show)}>
          { show ? <img src='/img/kb/minimize.svg' alt='minimize' /> : <img src='/img/kb/expand.svg' alt='expand' />}
        </button>
      </div>
      <div className='ans'> {ans} </div>
    </QstnBox>
  )
}
export default function Element(props) {
  const { section } = useParams()
  return (
    <>
      <Tabs />
      <Container>
        {
          questions[section].map((q, i) => <Question section={section} {...q} i={i} />)
        }
      </Container>
    </>
  )
}


const questions = {
  section1: [
    {
      q: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur asit consectetur adipiscing elit, sed do eiusmod',
      ans: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit'
    },
    {
      q: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur asit consectetur adipiscing elit, sed do eiusmod',
      ans: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit'
    },
    {
      q: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur asit consectetur adipiscing elit, sed do eiusmod',
      ans: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit'
    }
  ],
  section2: [
    {
      q: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur asit consectetur adipiscing elit, sed do eiusmod',
      ans: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit'
    },
    {
      q: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur asit consectetur adipiscing elit, sed do eiusmod',
      ans: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit'
    }
  ],
  section3: [
    {
      q: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur asit consectetur adipiscing elit, sed do eiusmod',
      ans: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit'
    }
  ]
}


const Container = styled.div`
  margin: 20px 15px 0px 14px;
  .qs {
    > * {
      margin-bottom: 20px;
    }
  }
`

const QstnBox = styled.div`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  font-size: 14px;
  margin-bottom: 20px;
  padding: 36px 14px;

  .q {
    font-size: 15px;
    font-weight: 800;
    color: #000000;
    display: flex;
    justify-content: space-between;
    .text {

    }
    .action {
      outline: none;
      border: none;
      width: 61px;
    }
  }
  .ans {
    padding-top: 20px;
    display: none;
    font-weight: 500;
    color: #6d7f9c;
  }
  &.show {
    .ans { display: block; }
    padding-bottom: 14px;
  }
`
