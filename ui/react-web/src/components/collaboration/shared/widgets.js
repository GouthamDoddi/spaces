import React from 'react';
import styled from 'styled-components'
import Link from './clink'

const topics = [
  'Policy families',
  'Digitization',
  'Internet of Things',
  'Data governance',
  'Portal',
  'Identity Mgmt'
]

const tags = [
  'ImplementationDomain', 'CustomSubject',
  'Payment', 'UserData', 'eServices', 'UserExperience',
  'Development', 'Architecture', 'MEANStack',
  'MVVM'
]
export default function Element(props) {
  return (
    <>
      <Widget>
        <div className='title'> Top Topics </div>
        <div className='content'>
        {
          topics.map((topic, i) => (
            <div className='menu' key={i}>
              <Link to='' className='title'> {topic} </Link>
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
              tags.map((tag, i) => (
                <div className='tag' key={i}> #{tag} </div>
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
      padding-top: 25px;

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