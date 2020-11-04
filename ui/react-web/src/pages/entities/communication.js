import React from 'react'
import styled from 'styled-components'
import Opn from '../../components/formulation/checklist/tools/opn'

export default (props) => {
  return <Wrapper> <Opn type='chat' bk='#efefef' /> </Wrapper>
}

const Wrapper = styled.div`
  margin: 30px 30px;

`