import React from 'react'

import styled, {css} from 'styled-components'

export default function({ cols, ...props}) {
  return (
    <Box>
      <Table color='red'>
        <Th color='red'> ID</Th>
        <Th> Title</Th>
        <Th center> Status</Th>
        <Th> Beneficiary</Th>
        <Th> Priority</Th>

        <Tb className='case-id'> ID</Tb>
        <Tb> Title</Tb>
        <Tb center color='red'> Status</Tb>
        <Tb> Beneficiary</Tb>
        <Tb> Priority</Tb>
        
      </Table>
    </Box>
  )
}


const Box = styled.div`

`

export const Table = styled.div`
  display: grid;
  grid-template-columns:  repeat(${p => p.cols || 5}, auto);
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  grid-gap: 10px 4px;
`

export const Th = styled.div`
  height: 18px;
  &:first-child { padding-left: 19px; }
  display: flex;
  ${p => p.center && css`
    justify-content: center;
  `}
`

export const Tb = styled.div`
  height: 65px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  // box-shadow: 0px 1px 2px #00000029;
  opacity: 1;
  display: flex;

  color: ${ p => p.color};
  &.case-id {
    border-left: 3px solid #3FBF11;
    padding-left: 16px;
  }

  ${p => p.center && css`
    justify-content: center;
  `}
`