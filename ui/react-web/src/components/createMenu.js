import React from 'react'
import styled from 'styled-components'

import {
  useLocation,
  Link
} from 'react-router-dom';

import { Task, Note, Survey, Meeting, Space } from './menu-actions'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function MenuModal({ name, id }) {
  switch(name) {
    case 'task':
      return <Task id={id || 'new'} />
    case 'note':
      return <Note id={id || 'new'} />
    case 'meeting':
      return <Meeting id={id || 'new'} />
    case 'survey':
      return <Survey id={id || 'new'} />
    case 'space':
      return <Space id={id || 'new'} />
    default:
      return null
  }
}

function DefultHeader() {
  return (
    <div className='status'>
      <span className='label'> Policy Family: </span>
      <span className='value'> Taxation </span>
      <span className='dot'> &#x2B24; </span>
      <span className='label'> Status: </span>
      <span className='value'> Active </span>
    </div>
  )
}

export default function(props) {

  const { space, children, items=['task', 'survey', 'note', 'space', 'meeting'] } = props
  let query = useQuery();

  const name = query.get('menu-action')
  const id = query.get('id')

  return(
    <>
      <Menu>
        <Header>
          <div className='content'>
            <div className='title'> { space } </div>
            { children || <DefultHeader /> }
          </div>
        </Header>
        <Items>
          {
            items.map((item, i) => itemsList[item](i))
          }
        </Items>
      </Menu>

      <MenuModal name={name} id={id} />

    </>
  )
}



