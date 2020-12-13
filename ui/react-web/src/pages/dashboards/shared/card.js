import styled from 'styled-components'
import React from 'react'

export default function({className, title, mobile, eservices, website, total, ...props}) {
  return (
    <CardOutline className={className}>
    <CardInfo>
      <Title> { title } </Title>
      <Row>
        <Icon> <Website /> </Icon>
        <Content></Content>
      </Row>
    </CardInfo>
    <YellowBox>

    </YellowBox>
  </CardOutline>
  )

}

const CardOutline = styled.div`
  display: flex;
  flex-direction: column;
  width: 312px;
  height: 274px;
`

const CardInfo = styled.div`
  height: 220px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 5px 5px 0px 0px;
  padding: 22px 32px 0 32px;
`

const YellowBox = styled.div`
  height: 54px;
  background: #FFF6DC 0% 0% no-repeat padding-box;
  border-radius: 0px 0px 5px 5px;
`

const Title = styled.div`
  height: 22px;
  color: #000000;
  text-align: left;
  font-size: 22px;
  font-family: Roboto;
  color: #000000;
  text-transform: capitalize;
  margin-bottom: 20px;
`


const Row = styled.div`
  display: flex;
  width: 218px;
  height: 24px;
`

const Icon = styled.div`
  display: flex;
  width: 28px;
  justify-content: center;
`

const Content = styled.div`
  text-align: left;
  color: #000000;
  opacity: 1;
`

const ContentTitle = styled.div`
  font: normal normal normal 12px/14px Roboto;
`

const Progress = styled.div`

`

function Information() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
      
      <g transform="translate(0 0)">
        <path fill="#fb0" d="M10.039,0A10.039,10.039,0,0,0,0,9.961,10.106,10.106,0,0,0,10.039,20a10,10,0,0,0,0-20Zm1.172,15.313a1.172,1.172,0,1,1-2.344,0V9.375a1.172,1.172,0,0,1,2.344,0ZM10.039,5.859a1.172,1.172,0,1,1,1.172-1.172A1.173,1.173,0,0,1,10.039,5.859Z" transform="translate(0 0)"/>
      </g>
    </svg>
  )
}

function Mobile() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="14.057" height="24" viewBox="0 0 14.057 24">
      
      <g transform="translate(-16.5 -2)">
        <path fill="#ff7f31" d="M29.186,26H17.871A1.371,1.371,0,0,1,16.5,24.629V3.371A1.371,1.371,0,0,1,17.871,2H29.186a1.371,1.371,0,0,1,1.371,1.371V24.629A1.371,1.371,0,0,1,29.186,26ZM17.871,2.686a.686.686,0,0,0-.686.686V24.629a.686.686,0,0,0,.686.686H29.186a.686.686,0,0,0,.686-.686V3.371a.686.686,0,0,0-.686-.686Z"/>
        <path fill="#ff7f31" d="M30.214,11.686H16.843a.343.343,0,0,1,0-.686H30.214a.343.343,0,0,1,0,.686Z" transform="translate(0 -5.914)"/>
        <path fill="#ff7f31" d="M30.214,57.686H16.843a.343.343,0,0,1,0-.686H30.214a.343.343,0,0,1,0,.686Z" transform="translate(0 -36.143)"/>
        <path fill="#ff7f31" d="M34.576,63.341a1.264,1.264,0,1,1,1.264-1.264,1.264,1.264,0,0,1-1.264,1.264Zm0-1.843a.579.579,0,1,0,.579.578A.579.579,0,0,0,34.576,61.5Z" transform="translate(-11.048 -38.648)"/>
        <path fill="#ff7f31" d="M35.086,7.436H32.343a.343.343,0,1,1,0-.686h2.743a.343.343,0,1,1,0,.686Z" transform="translate(-10.186 -3.121)"/>
      </g>
    </svg>
  )
}

