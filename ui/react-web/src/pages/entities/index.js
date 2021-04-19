import React, { useState } from 'react';

import styled from 'styled-components';

// import { Tab, EmptyTab } from '../../shared/tabs'

// import { Switch, Route, useParams, Redirect } from 'react-router-dom'
// import {entityProfile, entityCommm, entityAccess, entityService} from '../routes'

import Profile from './profile';
// import Communication from './communication'
// import Access from './access'
// import Services from './services'
// import Banner from '../../shared/hmc-banner'
// import { entitiesData } from '../../store/master-data'
import Details from './details';

const AngleRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10.801"
      height="20"
      viewBox="0 0 10.801 20"
    >
      <path
        fill="#cfcfcf"
        d="M128.316,9.451,119.065.226a.775.775,0,1,0-1.095,1.1L126.67,10l-8.7,8.676a.775.775,0,0,0,1.1,1.1l9.251-9.225a.775.775,0,0,0,0-1.1Z"
        transform="translate(-117.742 0)"
      />
    </svg>
  );
};

export default function () {
  const [step, setStep] = useState(1);

  return (
    <div>
      {/* <Banner type={entitiesData[entity_id]?.name || 'Entities'} size='32px' mobile='10' websites='10' eservices='32' hideItems hideScore className='bnr' />
    <Wrapper>
      <Tabs>
        <Tab to={entityProfile({entity_id, expand: true})}> Profile </Tab>
        { entity_id != 'new' ? 
          <>
            <Tab to={entityCommm({ entity_id, expand: true})}> Communication</Tab>
            <Tab to={entityAccess({ entity_id, expand: true})}> Access</Tab>
            <Tab to={entityService({ entity_id, expand: true})}> Services </Tab>
          </> : null
        } */}
      {/* <Tab to={compliance({ id: project_id, expand: true})}> Cases</Tab> */}
      {/* <EmptyTab/>
      </Tabs>
      <Content>
        <Switch>
          <Route path={entityProfile({entity_id})}><Profile /></Route>
          <Route path={entityCommm({entity_id})}><Communication /></Route>
          <Route path={entityAccess({entity_id})}><Access /></Route>
          <Route path={entityService({entity_id})}><Services /></Route>
          <Redirect to={entityProfile({entity_id})} />
        </Switch>
      </Content>
    </Wrapper> */}

      <div className="custom_container">
        <ul className="breadcrumb entity_detail_menu">
          <li>
            <span className={step === 1 ? 'active' : 'clickable'} onClick={step !== 1 ? () => setStep(1) : undefined}>
              <span className="step_count">1</span>
              <span className="detail">
                <span className="title">Entity Users</span>
                <span className="sub_title">Explain about the entity</span>
              </span>
            </span>
          </li>
          <li className="separator"><AngleRight /></li>
          <li>
            <span href="#" className={step === 2 ? 'active' : ''}>
              <span className="step_count">2</span>
              <span className="detail">
                <span className="title">Entity Communication</span>
                <span className="sub_title">Set communication rules</span>
              </span>
            </span>
          </li>
        </ul>
      </div>
      {step === 1 ? <Profile /> : <Details />}
    </div>
  );
}

// const Wrapper = styled.div`
//   display: flex;
//   width: 100%;
//   grid-column: 1 / -1;
//   flex-direction: column;
// `
// const Tabs = styled.div`
//   display: flex;
// `

// const Content = styled.div`
//   border: solid 1px #bbbbbb;
//   border-top: none;
//   padding-bottom: 50px;
//   min-height: 650px;
//   background-color: #fff;
//   padding-top: 20px;
// `

// const SubTabs = styled.div`
//   grid-column: 1 / -1;
//   height: 51px;
//   background-color: #eeeeee;
//   display: flex;
//   align-items: center;
// `

// const SubTab = styled.div`
//   margin-left: 30px;
//   height: 50px;
//   line-height: 50px;
//   font-size: 18px;
//   text-align: left;
//   padding: 0 10px;
//   color: #666666;
//   align-items: center;
//   &.selected {
//     color: #eb622b;
//     border-bottom: 4px solid #eb622b;
//   }
// `
