import React from 'react'

import { useParams, Link, useLocation } from 'react-router-dom';

import { useTo } from '../util'

import styled from 'styled-components'

export default function(props) {
  const { policy_id, id, attr_id } = useParams()
  const {pathname} = useLocation()
  let links = [[' > Sections', useTo('checklist', true)]]

  if(id) {
    links.push([' > Attributes', useTo(`checklist/${id}/attrs`, true)])
  }
  if (attr_id && pathname.includes('params')) {
    // links.push([' > Attributes', useTo(`checklist/${id}/attrs`, true)])
    links.push([' > Parameters', useTo(`checklist/params/${attr_id}`, true)])
  }

  return (
    <Content>
      <div>Policy Checklist</div>
      { links.map((l,i) => <Link key={i} to={l[1]}> {l[0]} </Link>) }
    </Content>
  )
}

const Content = styled.div`
  color: black;
  display: flex;
  margin-left: 5px;
  margin-bottom: 10px;
  a { 
    margin-left: 4px;
    color: black;
  }

`