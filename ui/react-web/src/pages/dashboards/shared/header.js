import styled, { css } from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

import Switch from 'react-switch'
// import translations from '../../../utils/translate'
import translate, { t } from '../../../utils/translate'
import { menuItemsByRole } from '../../../store/user'

export const LangSwitch = ({ lang, setLang, alignItems }) => {
  const changeLang = (l) => {
    translate.setLang(l)
    setLang(l)
  }

  return (
    <StyledSwitch alignItems={alignItems}>
      <span style={lang == 'ar' ? {color: '#ccc'} : {color: '#2693e6'}}> En </span>
      <Switch className='lang' onChange={(checked) => checked ? changeLang('ar') : changeLang('en')} checked={lang == 'ar'} 
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={30}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        activeBoxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        height={20}
        width={48}
      />
      <span style={lang == 'en' ? {color: '#ccc', marginLeft: '6px'} : {color: '#2693e6', marginLeft: '6px'}} >Ar</span>
    </StyledSwitch>
  );
}

export default function({children, viewType, viewName, lang, setLang,  ...props}) {
  return(
    <Outline>
      <div className='logo'>
        <img src='/img/logo-jawda.jpg' />
        <div className={lang}> 
          <div className='view'>{t(viewType) || viewType}</div>
          <div className='name'>{t(viewName) || viewName}</div>
        </div>
      </div>
      {children}
      <div className='menu'> 
        <LangSwitch lang={lang} setLang={setLang} />
        {
            menuItemsByRole().map((o,i) => (
              <Link to={o.path} key={i}> {t(o.name)} </Link> 
            ))
        }
      </div>
    </Outline>
  )
}
const Outline = styled.div`
  top: 0px;
  left: 0px;

  height: 60px;
  width: 100%;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  // box-shadow: 0px 3px 5px #00000012;
  line-height: 60px;
  display: flex;
  justify-content: space-between;

  > .logo {
    margin: 0 60px;
    margin-top: 10px;
    display: flex;
    img {
      width: 128px;
      height: 40px;
      margin: 0 40px;
    }

    > div {
      border-left: 1px solid #CFCFCF;
      &.ar {
        border-left: none;
        border-right: 1px solid #CFCFCF;
        margin-left: 20px;
      }
      
      // line-height: 40px;
      height: 40px;
      padding: 0 30px;
      > .view {
        font: normal normal normal 14px/18px Muli;
        color: #999999;  
      }
      > .name {
        font: normal normal bold 15px/22px Muli;
        color: #000000;
      }
    }
  }
  > .menu {
    margin: 0 50px;
    .lang {
      top: 10px;
    }
    a {
      padding: 10px;
      // background-color: #EB622B;
      // color: #fff;
      color: #666666;
      border-radius: 4px;
    }
  }

`

const StyledSwitch = styled.div`${({ alignItems }) => css`
  display: inline-flex;
  align-items: ${alignItems || 'baseline'};
  margin-right: 20px;

  span:first-child {
    margin-right: 6px;
  }
`}`;
