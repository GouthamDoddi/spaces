import React from 'react';

import styled from 'styled-components'

import Link from './clink'

export default function Element({ className }) {
  return (
    <Container className={className}>
      <div className='tools'>
        <Link to='' className='link status'>
          <img alt='pencil' src='/img/forum/pencil.svg' />
          Status
        </Link>
        <Link to='' className='link photo'>
          <img alt='pencil' src='/img/forum/camera.svg' />
          Photo / Video
        </Link>
      </div>
      <div className='box'>
        <ProfileIcon />
        <textarea placeholder="Write something on this Page…" />
      </div>
    </Container>

  )
}

const Container = styled.div`
  // margin-bottom: 14px;
  .tools {
    height: 34px;
    border-radius: 2px;
    background-color: #f6f7f9;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    padding-left: 20px;
    align-items: center;
    .link {
      display: flex;
      img {
        margin-right: 7px;
      }
      font-size: 12px;
      font-weight: bold;
      &.status{
        color: #504f56;
        margin-right: 15px;
        margin-top: 2px;
        img {
          margin-top: -3px;
        }

      }
      &.photo {
        color: #44d7b6;
      }
    }
  }
  .box {
    height: 74px;
    border-radius: 2px;
    background-color: #f7f7f7;
    padding: 0 15px;
    display: flex;
    align-items: center;

    textarea {
      width: 100%;
      height: 100%;
      outline: none;
      border: none;
      resize: none;
      height: 52px;
      background-color: #f7f7f7;
      font-size: 14px;
      font-weight: 700;
      color: #90949d;
      // padding: 10px 0 0 5px;
    }
  }
`

const ProfileIcon = styled.img`
  width: 48px;
  height: 52px;
  border-radius: 10px;
  background-color: #ccc;
  margin-right: 12px;
`