import React, {useState} from 'react'
import styled from 'styled-components'
import HeaderBar from './header_bar'
import Table, { Header, Row } from './table'
import LeftMenu from './left-menu'
import Banner from './hmc-banner'

import { entitiesData } from '../../store/master-data'
import { Link, Route, Switch } from 'react-router-dom'
import { entityEnter, entityList  } from '../../pages/routes'
import {Input} from '../form'

import EntityElem from '../../pages/entities'

const columns1 = '80px 3.5fr 1.5fr repeat(9, 1fr);'
export default function(props) {
  const data = Object.values(entitiesData)
  const [filterVal, setFilterVal] = useState('')
  const filter = (metadata, { key, value }) => (
    metadata.filter((o) => o[key]?.toLowerCase()?.includes(value.toLowerCase().trim()))
  )
  return(
    <Layout>
      <Left>
        <LeftMenu selected='entities' except={['my-tasks']}></LeftMenu>
      </Left>
      
      <Content>
        <HeaderBar className='hb' />
        <Banner type='Entities' size='32px' mobile='10' websites='10' eservices='32' hideScore className='bnr' />
        <Switch>
          
          <Route path={entityEnter()}>
            <EntityElem />
          </Route>
          <Route path={entityList()} >
            <CustomInput label='Filter' type='text' name='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''}/>
            <Table className='tbl' title='Entities' showAll={false}>
              <Header columns={columns1}>
                {
                  ['#', 'Name', 'Short Name', 
                    'Type', 'Websites', 'Mobile', 
                    'E-Services', 'Tested %', 'Defects', 'Fixed', 'Score', 'Rank'
                  ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
                }
                  
              </Header>
              { filter(data, {key: 'name', value: filterVal}).map((o, i) => (
                <Row key={i} columns={columns1} className='row'>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {i + 1} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} style={{'padding-right': '20px'}}> {o.name} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {o.short_name} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {o.type} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {o.websites} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {o.mobile} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {o.eservices} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {o.tested}% </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {o.defects} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {o.fixed} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {o.score} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {o.rank} </CLink>
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