import React from 'react'

import styled from 'styled-components'


function twoDig(num) {
  return (num + '').length < 2 ? `0${num}` : num
}

export default function(props) {
  const { i } = props
  return(
    <Box key={i}>
      <Number> #{twoDig(i + 1)} </Number>
      <Top>
        <Title>
          Project Profile Card
        </Title>
        {
          attributes.map((arr, i) => (
            <div className='row' key={i}>
              <div className='attr'>{arr[0]}</div>
              <div className='value'>{ props[arr[1]] }</div>
            </div>
          ))
        }
      </Top>
      <Bottom>
        <Progress value={Math.floor(Math.random() * 40)} max={100} />
      </Bottom>
    </Box>
  )
}


const Progress = styled.progress`
  &::-webkit-progress-bar { background-color: #e5eff8; }
  &::-webkit-progress-value { background: #f44e76; }
  &::-moz-progress-bar { background: #f44e76; }
  -webkit-appearance: none;
  width: 84.3%;
  height: 8px;
  color: #f44e76;
  border-radius: 5px;
`

const Box = styled.div`
  min-width: 415px;
  width: 415px;
  height: 400px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  position: relative;
`

const Number = styled.div`
  position: absolute;
  top: 15px;
  right: 28px;
  font-size: 33px;
  font-weight: 800;
  color: #7333dd;
`
const Top = styled.div`
  border-bottom: 1px dotted #e6f0f9;
  padding: 21px 18px 20px 29px;
  height: 277px;
  .row {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
    line-height: 1.73;
    font-size: 14px;
    font-weight: 500;
    .attr {

    }
    .value {
      font-weight: 700;
      text-align: right;
    }
  }
`

const Bottom = styled.div`
  padding-left: 30px;
  margin-top: 30px;
`

const Title = styled.div`
  margin-bottom: 26px;
  font-size: 15px;
  font-weight: bold;
  color: #000000;
`


const attributes = [
  ['Project Title', 'title'],
  ['Section Count', 'section_count'],
  ['Attribute Count', 'attribute_count'],
  ['Parameter Count', 'parameter_count'],
  ['Due Date', 'due_date'],
  ['Compliance Score', 'score'],
  ['Tickets', 'tickets']
]