import React from 'react'

import Input from '../../form/input'
import Checkbox from '../../form/checkbox2'

import styled from 'styled-components'

import {
  Container,
  EditIcon,
  SaveIcon,
  TranslateIcon
} from './shared'

export default function(props) {
  return(
    <Container>
      <div className='actions'>
        <EditIcon color='#FD7635' fill='#FFEFE2' />
        <SaveIcon color='#FD7635' fill='#FFEFE2' />
        <TranslateIcon color='#FD7635' fill='#FFEFE2' />
      </div>

      <Content>
        <Elem>
          <Name> Project Scope </Name>
          <Form>
            <Checkbox id='portal' label='Portal' />
            <Checkbox id='mapp' label='Mobile App' />
            <Checkbox id='erp' label='ERP' />
            <Checkbox id='scm' label='SCM' />
            <Checkbox id='eam' label='EAM' />
            <Checkbox id='bi-dw' label='BI/DW' />
          </Form>
          
        </Elem>

        <Elem>
          <Name> Beneficiaries </Name>
          <Form>
            <Checkbox id='internal' label='Internal' />
            <Checkbox id='gov' label='Governament' />
            <Checkbox id='business' label='Business' />
            <Checkbox id='ind' label='Individuals' />
          </Form>
          
        </Elem>

      </Content>
    </Container>
  )
}

const Content = styled.div`
  font-size: 14px;
  color: #687c9d;
`
const Elem = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 20px;
`

const Name= styled.div`
  margin-bottom: 10px;
`
const Form = styled.div`
  display: flex;
  > * {
    margin-right: 30px;
  }
  
`

