import React from 'react';
import styled from 'styled-components'
// import { components } from 'react-select';

export function EditIcon(props) {
  const { onClick } = props
  return (
    <IconBase onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <rect width="44" height="44" className='back' rx="12"/>
          <g>
            <path d="M0 0L24 0 24 24 0 24z" transform="translate(9 10)"/>
            <path className='main' fillRule="nonzero" d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322c.39-.39 1.024-.39 1.414 0l2.829 2.829c.39.39.39 1.024 0 1.414L7.243 21h-.001z" transform="translate(9 10)"/>
          </g>
        </g>
      </svg>
    </IconBase>
  )
}

export function SaveIcon(props) {
  const { onClick } = props

  return (
    <SaveIconLabel onClick={onClick}>
      <input type='submit' />
      <svg xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <rect width="44" height="44" className='back' rx="12"/>
          <g>
            <path d="M0 0L24 0 24 24 0 24z" transform="translate(9 10)"/>
            <path className='main' fillRule="nonzero" d="M8 19v-6h10v6h2V7.828L17.172 5H6v14h2zM5 3h13l4 4v13c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1zm5 12v4h6v-4h-6z" transform="translate(9 10)"/>
          </g>
        </g>
      </svg>
    </SaveIconLabel>
  )
}

export function TranslateIcon(props) {
  const { onClick } = props

  return (
    <IconBase onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
        <g fill="none" fillRule="evenodd">
          <rect width="44" height="44" className='back' rx="12"/>
          <g className='main'>
            <path d="M16.236 17.705l.655-2.312.656 2.312h-1.31zm1.288-3.254c-.067-.226-.346-.331-.632-.331-.279 0-.558.105-.625.331l-1.454 4.738c-.008.03-.015.06-.015.075 0 .241.354.407.617.407.166 0 .294-.053.332-.196l.286-1.002h1.725l.286 1.002c.038.143.166.196.331.196.264 0 .618-.173.618-.407 0-.023-.008-.045-.015-.075l-1.454-4.738z" transform="translate(10 10)"/>
            <path d="M22.594 21.414c0 .65-.53 1.18-1.18 1.18h-9.037c-.65 0-1.18-.53-1.18-1.18 0-.227-.11-.44-.294-.572l-1.835-1.31 1.835-1.311c.184-.132.294-.346.294-.573v-5.271c0-.65.53-1.18 1.18-1.18H21.414c.65 0 1.18.53 1.18 1.18v9.037zm-20.008-8.61c-.65 0-1.18-.53-1.18-1.18V2.585c0-.65.53-1.18 1.18-1.18h9.037c.65 0 1.18.53 1.18 1.18 0 .227.11.44.294.572l1.835 1.31-1.835 1.311c-.184.132-.294.346-.294.573V9.79h-.426c-1.426 0-2.586 1.16-2.586 2.585v.427H2.586zM21.414 9.79H14.21V6.713l2.342-1.672c.184-.132.294-.345.294-.572 0-.227-.11-.44-.294-.572l-2.37-1.693C13.996.96 12.919 0 11.623 0H2.586C1.16 0 0 1.16 0 2.586v9.038c0 1.425 1.16 2.585 2.586 2.585h7.205v3.078l-2.342 1.672c-.184.132-.294.345-.294.572 0 .227.11.44.294.572l2.37 1.693C10.004 23.04 11.081 24 12.377 24h9.037C22.84 24 24 22.84 24 21.414v-9.037c0-1.426-1.16-2.586-2.586-2.586z" transform="translate(10 10)"/>
            <path d="M7.104 8.167c-.433-.45-.728-1.035-.814-1.685h1.63c-.087.65-.382 1.234-.816 1.685zm2.161-1.685c.219 0 .396-.178.396-.397 0-.219-.177-.396-.396-.396H7.501v-.963c0-.22-.178-.397-.397-.397-.218 0-.396.178-.396.397v.963H4.944c-.219 0-.396.177-.396.396 0 .22.177.397.396.397h.547c.087.837.448 1.594.991 2.18-.45.27-.976.425-1.538.425-.219 0-.396.178-.396.397 0 .219.177.396.396.396.803 0 1.547-.25 2.16-.677.614.426 1.359.677 2.161.677.219 0 .396-.177.396-.396 0-.22-.177-.397-.396-.397-.562 0-1.088-.155-1.538-.425.543-.586.904-1.343.991-2.18h.547z" transform="translate(10 10)"/>
          </g>
        </g>
      </svg>
    </IconBase>
  )
}

const IconBase = styled.label`
  cursor: pointer;
  svg {
    width: 44px;
    height: 44px;
    .back { fill: ${p => p.theme.icon}}
    .main { fill: ${p => p.theme.color}}
  }
  
  margin-right: 9px;
  &:last-child{ margin-right: 0 }
`

const SaveIconLabel = styled(IconBase)` 
  input[type="submit"] {
    display: none;
  }
`