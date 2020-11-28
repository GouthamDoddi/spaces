import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = styled.div`
  width: 100%;
  min-width: 1027px;
  position: relative;
`

export const Top = styled.div`
  margin: 0 0 23px 4px;
  font-size: 14px;
  font-weight: 800;
  color: #687c9d;
`

export const Table = styled.div`
  width: 1027px;
  height: 425px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 1fr;
  grid-auto-rows: 70px;
  background-color: ${p => p.theme.icon};
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Row = styled(Header)`
  > div {
    border-right: 1px dotted #ccc;
  };
  background-color: #fff;
`

export const Add = styled(Link)`
  display: block;
  position: absolute;
  top: 270px;
  right: 50px;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: ${p => p.theme.color};
  &:after {
    content: '+';
    color: #fff;
    position: relative;
    top: 8px;
    left: 22px;
    font-size: 32px;
  }

  div {
    position: absolute;
    bottom: -20px;
    left: 2px;
    font-size: 8px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    color: ${p => p.theme.color};
  } 
`