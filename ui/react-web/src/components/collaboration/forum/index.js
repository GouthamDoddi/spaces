import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// import Cards from './cards';

import Tabs from '../shared/tabs'
import Search from '../shared/search'
import Widgets from '../shared/widgets'
import CreateMsg from '../shared/create-msg'
import BigCard from '../shared/big-card'

import forums from '../../../store/temp-data-forums'

function rTo(path) {
  return `/collaboration/forums/${path}`
}




export default function Element({ elements, selectOptions, asset }) {

  return (
    <>
      <div className='form-space full-height'>
        <Tabs data={[['General Forums', 'general'], ['My Forums', 'self']]}/>
        <Container>
          <CreateMsg className='new-card' />
          <Search />
          <div className='forums'>
            {
              forums.map((forum, i) => <BigCard {...forum} key={i}/>)
            }
          </div>
        </Container>
        <Switch>
          <Route exact path=''> <Redirect to={rTo('general')} /> </Route>
        </Switch>

      </div>
      <div className='widgets'>
        <Widgets />
      </div>
    </>
  )
}

const Container = styled.div`
  margin: 20px 20px 0px 20px;
  .forums {
    > * {
      margin-bottom: 20px;
    }
  }
  .new-card {
    margin-bottom: 14px;
  }
`