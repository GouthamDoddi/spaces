import React, {useState} from 'react'

import styled from 'styled-components'


export default function Element(props) {
  const { className, checked=false, label, id, ...others} = props
  const [check, setCheck] = useState(checked)
  return(
    <Box className={className} onClick={() => setCheck(!check)}>
      <input type="checkbox" checked={check} {...others}/>
      <span></span>
      <span className='label'>{label}</span>
    </Box>
  )
}

const Box = styled.div`
  color: #000;
  input[type="checkbox"] {
    display: none;
  }
  .label {
    display: inline-block;
    margin-left: 3px;
  }
  input[type="checkbox"] + span {  
    display: inline-block;
    position: relative;
    top: -2px;
    width: 18px;
    height: 18px;
    vertical-align: middle;
    background: white left top no-repeat;
    border: 1.5px solid #000000;
    cursor: pointer;
    margin-right: 2px;
  }
  input[type="checkbox"]:checked + span {
    border: 1.5px solid ${p => p.theme.color};
    color: red;
    &:before {
      content: "✓";
      position: relative;
      left: 2px;
      top: -1px;
    }
  }

  input[type="checkbox"] + span {
    margin-right: 4px;
  }

`