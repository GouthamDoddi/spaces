import React from 'react'

import styled from 'styled-components'

const cm = {
  open: '#f44e76',
  approved: '#42d7b6',
  underreview: '#0091ff'
}

function cc(st) {
  return cm[st.toLowerCase().replace(/\s/g,'')]
}

export default function(props) {
  const { title, desc, sla, beneficiary_name, status, i } = props
  return (
    <Box key={i}>
      <InnerBox>
        <Icon>
          <div className='box'>
            <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="30">
                <g fill="none" fillRule="evenodd">
                    <path className="main" d="M16.477 22.129c0 .221-.183.4-.408.4H1.9c-.224 0-.408-.179-.408-.4V3.695c0-.221.184-.402.408-.402h1.984c0 1.216.743 1.824 1.608 1.824h7.132c.844 0 1.607-.585 1.607-1.824h1.837c.225 0 .408.18.408.402V22.13zM5.379 1.582c0-.062.051-.112.114-.112h7.132c.063 0 .114.05.114.112v1.954c0 .061-.051.111-.114.111H5.493c-.063 0-.114-.05-.114-.111V1.582zm10.69.241h-1.837C14.232.583 13.464 0 12.625 0H5.493c-.814 0-1.608.555-1.608 1.823H1.901C.853 1.823 0 2.663 0 3.695V22.13C0 23.16.853 24 1.901 24H16.07c1.048 0 1.901-.84 1.901-1.871V3.695c0-1.032-.853-1.872-1.901-1.872z" mask="url(#prefix__b)"/>
                    <path className="main" d="M13.632 5.26l-1.584 1.69-.68-.725c-.741-.794-1.868.407-1.124 1.2l1.242 1.327c.312.332.815.33 1.125 0l2.145-2.29c.743-.794-.38-1.996-1.124-1.202M3.792 8h4.416c1.055 0 1.057-1 0-1H3.792c-1.055 0-1.057 1 0 1M13.632 9.26l-1.584 1.69-.68-.725c-.742-.793-1.868.406-1.124 1.2l1.242 1.326c.314.335.818.328 1.125 0l2.145-2.29c.743-.793-.38-1.995-1.124-1.2M3.792 12h4.416c1.055 0 1.057-1 0-1H3.792c-1.055 0-1.057 1 0 1M13.632 13.26l-1.584 1.69-.68-.725c-.741-.793-1.868.406-1.124 1.2l1.242 1.326c.311.332.814.332 1.125 0l2.145-2.29c.743-.793-.38-1.995-1.124-1.2M3.792 16h4.417c1.054 0 1.056-1 0-1H3.792c-1.058 0-1.054 1 0 1"/>
                    <path className="main" d="M3.735 19h5.53c.982 0 .978-1 0-1h-5.53c-.979 0-.981 1 0 1M12.252 20H2.748c-.998 0-.997 1 0 1h9.504c.998 0 .997-1 0-1"/>
                </g>
            </svg>

          </div>
        </Icon>
        <Content>
          <Header> 
            <span className='title'> {title} </span>
            <span className={`status ${status}`} style={{color: cc(status)}}> {status} </span>
          </Header>
          <Desc>
            { desc }
          </Desc>
          <Footer>
            <span> SLA: {sla}</span>
            <span> {beneficiary_name}</span>
          </Footer>

        </Content>
      </InnerBox>
    </Box>
  )
}


const Desc = styled.div`
  font-size: 10px;
  line-height: 1.1;
  color: #98acbe;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .box { 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 60px;
    border-radius: 10px;
    background-color: ${ p => p.theme.icon};
  }
  .main {
    fill: ${p => p.theme.color }
  }
`

const Content = styled.div`
  width: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 800;
  color: #7e9ab3;
`
const Box = styled.div`
  min-width: 320px;
  height: 96px;
  border-radius: 3px;
  // border: solid 1px #f44e76;
  background-color: #f4f7fa;
  padding: 10px 10px 14px 8px;
  // margin-bottom: 10px;
`

const InnerBox = styled.div`
  display: grid;
  grid-template-columns: 60px 280px;
  grid-template-rows: auto;
  grid-gap: 10px;
`