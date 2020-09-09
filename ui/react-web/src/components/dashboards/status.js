import React from 'react'
import styled from 'styled-components'

export default function({type='Participated', item='Entities', count, total, itemColor='#257c76', ...props}) {
  return (
    <Container className={props.className}>
      <Left>
        <Type> {type} </Type>
        <Item color={itemColor}> { item } </Item>
      </Left>
      <Right>
        {count}
      </Right>
    </Container>
  )
}


const Container = styled.div`
  // max-width: 420px;
  height: 130px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  display: flex;
  padding: 20px;
`

const Left = styled.div`
  flex: 1;
  flex-direction: column;

`

const Right = styled.div`
  // width: 53px;
  font-size: 54px;
  font-weight: 300;
  color: #43425d;
  display: flex;
  align-items: center;
  justify-content: right;
`

const Type = styled.div`
  font-size: 22px;
  line-height: 1.04;
  color: #666666;
`

const Item = styled.div`
  font-size: 42px;
  font-weight: 500;
  margin-top: 5px;
  color: ${p => p.color};
`

