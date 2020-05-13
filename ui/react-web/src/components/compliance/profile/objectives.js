import React, {useState} from 'react'

import Input from '../../form/input'
import styled from 'styled-components'

import {
  Container,
  EditIcon,
  SaveIcon,
  TranslateIcon
} from './shared'



export default function(props) {
  let [data, setData] = useState([])
  let name, email, role;
  const addData = (e) => {
    e.preventDefault();
    const fdata = {
      name: document.forms[0][0].value,
      role: document.forms[0][1].value,
      email: document.forms[0][2].value
    }
    
    setData([...data, fdata])
  }
  return(
    <Container>
      <div className='actions'>
        <EditIcon color='#FD7635' fill='#FFEFE2' />
        <SaveIcon color='#FD7635' fill='#FFEFE2' />
        <TranslateIcon color='#FD7635' fill='#FFEFE2' />
      </div>

      <div className='container'>
        <Form>
          <Input label='Name' ref={name} type='text' />
          <Input label='Role' ref={role} type='text' />
          <Input label='Email' ref={email} type='text' />
          <Button onClick={addData}> Invite </Button>
        </Form>
        <Table>
          <Header>
            <div> Name </div>
            <div> Role </div>
            <div> Email</div>
            <div> Status</div>
          </Header>
          {
            data.map((item, i) => (
              <Row>
                <div>{ item.name}</div>
                <div> {item.role}</div>
                <div> {item.email}</div>
                <div> Pending </div>
              </Row>
            ))
          }
        </Table>
      </div>
    </Container>
  )
}


const Form = styled.form`
  height: 163px;
`

const Button = styled.button`
  border: none;
  background-color: ${p => p.theme.color};
  color: #ffffff;
  height: 40px;
  align-self: flex-end;
  margin-bottom: 4px;
`

const Table = styled.div`
  margin-top: 20px;
`
const Row = styled.div`
display: grid;
grid-template-columns: repeat(4, minmax(50px, 1fr));
grid-auto-rows: 50px;

`

const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  grid-auto-rows: 30px;
  border-bottom: 1px solid #ccc;
`