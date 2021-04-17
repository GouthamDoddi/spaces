import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import HeaderBar from '../../../shared/header_bar';
import Table, { Header, Row } from '../../../shared/table';
import LeftMenu from '../../../shared/left-menu';
import Banner from '../../../shared/hmc-banner';

import { entitiesData, entityTypes } from '../../../store/master-data';
import { Link, NavLink, Route, Switch, useParams } from 'react-router-dom';
import { entityEnter, entityList } from '../../../pages/routes';
import { Input } from '../../../components/form';
import { Button } from '../../../shared/button';

import EntityElem from '../../../pages/entities';
import makeStore from '../../../store/make-store';
import { useStore } from 'effector-react';
import { hasMenuAccess } from '../../../store/user';
import qgate from '../../../assets/images/qgate.png';
import leftArrow from '../../../assets/images/left-arrow.svg';
import textDocumentIcon from '../../../assets/images/text-document.svg';
import editIcon from '../../../assets/images/edit.svg';
import groundMapping from '../../../assets/images/ground-mapping.svg';

import ActivityLogComponent from './activity-logs';
import StatusUpdateComponent from './status-update';

import CaseInfo from './case-info';
import { NewLayout } from '../../entities/list';

const { store, load } = makeStore('entities/list');


export default function () {
  const [status, setStatus] = useState(1);
  const { entity_id } = useParams();
  const [bannerTitle, setBannerTitle] = useState('');
  const [filterVal, setFilterVal] = useState('');


  const [step, setStep] = useState(1);
  const [profileData, setProfileData] = useState({});


  useEffect(() => {
    if (!entity_id) {
      load();
    }
    entity_id
      ? setBannerTitle(entitiesData[entity_id]?.name || 'Entities')
      : setBannerTitle('Entities');
  }, [entity_id]);

  const entityStore = useStore(store);

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
              <CaseInfo />
            </div>

            <InnerCol4 className="flex_col_sm_4">
              <div className="flex_row">
                <ActivityLogs marginLeft={true} active={status === 1} onClick={() => { setStatus(1) }}>
                  {'Status & Updates'}
                </ActivityLogs>
                <ActivityLogs marginLeft={true} active={status === 2} onClick={() => { setStatus(2) }}>
                  {'Activity Logs'}
                </ActivityLogs>
              </div>

              <OuterRightCol className="flex_row">
                <div className="flex_col_sm_8">
                  {status === 1 && <StatusUpdateComponent />}
                  {status === 2 && <ActivityLogComponent />}
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
  background: transparent !important;
  margin-top: 75px;

  ul {
    padding-left: 0px;
  }
`;
