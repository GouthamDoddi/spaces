import React, { useEffect, useState, useRef } from 'react'

import styled from 'styled-components'
import Layout from '../../../shared/layout'
import Table, { Header, Row } from '../../../shared/table'
import {Input} from '../../../components/form'
import { caseCategoryTypes, caseQueueTypes, casePriorityTypes, projectTypes } from '../../../store/master-data'


import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  Link as RLink
} from 'react-router-dom';

import { useStore } from 'effector-react'

import makeStore from '../../../store/make-store'
import Banner from '../../../shared/hmc-banner'



import { Add } from '../../../components/tables/list'
const { store, load } = makeStore(({project_id}) => `compliance/project/${project_id}/cases`)

const columns1 = ".4fr 2.5fr 1fr 1fr 1fr "

const data = [{}]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
export default function(props) {
  const { project_id } = useParams()

  const [showCase, setShowCase] = useState(null)
  const [filterVal, setFilterVal] = useState('')
  const filter = (metadata, { keys, value }) => {
    if (value?.length * 1 == 0) {
      return metadata
    }
    return metadata.filter((o) => {
      return keys.some((key) => {
        if(typeof(key) == 'object') {
          console.log(key[0], key[1])
          return key[0][o[key[1]]]?.label?.toLowerCase()?.includes(value.toLowerCase().trim())
        } else {
          return o[key]?.toLowerCase()?.includes(value.toLowerCase().trim())
        }
      })
    })
  }

  
    
  console.log(filterVal)

  useEffect(() => { 
      load({project_id})
  }, [])



  const listStore = useStore(store)
  const metadata = listStore.data || []
  
  return (

          <Wrapper>

            <Input label='Filter' type='text' name='filter' className='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''} 
              placeholder='Name / Category / Owner' />
            <Table className='tbl' title='Compliance Projects' showAll={false}>
            <Header columns={columns1}>
              {
                ['#', 'Title', 'Type', 'Category', 'Priority'].map((h, i) => <div className={i > 1 ? 'center' : ''} key={i}>{h}</div>)
              }
            </Header>
            { filter(metadata, {keys: ['title'], value: filterVal}).map((o, i) => (
              <Row key={i} columns={columns1} className='row' filter={{keys: [], val: filterVal}}>
                <Link onClick={() => setShowCase(o.id)} > {i + 1} </Link>
                <Link onClick={() => setShowCase(o.id)}  style={{'padding-right': '20px'}}> {o.title} </Link>
                <Link onClick={() => setShowCase(o.id)}  className='center' > {caseQueueTypes[o.type_id]?.label} </Link>
                <Link onClick={() => setShowCase(o.id)}  className='center'> {caseCategoryTypes[o.category_id]?.label} </Link>
                <Link onClick={() => setShowCase(o.id)}  className='center'> {casePriorityTypes[o.priority]?.label} </Link>
              </Row>

            ))}
          </Table>
          </Wrapper>


  )
}

const Link = styled(RLink)`
  display: block;

`

const Wrapper = styled.div`
  .filter {
    margin: 20px 20px;
  }
`