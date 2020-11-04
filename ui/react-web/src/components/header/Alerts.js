import React from 'react'
import styled from 'styled-components'
import cs from '../../utils/colors.js'

export default function (props) {
  return (
    <Alerts>
      <div className="menuHeaderText messageHeaderText">
        <div>Notifications</div>
        
      </div>
      <div className="actionMenuSub">
        <div className="messageAlertBody">
          No notifications
        </div>
      </div>
    </Alerts>
  )
}

// export default function (props) {
//   return (
//     <Alerts>
//       <div className="menuHeaderText messageHeaderText">
//         <div>ALERTS</div>
//         <div>view All</div>
//       </div>
//       <div className="actionMenuSub">
//         <div className="messageAlertBody">
//           {props?.alerts?.map((message, i) => (
//             <div className="messageAlertBar" key={i}>
//               <div className="messageAlertIcon">
//                 <img src="/img/exclamation-mark.svg" />
//               </div>
//               <div className="messageAlertContent">
//                 <div className="messageAlertMessage">{message?.alertMessage}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Alerts>
//   )
// }

const Alerts = styled.div`
  .menuHeaderText {
    padding: 15px;
    text-align: left;
  }
  .messageHeaderText {
    font-size: 14px;
    display: grid;
    grid-template-columns: 80% 20%;
  }
  .messageAlertBody {
    max-height: 550px;
    min-height: 101px;
    overflow-y: auto;
  }
  .messageAlertBar {
    height: 60px;
    display: grid;
    grid-template-columns: 20% 80%;
  }
  .messageAlertIcon {
    height: 80%;
    background-color: #564fc1;
    margin: 10%;
    border-radius: 6px;
    font-size: 45px;
    text-align: center;
    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
  .messageAlertContent {
    text-align: left;
    padding-top: 5%;
  }
  .messageNotificationheader {
    padding: 10px 0px;
  }
  .messageAlertMessage {
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
