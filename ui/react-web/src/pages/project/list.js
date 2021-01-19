import React, { useEffect, useState, useRef } from 'react'

import styled from 'styled-components'
import Layout from '../../shared/layout'
import Table, { Header, Row } from '../../shared/table'
import {Input} from '../../components/form'
import Project from './index'

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
  Link as RLink
} from 'react-router-dom';

import { useStore } from 'effector-react'

import { policyFamilyTypes, policyStatusTypes, policyOwnerTypes, policyStateTypes, projectCategoryTypes, entitiesData, sponsorOptions } from '../../store/master-data'

import makeStore from '../../store/make-store'
import Banner from '../../shared/hmc-banner'


import {projectPath, projectProfile} from '../routes'
import { Add } from '../../components/tables/list'
const { store, load } = makeStore('compliance/projects/list')

const columns1 = ".4fr 2.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"

const data = [{}]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
export default function(props) {
  const { project_id } = useParams()

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
    // console.log("*********** Project id *********", !!!project_id)
    if(!!!project_id) {
      // console.log("*********** Project id *********", !!!project_id)
      load()
    }
  }, [])



  const listStore = useStore(store)
  const metadata = listStore.data || []
  
  return (
    <Layout hideBanner>
      <Switch>
        <Route path={projectPath()}>
          <Project />
        </Route>
        <Route path='/projects'>
          <>
            <Banner type='List of Projects' hideItems className='bnr' hideScore />
            <Input label='Filter' type='text' name='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''} 
              placeholder='Name / Category / Owner' />
            <Table className='tbl' title='Compliance Projects' showAll={false}>
            <Header columns={columns1}>
              {
                ['#', 'Name', 'Category', 'Owner', 'Sponsor', 'Start Date', 'End Date', 
                  'Progress', 'Defects', 'Fixed'
                ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
              }
                
            </Header>
            { filter(metadata, {keys: ['name', [projectCategoryTypes, 'category_id'], [entitiesData, 'owner_id']], value: filterVal}).map((o, i) => (
              <Row key={i} columns={columns1} className='row' filter={{keys: [], val: filterVal}}>
                <Link to={projectProfile({id: o.id, expand: true})}> {i + 1} </Link>
                <Link to={projectProfile({id: o.id, expand: true})} style={{'padding-right': '20px'}}> {o.name} </Link>
                <Link to={projectProfile({id: o.id, expand: true})}> {projectCategoryTypes[o.category_id]?.label} </Link>
                <Link to={projectProfile({id: o.id, expand: true})}> {entitiesData[o.owner_id]?.label} </Link>
                <Link to={projectProfile({id: o.id, expand: true})} className='center' > {sponsorOptions[o.sponsor]?.label} </Link>
                <Link to={projectProfile({id: o.id, expand: true})} className='center'> {o.start_date} </Link>
                <Link to={projectProfile({id: o.id, expand: true})} className='center'> {o.end_date} </Link>
                <Link to={projectProfile({id: o.id, expand: true})} className='center'> {o.progress}% </Link>
                <Link to={projectProfile({id: o.id, expand: true})} className='center'> {o.defects} </Link>
                <Link to={projectProfile({id: o.id, expand: true})} className='center'> {o.fixed || 0} </Link>
              </Row>

            ))}
          </Table>
          <Add to="/projects/new/profile"/>
          </>
        </Route>

        
        
      </Switch>

    </Layout>

  )
}

const Link = styled(RLink)`
  display: block;

`