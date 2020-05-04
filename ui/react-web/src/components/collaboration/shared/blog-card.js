import React from 'react';

import styled from 'styled-components';
import Tag from './tag';


export default function Element(props) {
  const { cat, title, msg, name, date, read_time, tags, img, hidebook } = props
  return (
    <Card hidebook >
      <div className='layout'>
        <div className='left'>
          <div className='category'> { cat } </div>
          <div className='title'> { title} </div>
          <div className='msg'>
            { msg }
          </div>
          <div className='tags'>
            {
              tags.map((tag, i) => <Tag {...tag} key={i} />)
            }

          </div>
          <div className='bottom'>
            <div className='info'>
              <div className='name'> { name } </div>
              <div className='date'>
                { date }
                <span> . </span>
                {read_time} Read
              </div>
            </div>
            <div className='actions'>
              <div className={`bookmark ${hidebook ? 'hide' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0L24 0 24 24 0 24z"/>
                    <path fill="#000" fillRule="nonzero" d="M5 2h14c.552 0 1 .448 1 1v19.143c0 .182-.099.35-.258.438-.16.088-.354.083-.508-.014L12 18.03l-7.234 4.536c-.154.097-.348.102-.508.014C4.1 22.492 4 22.325 4 22.143V3c0-.552.448-1 1-1zm13 2H6v15.432l6-3.761 6 3.761V4z"/>
                  </g>
                </svg>
              </div>
              <div className='dots'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0L24 0 24 24 0 24z"/>
                    <path fill="#000" fillRule="nonzero" d="M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                  </g>
                </svg>
              </div>

            </div>
          </div>
        </div>
        <div className='right'>
          <img alt='img' src={img} />
        </div>
      </div>
    </Card>

  )
}


const Card = styled.div`
  padding: 23px 20px 15px 21px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  .layout {
    display: flex;
    justify-content: space-between;
    .left {
      margin-right: 20px;
      font-size: 14px;
      font-weight: 500;
      .category {
        font-size: 14px;
        font-weight: 500;
        color: #7083a2;
        text-transform: uppercase;
      }
      .title {
        font-size: 24px;
        font-weight: 700;
        color: #000000;
        margin-top: 3px;
      }
      .msg {
        margin-top: 5px;
        color: #7083a2;
      }
      .tags {
        margin-top: 15px;
        > * {
          margin-right: 10px;
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        color: #000000;
        font-size: 15px;
        margin-top: 20px;
        .info {
          .name {
            font-weight: 700;
          }
          .date {
            margin-top: 4px;
            font-weight: 500;
          }
        }
        .actions {
          position: relative;
          top: 3px;
          display: flex;
          align-items: flex-end;
          .hide {
            display: none;
          }
          > * {
            margin-right: 26px;
            &:last-child { margin-right: 0 }
          }
        }
      }
    }
    .right {
      min-width: 222px;
      width: 222px;
      img {
        width: 221px;
        height: 182px;
        object-fit: contain;
      }
    }
  }
`