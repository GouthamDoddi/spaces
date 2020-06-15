import React, {useEffect} from 'react'

import styled from 'styled-components'

import { useLinkToNext } from '../util'

import {
  NavLink, useParams,
} from 'react-router-dom';

function Link({to, className, children}) {
  return (
    <NavLink to={to} className={className} activeClassName='selected'>
      {children}
    </NavLink>
  )
}


function useLinkTo(path, exact=false) {
  return(useLinkToNext('checklist',path, exact))
}

export default function({ data, ...props}) {
  
  const params = useParams()
  return(

    <Content>
      {
        data.map(({id, name, description, tags=[] }, i) => (
          <ObjectCard to={useLinkTo(id, true)} key={i} className={ id == params.id}>
            <Title>
              { name }
            </Title>
            <EditBtn to={useLinkTo(`${id}/edit`, true)}/>
            <Description>
              {description}
            </Description>
            <Tags>
              {
                tags.map((tag,i) => (
                  <div key={i}> #{tag} </div>
                ))
              }
            </Tags>
          </ObjectCard>
        ))
      }
    </Content>
  )
}


const Tags = styled.div`
  max-width: 300px;
  overflow: auto;
  display: flex;
  margin-top: 10px;
  > div {
    height: 20px;
    border-radius: 3px;
    border: solid 1px #e4eaf0;
    background-color: #f4f7fa;
    font-size: 10px;
    color: #8fa8bf;
    line-height: 20px;
    margin-right: 5px;
    padding: 0 5px;
  }
`

const Content = styled.div`
  flex-grow: 1;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 307px);
  grid-auto-rows: 108px;
  grid-gap: 18px 10px;
`

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 8px;
`

const Description = styled.div`
  font-size: 10px;
  line-height: 1.2;
  color: #98acbe;
`
const ObjectCard = styled(Link)`
  position: relative;
  top: 0;
  left: 0;
  min-width: 307px;
  height: 108px;
  border-radius: 3px;
  border: solid 1px #f4f7fa;
  background-color: #f4f7fa;
  padding: 20px;
  &.selected {
    border: solid 1px ${p => p.theme.color};
  }
`

const EditBtn = styled(Link)`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: ${p => p.theme.color};
  width: 20px;
  height: 20px;
  border-radius: 3px;
`