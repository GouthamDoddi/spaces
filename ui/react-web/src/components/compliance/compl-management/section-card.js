import React from 'react'
import styled from 'styled-components'
// import Link from '../shared/link'
import { Link } from 'react-router-dom'

export default function(props) {
  const { name, description, tags, i, to, className } = props
  return (
    <Card to={to} key={i} className={className}>
      <Header>
        <Name> {name} </Name>
        <Profile></Profile>
      </Header>
      <Description> {description} </Description>
      <Tags>
        { tags.map((tag, i) => <Tag key={i}> #{tag} </Tag>) }
      </Tags>
    </Card>
  )
}

const Card = styled(Link)`
  display: inline-block;
  width: 370px;
  height: 104px;
  border-radius: 3px;
  background-color: #f4f7fa;
  border: 1px solid #f4f7fa;
  padding: 10px 9px 14px 14px;
  &.selected {
    border: 1px solid ${p => p.theme.color};
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;  
`
const Name =  styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`
const Profile = styled.div`
  margin-top: 10px;
  img {
    width: 24px;
    height: 24px;
    background-color: #ccc;
    border-radius: 50%;
    margin-left: -4px;
    &:first-child { margin-left: 0;}
  }
`
const Description = styled.div`
  margin-top: 6px;
  width: 100%;
  font-size: 10px;
  line-height: 1.1;
  color: #98acbe;
  height: 25px;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Tags = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 7px;
`

const Tag = styled.div`
  padding: 6px 4px;
  font-size: 10px;
  color: #8fa8bf;
  border-radius: 3px;
  border: solid 1px #e4eaf0;
  background-color: #f4f7fa;
  & + & {
    margin-left: 8px;
  }
`