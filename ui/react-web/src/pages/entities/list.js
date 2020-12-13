import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import HeaderBar from '../../shared/header_bar'
import Table, { Header, Row } from '../../shared/table'
import LeftMenu from '../../shared/left-menu'
import Banner from '../../shared/hmc-banner'

import { entitiesData, entityTypes } from '../../store/master-data'
import { Link, Route, Switch, useParams } from 'react-router-dom'
import { entityEnter, entityList  } from '../../pages/routes'
import {Input} from '../../components/form'
import { Button } from '../../shared/button'

import EntityElem from '../../pages/entities'
import makeStore from '../../store/make-store'
import { useStore } from 'effector-react'

const { store, load } = makeStore('entities/list')

const columns1 = '80px 3.5fr 1.5fr repeat(7, 1fr);'
export default function(props) {
  const { entity_id } = useParams()
  
  const [bannerTitle, setBannerTitle] = useState('')

  const data = Object.values(entitiesData)
  const [filterVal, setFilterVal] = useState('')
  const filter = (metadata, { key, value }) => (
    metadata.filter((o) => o[key]?.toLowerCase()?.includes(value.toLowerCase().trim()))
  )

  useEffect(() => {
    if(!entity_id) {load()}
    entity_id ? setBannerTitle(entitiesData[entity_id]?.name || 'Entities') : setBannerTitle('Entities')
  },[entity_id])

  const entityStore = useStore(store)

  const entityData = entityStore.data || []

  return(
    <Layout>
      <Left>
        <LeftMenu selected='entities' except={['my-tasks']}></LeftMenu>
      </Left>
      
      <Content>
        <HeaderBar className='hb' />
        {/* <Banner type={bannerTitle} size='32px' mobile='10' websites='10' eservices='32' hideScore className='bnr' /> */}
        <Switch>
          
          <Route path={entityEnter()}>
            <EntityElem />
          </Route>
          <Route path={entityList()} >
            <Banner type={bannerTitle} size='32px' mobile='11' websites='10' eservices='34' prepend={{Entities: 14}} hideScore className='bnr' />
            <Button top='295px' className='right' href="#/entities/new">Create Entity</Button>
            <CustomInput label='Filter' type='text' name='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''}/>
            <Table className='tbl' title='Entities' showAll={false}>
              <Header columns={columns1}>
                {
                  ['#', 'Name', 'Short Name', 
                    'Type', 'Websites', 'Mobile', 
                    'E-Services', 'Tested %', 'Defects', 'Fixed'
                  ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
                }
                  
              </Header>
              { filter(entityData, {key: 'name', value: filterVal}).map((o, i) => (
                <Row key={i} columns={columns1} className='row'>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {i + 1} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} style={{'padding-right': '20px'}}> {o.name} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {o.short_name} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {entityTypes[o.type_id]?.label} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.websites} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.mobile} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.eservices} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.tested}% </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.defects} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.fixed} </CLink>
                  {/* <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.score} </CLink> */}
                  {/* <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.rank} </CLink> */}
                </Row>

              ))}
            </Table>

          </Route>
        </Switch>
      </Content>
    </Layout>
  )
}

const Left = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 270px;
`

const Content = styled.div`
  margin: 0 30px;
  margin-bottom: 30px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;

  .hb { grid-column: 1 / -1};
  .bnr { grid-column: 1 / -1};
  .tbl { 
    grid-column: 1 / -1; 
    height: 100%;
    .row {
      &:last-child {border-bottom: none;}
    }
  };
`

const Layout = styled.div`
  padding-left: 270px;
`

const CLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
`

const CustomInput = styled(Input)`
  // margin: 0 0 10px 20px;
`