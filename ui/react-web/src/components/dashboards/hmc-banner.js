import React from 'react'
import styled from 'styled-components'

export default function({type='Participated', item='Entities', count, total, itemColor='#257c76', ...props}) {
  return (
    <Container className={props.className}>
      <Left>
        <Type> Hamad Medical Corporation </Type>
      </Left>
      <Right>
        36
      </Right>
    </Container>
  )
}


const Container = styled.div`
  background-image: url(/img/hmc-banner.jpg);
  background-size: 100% 100%;
  height: 130px;
`

const Left = styled.div`
  flex: 1;
  flex-direction: column;

`

const Right = styled.div`
  width: 53px;
  font-size: 48px;
  font-weight: 300;
  color: #43425d;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Type = styled.div`
  font-size: 42px;
  font-weight: 300;
  color: #ffffff;
`

const Item = styled.div`
  font-size: 48px;
  font-weight: 500;
  color: ${p => p.color};
`

