import React from 'react'

import styled from 'styled-components'

import TextArea from '../../form/text'
export default function(){
    return (
      <Container>
        <div className='cc'>
          <TextArea label='Closure Comments' />
        </div>
        <div className='rest'>
          <TextArea label='Description' />
        </div>
      </Container>
    )
}

const Container = styled.div`
  display: flex;
  height: 290px;
  .cc {
    textarea {
      height: 200px;      
    }
    padding-right: 20px;
    margin-top: 15px;
  }
  .rest {
    > div {
      margin-top: 15px;
    }
  }
  `