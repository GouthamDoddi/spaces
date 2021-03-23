import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

export default function({children, viewType, viewName,  ...props}) {
  return(
    <Outline>
      <div className='logo'>
        <img src='/img/logo-jawda.jpg' />
        <div> 
          <div className='view'>{viewType}</div>
          <div className='name'>{viewName}</div>
        </div>
      </div>
      {children}
      <div className='menu'> 
        <Link to='/'> Home </Link> 
        <Link to='/dashboard'> Dashboards </Link> 
        <Link to='/entities'> Entities </Link> 
        <Link to='/projects'> Projects </Link> 
      </div>
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

  > .logo {
    margin-left: 100px;
    margin-top: 10px;
    display: flex;
    img {
      width: 128px;
      height: 40px;
      margin-right: 40px;
    }

    > div {
      border-left: 1px solid #CFCFCF;
      // line-height: 40px;
      height: 40px;
      padding-left: 30px;
      > .view {
        font: normal normal normal 14px/18px Muli;
        color: #999999;  
      }
      > .name {
        font: normal normal bold 15px/22px Muli;
        color: #000000;
      }
    }
  }
  > .menu {
    margin-right: 50px;
    a {
      padding: 10px;
      // background-color: #EB622B;
      // color: #fff;
      color: #666666;
      border-radius: 4px;
    }
  }

`

