import React, { useEffect } from 'react'
import styled from 'styled-components'

import { useParams, Link } from 'react-router-dom'

// &#129169;


function BoxW({arrow, acolor, tcolor, color, rot, data={}}) {
  if(color) {
    tcolor = color
    acolor = color
  }
  return (
    <Box>
      <Card color={tcolor}> 
        <Title color={tcolor}> {data.title}</Title>
        <Descr>{data.description}</Descr>
        <Status>Status: {data.status}</Status>
        <StartDate> Start Date: {data.start_date} </StartDate>
      </Card>
      {
        arrow ? 
          <CaretLR color={acolor}>
            { rot.includes('-') ? <ArrowR rot={rot}> {arrow} </ArrowR> : <Arrow rot={rot}> {arrow} </Arrow> }
          </CaretLR> : null
      }
    </Box>
  )
}

export default function(props) {

  const { policy_id } = useParams()
  
  return(
    <>
      <div className='form-space'>
        <Wrapper>
          <Content> 
            <BoxW color='#0e0563' arrow='&#9650;' rot='90' data={planData[0]}/>
            <BoxW color='#ff0909' arrow='&#9650;' rot='90' data={planData[1]}/>
            <BoxW color='#ff0909' data={planData[2]}/>

            <div>
            </div>
            <div></div>
                
            <CaretLR color='#fd7635'>
              <Arrow> &#9660; </Arrow>
            </CaretLR>
            
            <BoxW acolor='#42d7b6' tcolor='#0091ff' arrow='&#9650;' rot='-90' data={planData[5]}/>
            <BoxW acolor='#2a9209' tcolor='#42d7b6' arrow='&#9650;' rot='-90' data={planData[4]}/>
            <BoxW tcolor='2a9209' data={planData[3]}/>
            

            <CaretLR color='#0091ff' left='-32px;'>
              <Arrow> &#9660; </Arrow>
            </CaretLR>
            <div></div>
            <div></div>

            <BoxW tcolor='2a9209' arrow='&#8205;' rot='' data={planData[6]}/>

          </Content>
        </Wrapper>

      </div>

      <div className='widgets'>

      </div>
    </>
  )
}


const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: ${p => p.color};
  margin-bottom: 6px;
`


const Descr = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: #98acbe;
  margin-bottom: 4px;
`
const Status = styled.div`
  font-size: 10px;
  color: #7e9ab3;
  margin-bottom: 6px;

`
const StartDate = styled.div`
  font-size: 8px;
  font-weight: bold;
  color: #7e9ab3;
`

const Arrow = styled.div`
  width: 12px;
  height: 12px;
  margin-bottom: 6px;
  margin-left: 12px;
  transform: rotate(${p => p.rot}deg);
`

const ArrowR = styled(Arrow)`
  margin-left: -12px;
  margin-bottom: -1px;
`
const Box = styled.div`
  display: flex;
`

const CaretLR = styled.div`
  display: flex;
  min-width: 32px;
  color: ${p => p.color };
  align-items: center;
  justify-content: center;
  margin-left: ${p => p.left}


`

const Wrapper = styled.div`
  display: flex;
  // max-width: 1027px;
  padding: 20px;
  justify-content: center;
`
const Content = styled.div`  
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(207px, 1fr)) 0.9fr;
  grid-template-rows: 108px 42px 108px 42px 108px;
`
const Card = styled(Link)`
  flex: 1;
  min-width: 207px;
  height: 108px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #f4f7fa;
  background-color: #f4f7fa;
  padding: 10px 13px 14px 17px;
`


const planData = [
  {
    title: 'Identification & Planning',
    description: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    status: 'Active',
    start_date: '13 April 2013'
  },
  {
    title: 'Design & Development',
    description: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    status: 'Active',
    start_date: '13 April 2013'
  },
  {
    title: 'Policy Propagation',
    description: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    status: 'Active',
    start_date: '13 April 2013'
  },
  {
    title: 'Implementation',
    description: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    status: 'Active',
    start_date: '13 April 2013'
  },
  {
    title: 'Adoption & Support',
    description: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    status: 'Active',
    start_date: '13 April 2013'
  },
  {
    title: 'Regulation & Compliance',
    description: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    status: 'Active',
    start_date: '13 April 2013'
  },
  {
    title: 'Review & Maintenance',
    description: 'Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    status: 'Active',
    start_date: '13 April 2013'
  },
]