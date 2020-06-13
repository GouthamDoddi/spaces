import React from 'react'
import styled from 'styled-components'

import {
  useLocation,
  Link
} from 'react-router-dom';



function Modal({className, children, title, disableList=[]}) {
  const loc = useLocation();
  const isSel = ((page) => loc.search.includes(page) ? 'selected' : null)
  const to = (page) => {
    const query = new URLSearchParams(loc.search);
    if(!disableList.includes(page)) query.set('page', page)
    return `${loc.pathname}?${query.toString()}`
  }
  return(
    <div className={className}>
      <Content>
        <Close to={() => {
          const query = new URLSearchParams(loc.search);
          query.delete('menu-action')
          query.delete('id')
          return `${loc.pathname}?${query.toString()}`
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
            <g fill="none" fillRule="evenodd">
              <path d="M0 0L24 0 24 24 0 24z" transform="translate(-5 -5)"/>
              <path fill="#000" fillRule="nonzero" d="M12 10.586L16.95 5.636 18.364 7.05 13.414 12 18.364 16.95 16.95 18.364 12 13.414 7.05 18.364 5.636 16.95 10.586 12 5.636 7.05 7.05 5.636z" transform="translate(-5 -5)"/>
            </g>
          </svg>
        </Close>

        <Header>{title}</Header>
        {children}
      </Content>
      <Actions>
        {actions.profile({to: to('profile'), className: isSel('profile')})}
        {actions.edit({to: to('edit'), className: isSel('edit')})}
        {actions.share({to: to('share'), className: isSel('share')})}
        {actions.msg({to: to('msg'), className: isSel('msg')})}
        {actions.translate({to: to('translate'), className: isSel('translate')})}
      </Actions>
        {/* <Create> Create </Create> */}
    </div>
  )
}

const Create = styled.button`
  position: absolute;
  border: none;
  bottom: 31px;
  left: 263px;
  width: 160px;
  height: 38px;
  border-radius: 2px;
  background-color: ${p => p.theme.color};
  color: #ffffff;
  font-size: 14px;
  z-index: 4;
`
const Close = styled(Link)`
  position: absolute;
  left: 643px;
  top: 36px;
  z-index: 3;
`

const Header = styled.div`
  display: flex;
  height: 92px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px #e6f0f9;
  font-size: 15px;
  font-weight: 800;
  color: #000000;
  text-transform: uppercase;
  // position: relative;
`

const Actions = styled.div`
  width: 103px;
  height: 373px;
  border-radius: 10px;
  background-color: #ffffff;
  align-self: center;
  position: relative;
  left: -12px;
  z-index: -1;
  padding-top: 17px;
`

const Content = styled.div`

  position: relative;
  top: 0;
  left: 0;
  width: 706px;
  height: 662px;
  border-radius: 10px;
  box-shadow: 5px 2px 4px 0 rgba(0, 0, 0, 0.12);
  background-color: #ffffff;

`
export default styled(Modal)`
  display: flex;
  position: fixed; /* Stay in place */
  z-index: 3000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;


`

const actions = {

  translate: (props) => <Icon {...props} >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g className="ma-main" fill-rule="evenodd">
          <path d="M16.236 17.705l.655-2.312.656 2.312h-1.31zm1.288-3.254c-.067-.226-.346-.331-.632-.331-.279 0-.558.105-.625.331l-1.454 4.738c-.008.03-.015.06-.015.075 0 .241.354.407.617.407.166 0 .294-.053.332-.196l.286-1.002h1.725l.286 1.002c.038.143.166.196.331.196.264 0 .618-.173.618-.407 0-.023-.008-.045-.015-.075l-1.454-4.738z"/>
          <path d="M22.594 21.414c0 .65-.53 1.18-1.18 1.18h-9.037c-.65 0-1.18-.53-1.18-1.18 0-.227-.11-.44-.294-.572l-1.835-1.31 1.835-1.311c.184-.132.294-.346.294-.573v-5.271c0-.65.53-1.18 1.18-1.18H21.414c.65 0 1.18.53 1.18 1.18v9.037zm-20.008-8.61c-.65 0-1.18-.53-1.18-1.18V2.585c0-.65.53-1.18 1.18-1.18h9.037c.65 0 1.18.53 1.18 1.18 0 .227.11.44.294.572l1.835 1.31-1.835 1.311c-.184.132-.294.346-.294.573V9.79h-.426c-1.426 0-2.586 1.16-2.586 2.585v.427H2.586zM21.414 9.79H14.21V6.713l2.342-1.672c.184-.132.294-.345.294-.572 0-.227-.11-.44-.294-.572l-2.37-1.693C13.996.96 12.919 0 11.623 0H2.586C1.16 0 0 1.16 0 2.586v9.038c0 1.425 1.16 2.585 2.586 2.585h7.205v3.078l-2.342 1.672c-.184.132-.294.345-.294.572 0 .227.11.44.294.572l2.37 1.693C10.004 23.04 11.081 24 12.377 24h9.037C22.84 24 24 22.84 24 21.414v-9.037c0-1.426-1.16-2.586-2.586-2.586z"/>
          <path d="M7.104 8.167c-.433-.45-.728-1.035-.814-1.685h1.63c-.087.65-.382 1.234-.816 1.685zm2.161-1.685c.219 0 .396-.178.396-.397 0-.219-.177-.396-.396-.396H7.501v-.963c0-.22-.178-.397-.397-.397-.218 0-.396.178-.396.397v.963H4.944c-.219 0-.396.177-.396.396 0 .22.177.397.396.397h.547c.087.837.448 1.594.991 2.18-.45.27-.976.425-1.538.425-.219 0-.396.178-.396.397 0 .219.177.396.396.396.803 0 1.547-.25 2.16-.677.614.426 1.359.677 2.161.677.219 0 .396-.177.396-.396 0-.22-.177-.397-.396-.397-.562 0-1.088-.155-1.538-.425.543-.586.904-1.343.991-2.18h.547z"/>
      </g>
    </svg>
  </Icon>,

  share: (props) => <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20">
      <path className='ma-main' d="M11.12 15.023l-4.199-2.29c-1.122 1.2-2.863 1.591-4.39.988C1.003 13.118 0 11.643 0 10.001 0 8.357 1.003 6.883 2.53 6.28c1.528-.603 3.27-.211 4.391.988l4.2-2.29c-.493-1.953.542-3.968 2.418-4.703 1.875-.736 4.004.038 4.97 1.805.966 1.768.467 3.978-1.165 5.159-1.632 1.18-3.887.964-5.264-.506l-4.2 2.29c.161.641.161 1.313 0 1.954l4.199 2.29c1.377-1.47 3.632-1.687 5.264-.506 1.632 1.181 2.131 3.391 1.165 5.159-.966 1.767-3.095 2.541-4.97 1.805-1.876-.735-2.911-2.75-2.418-4.703v.001zM4 12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm11-6c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm0 12c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"/>
    </svg>
  </Icon>,
  edit: (props) => <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44">
      <g fill="none" fill-rule="evenodd">
        <g>
          <path d="M0 0L24 0 24 24 0 24z" transform="translate(9 10)"/>
          <path className='ma-main' fill-rule="nonzero" d="M15.728 9.686l-1.414-1.414L5 17.586V19h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zM7.242 21H3v-4.243L16.435 3.322c.39-.39 1.024-.39 1.414 0l2.829 2.829c.39.39.39 1.024 0 1.414L7.243 21h-.001z" transform="translate(9 10)"/>
        </g>
      </g>
    </svg>
  </Icon>,
  msg: (props) => <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
        <path className='ma-main' d="M4.455 13L0 16.5V1c0-.552.448-1 1-1h15c.552 0 1 .448 1 1v12H4.455zm-.692-2H15V2H2v10.385L3.763 11zM7 15h10.237L19 16.385V6h1c.552 0 1 .448 1 1v13.5L16.545 17H8c-.552 0-1-.448-1-1v-1z"/>
    </svg>
  </Icon>,
  profile: (props) => <Icon {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21">
        <path className='ma-main' d="M0 21c0-4.418 3.582-8 8-8s8 3.582 8 8h-2c0-3.314-2.686-6-6-6s-6 2.686-6 6H0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/>
    </svg>
  </Icon>
}


const Icon = styled(Link)`
  display: inline-block;
  width: 44px;
  height: 44px;
  object-fit: contain;
  background-color: ${p => p.theme.icon};
  margin-left: 35px;
  margin-bottom: 27px;
  text-align: center;
  line-height: 50px;
  border-radius: 12px;
  &.selected {
    background-color: ${p => p.theme.color};
    .ma-main {
      fill: white;
    }    
  }
  .ma-main {
    fill: ${p => p.theme.color};
  }

`