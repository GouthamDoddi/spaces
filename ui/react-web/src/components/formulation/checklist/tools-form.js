import React, { useState } from 'react'
import styled from 'styled-components'
import { RichText } from '../../form'

import { Opn, Eg, Faq, Sop, Steps } from './tools/all'

const titles = {
  faq: 'FAQ',
  sops: 'SOPS',
  opn: 'Operational Notes',
  eg: 'Exception Grounds',
  steps: 'Wiki'
}
function ProperItem({item, ...props}) {
  if(item === 'steps') {
    return <Steps type={item} {...props} />
  }
  return (
    <Opn type={item} />
  )
}
export default function(props) {
  
  return(
    <>
      <Header> {titles[props.item]} </Header>
      <Content> 
        <ProperItem {...props} />
      </Content>
    </>
  )
}

const Header = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #e6f0f9;
  font-size: 15px;
  font-weight: 800;
  color: #000000;
  text-transform: uppercase;
`

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  margin: 10px;
  padding: 10px 40px;
`