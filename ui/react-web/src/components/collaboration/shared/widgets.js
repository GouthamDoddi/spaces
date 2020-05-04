import React from 'react';
import styled from 'styled-components'

export default function Element(props) {
  return (
    <>
      <Widget>
        <div className='title'> Top Topics </div>
        <div className='content'>
        {
          [1,2,3,4,5,6,7,8].map((i) => (
            <div className='menu'>
              <div className='title'> Topic {i} </div>
            </div>
          ))
        }
        </div>
      </Widget>

      <Widget>
        <div className='title'> Top Tags </div>
        <div className='content'>
          <div className='tags'>
            {
              [1,2,3,4,5,6,7,8].map((i) => (
                <div className='tag'> #Tag {i} </div>
              ))
            }
          </div>


        </div>
      </Widget>
    </>
  )
}

const Widget = styled.div`
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  width: 100%;
  // height: 466px;
  display: flex;
  flex-flow: column;

  & + & {
    margin-top: 20px;
  }
  .title {
    margin-top: 22px;
    margin-left: 21px;
    font-size: 15px;
    font-weight: 800;
    color: #000000;
    height: 46px;
  }

  .content {
    height: 420px;
    overflow: auto;
    margin-left: 18px;
    .menu {
      width: 273px;
      min-height: 69px;
      border-bottom: 1px solid #e6f0f9;
      display: flex;
      align-items: center;
      padding-left: 14px;
      // padding-top: 18px;

      &:last-child {
        margin-bottom: 10px;
        border: none;
      }
      .title {
        margin: 0;
        color: ${p => p.theme.color};
        font-size: 15px;
        font-weight: 800;

      }
      &.selected {
        border: 1px solid ${p => p.theme.color}
      }
    }
    .tags {
      margin-left: 9px;

      .tag {
        display: inline-block;
        margin: 0 22px 33px 0;
        font-size: 15px;
        font-weight: 800;
        color: ${p => p.theme.color}

      }
    }
  }

`