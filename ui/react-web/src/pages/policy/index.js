import React from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import { projectPolicy, policyList } from '../routes';
import GroundElem from './panel';
import qgate from '../../assets/images/qgate.png';
import GroundList from './list';
import Navbar2 from '../../components/breadcrumNav';

const ProjectList = () => {
  return (
    <div className="app_wrapper">
      <NewLayout>
        <HeaderBar className="hb" />
        <Navbar2 />
        <Switch>
          <Route path={projectPolicy({ expand: false })}>
            <GroundElem />
          </Route>
          <Route path={policyList()}>
            <GroundList />
          </Route>
        </Switch>
      </NewLayout>
    </div>
  );
};

const FilterBreadcrumb = styled.div`
  background-color: #f7fafd !important;
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

export default withRouter(ProjectList);
