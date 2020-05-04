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
const forums = [
  {
    user_icon: '',
    name: 'Jaclynn Bradley',
    time: 'October 9 at 9:10pm  ',
    msg: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    tags: [ { name: 'Portal', space: 'cs'}, { name: 'Payment', space: 'cs'}, { name: 'Digitization', space: 'fs'},
      { name: 'IdentityMgmt', space: 'fs'}, { name: 'GovernamentAgency', space: 'gs'} ],
    like_count: 435,
    comment_count: 4,
    share_count: 25,
    img: '/img/forum/sneeze.jpg'
  },
  {
    user_icon: '',
    name: 'Sampson Totton',
    time: 'October 9 at 9:10pm  ',
    msg: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
    tags: [ { name: 'Portal', space: 'cs'}, { name: 'Payment', space: 'cs'}, { name: 'Digitization', space: 'fs'},
      { name: 'IdentityMgmt', space: 'fs'}, { name: 'GovernamentAgency', space: 'gs'} ],
    like_count: 435,
    comment_count: 4,
    share_count: 25,
    img: '/img/forum/covid.jpg'
  }
]