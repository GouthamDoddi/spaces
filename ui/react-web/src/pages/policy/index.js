import React from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import { projectPolicy, policyList } from '../routes';
import GroundElem from './panel';
import qgate from '../../assets/images/qgate.png';
import GroundList from './list';
// import Navbar2 from '../../components/breadcrumNav';
import Footer from '../../components/footer';

import { isJAWDAUser } from '../../store/user';

const ProjectList = () => {

  return (
    <div className="app_wrapper">
      <NewLayout>
        <HeaderBar className="hb" />
        {isJAWDAUser() && (
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
                    <label>QDG</label>
                  </div>
                </li>

              </ul>
            </div>
          </FilterBreadcrumb>
        )}
        <Switch>
          <Route path={projectPolicy({ expand: false })}>
            <GroundElem />
          </Route>
          <Route path={policyList()}>
            <GroundList />
          </Route>
        </Switch>
        <Footer />
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
