import React, { useEffect } from 'react'

import styled from 'styled-components'

import TaskCard from './task-card'

import { useQuery } from '../util'
import { useStore } from 'effector-react'

import { useParams } from 'react-router-dom'

import { Select, TextArea, toOpt, Input } from '../../form'

import makeStore from '../../../store/make-store'

import { casePriorityTypes } from '../../../store/master-data'

const tasksState = makeStore(({project_id, case_id}) =>  `compliance/${project_id}/tasks/for-case/${case_id}`)

const { store, update, create, addData, changed, selectChange } = makeStore(({project_id, id}) =>  id ? `compliance/${project_id}/tasks/${id}` : `compliance/${project_id}/tasks`)

export default function(props){

  function submit() {
    let data = taskStore.data || {}
    const cb = (resp) => {
      tasksState.load({project_id, case_id: resp.id})
    }
    data = {...data, section_id, case_id, attribute_id: attr_id }
    if(data.title?.trim().length > 0) {
      data.id ? update({project_id, id, data, cb}) : create({project_id, data, cb})
    }
  }
  const {project_id} = useParams()
  
  const query = useQuery()
  
  const section_id = query.get('section_id')
  const attr_id = query.get('attr_id')
  const case_id = query.get('case_id')

  const tasksStore = useStore(tasksState.store)
  const taskStore = useStore(store)

  const data = tasksStore.data || []

  const { id, title, description, priority } = taskStore.data || {}

  useEffect(() => {
    tasksState.load({project_id, case_id})
  },[])


  return (
    <Container>
      <Cards>
        { data.map((task, i ) => (
          <TaskCard {...task} to={id} key={i} />
        ))}
      </Cards>
      <div className='details'>
        <span> View Task </span>
        <Input label='Title' name='title' type='text' onChange={changed} value={ title || ''} className='field'/>

        <TextArea label='Description' name='description' type='text' onChange={changed} value={ description || ''} className='field' />
        
        <div className='append'>
          <Select name='priority' label='Priority' 
              options={toOpt(casePriorityTypes)}
              outerClass='field'
              onChange={selectChange('priority')}
              value={casePriorityTypes[priority] || ''} 
          />
          <button onClick={submit}> Append </button>
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
    padding: 0 14px;
    span + div {
      margin-top: 3px;
    }

    textarea {
      min-width: 249px;
      height: 70px;
    }
    input {
      width: 249px;
      margin-bottom: 12px;
    }

    .append {
      display: flex;
      .field {
        margin-top: 4px;
        .default__control { width: 140px; height: 40px; }
      }
      button {
        height: 40px;
        align-self: flex-end;
        margin: 31px 0 12px 10px;
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
  height: 290px;
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