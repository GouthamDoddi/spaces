import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import ProjectElem from './panel';
import qgate from '../../assets/images/qgate.png';
import ProjectList from './list';

const Projects = () => {
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
        </FilterBreadcrumb>
        <Switch>
          <Route path={['/projects/:project_id', '/projects/new']} exact>
            <ProjectElem />
          </Route>
          <Route path="/projects" exact>
            <ProjectList />
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

export default Projects;
