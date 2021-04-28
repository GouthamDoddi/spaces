import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
// import CaseElem from './panel';
// import qgate from '../../assets/images/qgate.png';
import GroundsList from './list';

const Cases = () => {
  return (
    <div className="app_wrapper">
      <NewLayout>
        <HeaderBar className="hb" />
        <Switch>
          {/* <Route path={['/cases/:case_id', '/cases/:case_id/compliance-project-details', '/cases/:case_id/compliance-projects', '/cases/:case_id/case-management']} exact>
            <CaseElem />
          </Route> */}
          <Route path="/grounds" exact>
            <GroundsList />
          </Route>
        </Switch>
      </NewLayout>
    </div>
  );
};

const FilterBreadcrumb = styled.div`
  background-color: #F7FAFD !important;
  margin-top: 75px;

  ul {
    padding-left: 0px;
  }
`;

export const Progress = styled.span`
  ${({ width }) => css`
    display: block;
    position: absolute;
    height: 100%;
    width: ${width};
    background-color: #3fbf11;
  `}
`;

export default Cases;
