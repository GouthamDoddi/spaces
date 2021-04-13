import React from 'react'
import styled from 'styled-components'


export default function Element(props) {
    return (
        <Sort className={props.className}>
            <i />
            <input disabled type='text' name='sort' placeholder={props.placeholder || 'Sort entities'} {...props} />
            <ic />
        </Sort>
    )
}

const Sort = styled.div`
  position: relative;
  i {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 18px;
    top: 22px;
    background-image: url('/img/forum/sort.svg');
    background-repeat: no-repeat;
  }
  ic {
    top: 26px;
    width: 24px;
    right: 18px;
    height: 24px;
    position: absolute;
    background-repeat: no-repeat;
    background-image: url('/img/shared/arrows/down_arrow.svg');
  }
  input {
    outline: none;
    border: none;
    width: 100%;
    padding-left: 54px;
    font-size: 20px;
    font-weight: 600;
    color: #90949d;
    height: 56px;
    border-radius: 2px;
    background-color: #f7f7f7;
  }

  margin-bottom: 18px;
`