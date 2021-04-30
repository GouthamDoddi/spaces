import React from 'react'

import styled from 'styled-components'


export default function SmallCard({title='Entities', count=7, ...props}) {
  return (
    <Box>
      <tr>
        <td> </td>
        <td> <Tag>M1</Tag> </td>
        <td> <Tag>M2</Tag></td>
        <td> <Tag>M3</Tag></td>
      </tr>
      <tr>
        <td> 
          <Title>
            <div> <Check /></div>
            <div> Fully Compliant </div>
          </Title>
        </td>
        <td> 45%</td>
        <td> 36%</td>
        <td> 37%</td>
      </tr>
      <tr>
        <td> 
          <Title>
            <div> <HalfCircle /></div>
            <div> Partially Compliant </div>
          </Title>
        </td>
        <td> 45%</td>
        <td> 36%</td>
        <td> 37%</td>
      </tr>
      <tr>
        <td>
          <Title>
            <div> <Not /> </div>
            <div> Non Compliant </div>
          </Title>
        </td>
        <td> 45%</td>
        <td> 36%</td>
        <td> 37%</td>
      </tr>
    </Box>
  )
}

function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27.037" height="27.037" viewBox="0 0 27.037 27.037"><path style={{fill:'#0064fe'}} d="M13.518,0A13.518,13.518,0,1,0,27.037,13.518,13.518,13.518,0,0,0,13.518,0ZM20.96,9.373,11.3,19.029a.966.966,0,0,1-1.365,0L6.077,15.167a.966.966,0,1,1,1.342-1.389l.024.024,3.18,3.18,8.973-8.973A.966.966,0,0,1,20.96,9.373Z"/></svg>
  )
}

function HalfCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27.018" height="27.037" viewBox="0 0 27.018 27.037"><g transform="translate(-0.232)"><g  style={{stroke:'#ffbf00', fill:'none'}} transform="translate(0.25)"><circle style={{stroke:'none'}} cx="13.5" cy="13.5" r="13.5"/><circle style={{fill:'none'}} cx="13.5" cy="13.5" r="13"/></g><path style={{fill:'#ffbf00'}} d="M13.518,0V27.037S.064,26.458,0,13.518,13.518,0,13.518,0Z" transform="translate(0.233 0)"/></g></svg>
  )
}

function Not() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27.5" viewBox="0 0 27 27.5"><g transform="translate(-0.25)"><g transform="translate(0 0.59)"><circle style={{fill:'#d3dde5'}} cx="13.5" cy="13.5" r="13.5" transform="translate(0.25 -0.09)"/></g><text style={{fontSize: '17px', fontFamily: 'Muli-SemiBold, Muli', fontWeight: 600}} transform="translate(10.617 20)"><tspan x="0" y="0">!</tspan></text></g></svg>
  )
}

const Box = styled.table`
  
  height: 180px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;

  tr {
    padding: 0;
    &:first-child {
      background-color: #f3f3f3;
      
    }
    
    td {
      padding: 0 36px;
    }
    border: 1px solid #DDDDDD;

    &:not(:first-child) {
      > td:not(:first-child) {
        text-align: center;

      } 
    }
  }

`



const Title = styled.div`
  display: flex;
  height: 44px;
  // line-height: 44px;
  align-items: center;
  > div:first-child { 
    padding-top: 8px;
    padding-right: 6px;
  }

  > div:nth-child(2) {
    white-space: nowrap;
  }
`

const Tag = styled.div`
  margin: 10px 0 8px 0;
  padding: 3px 10px 3px 10px;
  height: 25px;
  background: #D3DDE5 0% 0% no-repeat padding-box;
  border-radius: 13px;
  min-width: auto;
  opacity: 1;
`