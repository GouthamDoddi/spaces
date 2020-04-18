import React from 'react'

import { NavLink } from 'react-router-dom';

import styled from 'styled-components'
import cs from '../utils/colors.js'


function NormalLink(props) {
  const { to, className, children } = props;
  return (
    <NavLink to={to} className={className} activeClassName='selected'>
      {children}
      <div> &#x2B24; </div>
    </NavLink>
  )
}

export default function header() {
  return (
    <StyledHeader>
      <div className='header-content'>
        <div className='title'>MOTC</div>
        <div className='menu'>
          <Link color={cs.home} to='/dashboard'>
            <div> Home </div>
          </Link>
          <Link color={cs.fs} to='/formulation'>
            <div> Formulation Spaces </div>
          </Link>
          <Link color={cs.cs} to='/collaboration'>
            <div> Collaboration Spaces </div>
          </Link>
          <Link color={cs.as} to='/activation'>
            <div> Activation Spaces </div>
          </Link>
          <Link color={cs.gov} to='/governance'>
            <div> Governance </div>
          </Link>
          <Link to='/policies'>
            <div> Policies </div>
          </Link>
        </div>
        <div className='user-actions'>
          <div className='msg'> <img src="/msg.svg" /> </div>
          <div className='notifications'>
            <img src="/bell.svg" />
          </div>
          <div className='user-icon'></div>
          <div className='username'> Sampson Totton</div>
        </div>
      </div>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  min-width: 1440px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;

  .header-content {
    display: grid;
    grid-template-columns: 132px auto 404px;
    align-items: center;
    height: 100%;
    background-color: #fff;

    .title {
      width: 132px;
      height: 30px;
      font-size: 24px;
      font-weight: 800;
      color: #000000;
      margin-left: 23px;
    }

    .menu {
      display: flex;
    }
    .user-actions {
      display: flex;
      align-items: center;
      height: 32px;
      padding-right: 90px;
      .msg, .notifications {
        margin-right: 24px;
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
      }
      .user-icon {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        background-color: #ccc;
        margin-right: 15px;
      }

      .username {
        height: 18px;
        font-family: Muli;
        font-size: 14px;
        font-weight: 800;
        color: #11236e;
      }
    }
  }

`
const Link = styled(NormalLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  color: #687c9d;
  cursor: pointer;
  margin-top: 6px;
  // min-width: 104px;
  & + & {
    margin-left: 27px;
  }
  div:first-child {
    padding: 6px 14px ;
  }
  &.selected div:first-child {
    border-radius: 16px;
    background-color: #e4e8ee;
    color: ${props => props.color || '#687c9d'};
    font-weight: 700;
  }
  div:nth-child(2) {
    text-align: center;
    font-size: 4px;
    transform: scale(0.8);
    margin-top: 2px;
    color: ${props => props.color || 'white'};
  }
`