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


  return(
    <Layout>
      <Left>
        <LeftMenu selected='resources' except={['my-tasks']}></LeftMenu>
      </Left>
      
      <Content>
        <HeaderBar className='hb' />
        <Banner size='32px' type='Resources' hideItems className='bnr' hideScore />
        {/* <Banner type={bannerTitle} size='32px' mobile='10' websites='10' eservices='32' hideScore className='bnr' /> */}

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