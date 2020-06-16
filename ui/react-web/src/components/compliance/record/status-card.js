import React from 'react'

import styled from 'styled-components'

// import Select, { components } from 'react-select';

import {Select} from '../../form'

// import { Link } from 'react-router-dom'
import Link from '../shared/link'

import { casePriorityTypes, caseCategoryTypes } from '../../../store/master-data'


function rTo(path) {
  return `/compliance/case-management/${path}`
}
export default function CaseStatusCard(props) {
  const { id, sla, priority, title, category_id, beneficiary_name, to, className } = props
  const styles = {
    control: base => ({...base, height: 35, minHeight: 35})
  }
  return(
    <Box to={to} className={className}>
      <Header>
        <div className='ticket'> {('000' + id).slice(-4)} </div>
        <Select outterClass='priority' options={Object.values(casePriorityTypes)}
          defaultValue={casePriorityTypes[priority || 1]}
        />
        <div className='sla'>
          <span className='text'> SLA: </span>
          <span className='value'>{sla || '7 days'} </span>
        </div>
        <Link to=''> Open </Link>
      </Header>
      <Content>
        <div className='title'>
          {title}
        </div>
        <div className='categories'>
          Category: {caseCategoryTypes[category_id]?.label}
        </div>
        <div className='type'>
          {beneficiary_name}
        </div>
      </Content> 
    </Box>
  )
}

const Tag = styled.div`
 margin-left: 8px;
  display: flex;
  height: 28px;
  border-radius: 5px;
  background-color: #d8d8d8;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: #7e9ab3;
  padding: 0 6px;
  margin-top: 4px;
  & + & {
    margin-left: 5px;
  }
`
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 30px 30px;
  grid-template-areas: 
   "title title categories categories"
   "type type categories categories";
  grid-row-gap: 5px;
  > div {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #7e9ab3;
    // padding-top: 5px;
  }
  > .title {
    grid-area: title;
    font-size: 15px;
    font-weight: bold;
    color: #000000;
  }
  > .categories {
    grid-area: categories;
    align-self: flex-start;
    flex-wrap: wrap;
    justify-content: flex-end;
    > .text {
    }
  }
  > .user-type {
    grid-area: type;
  }
`
const Box = styled(Link)`
  display: block;
  width: 350px;
  height: 120px;
  border-radius: 3px;
  background-color: #f4f7fa;
  padding: 7px 7px 12px 7px;
  border: 1px solid #f4f7fa;
  // &.selected {
  //   border: 1px solid ${p => p.theme.color};
  // }
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 34px;
  align-items:center;
  margin-bottom: 10px;
  .ticket {
    font-size: 15px;
    font-weight: bold;
    color: #000000;
  }
  .default__control{ width: 120px;}
  .priority {
    .default__control{ width: 120px; }
    font-size: 14px;
    .dropdown {
      padding: 8px 4px;
    }
  }
  .sla {
    font-size: 14px;
    .value {
      font-weight: 600;
      color: #d34e4a;
      margin-left: 5px;
    }
    .text {
      font-weight: 500;
      color: #7e9ab3;
    }
  }
  a {
    text-decoration: none;
     color: ${p => p.theme.color}
  }
`