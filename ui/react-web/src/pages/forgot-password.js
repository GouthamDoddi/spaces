import React, { useEffect } from 'react'
import styled from 'styled-components'
import Form, { Input, Select, Actions2, Container, TextArea, toOpt } from '../components/form'

import { useParams, Link } from 'react-router-dom'
import makeStore from '../store/make-store'
// import { projectTypes, projectCategoryTypes, entitiesData, sponsorOptions } from '../../../store/master-data'
import { useStore } from 'effector-react'

const { store, changed, create } =  makeStore(() => '/forgot-password-email')

function submitted(data) {
  const cb = (resp) => {
    alert(" We will send you an email if you are registered.")
    window.location.hash = `/login`
  }

  create({data, cb, auth: false})
}


export default function(props) {

  const { token } = useParams()
  
  useEffect(() => {
 
  }, [])
  
  const projectStore = useStore(store)
  const { email } = projectStore.data || {}

  return(

    <Main>
      <Content>
        <Left></Left>
        <Right>
          <Icons>
            <img src='/img/motc_logo.jpg' className='logo1' />
            <img src='/img/logo-jawda.jpg' className='logo2' />
          </Icons>
          <Login>
            <Form onSubmit={(data) => submitted(data)} store={projectStore}>
              <div className='container'>
                <Input label='Email' type='email' name='email' onChange={changed} value={email || ''} required/>
                <input type='submit' name='Login' className='submit' />
              </div>      
            </Form>
          </Login>
          <Blogo src='/img/bizzle-space.jpg' alt='Bizzle Space' />
        </Right>
      </Content>
    </Main>

  )
}


const CancelBtn = styled(Link)`
  padding: 10px 20px;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${p => p.theme.color};
  margin-bottom: 20px;
  color: #fff;
  border-radius: 3px;
`

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
  margin-top: 20px;
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
    margin-bottom: 10px;
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

`

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 350px;
  .logo1 {
    margin-left: 30px;
    width: 300px;
    height: 93.9px;
    object-fit: contain;
    margin-bottom: 40px;
  }
  .logo2 {
    width: 350px;
    height: 109.4px;
    object-fit: contain;
  }
`

const Blogo = styled.img`
  width: 143.8px;
  height: 30px;
  object-fit: contain;
`