import React from 'react'

import Modal from '../modal'

export default function(props) {
  return (
    <Modal>
      <div className='form-space'>
        <header> Create </header>

        {props.id}
      </div>
      <div className='actions'></div>
    </Modal>
  )
}