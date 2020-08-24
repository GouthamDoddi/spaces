import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import { Input, Select } from '../form'

import { get } from '../../store/api'
function Row({dir, icon, time, title='Title', desc, ...props}) {
  
  desc = desc || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  return (
    <Item>
      <Time className={dir}> {time} </Time>
      <Line></Line>
      <Box className={dir}>
        <div className='title'> {title} </div>
        <div className='desc'> {desc} </div>
      </Box>
      <Icon> <RenderIcon icon={icon} /></Icon>
    </Item>
  )
}

export default function(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    get("https://my-json-server.typicode.com/pasupunuri/demo/timeline", { success: (resp) => {
      setData(resp)
    }})
  }, [])

  return(
    <Container>
      <Tree>
        <FormulationCard>
          <div className='title'> Formulation Space </div>
          <label>Policy Family:</label>
          <span className='value'> Taxation</span>
          <label className='spacer'>Status:</label>
          <span className='value'> Active</span>
          <div className='form'>
            <Select outerClass='fc'></Select>
            <Select outerClass='fc'></Select>
          </div>
          <label>Sections:</label>
          <span className='value'> 14</span>
          <label className='spacer'>Last Action Date:</label>
          <span className='value'> 1 June 2020</span>

        </FormulationCard>

        { data.map((item, i) => (
          <Row dir={ i%2 === 0 ? 'ltr' : 'rtl'} icon={item.status} {...item}></Row>  
        ))}
        {/* <Row dir='ltr' icon='draft' time='6 June 2020, 10:00am'></Row>
        <Row dir='rtl' icon='legal' time='6 June 2020, 10:00am'></Row>
        <Row dir='ltr' icon='activate' time='6 June 2020, 10:00am'></Row>
        <Row dir='rtl' icon='deactivate' time='6 June 2020, 10:00am'></Row>
        <Row dir='ltr' icon='suspend' time='6 June 2020, 10:00am'></Row>
        <Row dir='rtl' icon='start' time='6 June 2020, 10:00am'></Row> */}
      </Tree>
      <Widgets>
        <Filters />
        <Legend />
      </Widgets>
    </Container>
  )
}

