import React from 'react'
import styled from 'styled-components'
import BlogCard from '../../collaboration/shared/blog-card'
import Search from '../../collaboration/shared/search'
import Widgets from '../../collaboration/shared/widgets'
import CreateMsg from '../../collaboration/shared/create-msg'

import announcements from '../../../store/temp-data-announcements'

export default function Element({ elements, selectOptions, asset }) {

  return (
    <>
      <div className='form-space full-height'>
        <Container>
          <CreateMsg className='new-card'/>
          <Search />
          <div className='blogs'>
            {
              announcements.map((blog, i) => <BlogCard {...blog} key={i} hidebook />)
            }
          </div>
        </Container>
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
  .new-card {
    margin-bottom: 6px;
  }
`