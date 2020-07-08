import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Switch, Link, Route, useParams } from 'react-router-dom'

import TaskCard from './task-card'

import { useTo } from '../util'

import makeStore from '../../../store/make-store'

import { useStore } from 'effector-react'

import CasePopup from './case-popup'

const tasksState = makeStore(({project_id}) =>  `compliance/${project_id}/tasks`)

function useLinkTo(path, exact=false) {
  return useTo(`compl-q/${path}`, exact)
}

export default function(props) {
  const {project_id} = useParams()

  const [taskData, setTaskData] = useState(null)

  useEffect(() => {
    tasksState.load({project_id})
  },[])

  const tasksStore = useStore(tasksState.store)
  const data = tasksStore.data || []

  return (
    <div className='form-space full-width'>
      <Container>
        {
          data.map((o, i) => (
            <TaskCard {...o} key={i} onClick={() => setTaskData(o)}> </TaskCard>
          ))
        }

        { taskData ? <CasePopup data={taskData} close={() => setTaskData(null)} loadP={tasksState.load} /> : null }
      </Container>

    </div>
  )
}

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  grid-auto-rows: 96px;
  grid-gap: 15px 10px;
`