function EService() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="23.414" height="24" viewBox="0 0 23.414 24">
      
      <g transform="translate(-6.251)">
        <path fill="#043555" d="M28.661,12a10.721,10.721,0,0,0-.351-2.726l1.355-1L27.036,3.723,25.493,4.4a10.625,10.625,0,0,0-4.72-2.727L20.587,0H15.329l-.186,1.672A10.625,10.625,0,0,0,10.423,4.4L8.88,3.723,6.251,8.277l1.355,1a10.769,10.769,0,0,0,0,5.453l-1.355,1L8.88,20.277l1.543-.676a10.625,10.625,0,0,0,4.72,2.727L15.329,24h5.259l.186-1.672a10.625,10.625,0,0,0,4.72-2.727l1.543.676,2.629-4.554-1.355-1A10.721,10.721,0,0,0,28.661,12Zm-8.685,9.077-.491.109-.157,1.408H16.587l-.157-1.408-.491-.109a9.242,9.242,0,0,1-4.832-2.792l-.34-.37-1.3.569L8.1,16.11l1.14-.839-.151-.479a9.348,9.348,0,0,1,0-5.583l.151-.479L8.1,7.89,9.469,5.516l1.3.569.34-.37A9.242,9.242,0,0,1,15.94,2.923l.491-.109.157-1.408h2.741l.157,1.408.491.109a9.242,9.242,0,0,1,4.832,2.792l.34.37,1.3-.569L27.818,7.89l-1.14.839.151.479a9.348,9.348,0,0,1,0,5.583l-.151.479,1.14.839-1.371,2.374-1.3-.569-.34.37A9.242,9.242,0,0,1,19.976,21.077Z"/><path class="a" d="M123.728,201.654l-1-.984-2.572,2.626,2.626,2.572.984-1-1.621-1.588Z" transform="translate(-108.562 -191.264)"/>
        <path fill="#043555" d="M314.871,201.654l1.588,1.621-1.621,1.588.984,1,2.626-2.572-2.572-2.626Z" transform="translate(-294.122 -191.264)"/>
        <path fill="#043555" d="M0,0H9.708V1.406H0Z" transform="matrix(0.206, -0.979, 0.979, 0.206, 16.275, 16.602)"/>
      </g>
    </svg>    
  )
}

function Website() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="27.199" height="24" viewBox="0 0 27.199 24">
     
      <g transform="translate(-475.4 -507)">
        <g transform="translate(475.4 507)">
          <path fill="#0064fe" d="M24.111,24H3.088A3.091,3.091,0,0,1,0,20.912V3.088A3.091,3.091,0,0,1,3.088,0H24.111A3.091,3.091,0,0,1,27.2,3.088V20.912A3.091,3.091,0,0,1,24.111,24ZM3.088.92A2.171,2.171,0,0,0,.92,3.088V20.912A2.171,2.171,0,0,0,3.088,23.08H24.111a2.171,2.171,0,0,0,2.168-2.168V3.088A2.171,2.171,0,0,0,24.111.92Zm0,0" transform="translate(0 0)"/>
          <path fill="#0064fe" d="M241.51,245.354h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -228.375)"/>
          <path fill="#0064fe" d="M241.51,295.963h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -275.659)"/>
          <path fill="#0064fe" d="M241.51,144.135h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -133.806)"/><path fill="#0064fe" d="M241.51,194.744h-7.227a.46.46,0,1,1,0-.92h7.227a.46.46,0,1,1,0,.92Zm0,0" transform="translate(-218.462 -181.09)"/>
          <path fill="#0064fe" d="M26.739,80.65H.46a.46.46,0,0,1,0-.92H26.739a.46.46,0,0,1,0,.92Zm0,0" transform="translate(0 -74.492)"/>
          <path fill="#0064fe" d="M80.56,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,80.56,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,80.56,26.138Zm0,0" transform="translate(-73.93 -23.562)"/>
          <path fill="#0064fe" d="M30.126,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,30.126,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,30.126,26.138Zm0,0" transform="translate(-26.81 -23.562)"/>
          <path fill="#0064fe" d="M131,28.081a1.431,1.431,0,1,1,1.431-1.431A1.433,1.433,0,0,1,131,28.081Zm0-1.942a.511.511,0,1,0,.511.511A.512.512,0,0,0,131,26.138Zm0,0" transform="translate(-121.054 -23.562)"/>
          <path fill="#0064fe" d="M62.8,154.11H54.46a.46.46,0,0,1-.46-.46v-9.975a.46.46,0,0,1,.46-.46H62.8a.46.46,0,0,1,.46.46v9.975A.46.46,0,0,1,62.8,154.11Zm-7.884-.92h7.424v-9.055H54.92Zm0,0" transform="translate(-50.452 -133.806)"/>
        </g>
      </g>
    </svg>    
  )
}