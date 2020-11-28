import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, RichText, Input } from '../../../components/form'
import { Table, Header, Row, Add } from '../../../components/tables/small'

import { useParams } from 'react-router-dom'
import makeStore from '../../../store/make-store'
import { useStore } from 'effector-react'

const { store, load  } =  makeStore(({attr_id, type, param_id}) => `formulation/section-contents/${attr_id}/${type}/all?parameter_id=${param_id}`)

const {changed, selectChange, addData, ...localState} = makeStore(({attr_id, type, id}) => id ? `formulation/section-contents/${attr_id}/${type}/${id}`: `formulation/section-contents/${attr_id}/${type}`)

function toOpt(hash) {
  return(Object.values(hash))
}



export default function({type='opn', bk='#fff',  ...props}) {

  const { attr_id, param_id: combo_id } = useParams()
  const [param_id, rp_id] = combo_id.split('-')

  const [sectionId, setSectionId] = useState(null)
  
  const submitted = (attr_id, type, id, data) => {
    const cb = (resp) => {
      load({attr_id, type, param_id})
    } 
    data.parameter_id = param_id
    id ? localState.update({attr_id, type, id, data, cb}) : localState.create({attr_id, type, data, cb})
  }

  useEffect(() => {
    console.log('Loading....', param_id)
    load({type, attr_id, param_id})
  }, [attr_id, param_id])
  
  const listStore = useStore(store)
  const localStore = useStore(localState.store)

  const listData = listStore.data || []
  let {id, name,  description, kb_type} = localStore.data || {}

  console.log(listData)

  if (sectionId && id !== sectionId) {
    addData(listData.find(o => o.id === sectionId))
  } else if(sectionId == null && id) { addData(null) }
const html = (h) => <div>{html}</div>
  return (
    <CustomContainer onSubmit={(data) => submitted(attr_id, type, id , data)} store={localStore} bk={bk}>      
      <div className='fields'>
        <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} className='field' required/>
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
                  {/* <Description dangerouslySetInnerHTML={{__html: o.description || ''}} /> */}
                  {/* <Description> {o.description.slice(0,140)} {(o.description || '').length > 140 ? '...' : ''}  </Description> */}
                  <UpdatedAt> {o.updated_at} </UpdatedAt>
                  <Del onClick={() => {
                      localState.remove({attr_id, type, id: o.id, cb: () => load({type, attr_id, param_id})})
                  }}> Delete </Del>
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

const Del = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
  color: red;
  cursor: pointer; 
`

const AddBtn = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
`

const Card = styled.div`
  cursor: pointer;
  width: 100%;
  height: 78px;
  border-radius: 3px;
  background-color: #f4f7fa;
  margin-top: 6px;
  margin-left: 10px;
  padding: 10px 10px;
  position: relative;
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
  height: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
      .rdw-editor-main {
        background-color: ${p => p.bk };
      }
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