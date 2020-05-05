import React, { useState } from 'react'

import styled from 'styled-components'
import Input from './input'


function Element(props) {
  const { className, btn, ...others } = props

  let [selectedFile, setFile ] = useState('')


  return(
    <div className={className}>
      <Input {...others} disabled value={selectedFile} />
      <label>
        <span> { btn } </span>
        <input type='file' onChange={(f) => setFile(f.target.files[0]?.name || '')} />
      </label>
    </div>
  )
}

export default styled(Element)`
  display: flex;
  > label {
    margin-left: 10px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px #dedede;
    background-color: #efefef;
    align-self: flex-end;
    padding: 7px 20px;
    span {
      font-size: 14px;
      font-weight: 500;
      color: #687c9d;
    }
    input {
      display: none;
    }
  }
`