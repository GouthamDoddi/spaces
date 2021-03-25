import React from 'react'

import styled from 'styled-components'

export default function(props) {
  return (
    <Box>
      <header>
        Compliance Issues
      </header>
      <InnerBox>
        <Filter>   
          <Legend><Circle color='#EB622B' /> Non Compliant</Legend>
          <Legend><Circle color='#005CC8'/> Partially Compliant</Legend>
        </Filter>
        <Cards>
          <Card color='#EB622B'>
            <div className='bc'> ADLSA <span> > </span> </div>
            <div className='title'>Two-factor authentication to make private, E-mail after registration so that I can confirm ….</div>
            <div className='footer'>
              <div className='tag'> Loading</div>
              <div className='date'> 10/12/2021</div>
            </div>
          </Card>
          <Card color='#EB622B'>
            <div className='bc'> ADLSA Portal<span> > </span> </div>
            <div className='title'>Two-factor authentication to make private, E-mail after registration so that I can confirm ….</div>
            <div className='footer'>
              <div className='tag'> Error</div>
              <div className='date'> 10/12/2021</div>
            </div>
          </Card>
          <Card color='#005CC8'>
            <div className='bc'> ADLSA <span> > </span> </div>
            <div className='title'>Two-factor authentication to make private, E-mail after registration so that I can confirm ….</div>
            <div className='footer'>
              <div className='tag'> Test</div>
              <div className='date'> 10/12/2021</div>
            </div>
          </Card>
          <Card color='#005CC8'>
            <div className='bc'> ADLSA <span> > </span> </div>
            <div className='title'>Two-factor authentication to make private, E-mail after registration so that I can confirm ….</div>
            <div className='footer'>
              <div className='tag'> Test</div>
              <div className='date'> 10/12/2021</div>
            </div>
          </Card>
          <Card color='#005CC8'>
            <div className='bc'> ADLSA Mobile <span> > </span> </div>
            <div className='title'>Two-factor authentication to make private, E-mail after registration so that I can confirm ….</div>
            <div className='footer'>
              <div className='tag'> Test</div>
              <div className='date'> 10/12/2021</div>
            </div>
          </Card>
          <Card color='#EB622B'>
            <div className='bc'> Text <span> > </span> </div>
            <div className='title'>Two-factor authentication to make private, E-mail after registration so that I can confirm ….</div>
            <div className='footer'>
              <div className='tag'> Test</div>
              <div className='date'> 10/12/2021</div>
            </div>
          </Card>

        </Cards>
      </InnerBox>
    </Box>
  )
}


const Box = styled.div`
  max-width: 758px;
  height: 990px;
  
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #BBBBBB;
  border-top-right: none;
  opacity: 1;


  > header {
    background: #EEEEEE 0% 0% no-repeat padding-box;
    height: 74px;
    line-height: 74px;
    border: 1px solid #BBBBBB;
    padding-left: 25px;
  }
`

const InnerBox = styled.div`
  padding: 20px 22px 25px 20px;

`

const Filter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`

const Legend = styled.div`
  display: flex;
  font: normal normal normal 12px/15px Muli;
  color: #000000;
  margin-right: 30px;
`
const Circle = styled.div`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  background: ${p => p.color} 0% 0% no-repeat padding-box;
  border-radius: 11px;

`

const Card = styled.div`
  height: 104px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  border-left: 1px solid ${p => p.color};
  padding: 15px;
  margin-bottom: 20px;

  > .bc {
    font: normal normal normal 12px/18px Muli;
    color: #EB622B;
    text-transform: uppercase;
    opacity: 1;
     > span {
       color: #00000029;
     }
     margin-bottom: 9px;
  }
  > .title {
    font: normal normal 600 15px/27px Muli;
    color: #131313;
    height: 22px;
  }
  > .footer {
    display: flex;
    margin-top: 6px;
    justify-content: space-between;
    > .tag {
      font: normal normal normal 10px/20px Muli;
      padding: 5px;
      color: #1A6B8F;
      background: #F5F5F5 0% 0% no-repeat padding-box;
      border-radius: 11px;
    }
    > .date {
      font: normal normal normal 12px/18px Muli;
      color: #999999;
      margin-top: 5px;
    }
  }
`

const Cards = styled.div`

`