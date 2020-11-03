import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { useParams, Link } from 'react-router-dom'

import { get } from '../../../store/api' 

import { complainceAttr, complianceAttr } from '../../routes'

export default function({base, ...props}) {
  const { project_id, section_id, attr_id, param_id: combo_id  } = useParams()

  const [param_id, _] = combo_id?.split('-') || []
  const [data, setData] = useState({})

  useEffect(() => {
    if(data[section_id] != section_id || data[attr_id] != attr_id || data[param_id] != param_id) {
      get(`get-section-attr/${section_id}/${attr_id}/${param_id}`, {success: ({data}) => setData(data)})
    }
  }, [section_id, attr_id, param_id])

  const links = []
  if(section_id) {
    links.push(<Link to={`${base}/${section_id}/attrs`}> > {data[section_id]}</Link>)
  }
  if(attr_id) {
    links.push(<Link to={`${base}/${section_id}/attrs/${attr_id}/params` }> > {data[attr_id]}</Link>)
  }

  if(param_id) {
    links.push(<Link to={`${base}/${section_id}/attrs/${attr_id}/params/${param_id}`}> > {data[param_id]}</Link>)
  }
  return (
    <Bd {...props}> 
      <Link to={base}> Compliance  </Link>
      {links}
    </Bd>
  )
}


const Bd = styled.div`
  font-size: 16px;
  text-align: left;
  padding: 10px 20px;
  > a {
    color: #666666;
  };
  background-color: ${p => p.bk || '#fff'};
  border-top: ${p => p.border || 'none'};
  border-bottom: ${p => p.border || 'none'};
`