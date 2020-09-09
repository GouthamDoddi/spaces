import React from 'react'
import styled from 'styled-components'
import HeaderBar from './header_bar'
import Table, { Header, Row } from './table'
import LeftMenu from './left-menu'
import Banner from './hmc-banner'

const columns1 = '80px 3.5fr 1.5fr repeat(9, 1fr);'
export default function(props) {
  return(
    <Layout>
      <Left>
        <LeftMenu selected='entities' except={['my-tasks']}></LeftMenu>
      </Left>
      
      <Content>
        <HeaderBar className='hb' />
        <Banner type='Entities' size='32px' mobile='10' websites='10' eservices='32' hideScore className='bnr' />
        <Table className='tbl' title='Entities' showAll={false}>
          <Header columns={columns1}>
            {
              ['#', 'Name', 'Short Name', 
                'Type', 'Websites', 'Mobile', 
                'E-Services', 'Tested %', 'Defects', 'Fixed', 'Score', 'Rank'
              ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
            }
              
          </Header>
          { data.map((o, i) => (
            <Row key={i} columns={columns1} className='row'>
              <div> {i + 1} </div>
              <div style={{'padding-right': '20px'}}> {o.name} </div>
              <div> {o.short_name} </div>
              <div> {o.type} </div>
              <div className='center'> {o.websites} </div>
              <div className='center'> {o.mobile} </div>
              <div className='center'> {o.eservices} </div>
              <div className='center'> {o.tested}% </div>
              <div className='center'> {o.defects}% </div>
              <div className='center'> {o.fixed}% </div>
              <div className='center'> {o.score}% </div>
              <div className='center'> {o.rank}% </div>
            </Row>

          ))}
        </Table>
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

const data = [
  { name: 'General Authority of Customs', short_name: 'GAC', type: 'Authority', websites: 1, mobile: 1, eservices: 0, tested: 46, defects: 54, fixed: 0, score: 94, rank:  1 },
  { name: 'Hamad Medical Corporation', short_name: 'HMC', type: 'Agency', websites: 1, mobile: 0, eservices: 0, tested: 78, defects: 22, fixed: 0, score: 93, rank:  2 },
  { name: 'Kahramaa', short_name: 'Kahramaa', type: 'Agency', websites: 1, mobile: 1, eservices: 3, tested: 75, defects: 34, fixed: 0, score: 91, rank:  3 },
  { name: 'Ministry of Administrative Development, Labour and Social Affairs', short_name: 'ADLSA', type: 'Ministry', websites: 1, mobile: 2, eservices: 3, tested: 33, defects: 45, fixed: 0, score: 88, rank:  4 },
  { name: 'Ministry of Commerce and Industry', short_name: 'MOCI', type: 'MOCI', websites: 1, mobile: 1, eservices: 2, tested: 54, defects: 65, fixed: 0, score: 87, rank:  5 },
  { name: 'Ministry of Education and Higher Education', short_name: 'MoEHE', type: 'Ministry', websites: 1, mobile: 0, eservices: 5, tested: 27, defects: 44, fixed: 0, score: 87, rank:  5 },
  { name: 'Ministry of Interior', short_name: 'MOI', type: 'Ministry', websites: 1, mobile: 2, eservices: 8, tested: 25, defects: 31, fixed: 0, score: 84, rank:  6 },
  { name: 'Ministry of Justice', short_name: 'MOJ', type: 'Ministry', websites: 0, mobile: 1, eservices: 3, tested: 11, defects: 57, fixed: 0, score: 79, rank:  7 },
  { name: 'Ministry of Municipality and Environment', short_name: 'MME', type: 'Ministry', websites: 1, mobile: 1, eservices: 4, tested: 45, defects: 26, fixed: 0, score: 78, rank:  8 },
  { name: 'Ministry of Public Health', short_name: 'MOPH', type: 'Ministry', websites: 1, mobile: 0, eservices: 1, tested: 74, defects: 41, fixed: 0, score: 78, rank:  8 },
  { name: 'Ministry of Transport & Communication', short_name: 'MOTC', type: 'Ministry', websites: 0, mobile: 0, eservices: 1, tested: 62, defects: 0, fixed: 0, score: 75, rank:  9 },
  { name: 'Primary Health Care Corporation', short_name: 'PHCC', type: 'Agency', websites: 1, mobile: 0, eservices: 0, tested: 25, defects: 18, fixed: 0, score: 71, rank:  10 },
  { name: 'Supreme Judiciary Council', short_name: 'SJC', type: 'Authority', websites: 0, mobile: 1, eservices: 1, tested: 15, defects: 22, fixed: 0, score: 64, rank:  11 },
  { name: 'The General Retirement and Social Insurance Authority', short_name: 'GRSIA', type: 'Authority', websites: 0, mobile: 0, eservices: 1, tested: 44, defects: 0, fixed: 0, score: 51, rank:  12 },
]