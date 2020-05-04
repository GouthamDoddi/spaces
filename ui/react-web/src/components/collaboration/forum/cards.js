import React from 'react'
import styled from 'styled-components'

import {
  Link
} from 'react-router-dom'

export default function Element(props) {
  return (
    <>
      <Tabs>
        <Link to='' className='selected'>General Forum</Link>
        <Link to=''>My Forum</Link>
      </Tabs>

      <Container>
        <div className='tabs'>
        </div>
        <NewCard>
          <div className='tools'>
            <Link to='' className='link status'> Status </Link>
            <Link to='' className='link photo'> Photo / Video </Link>
          </div>
          <div className='box'>

          </div>
        </NewCard>

        <Search>
          <i />
          <input type='text' name='search'/>
        </Search>
        <Cards>
          {
            [1,2].map(() => (
              <Card>
                <div className='top-bar'>
                  <div className='icon'> </div>
                  <div className='info'>
                    <div className='name'> Jaclynn Bradley </div>
                    <div className='date'> October 9 at 9:10pm </div>
                  </div>
                  <div className='link'> Join Forum </div>
                </div>
                <div className='text'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam </div>
                <div className='tags'> </div>
                <div className='media'> </div>
                <div className='info'> </div>
                <div className='actions'> </div>
              </Card>
            ))
          }
        </Cards>
      </Container>
    </>
  )
}


const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #e7fffa;
  > * {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: #42d7b6;
    &.selected {
      font-weight: 800;
      color: #42d7b6;
      border-bottom: 4px solid #44d7b6;
    }
  }
`

const Container = styled.div`
  margin: 25px 29px 0 29px;
`
const NewCard = styled.div`
  margin-bottom: 14px;
  .tools {
    height: 34px;
    border-radius: 2px;
    background-color: #f6f7f9;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    padding-left: 24px;
    align-items: center;
    .link {
      font-size: 12px;
      font-weight: bold;
      &.status{
        color: #504f56;
        margin-right: 15px;
      }
      &.photo {
        color: #44d7b6;
      }
    }
  }
  .box {
    height: 74px;
    border-radius: 2px;
    background-color: #f7f7f7;
  }
`

const Search = styled.div`
  position: relative;
  i {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 18px;
    top: 15px;
    background-image: url('/img/forum/search.svg');
    background-repeat: no-repeat;
  }
  input {
    outline: none;
    border: none;
    width: 100%;
    padding-left: 54px;
    font-size: 20px;
    font-weight: 600;
    color: #90949d;
    height: 56px;
    border-radius: 2px;
    background-color: #f7f7f7;
  }

  margin-bottom: 18px;
`
const Cards = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 1063px;
  overflow: auto;
  border-radius: 1px;
  border: solid 1px #dddfe2;
  background-color: #ffffff;
  padding: 0 17px;
`

const Card = styled.div`
  border-radius: 1px;
  border: solid 1px #dddfe2;
  background-color: #ffffff;
  width: 100%;
  padding: 11px 17px 0 17px;

  & + & {
    margin-top: 20px;
  }

  .top-bar {
    height: 52px;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    .icon {
      width: 43px;
      height: 51px;
      border-radius: 10px;
      background-color: #ccc;
    }
    .info {
      margin: 4px 0 0 9px;
      .name {
        font-size: 16px;
        font-weight: 700;
        color: #000000;
      }
      .date {
        margin-top: 3px;
        font-size: 13px;
        letter-spacing: normal;
        color: #96949d;
      }
    }

    .link {
      position: absolute;
      top: 9px;
      right: 21px;
      line-height: 38px;
      text-align: center;
      width: 166px;
      height: 38px;
      border-radius: 2px;
      background-color: #44d7b6;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
    }
  }

  .text {
    margin-top: 6px;
    font-size: 16px;
    color: #1d212a;
  }
  .media {
    width: 100%;
    height: 290px;
    background-color: #ccc;
    margin-top: 5px;
  }
`