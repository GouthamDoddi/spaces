import React from 'react'
import styled from 'styled-components'

export default function({title='Surveys', items=[], className, showAll=true, ...props}) {
  return (
    <Container className={className}>
      <TitleBar>
        <span className='title'>
          {title}
        </span>
      </TitleBar>
      <Bottom>
        <Small> Take the survey now.</Small>
        <Big> Cloud Policy 3.0 </Big>
      </Bottom>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  height: 290px;
  background: rgb(3,26,42);
  background: linear-gradient(90deg, rgba(3,26,42,1) 0%, rgba(36,139,217,1) 63%);
  position: relative;
`

const TitleBar = styled.div`
  padding-top: 7px; 
  font-size: 48px;
  color: #ffffff;
`

const Bottom = styled.div`
  position: absolute;
  bottom: 60px;
  left: 20px;
  color: #ffffff;
`

const Small = styled.div`
  font-size: 21px;
`

const Big = styled.div`
  font-size: 34px;
`