import React from 'react'
import styled from 'styled-components'
// import { useStore } from 'effector-react'


function MakeList({ data, bucket, elements }) {
  const { add, remove } = elements
  const state = elements.store.getState()
  const objs = Object.values(data)
  const list = objs.map((item, i) =>
    <div className='box' key={i}>
      <input type='checkbox' value={item.id}
        checked={state[bucket].includes(item.id)}
        onChange={(e) => e.target.checked ? add({bucket, id: item.id}) : remove({ bucket, id: item.id})} />
      <label> {item.name} </label>
    </div>
  )
  return(
    <>
      {list}
    </>
  )
}

function done() {
  window.history.go(-1)
}

export default function({options, elements}) {
  return (
    <Container>
      <div className='snapshot'>
        <div className='title'> SNAPSHOT </div>
        <MakeList data={options.snapshot} bucket='snapshots' elements={elements} />
      </div>
      <div className='analysis'>
        <div className='title'> ANALYSIS </div>
        <MakeList data={options.analysis} bucket='analysis' elements={elements} />
      </div>
      <div className='analyzer'>
        <div className='title'> ANALYZERS </div>
        <MakeList data={options.analyzers} bucket='analyzers' elements={elements} />
      </div>
      <div className='oval' onClick={done}>
        <svg viewBox="0 -65 434.67733 434" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="m152.003906 304.34375c-5.460937 0-10.921875-2.089844-15.082031-6.25l-130.664063-130.667969c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339844-8.339844 21.820313-8.339844 30.164063 0l115.582031 115.582031 246.253906-246.25c8.339844-8.339844 21.820313-8.339844 30.164063 0 8.339844 8.34375 8.339844 21.824219 0 30.167969l-261.332031 261.332031c-4.160156 4.160156-9.625 6.25-15.085938 6.25zm0 0"/></svg>
      </div>
    </Container>
  )
}

const Container = styled.div`
  // width: 100%;
  height: 100%;
  padding: 20px 29px;
  display: grid;
  grid-template-columns: repeat(2, minmax(309px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 26px 19px;
  position: relative;
  top: 0;
  left: 0;
  > div {
    border: solid 1px #e8e8e8;
    background-color: #f4f7fa;
    overflow: auto;
    > div {
      margin-bottom: 20px;
      &.title {
        font-size: 15px;
        font-weight: 800;
        color: #0091ff;
        margin: 20px;
      }
      &.box {
        display: flex;
        align-items: center;
        height: 54px;
        border-radius: 3px;
        border: solid 1px #f4f7fa;
        background-color: #ffffff;
        margin: 16px 16px 0 16px;
        padding-left: 16px;
        input[type='checkbox'] {
          width: 18px;
          height: 18px;
          margin-right: 8px;
        }
        label {
          font-size: 15px;
          font-weight: 700;
          color: #000000;
          margin-top: -2px;
        }
        &:last-child {
          margin-bottom: 20px;
        }
      }
    }
  }
  .snapshot {
    grid-row: 1 / -1;
  }

  .oval {
    width: 63px;
    height: 63px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background-color: #0091ff;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    right: 34px;
    bottom: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 24px;
      height: 24px;
      fill: #ffffff;
    }
  }
`