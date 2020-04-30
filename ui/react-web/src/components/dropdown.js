import React from 'react'

import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

export default function Dropdown(props) {
  const loc = useLocation();
  const { title, list, name } = props
  return (
    <Main className="pure-menu pure-menu-horizontal">

      <ul className="pure-menu-list">
          <li className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">
              <button  className="pure-menu-link title">{title}</button>
              <ul className="pure-menu-children menu">
                {
                  list.map((item, i) => (
                    <li className="pure-menu-item" key={i}>
                     <Link className='pure-menu-link'
                      to={() => {
                        const query = new URLSearchParams(loc.search);
                        query.set(name, item.name)
                        return `${loc.pathname}?${query.toString()}`
                      }}> {item.name} </Link>
                    </li>
                  ))
                }
              </ul>
          </li>
      </ul>
    </Main>
  )
}


const Main = styled.div`
  position: relative;
  top: 0;
  left: 0;
  .menu {
    border: 1px solid #ccc;
  }
  button {
    border: none;
    padding: 10px 7px;
  }
  .title {
    font-size: 15px;
    font-weight: 700;
    color: #000000;
  }

  // .options {
  //   position: absolute
  //   display: ${p => p.show ? 'flex' : 'none'}

  // }

`