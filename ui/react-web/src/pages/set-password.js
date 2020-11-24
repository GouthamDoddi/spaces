import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Input, Select, Actions2, Container, TextArea, toOpt } from '../components/form'

import { useParams, Link } from 'react-router-dom'
import makeStore from '../store/make-store'
// import { projectTypes, projectCategoryTypes, entitiesData, sponsorOptions } from '../../../store/master-data'
import { useStore } from 'effector-react'

const { store, changed } =  makeStore('')

function submitted(data) {
  if(data.password != data.confirm_password) {
    alert("Passwords do not match. Try again!")
  }
  const cb = (resp) => {
    window.location.hash = `/projects/${resp.id}/profile/details`
  }
  console.log(data)
}


export default function(props) {

  const { token } = useParams()
  
  useEffect(() => {
 
  }, [])
  
  const projectStore = useStore(store)
  const { password, confirm_password } = projectStore.data || {}

  return(
    <Container onSubmit={(data) => submitted(data)} store={projectStore} saveBtn>
      <div className='container'>
        <Input label='New Password' type='password' name='password' onChange={changed} value={password || ''} required/>

        <Input label='Confirm New Password' type='password' name='confirm_password' onChange={changed} value={confirm_password || ''}/>
      </div>      
    </Container>
  )
}


const CancelBtn = styled(Link)`
  padding: 10px 20px;
  flex-direction: column;
  margin: 0 auto;
  background-color: ${p => p.theme.color};
  margin-bottom: 20px;
  color: #fff;
  border-radius: 3px;
`