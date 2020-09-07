import React from 'react'
import styled from 'styled-components'

export default function({title='Recent Activities', items=[], showAll=true, ...props}) {
  return (
    <Container>
      <TitleBar>
        <div className='logo'></div>
      </TitleBar>
      <Links>
        <A icon='dashboard.svg' selected> Dashboard </A>
        <A icon='projects.svg'> Projects </A>
        <A icon='cases.svg'> Cases </A>
        <A icon='my-tasks.svg'> My Tasks </A>
        <A icon='reports.svg'> Reports </A>

      </Links>
    </Container>
  )
}
// You have created new project
const TitleBar = styled.div`
  margin-bottom: 70px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 17px;
  > .logo {
    margin: 0 auto;
    width: 128px;
    height: 40px;
    object-fit: contain;
    background-image: url(/img/logo-jawda.jpg);
    background-size: 128px 40px;

  }
`
const Container = styled.div`
  height: 100%;  
  max-width: 300px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
  padding: 18px 20px;
`

const Item = styled.div`
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;  
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #4d4f5c;
  padding-left: 15px;
  border-bottom: 1px solid #ddd;
`
const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const A = styled.a`
  display: block;
  position: relative;
  width: 180px;
  height: 20px;
  font-size: 16px;  
  line-height: 1.25;
  color: ${p => p.selected ? '#eb622b' : '#666666'};
  padding-left: 40px;
  margin-bottom: 30px;
  background-image: url(/img/icons-lm/${p => p.icon});
  background-size: 20px 20px;
  background-repeat: no-repeat;
`
