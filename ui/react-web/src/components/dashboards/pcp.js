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

const columns1 = '1.5fr .5fr .5fr .5fr .4fr .4fr'
const columns2 = '1.5fr .5fr'
const columns3 = '1fr .7fr .3fr'
const columns4 = '2fr 2fr 1fr'
export default function(props) {
  return(
    <Layout>
      <Left>
        <LeftMenu except={['my-tasks', 'entities', 'projects',]}></LeftMenu>
      </Left>
      
      <Content>
        {/* <Top></Top> */}
        <HeaderBar className='hb' />
        <Banner type='Policies Overview' size='32px' hideScore className='bnr' />
        <Table className='sb' title='Policies Progress'>
          <Header columns={columns3} >
            <div>Policy</div>
            <div>Domain</div>
            <div>%</div>
          </Header>
          <Row columns={columns3}>
            <div> Websites</div>
            <div> ICT </div>
            <div> 84 </div>
          </Row>
          <Row columns={columns3}>
            <div>Cloud 3.0</div>
            <div> ICT </div>
            <div> 11 </div>
          </Row>
          <Row columns={columns3}>
            <div> E-Services </div>
            <div> ICT </div>
            <div> 75 </div>
          </Row>
        </Table>
        <Status type='Number of' className='st1' item='Petitions' count='146'/>
        <Status type='Requested' item='Exceptions' itemColor='#EB622B' className='st2' count='41'/>
        <Status type='Requested' item='Support'  itemColor='#1A6B8F' className='st3' count='32'/>

        <QuickActions className='qa' />

        <Table className='tbl' title='Top Compliant Parameters'>
          <Header columns={columns4} >
            <div>Name</div>
            <div>Policy</div>
            <div className='center' >Objections</div>

          </Header>
          <Row columns={columns4}>
            <div> Capitalization</div>
            <div>Government Websites</div>
            <div className='center'>5</div>

          </Row>
          <Row columns={columns4}>
            <div> Acronyms and abbreviations</div>
            <div>Government Websites</div>
            <div className='center'>14</div>
          </Row>
          <Row columns={columns4}>
            <div> Bullet points</div>
            <div>Government Websites</div>
            <div className='center'>22</div>
          </Row>
 
        </Table>

        <Table className='tbl-lce' title='Less Compliant Parameters'>
          <Header columns={columns4} >
            <div>Name</div>
            <div>Policy</div>
            <div className='center' >Objections</div>

          </Header>
          <Row columns={columns4}>
            <div> Placement of Menu</div>
            <div>Government Websites</div>
            <div className='center'>322</div>

          </Row>
          <Row columns={columns4}>
            <div> Language options</div>
            <div>Government Websites</div>
            <div className='center'>14</div>
          </Row>
          <Row columns={columns4}>
            <div> Accessibility Buttons</div>
            <div>Government Websites</div>
            <div className='center'>22</div>
          </Row>
          <Row columns={columns4}>
            <div> Feedback</div>
            <div>Government Mobile Apps</div>
            <div className='center'>22</div>
          </Row>
          <Row columns={columns4}>
            <div> Error handling and Status</div>
            <div>Government E-Services</div>
            <div className='center'>22</div>
          </Row>
          <Row columns={columns4}>
            <div> Account to Account payment </div>
            <div>Government E-Services</div>
            <div className='center'>22</div>
          </Row>                              
 
        </Table>

        <Table className='tbl-oc' title='Open Cases'>
          <Header columns={columns2} >
            <div>Case</div>
            <div className='center'>Owner</div>
          </Header>
          <Row columns={columns2}>
            <div> Exception to navigation</div>
            <div className='center'> MME </div>
          </Row>
          <Row columns={columns2}>
            <div>Request to excempt NAS</div>
            <div className='center'> MOCI </div>
            
          </Row>
          <Row columns={columns2}>
            <div>Request to Excempt Accessibility</div>
            <div className='center'> HMC </div>
          </Row>
        </Table>
        
        <Img className='ts' height='131px' src='/img/icons-lm/gwf.svg' />
        <Img className='te' height='131px' src='/img/icons-lm/gcp.svg' />
        <Img className='er' height='131px' src='/img/icons-lm/gmaf.svg' />
        <Img className='pr' height='131px' src='/img/icons-lm/nia.svg' />
        <Img className='stats-tdre' height='292px' src='/img/icons-lm/statistics-ps.svg' />
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
  .st5 { grid-column: 10 / 13 };
  .tbl { 
    grid-column: 1 / 7;
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
  .tbl-lce { 
    height: 450px;
    grid-column: 7 / -1;
    grid-row: 4 / 8;
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

  .er { 
    grid-column: 4 / 7;
    grid-row: 7 / 8;
  }

  .pr { 
    grid-column: 4 / 7;
    grid-row: 8 / 9;
  }

  .stats-tdre { 
    grid-column: 7 / 10;
    grid-row: 7 / 9;
  }
  .tbl-oc { 
    grid-column: 10 / -1;
    grid-row: 7 / 9;
  };
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