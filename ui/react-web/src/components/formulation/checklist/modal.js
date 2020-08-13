import React from 'react'
import styled from 'styled-components'

import {
  useLocation,
  Link
} from 'react-router-dom';

function Modal({className, children, title, closePath, closeTop}) {
  const loc = useLocation();
  
  return(
    <div className={className}>
      <Content>
        <Close to={closePath} closeTop={closeTop}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <g fill="none" fillRule="evenodd">
              <path d="M0 0L24 0 24 24 0 24z" transform="translate(-5 -5)"/>
              <path fill="#000" fillRule="nonzero" d="M12 10.586L16.95 5.636 18.364 7.05 13.414 12 18.364 16.95 16.95 18.364 12 13.414 7.05 18.364 5.636 16.95 10.586 12 5.636 7.05 7.05 5.636z" transform="translate(-5 -5)"/>
            </g>
          </svg>
        </Close>
        {children}
        </Content>

    </div>
  )
}

const Close = styled(Link)`
  position: absolute;
  right: 43px;
  top: ${p => p.closeTop || '36px'};
  z-index: 3;
`
export default styled(Modal)`
  display: flex;
  position: fixed; /* Stay in place */
  z-index: 3000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  // min-height: 950px;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`
const Content = styled.div`

  width: 780px;
  min-height: 750px;
  border-radius: 10px;
  box-shadow: 5px 2px 4px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  position: relative;
  top: 0;
  left: 0;


`