const itemsList = {
  task: (i) => (
    <Item to='?menu-action=task' key={i}>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0L19 0 19 19 0 19z" transform="translate(-5 -4)"/>
            <path className='main' fillRule="nonzero" d="M7.703 15.06l8.029-8.029-1.12-1.12-8.029 8.03v1.12h1.12zm.656 1.584H5v-3.36l9.053-9.052c.309-.31.81-.31 1.12 0l2.239 2.24c.309.309.309.81 0 1.119l-9.053 9.053zM5 18.227h14.25v1.583H5v-1.583z" transform="translate(-5 -4)"/>
          </g>
        </svg>
      </Icon>
      <Name>Create Task</Name>
    </Item>
  ),
  survey: (i) => (
    <Item to='?menu-action=survey' key={i}>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18">
          <path className='main' d="M15.111 17.778H.89c-.491 0-.889-.398-.889-.89v-16C0 .399.398 0 .889 0H15.11c.491 0 .889.398.889.889v16c0 .49-.398.889-.889.889zM14.222 16V1.778H1.778V16h12.444zM4.444 4.444h7.112v1.778H4.444V4.444zm0 3.556h7.112v1.778H4.444V8zm0 3.556H8.89v1.777H4.444v-1.777z"/>
        </svg>
      </Icon>
      <Name>Create Survey</Name>
    </Item>
  ),

  note: (i) => (
    <Item to='?menu-action=note' key={i}>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0L20 0 20 23 0 23z" transform="translate(-3 -3)"/>
            <path className='main' fillRule="nonzero" d="M18 15l-5 5.996L3.835 21c-.459.002-.833-.442-.835-.993V3.993C3 3.445 3.37 3 3.828 3h13.345c.456 0 .827.456.827 1.002V15zM16.333 5H4.667v14h6.666v-5c0-.507.317-.934.736-.993l.098-.007 4.166-.001V5zm-.69 9.999L13 15v3.169l2.643-3.17z" transform="translate(-3 -3)"/>
          </g>
        </svg>
      </Icon>
      <Name>Create Note</Name>
    </Item>
  ),
  space: (i) => (
    <Item to='?menu-action=space' key={i}>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="16">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0L20 0 20 20 0 20z" transform="translate(0 -2)"/>
                <path className='main' fillRule="nonzero" d="M18.333 16.672c-.003.456-.371.824-.826.828H2.493c-.456 0-.826-.37-.826-.828v-.839h15v-9.75l-6.667 6-8.333-7.5v-1.25c0-.46.373-.833.833-.833h15c.46 0 .833.373.833.833v13.34zM3.695 4.167L10 9.842l6.305-5.675H3.695zM0 12.5h6.667v1.667H0V12.5zm0-4.167h4.167V10H0V8.333z" transform="translate(0 -2)"/>
            </g>
        </svg>
      </Icon>
      <Name>Invite to space</Name>
    </Item>
  ),

  meeting: (i) => (
    <Item to='?menu-action=meeting' key={i}>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
            <g fill="none" fillRule="evenodd">
                <path d="M0 0L21 0 21 21 0 21z" transform="translate(-3)"/>
                <path className="main" fillRule="nonzero" d="M12.25 12.47v1.83c-1.607-.569-3.39-.322-4.781.663-1.392.984-2.22 2.582-2.219 4.287H3.5c0-2.166 1.001-4.21 2.713-5.536 1.711-1.326 3.94-1.786 6.037-1.244zm-1.75-1.095c-2.9 0-5.25-2.35-5.25-5.25S7.6.875 10.5.875s5.25 2.35 5.25 5.25-2.35 5.25-5.25 5.25zm0-1.75c1.934 0 3.5-1.566 3.5-3.5s-1.566-3.5-3.5-3.5S7 4.191 7 6.125s1.566 3.5 3.5 3.5zm5.25 5.25V12.25h1.75v2.625h2.625v1.75H17.5v2.625h-1.75v-2.625h-2.625v-1.75h2.625z" transform="translate(-3)"/>
            </g>
        </svg>
      </Icon>
      <Name>Call for Meeting</Name>
    </Item>
  ),

  petition: (i) => (
    <Item to='?menu-action=petition' key={i}>
      <Icon>
        <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="24">
            <g fill="none" fillRule="evenodd">
                <path className="main" d="M16.477 22.129c0 .221-.183.4-.408.4H1.9c-.224 0-.408-.179-.408-.4V3.695c0-.221.184-.402.408-.402h1.984c0 1.216.743 1.824 1.608 1.824h7.132c.844 0 1.607-.585 1.607-1.824h1.837c.225 0 .408.18.408.402V22.13zM5.379 1.582c0-.062.051-.112.114-.112h7.132c.063 0 .114.05.114.112v1.954c0 .061-.051.111-.114.111H5.493c-.063 0-.114-.05-.114-.111V1.582zm10.69.241h-1.837C14.232.583 13.464 0 12.625 0H5.493c-.814 0-1.608.555-1.608 1.823H1.901C.853 1.823 0 2.663 0 3.695V22.13C0 23.16.853 24 1.901 24H16.07c1.048 0 1.901-.84 1.901-1.871V3.695c0-1.032-.853-1.872-1.901-1.872z" mask="url(#prefix__b)"/>
                <path className="main" d="M13.632 5.26l-1.584 1.69-.68-.725c-.741-.794-1.868.407-1.124 1.2l1.242 1.327c.312.332.815.33 1.125 0l2.145-2.29c.743-.794-.38-1.996-1.124-1.202M3.792 8h4.416c1.055 0 1.057-1 0-1H3.792c-1.055 0-1.057 1 0 1M13.632 9.26l-1.584 1.69-.68-.725c-.742-.793-1.868.406-1.124 1.2l1.242 1.326c.314.335.818.328 1.125 0l2.145-2.29c.743-.793-.38-1.995-1.124-1.2M3.792 12h4.416c1.055 0 1.057-1 0-1H3.792c-1.055 0-1.057 1 0 1M13.632 13.26l-1.584 1.69-.68-.725c-.741-.793-1.868.406-1.124 1.2l1.242 1.326c.311.332.814.332 1.125 0l2.145-2.29c.743-.793-.38-1.995-1.124-1.2M3.792 16h4.417c1.054 0 1.056-1 0-1H3.792c-1.058 0-1.054 1 0 1"/>
                <g transform="translate(19 5)">
                    <path className="main" d="M1.457 2.07c0-.76 1.116-.761 1.116 0v.756H1.457V2.07zm.88 11.405l-.322 1.141-.322-1.14h.644zm-.88-1.47h1.116v-7.71H1.457v7.71zM.03 2.07L.06 12.946l1.27 4.508c.199.704 1.171.704 1.37 0l1.27-4.508L4 2.07C3.999.718 3.007.042 2.015.042S.031.718.031 2.07z" mask="url(#prefix__d)"/>
                </g>
                <path className="main" d="M3.735 19h5.53c.982 0 .978-1 0-1h-5.53c-.979 0-.981 1 0 1M12.252 20H2.748c-.998 0-.997 1 0 1h9.504c.998 0 .997-1 0-1"/>
            </g>
        </svg>
      </Icon>
      <Name>Create Petition</Name>
    </Item>
  ),
  kb: (i) => (
    <Item to='?menu-action=kb' key={i}>
       <Icon>
        <svg xmlns="http://www.w3.org/2000/svg"  width="18" height="24">
            <g fill="none" fillRule="evenodd">
                <path className="main" d="M16.477 22.129c0 .221-.183.4-.408.4H1.9c-.224 0-.408-.179-.408-.4V3.695c0-.221.184-.402.408-.402h1.984c0 1.216.743 1.824 1.608 1.824h7.132c.844 0 1.607-.585 1.607-1.824h1.837c.225 0 .408.18.408.402V22.13zM5.379 1.582c0-.062.051-.112.114-.112h7.132c.063 0 .114.05.114.112v1.954c0 .061-.051.111-.114.111H5.493c-.063 0-.114-.05-.114-.111V1.582zm10.69.241h-1.837C14.232.583 13.464 0 12.625 0H5.493c-.814 0-1.608.555-1.608 1.823H1.901C.853 1.823 0 2.663 0 3.695V22.13C0 23.16.853 24 1.901 24H16.07c1.048 0 1.901-.84 1.901-1.871V3.695c0-1.032-.853-1.872-1.901-1.872z" mask="url(#prefix__b)"/>
                <path className="main" d="M13.632 5.26l-1.584 1.69-.68-.725c-.741-.794-1.868.407-1.124 1.2l1.242 1.327c.312.332.815.33 1.125 0l2.145-2.29c.743-.794-.38-1.996-1.124-1.202M3.792 8h4.416c1.055 0 1.057-1 0-1H3.792c-1.055 0-1.057 1 0 1M13.632 9.26l-1.584 1.69-.68-.725c-.742-.793-1.868.406-1.124 1.2l1.242 1.326c.314.335.818.328 1.125 0l2.145-2.29c.743-.793-.38-1.995-1.124-1.2M3.792 12h4.416c1.055 0 1.057-1 0-1H3.792c-1.055 0-1.057 1 0 1M13.632 13.26l-1.584 1.69-.68-.725c-.741-.793-1.868.406-1.124 1.2l1.242 1.326c.311.332.814.332 1.125 0l2.145-2.29c.743-.793-.38-1.995-1.124-1.2M3.792 16h4.417c1.054 0 1.056-1 0-1H3.792c-1.058 0-1.054 1 0 1"/>
                <g transform="translate(19 5)">
                    <path className="main" d="M1.457 2.07c0-.76 1.116-.761 1.116 0v.756H1.457V2.07zm.88 11.405l-.322 1.141-.322-1.14h.644zm-.88-1.47h1.116v-7.71H1.457v7.71zM.03 2.07L.06 12.946l1.27 4.508c.199.704 1.171.704 1.37 0l1.27-4.508L4 2.07C3.999.718 3.007.042 2.015.042S.031.718.031 2.07z" mask="url(#prefix__d)"/>
                </g>
                <path className="main" d="M3.735 19h5.53c.982 0 .978-1 0-1h-5.53c-.979 0-.981 1 0 1M12.252 20H2.748c-.998 0-.997 1 0 1h9.504c.998 0 .997-1 0-1"/>
            </g>
        </svg>
      </Icon>
      <Name>Knowledge Base</Name>     

    </Item>
  )
}

const Menu = styled.div`
  min-width: 309px;
  width: 309px;
  max-height: 588px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  flex: 1;
`;

const Header = styled.div`
  width: 309px;
  height: 130px;
  border-radius: 3px;
  background-color: ${props => props.theme.color};
  position: relative;
  .content {
    position: absolute;
    top: 21px;
    left: 25px;
    .title {
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      width: 100%;
    }
    .status {
      font-size: 14px;
      font-weight: 500;
      color: #fbc394;
      .label { color: #fac99e; }
      .value { color: #ffffff; }
      .dot { font-size: 6px; color: #ffffff; position: relative; top: -3px; margin-right: 2px;}
    }
  }

`;

const Items = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 1;
`

const Item = styled(Link)`
  display: flex;
  width: 283px;
  padding-top: 22px;
  padding-bottom: 20px;
  border-bottom: solid 1px #e6f0f9;
  align-content: center;
  &:first-child {
    margin-top: 10px;
  }
  &:last-child {
    border-bottom: none;
  }
  cursor: pointer;
`
const Icon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background-color: ${props => props.theme.icon};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    .main { fill: ${p => p.theme.color}}
  }
`
const Name = styled.div`
  margin-left: 18px;
  font-family: Muli;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  display: flex;
  align-items: center;
`