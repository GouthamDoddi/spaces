import React from 'react'
import styled from 'styled-components'

export default function({type='Participated', item='Entities', count, total, itemColor='#257c76', ...props}) {
  return (
    <Container className={props.className}>
      <Left>
        <Type> Hamad Medical Corporation </Type>
        <Items>
          <Item>Websites: 3</Item>
          <Item>Mobile Apps: 3</Item>
          <Item>E-Services:: 30</Item>
        </Items>
      </Left>
      <Right>
        <Score>
          <div>Overall Score</div>
          <span> 87/100 </span>
        </Score>
        <img src='/img/hmc_logo.jpg' />
      </Right>
    </Container>
  )
}


const Container = styled.div`
  background-image: url(/img/hmc-banner.jpg);
  background-size: 100% 100%;
  height: 130px;
  display: flex;
  justfy-content: space-between;
  padding-left: 25px;
`

const Left = styled.div`
  flex: 1;
  flex-direction: column;
`

const Right = styled.div`
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  img {
    width: 260px;
    height: 61px;
    border: solid 5px #ffffff;
  }
`

const Type = styled.div`
  font-size: 42px;
  font-weight: 300;
  color: #ffffff;
  margin-top: 30px;
`

const Items = styled.div`
  display: flex;
`

const Item = styled.div`
  font-size: 16px;
  line-height: 1.25;
  color: #ffffff;
  padding: 2px 20px;
  border-right: 1px solid #fff;
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    border-right: none;
  }
`

const Score = styled.div`
  font-size: 16px;
  margin-right: 20px;
  color: #ffffff;
  span {
    font-size: 32px;
  }
`