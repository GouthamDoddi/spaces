import React from 'react'
import styled from 'styled-components'

import HeaderBar from '../../shared/header_bar'
import Motc from '../../pages/home/motc'

const columns1 = '1.5fr .5fr .5fr .5fr .4fr .4fr'
const columns2 = '1.5fr .5fr'
const columns3 = '1fr .7fr .3fr'
const columns4 = '2fr 2fr 1fr'
export default function() {
  return(
    <div>
      <Content>
        <HeaderBar className='hb' />
        <Motc />
      </Content>  
    </div>
  )
}

// const Left = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   width: 270px;
// `

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
  > .hb {
    margin-bottom: 20px;
  }
`

// const Layout = styled.div`
//   padding-left: 270px;
// `

const Top = styled.div`
  grid-column: 1 / -1;
  height: 80px;
  border: solid 1px #dddddd;
  background-color: #ffffff;
`