import React from 'react'
import styled from 'styled-components'

export default function({type='Hamad Medical Corporation', size, hideItems=false, wtxt='Websites', mtxt='Mobile Apps', etxt='E-Services', prepend={}, websites=3, mobile=3, eservices=30, item='Entities', count, total, hideScore=false, ...props}) {
  return (
    <Container className={props.className}>
      <Left>
        <Type size={size} hideItems={hideItems}> {type} </Type>
        {!hideItems ? 
          <Items>
            {
              Object.keys(prepend).map((k, i) => <Item>{k}: { prepend[k] } </Item>)
            }
            <Item>{wtxt}: { websites } </Item>
            <Item>{mtxt}: { mobile } </Item>
            <Item>{etxt}: { eservices } </Item>
          </Items> : null
        }
      </Left>
      <Right>
        { !hideScore ? 
          <>
            <Score>
              <div>Overall Score</div>
              <span> 87/100 </span>
            </Score> <img src='/img/hmc_logo.jpg' /> </> : null
        }
        
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
  font-size: ${p => p.size || '42px'};
  font-weight: 300;
  color: #ffffff;
  margin-top: ${p => p.hideItems ? '42px': '30px'};
`

const Items = styled.div`
  display: flex;
  margin-top: 10px;
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