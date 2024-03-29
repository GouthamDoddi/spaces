import React from 'react'

import styled from 'styled-components'

function Element(props) {
  const { className, children, label, style, ...others } = props
  return(
    <div className={className} style={style}>
      <label> {label} </label>
      <textarea {...others} />
    </div>
  )
}

export default styled(Element)`
  display: flex;
  flex-flow: column;
  label {
    font-size: 14px;
    font-weight: 500;
    color: #687c9d;
    margin-bottom: 10px;
  }
  textarea {
    outline: none;
    min-width: 265px;
    height: 83px;
    border-radius: 2px;
    border: solid 1px #dedede;
    background-color: #efefef;
    font-size: 16px;
    padding-left: 5px;
    font-family: Muli;
    resize: none;

    &:focus {
      border: solid 1px ${p => p.theme.color};
    }
  }
`