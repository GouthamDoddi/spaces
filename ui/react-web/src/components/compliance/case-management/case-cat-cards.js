import React from 'react'

import styled from 'styled-components'

const data = [
  { name: 'Clariification', cases: 500, sla_breach: 45, progress: 24 },
  { name: 'Exception', cases: 500, sla_breach: 45, progress: 24 },
  { name: 'Support', cases: 500, sla_breach: 45, progress: 24 },
  { name: 'Relief', cases: 500, sla_breach: 45, progress: 24 },
  { name: 'Suggestion', cases: 500, sla_breach: 45, progress: 24 },
  { name: 'Suggestion 2', cases: 500, sla_breach: 45, progress: 24 },
]

export default function(props) {
  return (
    <Container>
      {
        data.map((item, i) => <Card {...item} key={i} /> )
      }
    </Container>
  )
}

const Container = styled.div`
  height: 400px;
  overflow: auto;
  margin-left: 14px;
  margin-top: 15px;
`

function Card(props) {
  const { key, name, progress, cases, sla_breach} = props
  return (
    <CaseCard key={key}>
      <InfoLayout>
        <Title> {name}</Title>
        <Completed> {progress}% Complete</Completed>
      </InfoLayout>
      <progress max={100} value={progress}></progress>
      <InfoLayout>
        <Info> Cases: {cases} </Info>
        <Info> Sla Breach: {sla_breach} </Info>
      </InfoLayout>
    </CaseCard>
  )
}

const CaseCard = styled.div`
  width: 273px;
  height: 76px;
  border-radius: 3px;
  background-color: #f4f7fa;
  margin-bottom: 5px;
  padding: 10px 20px 10px 12px;
  progress {
    height: 4px;
    color: red;
    -webkit-appearance: none;
    width: 100%;
  }
  progress::-webkit-progress-bar { background-color: #e5eff8; }
  progress::-webkit-progress-value { background: ${p => p.theme.color}; }
  progress::-moz-progress-bar { background: ${p => p.theme.color}; }

`
const InfoLayout = styled.div`
  display: flex;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`
const Completed = styled.div`
  font-size: 8px;
  font-weight: 700;
  line-height: 1.5;
  color: ${p => p.theme.color};
  align-self: flex-end;
`

const Info = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #7e9ab3;
`
