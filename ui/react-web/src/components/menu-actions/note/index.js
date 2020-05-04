import React from 'react';
import styled from 'styled-components'
import Modal from '../modal'

import Input from '../../form/input'
import Attachment from '../../form/attachment'

export default function(props) {
  const { id } = props
  const title = `${id === 'new' ? 'Create' : 'Edit'} Note`
  return (
    <Modal>
      <div className='form-space'>
        <header> {title} </header>

        <Content>
          <form>
            <div className='main'>
              <Input label='Creation Date' type='date' />
              <Input label='Last Update Date' type='date' />
              <Input label='Title' />
              <Input label='Notes' />
              <Attachment label='Attachment' btn='Browse'/>
            </div>
          </form>
        </Content>
      </div>
      <div className='actions'></div>
    </Modal>
  )
}

const Content = styled.div`
  margin-left: 44px;
  margin-top: 30px;

  form {
    .main {
      display: flex;
      flex-wrap: wrap;
      margin-right: 40px;
      justify-content: space-between;
      > div {
        margin-bottom: 25px;

      }
    }
  }
`
