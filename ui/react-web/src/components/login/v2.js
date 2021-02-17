import React from 'react'
import styled from 'styled-components'
import Form, { Input } from '../form'

import userStore, {login} from '../../store/user'
import {useStore} from 'effector-react'

import { Link } from 'react-router-dom'


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
              <img src='/img/motc_logo.jpg' className='logo1' />
              <img src='/img/logo-jawda.jpg' className='logo2' />
            </Icons>
            <Login>
              <Form onSubmit={submitted}>
                <Input label='Email' type='text' name='email' className='email'/>
                <Input label='Password' type='password' name='password'/>
                <input type='submit' name='Login' className='submit' />
                <a href='mailto:support@jawda.gov.qa'> Contact Us </a>
                <Link to='/forgot-password'> Forgot Password </Link>
              </Form>
              {store.error ? <div>{store.error}</div> : ''}
            </Login>
            <Blogo src='/img/bizzle-space.jpg' alt='Bizzle Space' />
          </Right>
        </Content>

      </Main>
    )    
  }

const Main = styled.div`
  position: fixed;
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
  width: 100%;
`
const Left = styled.div`
  display: flex;
  flex: 1;
  background-color: #625cbc;
  background-image: url('/img/login-bk.jpg') ;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const Right = styled.div`
  width: 640px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #fff;
  justify-content: center;
`

const Login = styled.div`
  width: 551px;
  height: 556px;
  .title {
    font-size: 35px;
    font-weight: 800;
    color: #000000;
  }
  input {
    width: 390px;
    height: 50px;
  }
  .email {
    margin-top: 40px;
    margin-bottom: 25px;
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
    background-color: #eb622b;
    border: none;
  }

  a {
    margin-top: 10px;
    color: #777;
    text-decoration: none;
  }

`

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 256px;
  
  .logo1 {
    margin-left: 8px;
    width: 256px;
    object-fit: contain;
    margin-bottom: 40px;
  }
  .logo2 {
    width: 256px;
    height: 100%;
    object-fit: contain;
  }
`

const Blogo = styled.img`
  width: 143.8px;
  height: 30px;
  object-fit: contain;
`