import React from 'react';
import styled from 'styled-components'
import Modal from '../modal'

import Form, { Input, TextArea, Submit, Select, toOpt } from '../../form'
import { policyStatusTypes } from '../../../store/master-data'

// import {
//   Link
// } from 'react-router-dom';

import { useQuery } from '../../createMenu';


export default function(props) {
  const { id } = props
  const query = useQuery()
  const page = query.get('page')

  const title = `${id === 'new' ? 'Create' : 'Edit'} Task`

  let render = null

  if(page === 'edit') render = <Edit></Edit>
  else if(page === 'profile') render = <Profile></Profile>

  return (
    <Modal title='Task' disableList={['translate', 'share', 'msg']} default='profile'>
      { render }
    </Modal>
  )
}


function Edit(props) {
  return (
    <CustomForm>
      <Input label='Title' name='title' type='text' />
      <TextArea label='Description' name='description'  />
      <TextArea label='Closure Comments' name='closure_comments'  />
      <Submit className='submit'>
        <input type='submit' />
        <div> Create </div>
      </Submit>
    </CustomForm>
  )
}

function Profile(props) {
  return(
    <CustomContainer>      
      <div className='fields'>

        <Input label='Creation Date' name='created_at' type='date' disabled />
        <Input label='Created By' name='created_by' type='date' disabled/>
        <Select name='status' label='Status' 
            options={toOpt(policyStatusTypes)}
            outerClass='field'
            // onChange={selectChange('status')}
            // value={policyStatusTypes[status] || ''} 
        />
        <Input label='Proposed Date' name='proposed_date' type='date' />

        <Submit>
          <input type='submit' />
          <div> Create </div>
        </Submit>

      </div>
      </CustomContainer>
  )
}

const CustomForm = styled(Form)`
  margin-left: 44px;
  margin-top: 30px;
  > div {
    textarea {
      width: 540px;
    }
    
    margin-bottom: 15px;
  }
  .submit {
    > div {
      width: 140px;
      margin-left: 230px;
      margin-top: 40px;
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
  
  .fields {
    margin: 20px;
    margin-left: 40px;
    display: grid;
    grid-auto-rows: 78px;
    grid-template-columns: repeat(auto-fit, 265px);
    grid-column-gap: 90px;
  }
`
