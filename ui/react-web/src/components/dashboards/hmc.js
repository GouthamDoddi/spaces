import React from 'react'
import styled from 'styled-components'

import Status from './status'
import StatusWithGraph from './status_with_graph'
import HeaderBar from './header_bar'
import QuickActions from './quick_actions'
import List from './list'
import Table, { Header, Row } from './table'
import LeftMenu from './left-menu'
import SquareBanner from './square-banner'
import Banner from './hmc-banner'

const columns1 = '2fr .5fr .5fr .5fr .2fr .4fr'
const columns2 = '1.5fr .5fr'
export default function(props) {
  return(
    <Layout>
      <Left>
        <LeftMenu except={['policies', 'entities', ]}></LeftMenu>
      </Left>
      
      <Content>
        {/* <Top></Top> */}
        <HeaderBar className='hb' />
        <Banner className='bnr'>

        </Banner>
        <SquareBanner className='sb'/>
        <Status type='Unresolved' item='M1' count='07' itemColor='#85263a' className='st1'/>
        <Status type='Unresolved' item='M2' itemColor='#257c76' className='st2' count='13' />
        <Status type='Unresolved' item='M3' itemColor='#1a6b8f' count='67' className='st3' />

        <QuickActions className='qa' />
        <Status className='st4' type='Ongoing' item='Testing' itemColor='#eb622b' count='14'/>

        <Table className='tbl-mt' title='My Tasks'>
          <Header columns={columns2} >
            <div>Name</div>
            <div>Due</div>
          </Header>
          <Row columns={columns2}>
            <div> Exception to navigation</div>
            <div> 14/Oct </div>
          </Row>
          <Row columns={columns2}>
            <div>Request to excempt</div>
            <div> 16/Oct </div>
            
          </Row>
          <Row columns={columns2}>
            <div>Request to review</div>
            <div> 26/Oct </div>
          </Row>
        </Table>

        <Table className='tbl' title='Compliance Projects'>
          <Header columns={columns1} >
            <div>Name</div>
            <div>Category</div>
            <div>Type</div>
            <div>Status</div>
            <div>%</div>
            <div>Score</div>
          </Header>
          <Row columns={columns1}>
            <div> Project1</div>
            <div>Category</div>
            <div>Type</div>
            <div>Active</div>
            <div>20</div>
            <div>43/100</div>
          </Row>
          <Row columns={columns1}>
            <div> Project1</div>
            <div>Category</div>
            <div>Type</div>
            <div>Active</div>
            <div>20</div>
            <div>43/100</div>
          </Row>
        </Table>

        <Table className='tbl-oc' title='Open Cases'>
          <Header columns={columns2} >
            <div>Name</div>
            <div>Status</div>
          </Header>
          <Row columns={columns2}>
            <div> Exception to navigation</div>
            <div> Open </div>
          </Row>
          <Row columns={columns2}>
            <div>Request to excempt accessibility</div>
            <div> Open </div>
            
          </Row>
          <Row columns={columns2}>
            <div>Request to review E-service</div>
            <div> Open </div>
          </Row>
        </Table>
        <List className='ra' title='Recent Activities' items={[
          'You have created a new Project', 'You have uploaded a new evidance', 'New evidence has been uploaded', 
          'MOTC approved Ambulance Service Test', 'New Exception has been requested', 'New Exception has been requested']}> </List>
        <Img className='ts' height='133px' src='/img/icons-lm/sales.svg' />
        <Img className='te' height='133px' src='/img/icons-lm/earnings.svg' />
        <Img className='stats' height='296px' src='/img/icons-lm/statistics.svg' />
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

// const Banner = styled.div`
//   background-image: url(/img/hmc-banner.jpg);
//   background-size: 100% 100%;
//   grid-column: 1 / -4;
//   height: 130px;
// `

const Img = styled.div`
  width: 100%;
  height: ${p => p.height};
  background-image: ${p => `url(${p.src})`};
  background-size: 100%;
  background-repeat: no-repeat;
  border-bottom: 1px solid #dddddd;
`
const Content = styled.div`
  margin: 0 30px;
  margin-bottom: 30px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto;

  .bnr { grid-column: 1 / -4};
  .st1 { grid-column: 1 / 4};
  .st2 { grid-column: 4 / 7};
  .st3 { grid-column: 7 / 10};
  .qa { grid-column: 1 / 7};
  .st4 { grid-column: 7 / 10};
  .tbl { 
    grid-column: 1 / 7;
    grid-row: 5 / 7;
  };
  .tbl-oc { 
    grid-column: 7 / 10;
    grid-row: 5 / 7;
  };
  .sb { 
    grid-column: 10 / 13;
    grid-row: 2 / 4;
  };
  .tbl-mt {
    grid-column: 10 / 13;
    grid-row: 4 / 6;
  }
  .ra { 
    grid-column: 10 / 13;
    grid-row: 6 / 9;
  }

  .hb {
    grid-column: 1 / -1;
  }

  .ts { 
    grid-column: 1 / 4;
    grid-row: 7 / 8;
  }

  .te { 
    grid-column: 1 / 4;
    grid-row: 8 / 9;
  }

  .stats { 
    grid-column: 4 / 10;
    grid-row: 7 / 9;
  }
`

const Layout = styled.div`
  padding-left: 270px;
`

const Top = styled.div`
  grid-column: 1 / -1;
  height: 80px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`