export function Filters(props) {
  return (
    <WhiteBox padding='12px'>
      <FilterBox>
        <label> Filters </label>
        <Select label='Policy/Project' outerClass='form'/>
        <Select outerClass='form' label='Actions'/>
        <Input label='Start Date' className='form' type='date'/>
        <Input label='End Date' className='form' type='date'/>
        <button>Apply Filters</button>
      </FilterBox>
    </WhiteBox>    
  )
}
export function Legend(props) {
  return(
    <WhiteBox padding='30px 34px'>
      <StatusGrid>
        <Draft />
        <label> Draft </label>
        <Legal />
        <label> Legal Mandate </label>
        <Activate />
        <label> Activate </label>
        <Deactivate />
        <label> Deactivate </label>
        <Suspend />
        <label> Suspend </label>
        <Start />
        <label> Start </label>


      </StatusGrid>
    </WhiteBox>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Widgets = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 50px;
`

const FilterBox = styled.div`
  > label {
    height: 19px;
    font-size: 15px;
    font-weight: bold;
    color: #000000;
  }
  > .form {
    margin-top: 15px;
  }
  > button {
    width: 240px;
    height: 45px;
    border-radius: 2px;
    background-color: #7333dd;
    color: #fff;
    margin: 34px 0 0 20px;
  }
`

const Time = styled.div`
  width: 167px;
  height: 23px;
  font-size: 16px;
  font-weight: 500;
  color: #c0c0c0;
  position: absolute;
  top: 98px;
  &.ltr {
    left: 390px;
    
  }
  &.rtl {
    right: 390px;
  }
`

const Item = styled.div`
  display: flex;
  height: 212px;
  width: 680px;
  flex-direction: row;
  position: relative;
`

const Line = styled.div`
  width: 6px;
  height: 212px;
  position: absolute;
  left: 335px;
  top: 0px;
  background-color: #e3e6ea;
`
const Box = styled.div`
  width: 295px;
  height: 137px;
  border-radius: 6px;
  background-color: #ffffff;
  position: absolute;
  top: 43px;
  box-shadow: 0 8px 6px -8px rgba(0,0,0,0.45);
  padding: 21px 31px;
  color: #000000;

  > .title {
    height: 19px;    
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  > .desc {
    font-size: 14px;
    font-weight: 600;
  }
  &.ltr {
    left: 0:  
  }

  &.rtl {
    right: 0;
  }
`

const Icon = styled.div`
  position: absolute;
  left: 306px;
  top: 76px; 
`

const Tree = styled.div`
  width 680px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 40px;
`

const FormulationCard = styled.div`
  width: 309px;
  height: 169px;
  border-radius: 3px;
  background-color: #fd7635;
  box-shadow: 0 8px 6px -8px rgba(0,0,0,0.45);
  padding: 20px 20px;
  > .form {
    display: flex;
    .fc {
      margin-bottom: 12px;
      .default__control {
        width: 125px;
        height: 38px;
        border-radius: 2px;
        border: solid 1px #efb37d;
        background-color: #f78047;
        color: white;
      }
      .default__placeholder {
        color: white;
      }
      &:last-child {
        margin-left: 10px;
      }
    }
  }
  > .title {
    height: 19px;
    font-size: 15px;
    font-weight: bold;
    color: #ffffff;
  }
  > label {
    height: 18px;
    font-size: 13px;
    font-weight: 500;
    color: #fbc394;
    &.spacer { margin-left: 8px; }
  }
  > .value {
    height: 18px;
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;
  }
`

const WhiteBox = styled.div`
  width: 305.5px;
  min-height: 467px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  margin-bottom: 25px;
  padding: ${p => p.padding || 0};
`

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: 64px auto;
  grid-auto-rows: 64px;
  grid-gap: 20px;

  label {
    line-height: 64px;
  }
`


function RenderIcon({icon}) {
  if(icon == 'draft'){
    return <Draft />
  } else if(icon == 'legal') {
    return <Legal />
  } else if(icon == 'deactivate') {
    return <Deactivate />
  } else if(icon == 'activate') {
    return <Activate />
  } else if(icon == 'suspend') {
    return <Suspend />
  } else if(icon == 'start') {
    return <Start />
  }

  return (null)
}

function Draft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <g fill="none" fill-rule="evenodd">
          <circle cx="32" cy="32" r="32" fill="#FEC900" opacity=".3"/>
          <circle cx="32" cy="32" r="29" fill="#FEC900" opacity=".5"/>
          <circle cx="32" cy="32" r="25" fill="#FEC900"/>
          <g>
              <path d="M0 0L24 0 24 24 0 24z" transform="translate(20 20)"/>
              <path fill="#000" fill-rule="nonzero" d="M20 2c.552 0 1 .448 1 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM13 12v2H8v-2h5zm3-4v2H8V8h8z" transform="translate(20 20)"/>
          </g>
      </g>
    </svg>
  )
}

function Legal() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <defs>
            <path id="pay9yjp94a" d="M0 30L26 30 26 0 0 0z"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <circle cx="32" cy="32" r="32" fill="#0091FF" opacity=".3"/>
            <circle cx="32" cy="32" r="29" fill="#0091FF" opacity=".5"/>
            <circle cx="32" cy="32" r="25" fill="#0091FF"/>
            <g transform="translate(18 17)">
                <path fill="#000" stroke="#000" stroke-width=".5" d="M25 26v1.5c0 .85-.65 1.5-1.5 1.5h-15c.35-.45.5-.95.5-1.5V26h16zM5 27.5v-25c0-.55-.2-1.05-.5-1.5H21c.85 0 1.5.65 1.5 1.5V25H8v2.5c0 .85-.65 1.5-1.5 1.5S5 28.35 5 27.5h0zm-1-22H1v-3C1 1.65 1.65 1 2.5 1S4 1.65 4 2.5v3zm19.5-3C23.5 1.1 22.4 0 21 0H2.5C1.1 0 0 1.1 0 2.5v4h4v21C4 28.9 5.1 30 6.5 30h17c1.4 0 2.5-1.1 2.5-2.5V25h-2.5V2.5z"/>
                <mask id="gzise8kgvb" fill="#fff">
                    <use xlinkHref="#pay9yjp94a"/>
                </mask>
                <path fill="#000" stroke="#000" stroke-width=".5" d="M11.5 20L21.5 20 21.5 19 11.5 19zM6 20L10.5 20 10.5 19 6 19zM15 23L21.5 23 21.5 22 15 22zM6 23L14 23 14 22 6 22zM11 4.85L13.5 4l2.5.85v.95c0 1.85-.9 3.55-2.45 4.6h-.05l-.05-.05C11.9 9.35 11 7.6 11 5.75v-.9zm1.9 6.35l.6.4.6-.4C15.9 10 17 7.95 17 5.8V4.15L13.5 3 10 4.15V5.8c0 2.15 1.1 4.2 2.9 5.4h0z" mask="url(#gzise8kgvb)"/>
                <path fill="#000" d="M15 6.05l-1-.1c-.1.85-.55 1.65-1.25 2.15l.55.85c.95-.7 1.6-1.75 1.7-2.9" mask="url(#gzise8kgvb)"/>
                <path fill="#000" stroke="#000" stroke-width=".5" d="M11.5 17L21.5 17 21.5 16 11.5 16zM6 17L10.5 17 10.5 16 6 16zM10 14.5L17 14.5 17 13.5 10 13.5z" mask="url(#gzise8kgvb)"/>
            </g>
        </g>
    </svg>
  )
}

