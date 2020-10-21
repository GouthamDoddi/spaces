import React from 'react'

import { useStore } from 'effector-react'

import styled from 'styled-components'
import { CheckboxBig } from '../../../components/form'
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

export default function({title, description, onClicked, dataStore, sid, path, projectStore, bidsKey}) {

  const { project_id } = useParams()
  const store = useStore(dataStore)
  const data = store.data || {}

  const projectData = useStore(projectStore.store).data || {}

  

  const bids = projectData[bidsKey] || []


  const changed = (val, id) => {
    const success = () => projectStore.load({project_id})
    if (val) {
      put(`compliance/projects/${project_id}/add/${path}/${id}`, {success})
    } else {
      put(`compliance/projects/${project_id}/remove/${path}/${id}`, {success})
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
          Object.values(data).map((obj, i) => (
            <Row key={i}
              className={sid === obj.id ? 'selected' : null}
            > 
              <CheckboxBig label={obj.name} name={bidsKey} checked={bids.includes(obj.id)}  onChange={(val) => changed(val, obj.id)} /> 
              <Anchor onClicked={onClicked} item_id={obj.id} />
            </Row>
          ))
        }
  
      </Content>

    </Box>


  )
}


const Box = styled.div`
  min-width: 280px;
  max-width: 320px;
  height: 410px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #f4f7fa;
  color: #000000;
  &.selected {
    border: 1px solid ${p => p.theme.color};
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
