import styled from 'styled-components'

import React from 'react'

function ShowPerc({ progress }) {
  return (
    <>
      <progress value={progress} max="100"> {progress}% </progress>
      <div className='pending'> {100 - progress}% Pending </div>
      <div className='progress-value'> {progress}% </div>
    </>
  )
}

function ShowDays({ days, date}) {
  return (
    <>
      <progress value={days} max="30"> {days} </progress>
      <div className='pending days'> Due date is on {date} </div>
      <div className='progress-value'> {30 - days < 10 ? `0${30 - days}` : (30 - days)} </div>
      <div className='snippet'>Days Left</div>
    </>
  )
}

function ProgressCard(props) {
  const { className, title, subtitle, progress, days, date } = props
  return (
    <div className={className}>
      <div className='title'>{title}</div>
      <div className='subtitle'>{subtitle}</div>
      { progress ? <ShowPerc progress={progress} /> : <ShowDays days={days} date={date}/> }
    </div>
  )
}

export default styled(ProgressCard)`
  margin-left: 23px;
  width: 306px;
  height: 140px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  position: relative;
  div {
    position: absolute;
  }
  .title {
    font-size: 15px;
    font-weight: 600;
    color: #000000;
    left: 6.5%;
    top: 15%;
  }
  .subtitle {
    top: 31.4%;
    left: 6.5%;
    font-size: 10px;
    color: #8fa8bf;
  }

  progress::-webkit-progress-bar { background-color: #e5eff8; }



  progress::-webkit-progress-value { background: ${p => p.color}; }
  progress::-moz-progress-bar { background: ${p => p.color}; }
  .progress-value { color: ${p => p.color}; }

  .snippet {
    width: 30px;
    font-size: 12px;
    font-weight: 800;
    left: 84.6%;
    top: 15.2%;
    color: ${p => p.color};;
  }

  progress {
    position: absolute;
    top: 64.3%;
    left: 6.5%;
    -webkit-appearance: none;
    width: 259px;
    height: 4px;
    color: ${p => p.color};;
  }
  .pending {
    top: 75%;
    left: 70.9%;
    font-size: 10px;
    font-weight: 500;
    color: #000000;
    &.days {
      left: 48%;
    }
  }
  .progress-value {
    top: 11.4%;
    left: 70.9%;
    font-size: 33px;
    font-weight: 800;
  }

`