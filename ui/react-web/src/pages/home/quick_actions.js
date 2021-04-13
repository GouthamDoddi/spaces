import styled from 'styled-components'

import React from 'react'

import rtl from 'styled-components-rtl'
import { Link } from 'react-router-dom'


export default function QuickActions({list=[['entity', 'entities'], ['project', 'projects']], ...props}) {
  return(
    <Box>
      <header> Quick Actions </header>
      <footer>
        {
          list.map((o,i) => (
            <Link to={o[1] ? o[1].includes('project') ? `${o[1]}/new/profile` : `${o[1]}/new` : ''}><IconWrapper key={i}> <AddBtn /> <span> Add {o[0]} </span> </IconWrapper></Link>
              
          ))
        }

      </footer>
      
    </Box>
  )
}
const Box = styled.div`
  // max-width: 839px;
  // min-width: 760px;
  width: 100%;
  height: 103px;
  background: #F7FAFD 0% 0% no-repeat padding-box;
  border: 1px solid #DDDDDD;
  opacity: 1;

  > header {
    border-bottom: 1px solid rgb(221, 221, 221, .36);
    display: flex;
    align-items: center;
    height: 38px;
    ${rtl`
      padding-left: 45px;
    `}
  }

  > footer {
    ${rtl`
      padding-left: 40px;
    `}
    height: 65px;
    display: flex;
    align-items: center;
  }

`

const Icon = styled.div`
  display: flex;
  padding: 4px 18px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 1px #00000029;
  border-radius: 15px;
  font: normal normal normal 15px/22px Muli;
  > span {
    margin-left: 10px;
  }
`

function AddBtn() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11"><defs><style>.a{}</style></defs><g transform="translate(0.5 0.5)"><line style={{fill: 'none', stroke:'#043555', strokeLinecap: 'round'}} y2="10" transform="translate(5)"/><line style={{fill: 'none', stroke:'#043555', strokeLinecap: 'round'}} y2="10" transform="translate(10 5) rotate(90)"/></g></svg>
    </div>
    
  )
}


function IconWrapper({className, children, ...props}) {
  return (
    <div style={{marginRight: '10px', color: '#000'}}>
      <Icon> {children} </Icon>
    </div>
  )
}