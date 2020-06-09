import React from 'react'
import styled from 'styled-components'
import cs from '../../utils/colors.js'

export default function (props) {
  return (
    <ProfileMenu>
      <div className="menuHeaderText">MY PROFILE</div>
      <div className="actionMenuSub">
        <div className="menuText">System Logs</div>
        <div
          className="menuText"
          onClick={(e) => {
            e.stopPropagation()
            props.onPassReset()
          }}
        >
          Password Reset
        </div>
        <div
          className="menuText"
          onClick={(e) => {
            e.stopPropagation()
            props.onLogout()
          }}
        >
          Logout
        </div>
      </div>
    </ProfileMenu>
  )
}

const ProfileMenu = styled.div`
  .menuHeaderText {
    padding: 10px;
    text-align: left;
  }
  .menuText {
    padding: 5px 10px;
    text-align: left;
    font-weight: bold;
  }
  .actionMenuSub {
    background-color: #fff;
    color: black;
    border-radius: 0px 0px 6px 6px;
    padding-bottom: 4px;
  }
`
