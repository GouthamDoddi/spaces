import React, { useEffect } from 'react'

import styled from 'styled-components'
import { useStore } from 'effector-react'

import { Link } from 'react-router-dom'

import makeStore from '../../../store/make-store'


const { store, load } = makeStore('compliance/projects/list')


export default function({data}) {
  useEffect(() => { 
    load()
  }, [])
  const listStore = useStore(store)
  const profileData = listStore.data || []
  return(
    <List>
      <Top>
        Project Profile
      </Top>
      <Table>
        <thead>
          <tr>
            {headerData.map((arr, i) => <th key={i}> {arr[0]} </th>)}            
          </tr>
        </thead>
        <tbody>
          {
            profileData.map((h,i) => (
              <tr key={i}>
                {headerData.map((arr,i) => <td key={i} className={arr[1]}>
                  <Link to={`/compliance/${h.id}/profile`}> {h[arr[1]]} </Link>
                </td>)}
              </tr>
            ))
          }
        </tbody>
      </Table>
      <Add to='/compliance/new/profile'>
        <div> Create Project </div>
      </Add>
    </List>
  )
}

const Add = styled(Link)`
  display: block;
  position: absolute;
  bottom: 42px;
  right: 33px;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #f44e76;
  &:after {
    content: '+';
    color: #fff;
    position: relative;
    top: 8px;
    left: 22px;
    font-size: 32px;
  }

  div {
    position: absolute;
    bottom: -20px;
    left: 2px;
    font-size: 8px;
    font-weight: bold;
    line-height: 1.5;
    text-align: center;
    color: #f44e76;
  }
  
`
const List = styled.div`
  // margin: 0 0px 0px 20px;
  width: 100%;
  min-width: 1027px;
  position: relative;

`

const Top = styled.div`
  margin: 0 0 23px 0;
  font-size: 14px;
  font-weight: 800;
  color: #687c9d;
`

const Container = styled.div`

`
const Table = styled.table`  
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-rows: 70px;
  height: 425px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  color: #000;
  font-size: 14px;
  thead,
  tbody,
  tr {
    display: contents;
  } 
  th,
  td {
    height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  th {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #fee5eb;
    text-align: left;
  }
  
  th:last-child {
    border: 0;
  }
  
  td {
    height: 70px;
    padding: 20px 10px;
    text-align: center;
    color: #000000;
    &.description {
      color: #98acbe;
    }
    a {
      color: #000000;
    }
    word-wrap: break-word;
    border-right: 1px dotted #e6f0f9;
  }
`

const headerData = [
  ['Project Name', 'name'],
  ['Description', 'description'],
  ['Project Stage', 'stage'],
  ['Project Status', 'status'],
  ['Start Date', 'start_date'],
  ['End Date', 'end_date'],
  ['Actions', 'action']
]

const testData = [
  {name: 'Project 1', description: 'test description, test description, test description', stage: 'Initiation', status: 'Approved', start_date: '20 Apr 2020', end_date: '20 May 2020'}
]