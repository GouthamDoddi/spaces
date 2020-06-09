import React from 'react'
import styled from 'styled-components'
import cs from '../../utils/colors.js'

export default function (props) {
  return (
    <Notification>
      <div className="menuHeaderText messageHeaderText">
        <div>RECENT</div>
        <div>New Message</div>
        <div>view All</div>
      </div>
      <div className="actionMenuSub">
        <div className="messageNotificationBody">
          {props?.notifications?.map((message) => (
            <div className="messageNotificationBar">
              <div className="messageNotificationIcon">{message?.initials}</div>
              <div className="messageNotificationContent">
                <div className="messageNotificationheader">{message?.title}</div>
                <div className="messageNotificationMessage">{message?.message}</div>
                <div className="messageNotificationTime">{message?.dayTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Notification>
  )
}

const Notification = styled.div`
  .menuHeaderText {
    padding: 15px;
    text-align: left;
  }
  .messageHeaderText {
    font-size: 14px;
    display: grid;
    grid-template-columns: 22% 60% 30%;
  }
  .messageNotificationBody {
    max-height: 550px;
    min-height: 101px;
    overflow-y: auto;
  }
  .messageNotificationBar {
    height: 100px;
    display: grid;
    grid-template-columns: 30% 70%;
  }
  .messageNotificationIcon {
    height: 80%;
    background-color: #564fc1;
    margin: 10%;
    border-radius: 6px;
    font-size: 45px;
    padding-top: 10%;
    text-align: center;
  }
  .messageNotificationContent {
    display: grid;
    grid-template-rows: 35% 45% 20%;
    text-align: left;
  }
  .messageNotificationheader {
    padding: 10px 0px;
  }
  .messageNotificationMessage {
    font-size: 12px;
    color: #687c9d;
  }
  .messageNotificationTime {
    font-size: 10px;
    color: #687c9d;
  }
  .actionMenuSub {
    background-color: #fff;
    color: black;
    border-radius: 0px 0px 6px 6px;
    padding-bottom: 4px;
  }
`
