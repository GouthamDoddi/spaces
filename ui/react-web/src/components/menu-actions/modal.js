import React from 'react'
import styled from 'styled-components'



function Modal({className, children, title}) {
  return(
    <div className={className}>
      <div className='content'>
        <Close />
        {children}
      </div>
    </div>
  )
}

const Close = styled.div`
  width: 13px;
  height: 13px;
  background-color: #000000;
  position: absolute;
  right: 144px;
  top: 40px;
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
    min-width: 820px;
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
        width: 103px;
        height: 100px;
        border-radius: 10px;
        background-color: #ffffff;
        align-self: center;
        position: relative;
        left: -12px;
    }
  }
`