import React from 'react'

import styled from 'styled-components'

import Link from './clink'

import cs from '../../../utils/colors'

export default function Element({ name, space }) {
  const { color, icon } = cs[space] || {}
  return (
    <Tag to={`?tag=${name}`} color={color} bk={icon}> #{name} </Tag>
  )
}

const Tag = styled(Link)`
  font-size: 12px;
  font-weight: 800;
  color: ${p => p.color};
  padding: 6px 10px;
  background-color: ${p => p.bk};
  border-radius: 13.5px;
  // text-transform: capitalize;
`