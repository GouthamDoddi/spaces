import React from 'react'
import styled from 'styled-components'


export default function Element(props) {
  return (
    <Search>
      <i />
      <input type='text' name='search' placeholder='Search' />
    </Search>
  )
}

const Search = styled.div`
  position: relative;
  i {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 18px;
    top: 15px;
    background-image: url('/img/forum/search.svg');
    background-repeat: no-repeat;
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