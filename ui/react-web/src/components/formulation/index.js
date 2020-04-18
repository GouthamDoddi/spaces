import React from 'react';
import Container from '../container';
import Workspace from '../workspace';
import CreateMenu from '../createMenu';

export default function() {
  return(

    <Container>
      <CreateMenu />
      <Workspace>
        <div className='header'>
        </div>
        <div className='form-space' />
        <div className='widgets' />
      </Workspace>
    </Container>
  )
}