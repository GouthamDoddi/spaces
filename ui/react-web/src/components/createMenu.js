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

export default function(props) {
  // const [open, setOpen] = useState(true);
  // const [modalType, setModalType] = useState('');
  const { space } = props

  let query = useQuery();

  const name = query.get('menu-action')
  const id = query.get('id')

  return(
    <>
      <Menu>
        <Header>
          <div className='content'>
            <div className='title'> { space } </div>
            <div className='status'>
              <span className='label'> Policy Family: </span>
              <span className='value'> Taxation </span>
              <span className='dot'> &#x2B24; </span>
              <span className='label'> Status: </span>
              <span className='value'> Active </span>
            </div>
          </div>
        </Header>
        <Items>
          <Item to='?menu-action=task'>
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
          <Item to='?menu-action=survey'>
            <Icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18">
                <path className='main' d="M15.111 17.778H.89c-.491 0-.889-.398-.889-.89v-16C0 .399.398 0 .889 0H15.11c.491 0 .889.398.889.889v16c0 .49-.398.889-.889.889zM14.222 16V1.778H1.778V16h12.444zM4.444 4.444h7.112v1.778H4.444V4.444zm0 3.556h7.112v1.778H4.444V8zm0 3.556H8.89v1.777H4.444v-1.777z"/>
              </svg>
            </Icon>
            <Name>Create Survey</Name>
          </Item>
          <Item to='?menu-action=note'>
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
          <Item to='?menu-action=space'>
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
          <Item to='?menu-action=meeting'>
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
        </Items>
      </Menu>

      <MenuModal name={name} id={id} />

    </>
  )
}


const Menu = styled.div`
  min-width: 309px;
  width: 309px;
  height: 593px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
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