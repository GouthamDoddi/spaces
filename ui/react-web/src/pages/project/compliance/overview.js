import React from 'react'
import styled from 'styled-components'
import Status from '../../../components/dashboards/status'


export default function(props) {
  return(
    <Wrapper>
      <Status type='Unresolved' item='M1' count='07' itemColor='#85263a' className='st'/>
      <Status type='Unresolved' item='M2' itemColor='#257c76' className='st' count='13' />
      <Status type='Unresolved' item='M3' itemColor='#1a6b8f' count='67' className='st' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px 40px;
  .st {
    margin-right: 25px; 
    min-width: 200px;
  }

`