import React from 'react'
import styled from 'styled-components'
import Input from '../form/input'

export default function ({ options, elements }) {
  return (
    <Main>
      <div className="sideView"></div>
      <div className="loginPage">
        <div className="loginTitle">
          <div>
            <img src="/img/login/logo1.png" />
          </div>
          <div>logo2</div>
        </div>
        <div className="login">
          <div className="content">
            <div className="header">LOGIN</div>
            <Input className="inputWrapper" label="Username" />
            <Input className="inputWrapper" type="password" label="Password" />
            <div className="forgotText">Forgot Password?</div>
            <button>Login</button>
            <div className="newRegisterText">
              Are you a New User? <span className="registerNow">Register Now</span>
            </div>
          </div>
        </div>
        <div className="masks">
          <div className="mask">
            <div className="text">Qatar e-Govt Portal extends its sincere greetings on the occasion of Eid Al Fitr</div>
            <div className="headerText">EID MUBARAK</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footerText">2020 © MOTC</div>
      </div>
    </Main>
  )
}

const Main = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1440px;
  height: 1024px;
  background-color: #f7fafd;
  display: grid;
  grid-template-columns: 792px 648px;
  grid-template-rows: 962px;
  grid-template-areas:
    'sidebar main'
    'footer footer';
  .sideView {
    background-color: #625cbc;
    background-image: url('/img/login/login_side_BG.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  .footer {
    grid-area: footer;
    background-color: #ffffff;
    .footerText {
      margin-top: 21px;
      margin-left: 103px;
      font-family: Muli;
      font-size: 15px;
      color: #506679;
    }
  }
  .loginPage {
    display: grid;
    grid-template-rows: 134px 556px 272px;
    .loginTitle {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .masks {
      .mask {
        width: 482px;
        height: 216px;
        opacity: 0.59;
        border-radius: 12px;
        background-color: #564fc1;
        margin: 28px 45px 10%;
        color: #ffffff;
        font-family: Muli;
        .text {
          width: 412px;
          height: 77px;
          font-family: Muli;
          font-size: 20px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
          display: inline-flex;
          margin: 41px 37px 21px 33px;
        }
        .headerText {
          font-family: Muli;
          font-size: 30px;
          font-weight: 900;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
      }
    }
  }
  .login {
    width: 551px;
    border-radius: 37px;
    box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.06);
    background-color: #ffffff;
    margin-right: 52px;
    margin-left: 45px;
    .content {
      margin: 35px 72px 68px 89px;
      .header {
        font-size: 20px;
        font-weight: 800;
        margin: 5% 0%;
      }
      .forgotText {
        text-align: end;
        font-size: 9px;
        font-weight: 500;
        color: #687c9d;
        margin-top: 14px;
      }
      .newRegisterText {
        font-size: 10px;
        font-weight: 500;
        text-align: center;
        color: #687c9d;
        .registerNow {
          font-weight: 800;
          color: #564fc1;
        }
      }
      .inputWrapper {
        margin-top: 49px;
      }
      input {
        width: 390px;
        height: 45px;
      }
      button {
        height: 38px;
        align-self: flex-end;
        margin: 20px 75px 40px 75px;
        border: none;
        border-radius: 2px;
        background-color: #fec900;
        color: #fff;
        width: 240px;
        height: 45px;
      }
    }
  }
`