function Deactivate() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <defs>
            <path id="c3hf8imwca" d="M0 32.768L31.958 32.768 31.958 0 0 0z"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <circle cx="32" cy="32" r="32" fill="#E74D6C" opacity=".3"/>
            <circle cx="32" cy="32" r="29" fill="#E74D6C" opacity=".5"/>
            <circle cx="32" cy="32" r="25" fill="#E74D6C"/>
            <g transform="translate(16 16)">
                <path fill="#000" d="M.48 18.205h2.063c.265 0 .48-.215.48-.48s-.215-.48-.48-.48H.48c-.265 0-.48.215-.48.48s.215.48.48.48"/>
                <mask id="8sxkxmeqrb" fill="#fff">
                    <use xlinkHref="#c3hf8imwca"/>
                </mask>
                <path fill="#000" d="M16.085 16.906h2.029v-6.062h-2.029v6.062zm3.953 1.896c0 .515-.42.935-.935.935h-3.305c-.516 0-.935-.42-.935-.935 0-.516.419-.936.935-.936h3.305c.515 0 .935.42.935.936zm-1.815 9.427h-2.425c-.516 0-.935-.42-.935-.935 0-.516.419-.935.935-.935h2.425c.515 0 .935.42.935.935 0 .515-.42.935-.935.935zm-3.36-3.766c0-.516.419-.935.935-.935h2.745c.515 0 .935.42.935.935 0 .516-.42.935-.935.935h-2.745c-.516 0-.936-.42-.936-.935zm0-2.83c0-.516.419-.936.935-.936h3.136c.516 0 .936.42.936.935 0 .516-.42.935-.936.935h-3.136c-.516 0-.936-.419-.936-.935zM29.97 0h-1.574c-.266 0-.48.215-.48.48s.214.48.48.48h1.574c.566 0 1.027.461 1.027 1.028v6.869c0 .566-.46 1.027-1.027 1.027H4.05c-.566 0-1.027-.461-1.027-1.027V8.22c0-.265-.215-.48-.48-.48-.266 0-.48.215-.48.48v.637c0 1.096.891 1.987 1.987 1.987h11.075v2.996h-2.39c-.675 0-1.333.193-1.902.558l-4.436 2.847H4.59c-.265 0-.48.215-.48.48s.215.48.48.48h1.949c.092 0 .182-.026.26-.076l4.554-2.923c.414-.266.892-.406 1.384-.406h2.389v2.23c-.714.272-1.223.963-1.223 1.772 0 .092.007.182.02.271l-.113.194c-.65 1.116-1.856 1.809-3.147 1.809H9.587c-.266 0-.48.215-.48.48s.214.48.48.48h1.075c1.494 0 2.896-.734 3.753-1.94.04.042.08.083.124.121-.39.347-.637.853-.637 1.415 0 .563.246 1.068.637 1.416-.39.347-.637.853-.637 1.415s.246 1.068.637 1.415c-.39.348-.637.853-.637 1.416 0 .16.02.317.058.467H9.42c-.458 0-.913-.117-1.315-.337l-2.643-1.45c-.078-.042-.167-.063-.257-.058l-4.623.253c-.265.014-.468.24-.453.506.014.265.242.468.505.453l4.487-.245 2.522 1.383c.544.298 1.158.455 1.778.455h5.131c.168.146.361.264.573.344v3.223c0 .265.215.48.48.48s.48-.215.48-.48v-3.099h2.029v3.099c0 .265.215.48.48.48s.48-.215.48-.48v-3.301c.619-.313 1.044-.954 1.044-1.693 0-.49-.187-.938-.494-1.275.492-.343.814-.912.814-1.556 0-.476-.177-.911-.467-1.245.517-.338.859-.923.859-1.586 0-.523-.213-.997-.557-1.34.44-.348.725-.886.725-1.49 0-1.046-.85-1.896-1.895-1.896h-.029v-6.062H29.97c1.096 0 1.988-.891 1.988-1.987v-6.87C31.958.893 31.066 0 29.97 0z" mask="url(#8sxkxmeqrb)"/>
                <path fill="#000" d="M2.543 6.654c.265 0 .48-.215.48-.48V1.988c0-.567.46-1.028 1.027-1.028h22.3c.265 0 .48-.215.48-.48S26.614 0 26.35 0H4.05C2.954 0 2.062.892 2.062 1.988v4.186c0 .265.215.48.48.48" mask="url(#8sxkxmeqrb)"/>
                <text fill="#000" font-family="Helvetica" font-size="4" mask="url(#8sxkxmeqrb)">
                    <tspan x="5" y="7">DEACTIVATE</tspan>
                </text>
            </g>
        </g>
    </svg>

  )
}
function Activate() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg"  width="64" height="64" viewBox="0 0 64 64">
        <defs>
            <path id="wommm0jxfa" d="M0 32.768L31.958 32.768 31.958 0 0 0z"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <circle cx="32" cy="32" r="32" fill="#42D7B6" opacity=".3"/>
            <circle cx="32" cy="32" r="29" fill="#42D7B6" opacity=".5"/>
            <circle cx="32" cy="32" r="25" fill="#42D7B6"/>
            <g transform="translate(16 16)">
                <path fill="#000" d="M.48 18.205h2.063c.265 0 .48-.215.48-.48s-.215-.48-.48-.48H.48c-.265 0-.48.215-.48.48s.215.48.48.48"/>
                <mask id="ma74xkgmab" fill="#fff">
                    <use xlinkHref="#wommm0jxfa"/>
                </mask>
                <path fill="#000" d="M16.085 16.906h2.029v-6.062h-2.029v6.062zm3.953 1.896c0 .515-.42.935-.935.935h-3.305c-.516 0-.935-.42-.935-.935 0-.516.419-.936.935-.936h3.305c.515 0 .935.42.935.936zm-1.815 9.427h-2.425c-.516 0-.935-.42-.935-.935 0-.516.419-.935.935-.935h2.425c.515 0 .935.42.935.935 0 .515-.42.935-.935.935zm-3.36-3.766c0-.516.419-.935.935-.935h2.745c.515 0 .935.42.935.935 0 .516-.42.935-.935.935h-2.745c-.516 0-.936-.42-.936-.935zm0-2.83c0-.516.419-.936.935-.936h3.136c.516 0 .936.42.936.935 0 .516-.42.935-.936.935h-3.136c-.516 0-.936-.419-.936-.935zM29.97 0h-1.574c-.266 0-.48.215-.48.48s.214.48.48.48h1.574c.566 0 1.027.461 1.027 1.028v6.869c0 .566-.46 1.027-1.027 1.027H4.05c-.566 0-1.027-.461-1.027-1.027V8.22c0-.265-.215-.48-.48-.48-.266 0-.48.215-.48.48v.637c0 1.096.891 1.987 1.987 1.987h11.075v2.996h-2.39c-.675 0-1.333.193-1.902.558l-4.436 2.847H4.59c-.265 0-.48.215-.48.48s.215.48.48.48h1.949c.092 0 .182-.026.26-.076l4.554-2.923c.414-.266.892-.406 1.384-.406h2.389v2.23c-.714.272-1.223.963-1.223 1.772 0 .092.007.182.02.271l-.113.194c-.65 1.116-1.856 1.809-3.147 1.809H9.587c-.266 0-.48.215-.48.48s.214.48.48.48h1.075c1.494 0 2.896-.734 3.753-1.94.04.042.08.083.124.121-.39.347-.637.853-.637 1.415 0 .563.246 1.068.637 1.416-.39.347-.637.853-.637 1.415s.246 1.068.637 1.415c-.39.348-.637.853-.637 1.416 0 .16.02.317.058.467H9.42c-.458 0-.913-.117-1.315-.337l-2.643-1.45c-.078-.042-.167-.063-.257-.058l-4.623.253c-.265.014-.468.24-.453.506.014.265.242.468.505.453l4.487-.245 2.522 1.383c.544.298 1.158.455 1.778.455h5.131c.168.146.361.264.573.344v3.223c0 .265.215.48.48.48s.48-.215.48-.48v-3.099h2.029v3.099c0 .265.215.48.48.48s.48-.215.48-.48v-3.301c.619-.313 1.044-.954 1.044-1.693 0-.49-.187-.938-.494-1.275.492-.343.814-.912.814-1.556 0-.476-.177-.911-.467-1.245.517-.338.859-.923.859-1.586 0-.523-.213-.997-.557-1.34.44-.348.725-.886.725-1.49 0-1.046-.85-1.896-1.895-1.896h-.029v-6.062H29.97c1.096 0 1.988-.891 1.988-1.987v-6.87C31.958.893 31.066 0 29.97 0z" mask="url(#ma74xkgmab)"/>
                <path fill="#000" d="M2.543 6.654c.265 0 .48-.215.48-.48V1.988c0-.567.46-1.028 1.027-1.028h22.3c.265 0 .48-.215.48-.48S26.614 0 26.35 0H4.05C2.954 0 2.062.892 2.062 1.988v4.186c0 .265.215.48.48.48" mask="url(#ma74xkgmab)"/>
                <text fill="#000" font-family="Helvetica" font-size="5" mask="url(#ma74xkgmab)">
                    <tspan x="5" y="7">ACTIVATE</tspan>
                </text>
            </g>
        </g>
    </svg>
  )
}

