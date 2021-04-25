import React from 'react';
import { NavLink, Route, Switch, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import { projectPolicy, policyList } from '../routes';
import ProjectElem from './list';
import qgate from '../../assets/images/qgate.png';
import BasicTable from '../../shared/table-material';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const ProjectList = (props) => {
  const [checked, setChecked] = React.useState(false);
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
          <Route path={projectPolicy({ expand: false })}>
            <ProjectElem />
          </Route>
          <Route path={policyList()}>
            <div className="entity_cards">
              <ul className="entity_boardcard_wrap">
                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Policy Backlog</span>

                    <span className="count">500</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Exception Grounds</span>
                    <span className="count">128</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Knowledge Grounds</span>
                    <span className="count">500</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Initiative Requests</span>
                    <span className="count">128</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">On Hold Cases</span>
                    <span className="count">128</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="custom_container ">
              <div className="custom_row">
                <div className="flex_row padding-t-b table-header">
                  <LeftActions>
                    <div className="input_col">
                      <div className="text_field_wrapper">
                        <select>
                          <option>Select Status</option>
                          <option>Active</option>
                          <option>Inactive</option>
                          <option>Approved</option>
                          <option>Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="input_col">
                      <div className="text_field_wrapper">
                        <input
                          type="text"
                          className="srch_input"
                          placeholder="Search grounds"
                        />
                      </div>
                    </div>
                  </LeftActions>

                  <div className="action_col">
                    <div className="flex_row">
                      <RightActions className="flex_col_sm_8">
                        <span>Filter By</span>
                        <div className="text_field_wrapper">
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              disableToolbar
                              variant="inline"
                              format="dd-MM-yyyy"
                              id="date-picker-inline"
                              value={new Date()}
                              onChange={(date) => {}}
                              autoOk={true}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                          </MuiPickersUtilsProvider>
                        </div>
                        <div className="text_field_wrapper">
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                              disableToolbar
                              variant="inline"
                              format="dd-MM-yyyy"
                              id="date-picker-inline"
                              value={new Date()}
                              onChange={(date) => {}}
                              autoOk={true}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />
                          </MuiPickersUtilsProvider>
                        </div>
                      </RightActions>
                      <div className="flex_col_sm_4 text-right">
                        <NavLink to="/policy/new/profile">
                          <button className="btn_solid">
                            {` + Create Ground `}
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>

                <BasicTable
                  tableCells={[
                    {
                      headline: 'Status',
                      key: '',
                    },
                    {
                      headline: 'Grounds ID',
                      key: '',
                    },
                    {
                      headline: 'Title',
                      key: '',
                    },
                    {
                      headline: 'Cases',
                      key: '',
                    },
                    {
                      headline: 'Category',
                      key: '',
                    },
                    {
                      headline: 'Created By',
                      key: '',
                    },
                    {
                      headline: 'Created On',
                      key: '',
                    },
                    {
                      headline: 'Proposed Date',
                      key: '',
                    },
                  ]}
                  rows={[]}
                />
              </div>
            </div>
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

const LeftActions = styled.div`
  display: flex;

  .input_col {
    max-width: 200px;
    margin-right: 20px;
  }
`;

const RightActions = styled.div`
  display: flex;
  align-items: center;

  > * {
    &:first-child {
      margin-left: 32px;
    }

    margin-right: 16px;
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
