import React from 'react';
import styled from 'styled-components'
import Modal from '../modal'

import Input from '../../form/input'

export default function(props) {
  const { id } = props
  const title = `${id === 'new' ? 'Create' : 'Edit'} Task`
  return (
    <Modal>
      <div className='form-space'>
        <header> {title} </header>

        <Content>
          <form>
            <div className='main'>
              <Input label='Title' />
              <Input label='Status' />
              <Input label='Start Date' type='date' />
              <Input label='End Date' type='date' />
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
