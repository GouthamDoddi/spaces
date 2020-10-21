import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


export default function({title='Recent Activities', except=[], selected='dashboard', items=[], showAll=true, ...props}) {
  const options = ((res) => {
     return({ selected: (selected == res), hide: except.includes(res)})
    }
  )

  return (
    <Container>
      <TitleBar>
        <div className='logo'></div>
      </TitleBar>
      <Links>
        <A to='/a-dashboard' icon='dashboard.svg' {...options('dashboard')}> Dashboard </A>
        <A to='/formulation' icon='policies.svg' {...options('policies')}> Policies </A>
        <A to='/entities' icon='policies.svg' {...options('entities')}> Entities </A>
        <A to='/projects' icon='projects.svg' {...options('projects')}> Projects </A>
        <A icon='cases.svg' {...options('cases')}> Cases </A>
        <A icon='my-tasks.svg' {...options('my-tasks')}> My Tasks </A>
        <A icon='resources.svg' {...options('resources')}> Resources </A>
        <A to='/governance' icon='reports.svg' {...options('reports')} border> Reports </A>
        
        <A2 icon='forums.svg'  show> Forums </A2>
        <A2 icon='announce.svg' > Announcements </A2>
        <A2 icon='kb.svg' > Knowledge Base </A2>
        <A2 icon='learning.svg' > Learning Activities </A2>
        <A2 icon='one.svg' > Surveys & Petitions </A2>
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
const A = styled(Link)`
  display: ${p => p.hide ? 'none' : 'block'};
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
const A2 = styled(A)`
  color: ${p => p.selected ? '#eb622b' : '#257C76'};
  margin-top: ${p => p.show ? '40px' : 0};
`