import React from 'react';

import styled from 'styled-components';
import Tag from './tag';

// import Link from './clink'


export default function Element(props) {
  const { user_icon, name, time, msg, tags, like_count, share_count, comment_count, img, video=null } = props
  return (
    <Container>
      <Card>
        <div className='top-bar'>
          <div className='icon'> </div>
          <div className='info'>
            <div className='name'> { name } </div>
            <div className='date'> { time } </div>
          </div>
          <div className='link'> Join Forum </div>
        </div>
        <div className='text'> { msg } </div>
        <div className='tags'>
          {
            tags.map((tag, i) => <Tag {...tag} key={i} />)
          }
        </div>
        <div className='media'>
          { img ? <img alt='media' src={img} /> : ''}
        </div>

        <div className='info'>
          <div className='likes'>
            <img alt='like' src='/img/forum/thumb.svg' />
            <img alt='msg' className='msg' src='/img/forum/msg.svg' />
            {like_count}
          </div>
          <div className='comments'> {comment_count} Comments {share_count} Shares</div>
        </div>

      </Card>
      <Actions>
        <button className='like'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14">
            <g fill="none" fillRule="evenodd">
              <path fill="#BEC2C9" className='main' d="M13 6.49c0-.645-.48-1.16-1.082-1.205l.005-.036s-1.794.003-3.904 0c-.006-.744 1.508-2.066.48-4.493-.001-.002-.003-.002-.003-.005C8.334.313 7.937 0 7.466 0c-.6 0-1.083.507-1.103 1.139l-.017.011v1.184L3 6.415v7.577h7.197c.016 0 .028.009.045.009.016 0 .029-.008.045-.01h.013l.002-.002c.593-.035 1.067-.536 1.067-1.163 0-.245-.089-.46-.21-.648.441-.154.765-.582.765-1.102 0-.468-.262-.864-.635-1.053.64-.014 1.156-.551 1.156-1.217 0-.498-.291-.924-.705-1.114.034.003.063.02.098.02.641 0 1.162-.546 1.162-1.22zM0 14h2V6H0v8z" mask="url(#prefix__b)"/>
            </g>
          </svg>
          Like
        </button>
        <button className='comment'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14">
            <path fill="#BEC2C9" className='main' fillRule="evenodd" d="M1.734 0h9.532C12.223 0 13 .837 13 1.868v6.54c0 1.031-.777 1.867-1.734 1.867H5.89L1.736 14v-3.725h-.002C.777 10.275 0 9.439 0 8.407V1.868C0 .837.777 0 1.734 0"/>
          </svg>
          Comment
        </button>
        <button className='share'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="20">
            <g fill="none" fillRule="evenodd">
              <path fill="#BEC2C9" className='main' d="M9.073 16.667l-.125.06c-.046.022-.2 0-1.166.166C4.492 17.459 2.937 19.597 0 21c0 0 1.671-9.08 9.073-8.667V8L15 14.5 9.073 21v-3.25-1.083z"/>
            </g>
          </svg>
          Share
        </button>
      </Actions>
    </Container>
  )
}

const Container = styled.div`
  border-radius: 1px;
  border: solid 1px #dddfe2;
  background-color: #ffffff;
  width: 100%;

`
const Card = styled.div`
  padding: 11px 17px 0 17px;
  .top-bar {
    height: 52px;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    .icon {
      width: 43px;
      height: 51px;
      border-radius: 10px;
      background-color: #ccc;
    }
    > .info {
      margin: 4px 0 0 9px;
      .name {
        font-size: 16px;
        font-weight: 700;
        color: #000000;
      }
      .date {
        margin-top: 3px;
        font-size: 13px;
        letter-spacing: normal;
        color: #96949d;
      }
    }

    .link {
      position: absolute;
      top: 9px;
      right: 21px;
      line-height: 38px;
      text-align: center;
      width: 166px;
      height: 38px;
      border-radius: 2px;
      background-color: #44d7b6;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
    }
  }

  .tags {
    margin-top: 15px;
    > * {
      margin-right: 10px;
    }
  }
  .text {
    margin-top: 6px;
    font-size: 16px;
    color: #1d212a;
  }
  .media {
    width: 100%;
    height: 315px;
    background-color: #ccc;
    margin-top: 12px;
    img {
      width: 100%;
      height: 315px;
      object-fit: contain;
    }
  }
  > .info {
    display: flex;
    align-items: center;
    margin-top: 8px;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 600;
    height: 38px;
    .likes {
      display: flex;
      color: #000000;
      margin-left: -2px;
      img {
        width: 19px;
        height: 19px;
        margin-top: -2px;
        &.msg {
          margin-left: -4px;
        }
        &:last-child {
          margin-right: 4px;
        }
      }

    }
    .comments {
      color: ${p => p.theme.color }
    }
  }
`
const Actions = styled.div`
  padding-left: 17px;
  display: flex;
  height: 34px;
  align-items: center;
  border-top: 1px solid #e5e5e5;
  color: #7f7f7f;;
  font-size: 13px;
  font-weight: 700;
  button {
    svg {
      margin-right: 7px;
      position: relative;
      top: 1px;
    }
    &.comment {
      svg { top: 3px; }
    }
    &.share {
      svg { top: 0; }
      margin-top: -3px;
    }
    margin-right: 40px;
    outline: none;
    border: none;
  }
`