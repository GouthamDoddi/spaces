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
export default function(props) {
  return(
    <Layout>
      <Left>
        <LeftMenu except={['my-tasks']}></LeftMenu>
      </Left>
      
      <Content>
        {/* <Top></Top> */}
        <HeaderBar className='hb' />
        <Banner type='Participated Compliance Projects' size='32px' hideScore className='bnr' />
        <Table className='sb' title='Less Compliant Entities'>
          <Header columns={columns3} >
            <div>Parameter</div>
            <div>Domain</div>
            <div>#</div>
          </Header>
          <Row columns={columns3}>
            <div> Side Navigation</div>
            <div> Layout </div>
            <div> 137 </div>
          </Row>
          <Row columns={columns3}>
            <div>Logo Background</div>
            <div> User Interface </div>
            <div> 53 </div>
          </Row>
          <Row columns={columns3}>
            <div>Select to Read </div>
            <div> Accessibility </div>
            <div> 11 </div>
          </Row>
        </Table>
        <Status className='st1' count='36'/>
        <Status type='Published' item='Policies' itemColor='#85263a' className='st2' count='14'/>
        <Status type='Under Development' item='Policies'  className='st3' count='03'/>

        <QuickActions className='qa' />
        <Status className='st4' type='Ongoing' item='Testing' count='52' />
        <Status className='st5' type='Requested' item='Exceptions' count='41' />

        <Table className='tbl' title='Top Compliant Entities'>
          <Header columns={columns1} >
            <div>Name</div>
            <div>E-Services</div>
            <div>Websites</div>
            <div>Mobile</div>
            <div>Cases</div>
            <div>Score</div>
          </Header>
          <Row columns={columns1}>
            <div> Ministry of Health</div>
            <div>41</div>
            <div>2</div>
            <div>1</div>
            <div>2554</div>
            <div>94/100</div>
          </Row>
          <Row columns={columns1}>
            <div> Hamad Medical Corporation</div>
            <div>27</div>
            <div>4</div>
            <div>3</div>
            <div>1886</div>
            <div>93/100</div>
          </Row>
          <Row columns={columns1}>
            <div> Ministry of Commerce & Industry</div>
            <div>62</div>
            <div>2</div>
            <div>2</div>
            <div>3321</div>
            <div>91/100</div>
          </Row>
 
        </Table>

        <Table className='tbl-lce' title='Less Compliant Entities'>
          <Header columns={columns1} >
            <div>Name</div>
            <div>E-Services</div>
            <div>Websites</div>
            <div>Mobile</div>
            <div>Cases</div>
            <div>Score</div>
          </Header>
          <Row columns={columns1}>
            <div> Ministry of Justice</div>
            <div>41</div>
            <div>2</div>
            <div>1</div>
            <div>2554</div>
            <div>94/100</div>
          </Row>
          <Row columns={columns1}>
            <div> Qatar University</div>
            <div>27</div>
            <div>4</div>
            <div>3</div>
            <div>1886</div>
            <div>93/100</div>
          </Row>
          <Row columns={columns1}>
            <div> Ministry of Foreign Affairs</div>
            <div>62</div>
            <div>2</div>
            <div>2</div>
            <div>3321</div>
            <div>91/100</div>
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
        
        <Img className='ts' height='131px' src='/img/icons-lm/sales.svg' />
        <Img className='te' height='131px' src='/img/icons-lm/earnings.svg' />
        <Img className='er' height='131px' src='/img/icons-lm/er.svg' />
        <Img className='pr' height='131px' src='/img/icons-lm/pr.svg' />
        <Img className='stats-tdre' height='292px' src='/img/icons-lm/statistics-tdre.svg' />
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
    grid-column: 7 / -1;
    grid-row: 5 / 7;
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