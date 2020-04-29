import React from 'react'

import styled from 'styled-components'
import Container from './container'

import ProgressCard from '../../progress-card'

export default function(props) {
  return(
    <Container>
      <Main>
        <ProgressCard title='Backlog Count'
          subtitle='Backlog count of Policy Dashboard'
          progress={152} width='336px' max={255} sym='' color='#ffa163' />
        <ProgressCard title='Petetions'
          subtitle='Petitions of Policy Dashboard'
          progress={98} width='336px' max={134} sym='' color='#44d7b6' />
        <ProgressCard title='Expiry Date'
          subtitle='Expiry Date of Policy Dashboard'
          days={23} color='#7b79ff' width='336px' date='13 April 2020' />
        <ProgressCard title='Next Review'
          subtitle='Expiry Date of Policy Dashboard'
          days={23} color='#ff79c4' width='336px' date='13 April 2020' />
        <ProgressCard title='Expiry Date'
          subtitle='Expiry Date of Policy Dashboard'
          days={23} color='#7b79ff' width='336px' date='13 April 2020' />
        <ProgressCard title='Expiry Date'
          subtitle='Expiry Date of Policy Dashboard'
          days={23} color='#7b79ff' width='336px' date='13 April 2020' />
        <ProgressCard title='Expiry Date'
          subtitle='Expiry Date of Policy Dashboard'
          days={23} color='#7b79ff' width='336px' date='13 April 2020' />
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
`