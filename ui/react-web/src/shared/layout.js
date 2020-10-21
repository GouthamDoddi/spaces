import React from 'react'
import styled from 'styled-components'
import HeaderBar from './header_bar'
import LeftMenu from './left-menu'
import Banner from './hmc-banner'



const columns1 = '80px 3.5fr 1.5fr repeat(9, 1fr);'
export default function({children, banner={type: 'Entities', mobile: 10, websites: 10, eservices: 32}, ...props}) {

  return(
    <Layout>
      <Left>
        <LeftMenu selected='projects' except={['my-tasks']}></LeftMenu>
      </Left>
      
      <Content>
        <HeaderBar className='hb' />
        <Banner size='32px' {...banner} hideScore className='bnr' />
        {children}
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