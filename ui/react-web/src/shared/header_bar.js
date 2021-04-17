import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import cs from '../utils/colors.js';
import { logout, hasSpaceAccess, menuItemsByRole } from '../store/user';
import userStore from '../store/user';
import Notifications from '../components/header/Notifications';
import ProfileMenu from '../components/header/ProfileMenu';
import Alerts from '../components/header/Alerts';
import headerlogo from '../assets/images/logo-jawda.jpg';

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

export default function ({ className, ...props }) {
  const store = useStore(userStore);
  return (
    <>
      <NewHeader>
        <div className="inner_header">
          <div div className="brand_wrap">
            <img src={headerlogo} alt="header logo" />
          </div>

          <div className="nav">
            <ul>
              <li>
                <NavLink to="/a-dashboard"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/board"> Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/entities"> Entity Management</NavLink>
              </li>
              <li>
                {/* <NavLink to="/compliance"> Compliance Project</NavLink> */}
                <NavLink to="/projects"> Project Management </NavLink>
              </li>
              <li>
                <NavLink to="/governance/case-management/snapshot"> Case Management</NavLink>
              </li>
              <li>
                <NavLink to="/governance/policy/snapshot"> Policy Grounds</NavLink>
              </li>
              <li>
                <NavLink to="#"> Resources</NavLink>
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
    // <StyledHeader className={className}>
    //   <div className="header-content">
    //     <div className="menu">
    //       <Link color={cs.home.color} to="/dashboard">
    //         <div> Dashboard </div>
    //       </Link>
    //       <Link color={cs.fs.color} to="/formulation" space='formulation'>
    //         <div> Formulation Spaces </div>
    //       </Link>
    //       {/* <Link color={cs.cs.color} to="/collaboration" space='collaboration'>
    //         <div> Collaboration Spaces </div>
    //       </Link> */}
    //       {/* <Link color={cs.as.color} to='/activation'>
    //         <div> Activation Spaces </div>
    //       </Link> */}
    //       <Link color={cs.gs.color} to="/governance" space='governance'>
    //         <div> Governance </div>
    //       </Link>
    //       <Link color={cs.cps.color} to="/compliance" space='compliance'>
    //         <div> Compliance Spaces </div>
    //       </Link>
    //     </div>
    //     <div className="user-actions">
    //       {/* <div className="alerts menuWrapper">
    //         <div className="actionMenu messageCenter">
    //           <Alerts alerts={alerts} />
    //         </div>
    //       </div> */}
    //       {/* <div className="msg menuWrapper">
    //         <div className="actionMenu messageCenter">
    //           <Alerts alerts={alerts} />
    //           <Notifications notifications={notifications} />
    //         </div>
    //       </div> */}
    //       <div className="notifications menuWrapper">
    //         {/* <div className="actionMenu">Notifications</div> */}
    //         <div className="actionMenu"><Alerts alerts={alerts} /></div>
    //       </div>
    //       <div className="user-icon menuWrapper">
    //         <div className="actionMenu">
    //           <ProfileMenu
    //             onLogout={() => logout()}
    //             onPassReset={() => console.log('Trigger Reset Password')}
    //           />
    //         </div>
    //       </div>
    //       <div className="username">
    //         {store.info.first_name} {store.info.last_name}
    //       </div>
    //     </div>
    //   </div>
    // </StyledHeader>
  );
}

const NewHeader = styled.header`
  position: absolute;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-bottom: 1px solid #dddddd;
  opacity: 1;
  padding: 10px 0;
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
`;

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
`;
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
`;
