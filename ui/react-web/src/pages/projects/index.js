import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import ProjectElem from './panel';
import qgate from '../../assets/images/qgate.png';
import ProjectList from './list';
import Nav2 from '../../components/breadcrumNav';

const Projects = () => {
  return (
    <div className="app_wrapper">
      <NewLayout>
        <HeaderBar className="hb" />
        <Nav2 />
        <Switch>
          <Route path={['/projects/:project_id', '/projects/:project_id/compliance-project-details', '/projects/:project_id/compliance-projects', '/projects/:project_id/case-management']} exact>
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