function Suspend() {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <defs>
            <path id="7l3gbhi1ha" d="M0 0L17.957 0 17.957 17.957 0 17.957z"/>
        </defs>
        <g fill="none" fill-rule="evenodd">
            <circle cx="32" cy="32" r="32" fill="#FD7635" opacity=".3"/>
            <circle cx="32" cy="32" r="29" fill="#FD7635" opacity=".5"/>
            <circle cx="32" cy="32" r="25" fill="#FD7635"/>
            <g transform="translate(23 23)">
                <mask id="9qylydjbrb" fill="#fff">
                    <use xlinkHref="#7l3gbhi1ha"/>
                </mask>
                <path fill="#000" d="M8.978 15.885c-1.53 0-2.932-.517-4.079-1.363l9.624-9.623c.845 1.147 1.362 2.549 1.362 4.08 0 3.808-3.098 6.906-6.907 6.906m0-13.813c1.53 0 2.933.517 4.08 1.363l-9.624 9.622c-.845-1.146-1.362-2.548-1.362-4.079 0-3.808 3.098-6.906 6.906-6.906m0-2.072C4.028 0 0 4.028 0 8.978c0 4.951 4.028 8.979 8.978 8.979 4.951 0 8.979-4.028 8.979-8.979C17.957 4.028 13.929 0 8.978 0" mask="url(#9qylydjbrb)"/>
            </g>
        </g>
    </svg>
  )
}

