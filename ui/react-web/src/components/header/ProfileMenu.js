import React from 'react'
import styled from 'styled-components'
import cs from '../../utils/colors.js'

export default function (props) {
  return (
    <ProfileMenu>
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
    padding: 5px 22px;
    text-align: left;
    font-weight: bold;
  }
  .actionMenuSub {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 3px;
    color: black;
    padding: 24px 0px;
  }
`
