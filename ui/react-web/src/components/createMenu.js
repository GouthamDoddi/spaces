import React from 'react'
import styled from 'styled-components'


export default function(props) {
  return(
    <Menu>
      <Header>
        <div className='content'>
          <div className='title'> Formulation Space </div>
          <div className='status'>
            <span className='label'> Policy Family: </span>
            <span className='value'> Taxation </span>
            <span className='dot'> &#x2B24; </span>
            <span className='label'> Status: </span>
            <span className='value'> Active </span>
          </div>
        </div>
      </Header>
      <Items>
        <Item>
          <Icon />
          <Name>Create Task</Name>
        </Item>
        <Item>
          <Icon />
          <Name>Create Survey</Name>
        </Item>
        <Item>
          <Icon />
          <Name>Create Note</Name>
        </Item>
        <Item>
          <Icon />
          <Name>Invite to space</Name>
        </Item>
        <Item>
          <Icon />
          <Name>Call for Meeting</Name>
        </Item>
      </Items>
    </Menu>
  )
}


const Menu = styled.div`
  min-width: 309px;
  width: 309px;
  height: 593px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
`;

const Header = styled.div`
  width: 309px;
  height: 130px;
  border-radius: 3px;
  background-color: #fd7635;
  position: relative;
  .content {
    position: absolute;
    top: 21px;
    left: 25px;
    .title {
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      width: 100%;
    }
    .status {
      font-size: 14px;
      font-weight: 500;
      color: #fbc394;
      .label { color: #fac99e; }
      .value { color: #ffffff; }
      .dot { font-size: 6px; color: #ffffff; position: relative; top: -3px; margin-right: 2px;}
    }
  }

`;

const Items = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

const Item = styled.div`
  display: flex;
  width: 283px;
  padding-top: 22px;
  padding-bottom: 20px;
  border-bottom: solid 1px #e6f0f9;
  align-content: center;
  &:first-child {
    margin-top: 10px;
  }
  &:last-child {
    border-bottom: none;
  }
  cursor: pointer;
`
const Icon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: #ffefe2;
`
const Name = styled.div`
  margin-left: 18px;
  font-family: Muli;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  display: flex;
  align-items: center;
`