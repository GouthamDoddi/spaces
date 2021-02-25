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

const data = [
  { name: 'Government Mobile Applications Framework [AR] v1.1.4.pdf', url: '/resources/file1.pdf' },
  { name: 'Government Mobile Applications Framework [EN] v1.1.4.pdf', url: '/resources/file2.pdf' },
  { name: 'Government Websites Framework [AR] v1.1.4.pdf', url: '/resources/file3.pdf' },
  { name: 'Government Websites Framework [EN] v1.1.4.pdf', url: '/resources/file4.pdf' },
  { name: 'Government eServices Framework [AR] v1.1.4.pdf', url: '/resources/file5.pdf' },
  
]
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
        
        <Data>
          {
            data.map((o, i) => <a key={i} href={o.url} target='blank'><PdfIcon /> <span>{o.name}</span> </a>)
          }
        </Data>

      </Content>
    </Layout>
  )
}


const PdfIcon = function() {
  return(
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path></svg>
  )
}

const Left = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 270px;
`

const Data = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  grid-column: 1 / -1;
  height: 500px;
  padding: 20px;
  a {
    width: 60px;
    margin-right: 20px;
    color: #e40017;
    text-decoration: none;
    span {
      color: #000;
      display: flex;
      justify-content: center;
      font-weight: bold;
    }
  }
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


const Wrapper = styled.div`
  display: flex;
  width: 100%;
  grid-column: 1 / -1;
  flex-direction: column;
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