import React from 'react'

import styled from 'styled-components'

import Card from '../card'

export default function(props) {
  return(
    <>
      <Card>
        <div className='title'> Manage Users </div>
      </Card>
      <Card>
        <div className='title'> Manage Master Data </div>
      </Card>

    </>

  )
}