import React from 'react'
import styled from 'styled-components'

import Status from './status'
import StatusWithGraph from './status_with_graph'
import HeaderBar from './header_bar'
import QuickActions from './quick_actions'

export default function(props) {
  return (
    <>
      <Status />
      <StatusWithGraph />
      <HeaderBar />
      <QuickActions />
    </>

  )
}

