import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import { projectProfile, projectList } from '../routes';
import ProjectElem from './list';
import qgate from '../../assets/images/qgate.png';
import BasicTable from '../../shared/table-material';

const headlines = [ 'Name', 'Shortname', 'Type', 'Websites', 'Mobile', 'E-Services', 'Completion Percentage' ];

const defaultRows = [
  [ 'The General Retirement and Social Insurance Authority', 'GRISA', 'Authority', 24, 22, 12, 80 ],
  [ 'Ministry of Administrative Development, Labour and Social Affairs', 'ADLSA', 'Ministry', 37, 43, 33, 45 ],
  [ 'Ministry of Social Affairs', 'MOCI', 'Ministry', 37, 43, 33, 90 ],
  [ 'Ministry of Administrative Development', 'MAD', 'Ministry', 37, 43, 33, 30 ],
  [ 'Ministry of Labour Development', 'MLD', 'Ministry', 37, 43, 33, 43 ],
  [ 'Ministry of Labour Development', 'MLD', 'Ministry', 37, 43, 33, 43 ],
];

const ProjectList = () => {
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
          <Route path={projectProfile({ expand: false })}>
            <ProjectElem />
          </Route>
          <Route path={projectList()}>
            <div className="entity_cards">
              <ul className="entity_boardcard_wrap">
                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Compliance Project - Completed</span>

                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Compliance Project - In Progress</span>
                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Compliance Project - Not Started</span>
                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Total Compliance Issues</span>
                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Total Challenges Issues</span>
                    <span className="count">34</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="custom_container ">
              <div className="custom_row">
                <div className="flex_row padding-t-b table-header">
                  <div className="input_col">
                    <div className="text_field_wrapper">
                      <input
                        type="text"
                        className="srch_input"
                        placeholder="Search projects by Name/Owner/Sponsor"
                      />
                    </div>
                  </div>

                  <div className="action_col">
                    <div className="flex_row">
                      <div className="flex_col_sm_8">
                        <ul className="filter_check">
                          <li>Show only </li>

                          <li>
                            <div className="checkbox_wrap agree_check">
                              <input
                                className="filter-type filled-in"
                                type="checkbox"
                                name="filter"
                                id="ministry"
                              />
                              <label htmlFor="ministry">Website/Portals </label>
                            </div>
                          </li>

                          <li>
                            <div className="checkbox_wrap agree_check">
                              <input
                                className="filter-type filled-in"
                                type="checkbox"
                                name="filter"
                                id="Authority"
                              />
                              <label htmlFor="Authority">Mobile </label>
                            </div>
                          </li>

                          <li>
                            <div className="checkbox_wrap agree_check">
                              <input
                                className="filter-type filled-in"
                                type="checkbox"
                                name="filter"
                                id="Agency"
                              />
                              <label htmlFor="Agency">E-Services </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex_col_sm_4 text-right">
                        <NavLink to="/projects/new/profile">
                          <button className="btn_solid">
                            + Create Project{' '}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table_wrapper">
                  <BasicTable tableCells={headlines} rows={defaultRows} />
                </div>
              </div>
            </div>
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

export default ProjectList;
