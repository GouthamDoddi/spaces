import React from 'react'

function Panel(props) {
  const { className, children } = props
  return (
    <div className={className}>
      <div className='title-box'>
        <div className='title'> Task Panel </div>
        <div className='sub-title'> Some sub Title </div>
      </div>
      {children}
    </div>
  )
}

function Task(props) {
  const {i, title, subTitle, due } = props
  return (
    <div class='task'>
      <div class='icon'>
        <div class='number'> {i} </div>
      </div>
      <div class='content'>
        <div class='title'> {title} </div>
        <div class='sub-title'> { subTitle } </div>
        <div class='time'> Due Date {due} </div>
      </div>
    </div>
  )
}

function Tasks({className, children, data}) {
  return(
    <div className={className}>
      <PanelCard title='' subTitle=''>
        <div class='tasks'>
          {data.map((t, i) => <Task i={i+1} ...t />) }
        </div>
      </PanelCard>
    </div>
  )
}

const PanelCard = styled(Panel)`
  display: flex;
  flex-flow: column;
  flex-wrap: wrap;
  margin-left: 23px;
  width: 636px;
  border-radius: 3px;
  box-shadow: 0 2px 7px 0 rgba(155, 204, 244, 0.24);
  background-color: #ffffff;
  .title-box {
    display: flex;
    flex-flow: column;
    margin-left: 20px;
    margin-top: 25px;
    margin-bottom: 10px;
    .title {
      font-size: 15px;
      font-weight: 600;
    }
    .sub-title {
      margin-top: 6px;
      font-size: 10px;
      font-weight: 500;
      color: #8fa8bf;
    }
  }


  .tasks {
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    .task {
      display: flex;
      margin-top: 14px;
      margin-bottom: 25px;
      margin-right: 35px;
      width: 275px;
      height: 74px;
      border-bottom: dashed 1px #e6f0f9;
      position: relative;
      &:nth-child(2n) {
        margin-right: 0;
      }
      .icon {
        width: 50px;
        min-width: 50px;
        height: 60px;
        border-radius: 10px;
        background-color: #ff9436;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        color: #ffffff;
        text-align: center;
        .image {
          img {
            width: 50px;
            height: 60px;
            border-radius: 10px;
          }
        }
        .number {
          font-size: 20px;
          margin-top: 10px;
          &:after {
            content: '\ATask';
            font-size: 10px;
            white-space: pre;
            position: relative;
            top: -12px;
            // margin-top: -5px;
          }
        }
        .text {
          font-size: 10px;
        }
      }
      .content {
        margin-left: 16px;
        display: flex;
        flex-flow: column;
        .title {
          font-size: 12px;
          font-weight: 800;
          color: #000000;
        }
        .sub-title {
          font-size: 9px;
          line-height: 1.5;
          color: #98acbe;
        }
        .time {
          font-size: 9px;
          font-weight: 600;
          color: #7e9ab3;
          position: absolute;
          bottom: 15px;
        }
      }
    }
  }
`