import React from 'react'

import styled from 'styled-components'

import TaskCard from './task-card'

import ticketData from '../../../store/temp-data-tickets'
import Input from '../../form/input'
import { useParams } from 'react-router-dom'

function rTo(id) {
  return id
}
export default function(props){
    const { ticket } = useParams()
    const data = ticketData[ticket].tasks
    return (
      <Container>
        <Cards>
          { data.map((task, i ) => (
            <TaskCard {...task} to={rTo(task.id)} key={i} />
          ))}
        </Cards>
        <div className='details'>
          <span> View Task </span>
          <Input label='Name' />
          <Input label='description' />
          <div className='append'>
            <Input label='Priority' />
            <button> Append </button>
          </div>
          
        </div>
      </Container>
    )
}

const Container = styled.div`
  display: flex;
  max-height: 290px;
  .details {
    width: 260px;
    padding: 14px;
    span + div {
      margin-top: 10px;
    }
    input {
      width: 249px;
      margin-bottom: 12px;
    }

    .append {
      display: flex;
      input {
        width: 140px;
      }
      button {
        height: 38px;
        align-self: flex-end;
        margin: 0 0 12px 10px;
        border: none;
        border-radius: 2px;
        background-color: ${p => p.theme.color};
        color: #fff;
        width: 82px;
      }
    }
  }
`
const Cards = styled.div`
  width: 344px;
  height: 275px;
  background-color: #efeeee;
  overflow: auto;
  padding: 10px;
  > a {
    background-color: #fff;
    margin-bottom: 10px;
    &.selected {
      border: 1px solid #fff;
    }
  }
`