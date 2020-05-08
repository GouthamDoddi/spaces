import React from 'react'
import styled from 'styled-components'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import BlogCard from '../shared/blog-card'
import Tabs from '../shared/tabs'
import Search from '../shared/search'
import Widgets from '../shared/widgets'

import blogs from '../../../store/temp-data-blogs'

function rTo(path) {
  return `/collaboration/blogs/${path}`
}

export default function Element({ elements, selectOptions, asset }) {

  return (
    <>
      <div className='form-space full-height'>
        <Tabs data={[['General Blogs', 'general'], ['My Blogs', 'self']]}/>
        <Container>
          <Search />
          <div className='blogs'>
            {
              blogs.map((blog, i) => <BlogCard {...blog} key={i}/>)
            }
          </div>
          {/* <BlogCard /> */}
        </Container>
        <Switch>
          {/* <Route path={rTo(asset, 'snapshot')}> <Snapshot /> </Route>
          <Route path={rTo(asset, 'analysis/:name')}> <Analysis /> </Route>
          <Route path={rTo(asset, 'analyzers/:name')}> <Analyzer /> </Route>
          <Route path={rTo(asset, 'control-panel')}> <ControlPanel options={selectOptions} elements={elements} /> </Route> */}
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
  margin: 20px 15px 0px 14px;
  .blogs {
    > * {
      margin-bottom: 20px;
    }
  }
`