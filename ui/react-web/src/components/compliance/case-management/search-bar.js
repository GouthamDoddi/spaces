import React from 'react'

import styled from 'styled-components'

// import Select, { components } from 'react-select';

import { Link } from 'react-router-dom'

export default function SearchBar(props) {
  return (
    <SearchBarContainer>
      <i></i>
      <input type='text' {...props} />
    </SearchBarContainer>
  )
}

const SearchBarContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  i {
    width: 15px;
    height: 14px;
    position: absolute;
    left: 9px;
    top: 8px;
    background-image: url('/img/forum/search.svg');
    background-size: 15px 14px;
    background-repeat: no-repeat;
  }
  input {
    outline: none;
    color: #7e9ab3;
    width: 167px;
    height: 29px;
    border-radius: 2px;
    border: solid 1px #dedede;
    background-color: #efefef;
    font-size: 10px;
    padding-left: 31px;    
  }
`