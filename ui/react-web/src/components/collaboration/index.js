import React from 'react';
import Container from '../container';
import Workspace, { Links } from '../workspace';
import CreateMenu from '../createMenu';

import {
  Switch,
  Route,
  Redirect,
  useLocation,
  matchPath
} from 'react-router-dom';

import styled from 'styled-components';

import Forum from './forum'
import Blog from './blog'
import Announcements from './announcements'
import Kb from './kb'
import Survey from './sp'


const WorkspaceLinks = [
  { name: 'My Forums', path: 'forums'},
  { name: 'My Blogs', path: 'blogs'},
  { name: 'Announcements', path: 'announcements'},
  { name: 'Knowledge Base', path: 'kb'},
  { name: 'Learning Activities', path: 'la'},
  { name: 'Surveys and Petitions', path: 'sp'}
]

const channels = [
  'Portal',
  'MobileApp',
  'Kiosk',
  'Enterprise Resource Planning',
  'Business Intelligence',
  'Customer Relationship'
]

function rTo(path) {
  return `/collaboration/${path}`
}

function Channels(props) {
  return (
    <div className='channels'>
      <div className='title'> Channels </div>
      <div className='content'>
        {
          channels.map((channel, i) => (
            <div className='channel' key={i}>
              { channel }
            </div>
          ))
        }
      </div>
    </div>

  )
}
export default function() {
  const location = useLocation();
  const { params } = matchPath(location.pathname, {path: '/collaboration/:asset'}) || {}
  console.log(params)
  return(

    <Container>
      <LeftPanel>
        <div className='profile'>
          <div className='title'> Profile Card </div>
          <div className='desc'> Lorem ipsum dolor sit amet, consectetur </div>
          <div className='name-board'>
            <div className='user'> </div>
            <div className='name'> Martín Abasto </div>
          </div>
        </div>
        <CreateMenu space='Control Panel' items={['task', 'petition', 'note']}>
          <Menu>
            <div className='subtitle'> Lorem ipsum dolor sit amet, consectetur </div>
            <input name='search' placeholder='Search' />
          </Menu>
        </CreateMenu>
        {
          params && params.asset === 'sp' ? '' : <Channels />
        }

      </LeftPanel>


      <Workspace>
        <div className='header'>
          <Links data={WorkspaceLinks} prefix='collaboration' />
        </div>
        <Switch>
          <Route path={rTo('forums')}> <Forum /> </Route>
          <Route path={rTo('blogs')}> <Blog /> </Route>
          <Route path={rTo('announcements')}> <Announcements /> </Route>
          <Route path={rTo('kb')}> <Kb /> </Route>
          <Route path={rTo('la')}> <div /> </Route>
          <Route path={rTo('sp')}> <Survey /> </Route>
          <Route exact path=''> <Redirect to={rTo('forums')} /> </Route>
        </Switch>
      </Workspace>
    </Container>
  )
}

const Menu = styled.div`
  > .subtitle {
    font-size: 10px;
    font-weight: 500;
    color: #d3fff5;
  }
  > input {
    margin-top: 14px;
    outline: none;
    width: 259px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px #36c2a2;
    background-color: #5bebcb;
    padding-left: 17px;
    font-size: 12px;
    font-weight: bold;
    color: #1c8d73;
  }
`

const LeftPanel = styled.div`
  display: flex;
  flex-flow: column;
  .profile {
    min-width: 309px;
    height: 152px;
    border-radius: 3px;
    background-color: #44d7b6;
    margin-bottom: 20px;
    padding: 21px 25px;

    > .title {
      font-size: 15px;
      color: #ffffff;
    }
    > .desc {
      font-size: 10px;
      font-weight: 500;
      color: #d3fff5;
    }

    > .name-board {
      margin-top: 17px;
      display: flex;
      align-items: center;
      .user {
        width: 50px;
        height: 60px;
        border-radius: 10px;
        background-image: url('/img/user.svg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50px 60px;
        background-color: #ccc;
        margin-right: 16px;
      }
      .name {
        font-size: 12px;
        font-weight: 800;
        color: #000000;
      }

    }
  }

  .channels {
    margin-top: 20px;
    width: 309px;
    min-height: 413px;
    border-radius: 3px;
    box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
    background-color: #ffffff;


    .title {
      display: flex;
      align-items: center;
      padding-left: 25px;
      background-color: ${p => p.theme.color };
      height: 46px;
      border-radius: 3px;
      font-size: 15px;
      color: #ffffff;
    }

    .content {
      min-height: 368px;
      height: 368px;
      overflow: auto;
      font-size: 13px;
      color: #000000;
    }
    .channel {
      height: 70px;
      border-bottom: 1px solid #e6f0f9;
      margin: 0 14px;
      padding-top: 25px;
      padding-left: 15px;
      font-size: 15px;
      &:last-child {
        border: none;
      }
      &:selected {
        color: ${p => p.theme.color };
        font-weight: 800;
      }
    }

  }
`