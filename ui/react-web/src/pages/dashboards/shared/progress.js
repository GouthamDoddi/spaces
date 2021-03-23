import React from 'react'

import styled, { css } from 'styled-components'

export default styled.progress`
  position: relative;
  ${p => p.width && css`
    width: ${p => p.width};
  `}
  height: ${p => p.height || '8px'};
  &::-webkit-progress-bar { 
    background-color: ${p => p.bkcolor || '#fff'};
    border-radius: 10px;
  }
  &::-webkit-progress-value { 
    background: ${p => p.color};
    border-radius: 10px;
  }
  &::-moz-progress-bar { 
    background: ${p => p.bkcolor || '#fff'};
    border-radius: 10px;
  }
  -webkit-appearance: none;
  border-radius: 10px;

  ${p => p.showTag && css`
    &::after {
      width: 38px;
      height: 16px;
      background: ${p => p.tagBkColor || '#FFEDE6'} 0% 0% no-repeat padding-box;
      border-radius: 3px;
      content: "${p => p.value}%";
      position: absolute;
      top: -16px;
      left: 0;
      text-align: center;
      width: 38px;
      font: normal normal normal 10px/15px Muli;
      letter-spacing: 0px;
      color: ${p => p.tagColor || '#EB622B'};
    }
  `}
  
`