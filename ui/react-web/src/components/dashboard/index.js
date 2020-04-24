import React from 'react'
import styled from 'styled-components'
import ProgressCard from '../progress-card'

export default function() {
  return(
    <Container>
      <div class='left-actions'>
          <div class='act-1'> <img src='/img/time-line.svg' alt=''/> </div>
          <div class='act-2'> <img src='/img/notes.svg' alt=''/> </div>
          <div class='act-3'> <img src='/img/chat.svg' alt=''/> </div>
      </div>

      <div class='right-panel'>
        <div class='hero'>
          <div class='policy'>
            <div class='policy-content'>
              <div class='title-box'>
                <div class='welcome'> Welcome </div>
                <div class='name'>Steering Committee</div>
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
        <div class='stage'>
          <div class='progress-cards'>
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
          <div class='panel-cards'>

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
      }
      .panel-cards {
        display: flex;
        margin: 23px 0;
        flex-wrap: wrap;
      }
    }
  }

`