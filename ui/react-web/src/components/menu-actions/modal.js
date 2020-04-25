import React from 'react'
import styled from 'styled-components'

import {
  useLocation,
  Link
} from 'react-router-dom';

function Modal({className, children, title}) {
  const loc = useLocation();

  return(
    <div className={className}>
      <div className='content'>
        <Close to={() => {
          const query = new URLSearchParams(loc.search);
          query.delete('menu-action')
          query.delete('id')
          return `${loc.pathname}?${query.toString()}`
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <g fill="none" fill-rule="evenodd">
              <path d="M0 0L24 0 24 24 0 24z" transform="translate(-5 -5)"/>
              <path fill="#000" fill-rule="nonzero" d="M12 10.586L16.95 5.636 18.364 7.05 13.414 12 18.364 16.95 16.95 18.364 12 13.414 7.05 18.364 5.636 16.95 10.586 12 5.636 7.05 7.05 5.636z" transform="translate(-5 -5)"/>
            </g>
          </svg>
        </Close>
        {children}
        <Create> Create </Create>
      </div>
    </div>
  )
}

const Create = styled.button`
  position: absolute;
  border: none;
  bottom: 31px;
  left: 263px;
  width: 160px;
  height: 38px;
  border-radius: 2px;
  background-color: ${p => p.theme.color};
  color: #ffffff;
  font-size: 14px;
  z-index: 4;
`
const Close = styled(Link)`
  position: absolute;
  left: 643px;
  top: 36px;
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
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;

  .content {
    display: flex;
    // min-width: 820px;
    position: relative;
    .form-space {
      min-width: 706px;
      flex: 1;
      width: 706px;
      height: 662px;
      border-radius: 10px;
      box-shadow: 5px 2px 4px 0 rgba(0, 0, 0, 0.12);
      background-color: #ffffff;
      z-index: 1;
      header {
        display: flex;
        height: 92px;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-bottom: solid 1px #e6f0f9;
        font-size: 15px;
        font-weight: 800;
        color: #000000;
        text-transform: uppercase;
        // position: relative;
      }
    }
    .actions {
        // width: 103px;
        // height: 100px;
        border-radius: 10px;
        background-color: #ffffff;
        align-self: center;
        position: relative;
        left: -12px;
    }
  }
`