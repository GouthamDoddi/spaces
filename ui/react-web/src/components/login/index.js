import React from 'react'
import styled from 'styled-components'
import Form, { Input } from '../form'

import userStore, {login} from '../../store/user'
import {useStore} from 'effector-react'


async function submitted(data) {
  login(data)
}
export default function() {
    const store = useStore(userStore)
    if(store.token) {
      window.location.hash = '/dashboard'
    } else if(store.error) {
      console.log(store.error)
    }
    return (
      <Main>
        <Content>
          <Left></Left>
          <Right>
            <Icons>
              <img src='/img/login/logo1.png' className='logo1' />
              <div> Logo 2</div>
            </Icons>
            <Login>
              <div className='title'> LOGIN </div>
              <Form onSubmit={submitted}>
                <Input label='Email' type='text' name='email' className='email'/>
                <Input label='Password' type='password' name='password'/>
                <input type='submit' name='submit' className='submit' />
              </Form>
              {store.error ? <div>{store.error}</div> : ''}
            </Login>
          </Right>
        </Content>
        <Footer>
          <div className='cr'> 2020 © MOTC</div>
        </Footer>
      </Main>
    )    
  }

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 1440px;
  background-color: #f7fafd;
  height: 100%;
  display: flex;
  flex-flow: column;
  width: 100%;
  align-items: center;
`
const Content = styled.div`
  flex: 1;
  display: flex;
  width: 1440px;
`
const Left = styled.div`
  width: 792px;
  background-color: #625cbc;
  background-image: url('/img/login/left-bg.png'), url('/img/login/grid.png') ;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 480px;
`

const Right = styled.div`
  width: 648px;
  display: flex;
  flex-flow: column;
  align-items: center;
  // justify-content: center;
`
const Footer = styled.div`
  width: 100%;
  height: 62px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  .cr {
    line-height: 62px;
    width: 1440px;
    font-size: 15px;
    color: #506679;
    margin-left: 100px;
  }
`
const Login = styled.div`
  width: 551px;
  height: 556px;
  border-radius: 37px;
  box-shadow: 0 6px 4px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  // margin: 41px 45px 52px 29px;
  padding: 35px 89px 0 72px;
  .title {
    font-size: 35px;
    font-weight: 800;
    color: #000000;
  }
  input {
    width: 390px;
  }
  .email {
    margin-top: 40px;
    margin-bottom: 49px;
  }
  form {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  input[type='submit'] {
    margin-top: 41px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    width: 240px;
    height: 45px;
    border-radius: 2px;
    background-color: #fec900;
    border: none;
    // margin-left: 75px;
  }

`

const Icons = styled.div`
  margin: 52px 50px 47px 50px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  .logo1 {
    height: 37px;
  }
`