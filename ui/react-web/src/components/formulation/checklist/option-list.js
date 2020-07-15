import React, { useEffect, useState } from 'react'

import { useStore } from 'effector-react'

import styled from 'styled-components'
import { CheckboxBig } from '../../form'
import { useParams } from 'react-router-dom'

import { put } from '../../../store/api'

function Anchor({onClicked, item_id}) {
  if(onClicked) {
    return(
      <button onClick={() => {
        onClicked(item_id)
      }}>
        &#x2B95;
      </button>
    )
  }
  return null
}

export default function({title, description, onClicked, dataStore, sid, path, bidsKey, policyStore, sectionStore, iid}) {

  const {policy_id } = useParams()
  const id = iid || useParams().id
  const store = useStore(dataStore)
  const data = store.data

  const policyData = useStore(policyStore.store).data || {}
  const bids = policyData[bidsKey] || []
  

  const sectionData = useStore(sectionStore.store).data || {}
  const sbids = sectionData[bidsKey] || []

  useEffect( () => {
    // console.log(title, policyStore.store.getState().data?.id, sectionStore.store.getState().data?.id)
  },[])


  const filteredData = data ? (bids.map((i) => data[i])).filter(Boolean) : []// bids.map(((i) => data[i]))
  if(title === 'Profile') console.log(bids, data, filteredData)

  // console.log(bids, data)
  const changed = (val, obj_id) => {
    const success = () => sectionStore.load({policy_id, id})
    if (val) {
      put(`policy-sections/${id}/remove/${path}/${obj_id}`, {success})
    } else {
      put(`policy-sections/${id}/add/${path}/${obj_id}`, {success})
    }
  }

  return (
    <Box>
      <Header>
        <Title> {title} </Title>
        <Desc> {description} </Desc>
      </Header>
      <Content>
        { 
          filteredData.map((obj, i) => (
            <Row key={i}
              className={sid === obj.id ? 'selected' : null}
            > 
              <CheckboxBig className='cb' label={obj.name} name={bidsKey} checked={!sbids.includes(obj.id)}  onChange={(val) => changed(val, obj.id)} /> 
              <Anchor onClicked={onClicked} item_id={obj.id} />
            </Row>
          ))
        }
  
      </Content>
    </Box>


  )
}

const Abutton = styled.div`
  cursor: pointer;
`
const Box = styled.div`
  position: relative;
  top: 0;
  left: 0;
  min-width: 197px;
  max-width: 280px;
  height: 410px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #f4f7fa;
  color: #000000;
  &.selected {
    border: 1px solid ${p => p.theme.color};
  }

  .add {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 8px;
`

const Desc = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #8fa8bf;
`
const Header = styled.div`
  padding: 15px 20px;
  height: 85px;
  border-radius: 3px;
  background-color: ${p => p.theme.icon};
`

const Content = styled.div`
  height: 324px;
  overflow: auto;
`

const Row = styled.div`
  padding: 0 10px;
  border-bottom: solid 1px #d4e0ec;
  display: flex;
  font-size: 12px;
  font-weight: bold;
  min-height: 45px;
  align-items: center;
  justify-content: space-between;
  .cb {
    .label {
      width: 118px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

  }

  &.selected {
    border: 1px solid ${p => p.theme.color};
  }
`
