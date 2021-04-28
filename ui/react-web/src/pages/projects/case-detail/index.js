import React, { useState } from 'react';
import styled from 'styled-components';
import HeaderBar from '../../../shared/header_bar';

import { NavLink } from 'react-router-dom';
import qgate from '../../../assets/images/qgate.png';

import ActivityLogComponent from './activity-logs';
import StatusUpdateComponent from './status-update';
import MappingGroundComponent from './mapping-ground';

import CaseInfo from './case-info';
import { NewLayout } from '../../entities';

export default function (props) {
  const [step, setStep] = useState(1);

  return (
    <div className="app_wrapper">
      <NewLayout>
        <HeaderBar className="hb" />
        <FilterBreadcrumb className="custom_container">
          <div className="filter_breadcrumb">
            <ul>
              <li>
                <NavLink to="/">
                  <img src={qgate} width="100%" />
                </NavLink>
              </li>

              <li>
                <div className="filter_sele active">
                  <label>State</label>
                  <select>
                    <option>Select State</option>
                  </select>
                </div>
              </li>

              <li>
                <div className="filter_sele">
                  <label>Entity</label>
                  <select>
                    <option>Select Entity</option>
                  </select>
                </div>
              </li>

              <li>
                <div className="filter_sele">
                  <label>Project</label>
                  <select>
                    <option>Select Project</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>


          <OuterRowItem className="flex_row">
            <div className="flex_col_sm_8">
              {props.ground ? <MappingGroundComponent /> : <CaseInfo />}
            </div>

            <InnerCol4 className="flex_col_sm_4">
              <div className="flex_row">
                <ActivityLogs marginLeft={true} active={step === 1} onClick={() => { setStep(1) }}>
                  {'Status & Updates'}
                </ActivityLogs>
                <ActivityLogs marginLeft={true} active={step === 2} onClick={() => { setStep(2) }}>
                  {'Activity Logs'}
                </ActivityLogs>
              </div>

              <OuterRightCol className="flex_row">
                <div className="flex_col_sm_8">
                  {step === 1 && <StatusUpdateComponent />}
                  {step === 2 && <ActivityLogComponent />}
                </div>
              </OuterRightCol>
            </InnerCol4>
          </OuterRowItem>
        </FilterBreadcrumb>
      </NewLayout>
    </div>
  );
}

const OuterRightCol = styled.div`
    margin-top:65px !important;
`

const ActivityLogs = styled.span`
  margin-left: ${props => props.marginLeft ? "5%" : "0px"};
  color: ${props => props.active ? "#EB622B" : '#000'};
  padding: 22px 10px;
  cursor:pointer;
  border-bottom: ${props => props.active ? "2px solid #EB622B" : '2px solid #fff'};
  
  &:hover {
    color:#EB622B;
    border-bottom:2px solid #EB622B;
  }
`

const OuterRowItem = styled.div`
  display:flex;
  height:70px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
`

const InnerCol4 = styled.div`
  height:70px;
`

const FilterBreadcrumb = styled.div`
  background-color: #F7FAFD !important;
  margin-top: 75px;

  ul {
    padding-left: 0px;
  }
`;