function Start() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
        <g fill="none" fill-rule="evenodd">
            <circle cx="32" cy="32" r="32" fill="#7333DD" opacity=".3"/>
            <circle cx="32" cy="32" r="29" fill="#7333DD" opacity=".5"/>
            <circle cx="32" cy="32" r="25" fill="#7333DD"/>
            <g>
                <path d="M0 0L24 0 24 24 0 24z" transform="translate(20 20)"/>
                <path fill="#000" fill-rule="nonzero" d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832c.165.156.204.404.095.603l-2.495 4.575c-.075.139-.212.233-.368.256-.156.022-.314-.03-.425-.142l-2.234-2.234c-.187-.188-.442-.293-.707-.293H9.414c-.265 0-.52.105-.707.293l-2.234 2.234c-.111.112-.269.164-.425.142-.156-.023-.293-.117-.368-.256l-2.495-4.575c-.109-.2-.07-.447.095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817C7.855 18.316 8.618 18 9.414 18h5.172c.796 0 1.559.316 2.121.879l.817.817.982-1.8-1.1-1.04c-.494-.467-.717-1.152-.593-1.82.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037.124.668-.099 1.353-.593 1.82l-1.1 1.039.982 1.8zM12 13c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" transform="translate(20 20)"/>
            </g>
        </g>
    </svg>

  )
}