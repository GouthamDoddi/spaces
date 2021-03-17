import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

export default function({children, ...props}) {
  return(
    <Outline>
      <div className='logo'>
        <img src='/img/logo-jawda.jpg' />
      </div>
      {children}
      <div> <Link to='/dashboard'> Application </Link> </div>
    </Outline>
  )
}
const Outline = styled.div`
  top: 0px;
  left: 0px;

  height: 60px;
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  // box-shadow: 0px 3px 5px #00000012;
  line-height: 60px;
  display: flex;
  justify-content: space-between;

  .logo {
    margin-left: 100px;
    margin-top: 10px;
    
    img {
      width: 128px;
      height: 40px;
    }
  }
  div {
    margin-right: 50px;
    a {
      padding: 10px;
      background-color: #EB622B;
      color: #fff;
      border-radius: 4px;
    }
  }

`

