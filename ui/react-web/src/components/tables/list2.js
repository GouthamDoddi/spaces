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
  min-width: 1027px;
  height: 425px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  font-size: 14px;
  color: #000000;
  overflow: auto;
`

export const Header = styled.div`
  min-width: 1023px;
  display: grid;
  grid-template-columns: ${p => p.columns || '40px 100px 1.5fr 1fr 0.6fr 1fr 0.5fr 1.2fr 1.2fr'};
  grid-auto-rows: 70px;
  background-color: ${p => p.theme.icon};
  // justify-items: center;
  > * {
    display: flex;
    // min-width: 200px;
    align-items: center;
    &:first-child {
      padding-left: 10px;  
    }
    &:nth-child(2) {
      padding-left: 10px;  
    }
    padding-left: 40px;
  }
  margin-bottom: 1px;
`

export const Row = styled(Header)`
  grid-template-columns: ${p => p.columns || '40px 100px 1.5fr 1fr 0.6fr 1fr 0.5fr 1.2fr 1.2fr'};
  grid-auto-rows: 40px;
  > div {
    // border-right: 1px dotted #ccc;
  };
  > a {
    color: #000000;
  }
  height: 40px;
  font-weight: 500;
  &:nth-child(2n) { background-color: #fff};
  &:nth-child(2n+1) { background-color: #fafafa};
  
`

export const PRow = styled(Header)`
  grid-template-columns: ${p => p.columns || '40px 100px 1.5fr 1fr 0.6fr 1fr 0.5fr 1.2fr 1.2fr'};

  grid-auto-rows: 40px;
  > div {
    // border-right: 1px dotted #ccc;
  };
  > a {
    color: #000000;
  }
  height: 40px;
  font-weight: 500;
  background-color: ${p => p.theme.icon};
  font-weight: bold;
`

export const Add = styled(Link)`
  display: block;
  position: absolute;
  bottom: 42px;
  right: 33px;
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