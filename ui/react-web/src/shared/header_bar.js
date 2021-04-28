import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import cs from '../utils/colors.js';
import { logout, hasSpaceAccess, menuItemsByRole, role } from '../store/user';
import userStore from '../store/user';
import Notifications from '../components/header/Notifications';
import ProfileMenu from '../components/header/ProfileMenu';
import Alerts from '../components/header/Alerts';
import headerlogo from '../assets/images/logo-jawda.jpg';
import { LangSwitch } from '../pages/dashboards/shared/header';

function NormalLink(props) {
  const { to, className, children, space } = props;
  return !space || hasSpaceAccess(space) ? (
    <NavLink to={to} className={className} activeClassName="selected">
      {children}
      {/* <div> &#x2B24; </div> */}
    </NavLink>
  ) : null;
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
];

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
];

export default withRouter(function ({ className, langSwitch, lang, setLang, ...props }) {
  const store = useStore(userStore);

  const checkActiveLink = ({ route }) => {
    let checkMatch = props.match.path;
    if (route.includes(checkMatch)) {
      return true;
    }
    return false;
  }

  return (
    <>
      <NewHeader>
        <div className="inner_header">
          <div div className="brand_wrap">
            <img src={headerlogo} alt="header logo" />
          </div>

          <div className="nav">
            <ul>
              {langSwitch && (
                <li>
                  <LangSwitch lang={lang} setLang={setLang} alignItems="center" />
                </li>
              )}
              <li>
                <NavLink to="/a-dashboard">
                  <ActiveSpan active={checkActiveLink({ route: ['/', '/dashboard', '/a-dashboard'] })}>
                    {'Home'}
                  </ActiveSpan>
                </NavLink>
              </li>
              <li>
                <NavLink to="/board">
                  <ActiveSpan active={checkActiveLink({ route: ['/board'] })}>
                    {'Dashboard'}
                  </ActiveSpan>
                </NavLink>
              </li>
              {[0, 15, 12, 14].includes(role()) && <li>
                <NavLink to="/entities">
                  <ActiveSpan active={checkActiveLink({ route: ['/entities'] })}>
                    {'Entity Management'}
                  </ActiveSpan>
                </NavLink>
              </li>}
              {![13, 15].includes(role()) && <li>
                <NavLink to="/projects">
                  <ActiveSpan active={checkActiveLink({ route: ['/projects'] })}>
                    {'Project Management'}
                  </ActiveSpan>
                </NavLink>
              </li>}
              {[0, 14].includes(role()) && <li>
                <NavLink to="/policies">
                  <ActiveSpan active={checkActiveLink({ route: ['/policies'] })}>
                    {'Policy Grounds'}
                  </ActiveSpan>
                </NavLink>
              </li>}
              <li>
                <NavLink to="/resources"> 
                  <ActiveSpan active={checkActiveLink({ route: ['/resources', '/resources/upload'] })}>
                    {'Resources'}
                  </ActiveSpan>
                </NavLink>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </NewHeader>
    </>
  );
});

const ActiveSpan = styled.span`
  color: ${props => props.active ? '#EB622B' : '#666666'};
  border: ${props => props.active ? '1px solid #ddd' : 'none'};
  background: ${props => props.active ? '#FFE5DB' : 'none'};
  padding: ${props => props.active ? '5px 8px' : '0px'};
  border-radius: ${props => props.active ? '15px' : '0px'};
`

const NewHeader = styled.header`
  position: absolute;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-bottom: 1px solid #dddddd;
  opacity: 1;
  padding: 10px 100px;
  top: 0;
  left: 0;

  .inner_header {
    max-width: 1540px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .brand_wrap img {
    width: 160px;
  }
  .nav {
    flex: 1;
    display: flex;
    text-align: right;
    justify-content: flex-end;
  }

  .nav ul {
    display: flex;
    text-align: right;
    list-style: none;
  }
  .nav ul li {
    margin: 0 10px;
    display: flex;
    align-items: center;

    .username {
      color: #131313;
      font-size: 12px;
      line-height: 19px;
    }
  }

  .nav ul li a {
    text-align: left;
    font: normal normal 600 12px/18px Muli;
    letter-spacing: 0px;
    color: #666666;
    opacity: 1;
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
    box-shadow: 0px 1px 3px #00000029;
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
    border-color: white transparent transparent transparent;
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
`;
