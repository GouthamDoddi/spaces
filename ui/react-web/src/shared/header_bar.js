import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStore } from 'effector-react'
import styled from 'styled-components'
import cs from '../utils/colors.js'
import {logout, hasSpaceAccess, menuItemsByRole} from '../store/user'
import userStore from '../store/user'
import Notifications from '../components/header/Notifications'
import ProfileMenu from '../components/header/ProfileMenu'
import Alerts from '../components/header/Alerts'

function NormalLink(props) {
  const { to, className, children, space } = props
  return (
    (!space || hasSpaceAccess(space))  ?
      <NavLink to={to} className={className} activeClassName="selected">
        {children}
        {/* <div> &#x2B24; </div> */}
      </NavLink> : null
  )
}
const alerts = [
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
  {
    alertMessage: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
  },
]

const notifications = [
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
  {
    title: 'Martin Abasto',
    message: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    dayTime: '5 April, 4:56pm',
    initials: 'MA',
  },
]

export default function ({className, ...props}) {
  const store = useStore(userStore)
  return (
    <StyledHeader className={className}>
      <div className="header-content">
        <div className="menu">
          {
            menuItemsByRole().map((o) => 
              <Link color={cs.home.color} to={o.path}>
                <div> {o.name} </div>
             </Link>    
            )
          }
        </div>
        <div className="user-actions">
          {/* <div className="alerts menuWrapper">
            <div className="actionMenu messageCenter">
              <Alerts alerts={alerts} />
            </div>
          </div> */}
          {/* <div className="msg menuWrapper">
            <div className="actionMenu messageCenter">
              <Alerts alerts={alerts} />
              <Notifications notifications={notifications} />
            </div>
          </div> */}
          <div className="notifications menuWrapper">
            {/* <div className="actionMenu">Notifications</div> */}
            <div className="actionMenu"><Alerts alerts={alerts} /></div>
          </div>
          <div className="user-icon menuWrapper">
            <div className="actionMenu">
              <ProfileMenu
                onLogout={() => logout()}
                onPassReset={() => console.log('Trigger Reset Password')}
              />
            </div>
          </div>
          <div className="username">
            {store.info.first_name} {store.info.last_name}
          </div>
        </div>
      </div>
    </StyledHeader>

  )
}

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding-left: 30px;
  z-index: 2000;
  border: solid 1px #dddddd;
  background-color: #fff;
  .header-content {
    display: grid;
    grid-template-columns: auto 250px;
    align-items: center;
    height: 100%;
    background-color: #fff;

    .title {
      width: 132px;
      height: 30px;
      font-size: 24px;
      font-weight: 800;
      color: #000000;
      margin-left: 23px;
    }

    .menu {
      display: flex;
    }
    .user-actions {
      display: flex;
      align-items: center;
      height: 32px;
      padding-right: 10px;
      .notifications {
        background-image: url(/img/bell.svg);
        background-repeat: round;
      }
      .alerts {
        background-image: url(/img/exclamation-mark.svg);
        background-repeat: round;
      }
      .msg {
        background-image: url(/img/msg.svg);
        background-repeat: round;
      }
      .msg,
      .alerts,
      .notifications {
        margin-right: 24px;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        display: inline-block;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 24px;
        height: 24px;
      }
      .user-icon {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        background-color: #ccc;
        margin-right: 15px;
        position: relative;
        display: inline-block;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .menuWrapper:hover .actionMenu {
        display: block;
      }
      .actionMenu {
        display: none;
        background-color: ${() => cs.home.color};
        color: #fff;
        text-align: center;
        border-radius: 6px;
        z-index: 100;
        top: 125%;
        left: 50%;
        margin: 35px 0px 0px -150px;
        width: 200px;
        box-shadow: 0 1px 15px ${() => cs.home.color};
      }
      .actionMenu::after {
        content: '';
        position: absolute;
        top: 15px;
        left: 15px;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        transform: rotateZ(180deg);
        border-color: ${() => cs.home.color} transparent transparent transparent;
      }
      .messageCenter {
        width: 350px;
      }
      .username {
        height: 18px;
        font-family: Muli;
        font-size: 14px;
        font-weight: 800;
        color: #11236e;
      }
    }
  }
`
const Link = styled(NormalLink)`
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  color: #687c9d;
  cursor: pointer;
  margin-top: 6px;
  // min-width: 104px;
  & + & {
    margin-left: 27px;
  }
  div:first-child {
    padding: 6px 14px;
  }
  &.selected div:first-child {
    border-radius: 16px;
    background-color: #e4e8ee;
    color: ${(props) => props.color || '#687c9d'};
    font-weight: 700;
  }
  div:nth-child(2) {
    text-align: center;
    font-size: 4px;
    transform: scale(0.8);
    margin-top: 2px;
    color: ${(props) => props.color || 'white'};
  }
`
