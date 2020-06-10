import React, { useEffect, useState } from 'react'

import { useStore } from 'effector-react'

import styled from 'styled-components'
import { CheckboxBig } from '../../form'
import { useParams } from 'react-router-dom'
import { put } from '../../../store/api'


export default function({title, description, mStore, refData, dKey='desc'}) {

  const {policy_id } = useParams()

  useEffect(() => {
    mStore.load({policy_id})
  }, [])

  const store = useStore(mStore.store)
  const data = store.data || []

  // const changed = (val, id) => {
  //   const success = () => policyStore.load({policy_id})
  //   if (val) {
  //     put(`formulation/${policy_id}/add/${path}/${id}`, {success})
  //   } else {
  //     put(`formulation/${policy_id}/remove/${path}/${id}`, {success})
  //   }
  // }

  return (
    <Box>
      <Header>
        <Title> {title} </Title>
        <Search placeholder='Search'/>
      </Header>
      <Content>
        { 
          data.map((obj, i) => (
            <Row key={i}
              // className={sid === obj.id ? 'selected' : null}
            > 
            {/* checked={bids.includes(obj.id)} */}
              <CheckboxBig label={refData ? refData[obj[dKey]].label : obj.description} name={dKey}  /> 
            </Row>
          ))
        }
  
      </Content>
    </Box>


  )
}


const Box = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 222px;
  height: 218px;
  border-radius: 2px;
  border: solid 1px #dedede;
  background-color: #efefef;
  color: #000000;

  .add {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`

const Search = styled.input`
  outline: none;
  width: 205px;
  height: 28px;
  border-radius: 2px;
  border: solid 1px #e3bca8;
  background-color: #f5cfbb;
  font-size: 10px;
  font-weight: 500;
  color: #000000;
`

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #fd7635;
  margin-bottom: 8px;
`

const Desc = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #8fa8bf;
`
const Header = styled.div`
  padding: 9px 7px 12px 8px;
  height: 76px;
  border-radius: 3px;
  background-color: ${p => p.theme.icon};
`

const Content = styled.div`
  height: 142px;
  overflow: auto;
`

const Row = styled.div`
  padding: 0 22px;
  border-bottom: solid 1px #d4e0ec;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  min-height: 45px;
  align-items: center;
  justify-content: space-between;
  &.selected {
    border: 1px solid ${p => p.theme.color};
  }
`
