import React from 'react'
import styled from 'styled-components'
import BlogCard from '../shared/blog-card'
import Search from '../shared/search'
import Widgets from '../shared/widgets'
import CreateMsg from '../shared/create-msg'

export default function Element({ elements, selectOptions, asset }) {

  return (
    <>
      <div className='form-space full-height'>
        <Container>
          <CreateMsg className='new-card'/>
          <Search />
          <div className='blogs'>
            {
              blogs.map((blog, i) => <BlogCard {...blog} key={i} hidebook />)
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

const blogs = [
  {
    cat: 'design',
    title: 'GoodBye, Adobe',
    msg: 'Hello Sketch! “Why don’t you just use Sketch?! Sketch is awesome!”',
    name: 'Charles Davies',
    date: '14 Nov 2019',
    read_time: '12 Min',
    tags: [ { name: 'Portal', space: 'cs'}, { name: 'Payment', space: 'cs'}, { name: 'Digitization', space: 'fs'},
    { name: '#IdentityMgmt', space: 'fs'} ],
    img: '/img/blogs/sketch.jpg'
  },
  {
    cat: 'LEADERSHIP',
    title: 'The 4 questions you should stop asking during your Meetings',
    msg: 'You’re probably already asking at least one of them – but it’s never too late to stop.',
    name: 'Ashish Asharaful',
    date: '14 Nov 2019',
    read_time: '12 Min',
    tags: [ { name: 'Portal', space: 'cs'}, { name: 'Payment', space: 'cs'}, { name: 'Digitization', space: 'fs'},
    { name: '#IdentityMgmt', space: 'fs'} ],
    img: '/img/blogs/meeting.jpg'
  },
  {
    cat: 'LIFESTYLE',
    title: 'This Morning Routine will Save You 20+ Hours Per Week',
    msg: '“Wherever you are, make sure you’re there.” — Dan Sullivan',
    name: 'Juan Esteban Sarmiento',
    date: '14 Nov 2019',
    read_time: '12 Min',
    tags: [ { name: 'Portal', space: 'cs'}, { name: 'Payment', space: 'cs'}, { name: 'Digitization', space: 'fs'},
    { name: '#IdentityMgmt', space: 'fs'} ],
    img: '/img/blogs/morning.jpg'
  },
]