import React, { useEffect, useState } from 'react'

import styled from 'styled-components'

import { Filters, Themenu } from './timeline'



export default function(props) {
  return(
    <>
      <Themenu />
      <Container>
        <Board>
          <BoardHeader>
            <div> To Do </div>
            <div> Work In Progress </div>
            <div> Pending </div>
            <div> Completed </div>
          </BoardHeader>
          <BoardContent>
            <Vault>
              <Card color='#fae264'></Card>
            </Vault>
            <Vault>
              <Card color='#f9a984'></Card>
              <Card color='#f9a984'></Card>
              <Card color='#f9a984'></Card>
            </Vault>
            <Vault>
              <Card color='#61b9fd'></Card>
              <Card color='#61b9fd'></Card>
            </Vault>
            <Vault>
              <Card color='#89e3d1'></Card>
              <Card color='#89e3d1'></Card>
              <Card color='#89e3d1'></Card>
            </Vault>
            
          </BoardContent>
        </Board>

        <Filters top='33px' bottom='0px'/>
      </Container>

    </>
  )
}

const Board = styled.div`
  min-width: 976px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  flex: 1;
  margin-right: 17px;
`
const BoardContent = styled.div`
  width: 100%;
  height: 541px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(221px, 1fr)); 
  grid-auto-rows: 100%;
  grid-gap: 29px 11px;
`

const BoardHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, minmax(221px, 1fr));
  grid-template-rows: 70px;
  border-radius: 3px;
  background-color: #f2f2f2;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #000000;
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Vault = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Card = styled.div`
  min-width: 221px;
  height: 161px;
  border-radius: 3px;
  background-color: #f4f7fa;
  margin-top: 11px;
  align-self: stretch;
  margin: 11px 10px 0 10px;
  border-top: 4px solid ${p => p.color || ''};

`

const Container = styled.div`
  display: flex;
  margin-left: 97px;
  position: relative;
  top: 17px;
`