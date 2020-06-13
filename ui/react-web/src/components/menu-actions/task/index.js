import React from 'react';
import styled from 'styled-components'
import Modal from '../modal'

import Form, { Input } from '../../form'

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
    <div>
      IN EDIT
    </div> 
  )
}

function Profile(props) {
  return(
    <div>Inside Profile</div>
  )
}
// const Content = styled.div`
//   margin-left: 44px;
//   margin-top: 30px;

//   form {
//     .main {
//       display: flex;
//       flex-wrap: wrap;
//       margin-right: 40px;
//       justify-content: space-between;
//       > div {
//         margin-bottom: 25px;

//       }
//     }
//   }
// `
