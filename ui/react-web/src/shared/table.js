import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function({title='Recent Activities', className, showAll=true, children, ...props}) {
  return (
    <Container className={className}>
      <TitleBar>
        <span className='title'>
          {title}
        </span>
        { showAll ? <button>Show All</button> : null }
      </TitleBar>
      {children}
    </Container>
  )
}

// export function Row({className, children, filter}){
//   return(
//     <RowWrapper className={className}>
//       {children}
//     </RowWrapper>
//   )
// }
// You have created new project
const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  > .title {
    font-size: 21px;
    line-height: 1;
    text-align: left;
    color: #666666;
  }
  button {
    width: 80px;
    height: 26px;
    border-radius: 5px;
    border: solid 1px #e7e7e7;
    background-color: #eeeeee;
    font-size: 13px;
    text-align: center;
    color: #666666;
    margin-top: -5px;
  }
`
const Container = styled.div`
  border: solid 1px #dddddd;
  background-color: #ffffff;
  padding: 18px 20px;
  height: 290px;
  overflow-y: auto;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: ${p => p.columns || '.3fr 1fr 1fr 1.5fr'};
  grid-auto-rows: 45px;
  background-color: #f0f0f0;
  > div, a {
    display: flex;
    justify-content: left;
    align-items: center;
    &:first-child { margin-left: 8px;}
  }
  > a {
    color: black;
  }
  > .center { justify-content: center; }
  > .right { justify-content: right; }

`

export const Row = styled(Header)`
  background-color: #fff;
  margin-bottom: 3px;
  border-bottom: 1px solid #ddd;
  justify-content: left;
  text-overflow: ellipsis;
  overflow: hidden;
  grid-auto-rows: 50px;
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