import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import Form, { TextArea, Select, Actions, Container, Input } from '../../../form'

import { useParams } from 'react-router-dom'
import makeStore from '../../../../store/make-store'
import { useStore } from 'effector-react'

import {attributeStore} from '../../../../store/section-store'

function pathFn({ policy_id, id, attr_id }) {
  const base = `formulation/${policy_id}/policy-sections/${id}/attributes`
  console.log('base', base)
  return attr_id ? `${base}/${attr_id}` : base

}

const { store, load, create, update, addData, changed } =  makeStore(pathFn)

function submitted(policy_id, id, attr_id, tags, data) {
  const newRec = (attr_id === 'new')

  const cb = (resp) => {
    if(newRec) window.location.hash = `/formulation/${policy_id}/checklist/${id}/attrs/${resp.id}/profile`
    attributeStore.load({policy_id, id})
  }
  data.tags = tags
  data.policy_id = policy_id
  debugger
  newRec ? create({policy_id, id, data, cb}) : update({policy_id, id, attr_id,  data, cb})
}

export default function(props) {
  const { policy_id, id, attr_id } = useParams()

  const addTag = () => {
    addData({id: attr_id, name, description, tags: [...(tags || []), tag]})
  }

  const updateTags = (list) => {
    addData({id: attr_id, name, description, tags: [...list]})
  } 
  
  useEffect(() => {
    attr_id !== 'new' ? load({policy_id, id, attr_id}) : addData(null)
  }, [])
  
  console.log(useParams())
  const sectionStore = useStore(store)
 
  const { name, description, tags=[], tag } = sectionStore.data || {}
  
  console.log('tags', tags)
  return (
    <CustomContainer onSubmit={(data) => submitted(policy_id, id ,attr_id,  tags, data)} store={sectionStore}>        
      <div className="fields">
        <Input label='Name' name='name' type='text' onChange={changed} value={ name || ''} className='field' />

        <TextArea label='Description' name='description' type='text' onChange={changed} value={ description || ''} className='field' />
        <div className='tags'>
          <Input label='Tag' name='tag' type='text' onChange={changed} value={ tag || ''} className='field'/>
          <div className='button' onClick={addTag}> + </div>
        </div>
        <DisplayTags>

          {
            (tags || []).map((tag, i) => (
              <div className='tag' key={i} > 
                <span> {tag} </span>
                <span className='close-tag' onClick={() => updateTags(tags.filter((_, fl) => fl !== i))}> x </span>
              </div>
            ))
          }
        </DisplayTags>

        <label className='submit'>
          <input type='submit' />
          <div> { id === 'new' ? 'Create': 'Update'} </div>
        </label>
      </div>
    </CustomContainer>
  )
}

const DisplayTags = styled.div`
  display: flex;
  margin-top: 20px;
  .tag {
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    margin-left: 6px;
    border: solid 1px #e4eaf0;
    background-color: #f4f7fa;
    // color: red;
    padding: 6px;

    .close-tag {
      position: absolute;
      top: 0;
      right: -6px;
      color: red;
      width: 12px;
      height: 12px;
      background-color: #fd7635;
      border-radius: 50%;
      color: white;
      font-size: 8px;
      text-align: center;
      cursor: pointer;
    }
  }

`

const CustomContainer = styled(Form)`
  
  position: relative;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .tags {
    display: flex;

    .button {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: #fd7635;
      outline: none;
      border: none;  
      color: #fff;
      font-size: 28px;
      margin-left: 10px;
      margin-top: -2px;
      text-align: center;
      line-height: 38px;
      align-self: flex-end;
    }
  }


  .fields {
    margin: 20px;
    margin-left: 76px;

    .field {
      margin-top: 20px;
    }

    label.submit {
      position: relative;
      top: 30px;
      cursor: pointer;
      max-width: 280px;
      input[type='submit'] {
        display: none;
      }
      > div {
        width: 280px;
        text-align: center;
        background-color: ${p => p.theme.color};
        color: white;
        line-height: 38px;
      }
    }    
  }

  .sub-parent {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    flex-grow: 1;
  }
  .scrollable-content {
    background: white;
    flex-grow: 1;
    
    overflow: auto;
    
    /* for Firefox */
    min-height: 0;
  }
  
`

