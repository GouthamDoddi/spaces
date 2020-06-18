import React, {useEffect} from 'react'
import styled from 'styled-components'
import ProgressCard from '../progress-card'
import ProfileCard from '../project-profile-card'
import { Search, Select }from '../form'

import {useStore} from 'effector-react'

import makeStore from '../../store/make-store'

const { load, store} = makeStore(() => `compliance/project-report`)

export default function() {
  useEffect(() => {
    load()
  }, [])

  const projRepStore = useStore(store)

  const projRepData = projRepStore.data || []
  return(
    <Container>
      <div className='left-actions'>
          <div className='act-1'> <img src='/img/time-line.svg' alt=''/> </div>
          <div className='act-2'> <img src='/img/notes.svg' alt=''/> </div>
          <div className='act-3'> <img src='/img/chat.svg' alt=''/> </div>
      </div>

      <div className='right-panel'>
        <div className='hero'>
          <div className='policy'>
            <div className='policy-content'>
              <div className='title-box'>
                <div className='welcome'> Welcome </div>
                <div className='name'>Steering Committee</div>
              </div>
              <form>
                <input type='text' name='title' placeholder="Title" />
                <input type='text' name='owner' placeholder='Owner'/>
                <input type='text' name='category' placeholder='Category' />
                <input type='submit' value='Create Policy'/>
              </form>
            </div>
          </div>
        </div>
        <div className='stage'>
          <div className='progress-cards'>
            <ProgressCard title='Propogation'
              subtitle='Completion of selected policy'
              progress={64} color='#564fc1' />
            <ProgressCard title='Propogation'
              subtitle='Completion of selected policy'
              progress={64} color='#564fc1' />
            <ProgressCard title='Propogation'
              subtitle='Completion of selected policy'
              progress={64} color='#564fc1' />
            <ProgressCard title='Propogation'
              subtitle='Completion of selected policy'
              days={23} color='red' date='13 April 2020' />
          </div>
          <ProfileCards>
            <div className='top'>
              <div className='title'> Project Profile </div>
              <div className='right'>
                <Search className='search'/>
              </div>
            </div>
            <div className='cards'>
              { projRepData.map((p, i) => <ProfileCard i={i} {...p} key={i} />)}
              
            </div>
          </ProfileCards>
          <div className='panel-cards'>
            <Select />
          </div>
        </div>
      </div>
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  flex: 1;
  .left-actions {
    position: fixed;
    left: 0;
    width: 80px;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    flex-flow: column;
    z-index: 2000;
    > div {
      margin-top: 52px;
      margin-left: 35px;
      cursor: pointer;
      img {
        width: 29px;
        height: 27px;
      }
    }
  }
  .right-panel {
    margin-left: 80px;
    width: 100%;
    min-width: 1343px;
    .hero {
      height: 172px;
      background-image: linear-gradient(to left, rgba(143, 135, 226, 0), #564fc1 71%);
      .policy {
        height: 172px;
        background-repeat: no-repeat;
        background-position: right;
        background-image: url('/img/policy-hero-bk.png');
        .policy-content {
          position: relative;
          top: 23px;
          left: 43px;
          width: 1300px;
          .title-box {
            .name {
              font-weight: 800;
              color: #ffba4b;
              font-size: 24px;
            }
            .welcome {
              font-size: 20px;
              font-weight: 500;
              color: #ffffff;
            }
          }
          form {
            margin-top: 19px;
            // [type='text']
            input {
              outline: none;
              height: 38px;
              width: 172px;
              border-radius: 2px;
              border: solid 1px #7770e6;
              background-color: #564fc1;
              margin-right: 27px;
              color: #ffffff;
              font-size: 16px;
              font-weight: 500;
              padding-left: 16px;
              &[name='title']{
                width: 379px;
              }
              &::placeholder {
                color: #9b95ff;
              }
              &[type='submit'] {
                width: 204px;
                height: 42px;
                border-radius: 2px;
                background-color: #ffba4b;
              }
              &:focus {
                border: solid 1px #ffba4b;
                background-color:  #6d66dd;
              }
            }
          }
        }

      }

    }
    .stage {
      width: 100%;
      margin-top: 10px;
      margin: 23px 0;
      .progress-cards {
        display: flex;
        > div {
          margin-left: 23px;
        }
      }
      .panel-cards {
        display: flex;
        margin: 23px 0;
        flex-wrap: wrap;
        margin-left: 27px;
      }
    }
  }

`

const ProfileCards = styled.div`
  margin: 20px 0 0 23px;
  
  > .top {
    height: 35px;
    display: flex;
    justify-content: space-between;
    margin: 0 0 18px 4px;

    > .title {
      display: flex;
      align-self: flex-end;
      font-size: 15px;
      font-weight: bold;
      color: #000000;
    }
    > .right {
      display: flex;
      margin-right: 46px;
      > .search {
        input {
          width: 319px;
          height: 35px;
          border: solid 1px #dedede;
          background-color: #efefef;
          padding-left: 32px;
          font-size: 10px;
          color: #7e9ab3;
        }
        i {
          background-size: 14px;
          left: 10px;
          top: 11px;
        }
      }
    }
  }

  > .cards {
    display: flex;
    overflow-x: auto;
    > div {
      margin-right: 15px;
    }
  }
`


const profileData = [
  {
    title: 'My Income Tax',
    section_count: 14,
    attribute_count: 47,
    parameter_count: 89,
    due_date: '14 January 2021',
    score: '70%',
    tickets: 'Created'
  }
]