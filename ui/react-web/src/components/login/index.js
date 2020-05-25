import React from 'react'
import styled from 'styled-components'
import Input from '../form/input'

export default function ({ options, elements }) {
  return (
    <Main>
      <div className="sideView"></div>
      <div className="loginPage">
        <div className="loginTitle">
          <div>logo1</div>
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
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 95%;
  grid-template-areas:
    'sidebar main'
    'footer footer';
  background-color: #f7fafd;
  .sideView {
    background-color: #625cbc;
  }
  .footer {
    grid-area: footer;
    background-color: #ffffff;
    .footerText {
      margin: 8px 5%;
      font-family: Muli;
      font-size: 15px;
      color: #506679;
    }
  }
  .loginPage {
    display: grid;
    grid-template-rows: 10% 60% 30%;
    .loginTitle {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    .masks {
      .mask {
        width: 75%;
        height: 80%;
        border-radius: 12px;
        background-color: #564fc1;
        margin: 5% 10%;
        color: #ffffff;
        font-family: Muli;
        .text {
          font-size: 15px;
          font-weight: bold;
          text-align: center;
          padding: 3% 10%;
        }
        .headerText {
          font-size: 25px;
          font-weight: 900;
          text-align: center;
          padding: 5%;
        }
      }
    }
  }
  .login {
    margin: 0px 10%;
    width: 80%;
    border-radius: 37px;
    box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.06);
    background-color: #ffffff;
    .content {
      margin: 10% 15%;
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
        margin-top: 3%;
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
        margin-top: 30px;
      }
      button {
        height: 38px;
        align-self: flex-end;
        margin: 20px 5%;
        border: none;
        border-radius: 2px;
        background-color: #fec900;
        color: #fff;
        width: 240px;
      }
    }
  }
`
