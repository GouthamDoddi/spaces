import React, { useState } from 'react'

import { useParams, Link, useLocation } from 'react-router-dom';

import { useTo } from '../util'

import { get } from '../../../store/api'

import styled from 'styled-components'
import { useEffect } from 'react';

export default function(props) {
  const { policy_id, id, attr_id } = useParams()
  const {pathname} = useLocation()
  

  const [data, setData] = useState({})

  useEffect(() => {
    if(data[id] != id || data[attr_id] != attr_id) {
      // setData({})
      get(`get-section-attr/${id}/${attr_id}`, {success: ({data}) => setData(data)})
    }
  }, [id, attr_id])

  let links = []

  if(id) {
    const n = data[id] ? data[id] : 'Sections'
    links.push([`> ${n}`, useTo(`checklist/${id}/attrs`, true)])
  } else {
    links.push([' > Sections', useTo('checklist', true)])
  }

  if(attr_id) {
    const n = data[attr_id] ? data[attr_id] : 'Attributes'
    links.push([`> ${n}`, useTo(`checklist/${id}/params/${attr_id}`, true)])
  } else if(id) {
    links.push([' > Attributes', useTo(`checklist/${id}/attrs`, true)])
  }

  if (attr_id && pathname.includes('params')) {
    // links.push([' > Attributes', useTo(`checklist/${id}/attrs`, true)])
    links.push([' > Parameters', useTo(`checklist/${id}/params/${attr_id}`, true)])
  }


  return (
    <Content>
      <div><Link to={useTo('checklist', true)}> Policy Checklist </Link></div>
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