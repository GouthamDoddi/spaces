import React from 'react'

import styled from 'styled-components'
import Container from './container'

import ProgressCard from '../../progress-card'

import { useRouteMatch } from 'react-router-dom'

import { allElements } from '../../../store/governance'
import cs from '../../../utils/colors'
import snapshotData from '../../../store/temp-data-snapshot'
import { useStore } from 'effector-react'

export default function(props) {
  const { params } = useRouteMatch('/:space/:asset/snapshot') || {}

  if(params === null) {
    return(<div> SOME ERROR OCCURED. Please Refresh </div>)
  }

  const store = useStore(allElements[params.asset].store)
  const ids = store.snapshots
  const testData = snapshotData[params.asset]

  if(!testData){
    return(
      <Container> <Main className='no-snaps'>
        <div> Please select snapshots from control panel.</div>
      </Main></Container>
  )}
  const selected = Object.assign({}, ...ids.map(k => ({[k]: testData[k]})))

  return(
    <Container>
      <Main>
        {
          Object.values(selected).map((item, i) => {
            if(!item) return(null)
            const color = cs[item.space].color
            if(item.type === 'percentage') {
              return(
                <ProgressCard title={item.title} key={i}
                  subtitle={item.subtitle}
                  progress={item.progress} width='336px' max={item.max} sym='%' color={color} />
              )
            } else if (item.type === 'date') {
              return(
                <ProgressCard title={item.title} key={i}
                  subtitle={item.subtitle}  date={item.date}
                  days={item.progress * 1} width='336px' max={item.max} sym='' color={color} />
              )
            } else if (item.type === 'value') {
              return(
                <ProgressCard title={item.title} key={i}
                  subtitle={item.subtitle}
                  progress={item.progress} width='336px' max={item.max} sym='' color={color} />
              )
            }

            return null
          })
        }
      </Main>
    </Container>
  )
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, 337px);
  grid-auto-rows: 140px;
  grid-gap: 23px 19px;

  &.no-snaps {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    > div { margin-top: -30px;}
  }
`