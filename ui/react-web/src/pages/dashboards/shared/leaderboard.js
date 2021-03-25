import React from 'react'

import styled from 'styled-components'
import { SVGCrown} from './icons'

export default function({leaderBoardData, type='Entities',  ...props}) {
  return (
    <LeaderBoard>
      <div className='header'>
        <span class='title'> Leaderboard</span>
      </div>
      <div className='info'>
        <div className='title'> High Performing {type} </div>
        {leaderBoardData['High Performing Entities']?.map((o, i) => (
          <>
            <div>{i == 0 ? <SVGCrown left='-6px' /> : i + 1}</div>
            <div>{o.name}</div>
            <div>{o.score?.toFixed(2)}</div>
          </>
        ))}
        <div className='title'> Least Performing {type} </div>
        {leaderBoardData['Least Performing Entities']?.map((o, i) => (
          <>
            <div>{i + 1}</div>
            <div>{o.name}</div>
            <div>{o.score?.toFixed(2)}</div>
          </>
        ))}
      </div>
    </LeaderBoard>
  )
}

const LeaderBoard = styled.div`
  margin-left: 40px;
  border: 1px solid #BBBBBB;
  background-color: #fff;
  > .header {
    width: 429px;
    min-width: 429px;
    height: 73px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    padding-left: 40px;
    border-bottom: 1px solid #BBBBBB;
    > .title {
      height: 23px;
      text-align: left;
      font-size: 18px;
      font-weight: 600;
      color: #666666;
      line-height: 73px;
      
    }
  }

  > .info {
    padding: 30px;
    display: grid;
    height: 654px;
    max-width: 429px;
    grid-template-columns: 50px 1fr 50px;
    grid-row-gap: 20px;
    > .title {
      grid-column: 1 / -1;
      text-align: left;
      font-size: 18px;
      font-weight: 600;
      color: #000000;
      margin-bottom: 10px;
    }
  }
`