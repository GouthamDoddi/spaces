import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useParams, Link } from 'react-router-dom'

import { get } from '../../../store/api' 
import { complainceAttr, complianceAttr } from '../../routes'

export default function(props) {
  const { project_id, section_id, attr_id, param_id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    if(data[section_id] != section_id || data[attr_id] != attr_id || data[param_id] != param_id) {
      get(`get-section-attr/${section_id}/${attr_id}/${param_id}`, {success: ({data}) => setData(data)})
    }
  }, [section_id, attr_id, param_id])

  const links = []
  if(section_id) {
    links.push(<Link to={complianceAttr({id: project_id, section_id, expand: true })}> > {data[section_id]}</Link>)
  }
  if(attr_id) {
    links.push(<Link to={complianceAttr({id: project_id, section_id, sub: `${attr_id}/params`, expand: true })}> > {data[attr_id]}</Link>)
  }

  if(param_id) {
    links.push(<Link to={complianceAttr({id: project_id, section_id, sub: `${attr_id}/params/${param_id}`, expand: true })}> > {data[param_id]}</Link>)
  }
  return (
    <Bd> 
      <Link to='/complaince/sections'> Compliance  </Link>
      {links}
    </Bd>
  )
}


const Bd = styled.div`
  font-size: 16px;
  text-align: left;
  margin: 10px 20px;
  > a {
    color: #666666;
  }
`