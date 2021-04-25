import React, { useState } from 'react';
import { NavLink, Route, Switch, useParams } from 'react-router-dom';
import MasterProjectProfile from './master-project-profile';
import CompilanceProjectDetails from './compilance-project-details';
import CompilanceRecords from './compliance-projects';
import CaseManagement from './case-management';

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

const Panel = () => {
  const { project_id } = useParams();

  return (
    <>
      <div className="custom_container">
        <ul className="breadcrumb entity_detail_menu">
          <li>
            <NavLink
              to={`/projects/${project_id}`}
              activeClassName="active"
              exact
            >
              <span className="step_count">1</span>
              <span className="detail">
                <span className="title">Master Project Profile</span>
                <span className="sub_title"> Summary of roject </span>
              </span>
            </NavLink>
          </li>
          <li className="separator">
            <AngleRight />
          </li>
          <li>
            <NavLink
              to={`/projects/${project_id}/compliance-project-details`}
              activeClassName="active"
              exact
            >
              <span className="step_count">2</span>
              <span className="detail">
                <span className="title">Compilance Project Details</span>
                <span className="sub_title"> Detailed view of project </span>
              </span>
            </NavLink>
          </li>

          <li className="separator">
            <AngleRight />
          </li>
          <li>
            <NavLink
              to={`/projects/${project_id}/compliance-projects`}
              activeClassName="active"
              exact
            >
              <span className="step_count">3</span>
              <span className="detail">
                <span className="title">Compilance Projects</span>
                <span className="sub_title">
                  {' '}
                  Detailed view of compilance projects{' '}
                </span>
              </span>
            </NavLink>
          </li>

          <li className="separator">
            <AngleRight />
          </li>
          <li>
            <NavLink
              to={`/projects/${project_id}/case-management`}
              activeClassName="active"
              exact
            >
              <span className="step_count">4 </span>
              <span className="detail">
                <span className="title">Case Management</span>
                <span className="sub_title">Detailed view of issues/cases</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/projects/:project_id" exact>
          <MasterProjectProfile />
        </Route>
        <Route path="/projects/:project_id/compliance-project-details" exact>
          <CompilanceProjectDetails profileData={{}} />
        </Route>
        <Route path="/projects/:project_id/compliance-projects" exact>
          <CompilanceRecords profileData={{}} />
        </Route>
        <Route path="/projects/:project_id/case-management" exact>
          <CaseManagement profileData={{}} />
        </Route>
      </Switch>
    </>
  );
}

export default Panel;
