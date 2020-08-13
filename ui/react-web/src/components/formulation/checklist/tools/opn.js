import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, RichText, Input } from '../../../form'
import { Table, Header, Row, Add } from '../../../tables/small'

import { useParams } from 'react-router-dom'
import makeStore from '../../../../store/make-store'
import { useStore } from 'effector-react'

const { store, load  } =  makeStore(({attr_id, type}) => `formulation/section-contents/${attr_id}/${type}`)

const {changed, selectChange, addData, ...localState} = makeStore(({attr_id, type, id}) => id ? `formulation/section-contents/${attr_id}/${type}/${id}`: `formulation/section-contents/${attr_id}/${type}`)

function toOpt(hash) {
  return(Object.values(hash))
}

function submitted(attr_id, type, id, data) {
  const cb = (resp) => {
    load({attr_id, type})
  } 
  id ? localState.update({attr_id, type, id, data, cb}) : localState.create({attr_id, type, data, cb})
}

export default function({type='opn', ...props}) {

  const { attr_id } = useParams()

  const [sectionId, setSectionId] = useState(null)
  
  useEffect(() => {
    load({type, attr_id})
  }, [type])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, name,  description, kb_type} = localStore.data || {}

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }

  return (
    <CustomContainer onSubmit={(data) => submitted(attr_id, type, id , data)} store={localStore}>      
      <div className='fields'>
        <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} className='field' />
        <RichText label='Description' name='description' data={ description || ''} className='field' />
        <label className='submit'>
          <input type='submit' />
          <div> { sectionId ? 'Update' : 'Add'} </div>
        </label>
      </div>
      <Content>
        <Cards>
            {
              listData.map((o, i) => (
                <Card onClick={() => setSectionId(o.id)} className={ o.id === id ? 'selected row' : 'row'} key={i}> 
                  <Title> {o.name} </Title>
                  <Description> {o.description} </Description>
                  <UpdatedAt> {o.updated_at} </UpdatedAt>
                  
                </Card>
              ))
              
            }
        </Cards>
        <AddBtn>
          <Add onClick={() => setSectionId(null)} />
        </AddBtn>
        
      </Content>

    </CustomContainer>
  )
}

const Cards = styled.div`
  margin-top: 20px;
  height: 320px;
  overflow: auto;
`

const AddBtn = styled.div`
  position: relative;
  top: 0;
`


const SplitName = styled.div`
  display: flex;
  input[name='name'] {
    width: 160px;
  }

  
  .name {
    width: 160px;
  }

  .type {
    margin-left: 10px;
    width: 80px;
    .default__control {
      width: 90px;
    }
  }

  .rest {
    width: 60px;
  }

`
const Card = styled.div`
  cursor: pointer;
  width: 288px;
  height: 78px;
  border-radius: 3px;
  background-color: #f4f7fa;
  margin-top: 6px;
  margin-left: 10px;
  padding: 10px 10px;

`

const Title = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 10px;
`
const Description = styled.div`
  font-size: 10px;
  line-height: 1.1;
  color: #98acbe;
  margin-bottom: 10px;
`

const UpdatedAt = styled.div`
  font-size: 8px;
  font-weight: bold;
  color: #7e9ab3;
`

const Content = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #fff;

`
const CustomContainer = styled(Form)`
  
  position: relative;
  top:0;
  left: 0;
  

  .fields {
    .demo-editor { 
      height: 140px;
    }
    .field {
      margin-top: 10px;
    }
    label.submit {
      cursor: pointer;
      
      input[type='submit'] {
        display: none;
      }
      > div {
        width: 100px;
        margin: 0 auto;
        text-align: center;
        background-color: ${p => p.theme.color};
        color: white;
        line-height: 38px;
      }
    }    
  }
`