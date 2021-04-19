import React from 'react'

import styled from 'styled-components'


export default function SmallCard({title='Entities', count, ...props}) {
  return (
    <Box>
      <header>
        <div>Entities</div>
        <div><Icon></Icon></div>
      </header>
      <footer> {count} </footer>
    </Box>
  )
}


function Icon() {
  return (<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70"><g transform="translate(-1727 -279)"><circle style={{fill: '#f7fafd'}} cx="35" cy="35" r="35" transform="translate(1727 279)"/><g transform="translate(1746.853 299)"><path style={{fill: '#2680eb'}} d="M14.13,9.09l11.1,2.2a1.861,1.861,0,0,1,1.5,1.839V25.98a1.887,1.887,0,0,1-1.889,1.889H13.5a.624.624,0,0,0,.63-.63v-.63H24.835a.632.632,0,0,0,.63-.63V13.133a.633.633,0,0,0-.491-.617L14.13,10.375Z" transform="translate(3.503 2.131)"/><path style={{fill: '#2680eb'}} d="M20.149,14a.63.63,0,0,1,0,1.259H17.63a.63.63,0,1,1,0-1.259Z" transform="translate(4.411 3.405)"/><path style={{fill: '#2680eb'}} d="M20.149,17a.63.63,0,0,1,0,1.259H17.63a.63.63,0,1,1,0-1.259Z" transform="translate(4.411 4.184)"/><path style={{fill: '#2680eb'}} d="M20.149,20a.63.63,0,0,1,0,1.259H17.63a.63.63,0,1,1,0-1.259Z" transform="translate(4.411 4.962)"/><path style={{fill: '#2680eb'}} d="M14.259,27.262a.63.63,0,0,1-1.259,0V9.63a.67.67,0,0,1,.227-.491.662.662,0,0,1,.529-.126l.5.1V27.262Z" transform="translate(3.373 2.108)"/><path style={{fill: '#2680eb'}} d="M13.908,23v.63a.624.624,0,0,0,.63.63H9.5a.624.624,0,0,0,.63-.63V23Z" transform="translate(2.465 5.741)"/><path style={{fill: '#2680eb'}} d="M11.149,5a.63.63,0,0,1,0,1.259H8.63A.63.63,0,0,1,8.63,5Z" transform="translate(2.076 1.07)"/><path style={{fill: '#2680eb'}} d="M11.778,8.63a.624.624,0,0,1-.63.63H8.63A.63.63,0,0,1,8.63,8h2.519A.624.624,0,0,1,11.778,8.63Z" transform="translate(2.076 1.848)"/><path style={{fill: '#2680eb'}} d="M11.149,11a.63.63,0,1,1,0,1.259H8.63A.63.63,0,1,1,8.63,11Z" transform="translate(2.076 2.627)"/><path style={{fill: '#2680eb'}} d="M11.149,14a.63.63,0,1,1,0,1.259H8.63A.63.63,0,1,1,8.63,14Z" transform="translate(2.076 3.405)"/><path style={{fill: '#2680eb'}} d="M6.778,14.63a.624.624,0,0,1-.63.63H3.63A.63.63,0,1,1,3.63,14H6.149A.624.624,0,0,1,6.778,14.63Z" transform="translate(0.778 3.405)"/><path style={{fill: '#2680eb'}} d="M6.149,5a.63.63,0,0,1,0,1.259H3.63A.63.63,0,0,1,3.63,5Z" transform="translate(0.778 1.07)"/><path style={{fill: '#2680eb'}} d="M6.149,8a.63.63,0,0,1,0,1.259H3.63A.63.63,0,0,1,3.63,8Z" transform="translate(0.778 1.848)"/><path style={{fill: '#2680eb'}} d="M6.149,11a.63.63,0,1,1,0,1.259H3.63A.63.63,0,1,1,3.63,11Z" transform="translate(0.778 2.627)"/><path style={{fill: '#2680eb'}} d="M10.3,18.889a.632.632,0,0,0-.63-.63H5.889a.624.624,0,0,0-.63.63v5.668H4V18.889A1.887,1.887,0,0,1,5.889,17H9.668a1.887,1.887,0,0,1,1.889,1.889v5.668H10.3Z" transform="translate(1.038 4.184)"/><path style={{fill: '#2680eb'}} d="M5.259,23h6.3v.63a.624.624,0,0,1-.63.63H4.63A.624.624,0,0,1,4,23.63V23Z" transform="translate(1.038 5.741)"/><path style={{fill: '#2680eb'}} d="M2.2.205l13.842,2.1a1.882,1.882,0,0,1,1.587,1.864V11.4l-.5-.1a.662.662,0,0,0-.529.126.67.67,0,0,0-.227.491V4.172a.637.637,0,0,0-.529-.63L2,1.452a.349.349,0,0,0-.113-.013.594.594,0,0,0-.4.151.6.6,0,0,0-.227.479V28.291a.632.632,0,0,0,.63.63H5.038v.63a.624.624,0,0,0,.63.63H1.889A1.887,1.887,0,0,1,0,28.291V2.069A1.855,1.855,0,0,1,.668.633,1.891,1.891,0,0,1,2.2.205Z" transform="translate(0 -0.181)"/></g></g></svg>)
}
const Box = styled.div`
  width: 294px;
  height: 180px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border-radius: 5px;
  border: 1px solid #DEDEDE;
  padding: 30px 37px;
  > header {
    display: flex;
    justify-content: space-between;
    height: 30px;
    > div:first-child {
      font: normal normal normal 20px/30px Muli;
      color: #000000;
      padding-top: 20px;
    }
  }

  footer {
    font: normal normal 600 40px/59px Muli;
    color: #000000;

    margin-top: 35px;
    padding-top: 5px;
  }
`

