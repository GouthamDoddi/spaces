import React from 'react'

import styled from 'styled-components'

function Element(props) {
  const { className, children, label, type='text', required, ...others } = props
  return(
    <div className={className}>
      <label className={required ? 'required' : null}> {label} </label>
      <input required={required} {...others} type={type} />
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
    &.required::after {
      content: '*';
      color: red;
    }
  }
  input {
    outline: none;
    width: 265px;
    // max-width: 400px;
    height: 38px;
    border-radius: 2px;
    border: solid 1px #dedede;
    background-color: #efefef;
    font-size: 16px;
    padding-left: 5px;
    font-family: Muli;
    &:focus {
      border: solid 1px ${p => p.theme.color};
    }
  }
`