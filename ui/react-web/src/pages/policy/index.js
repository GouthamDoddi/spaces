import React from 'react';
import { NavLink, Route, Switch , withRouter} from 'react-router-dom';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import { projectPolicy, policyList } from '../routes';
import ProjectElem from './list';
import qgate from '../../assets/images/qgate.png';
import BasicTable from '../../shared/table-material';
import Checkbox from '@material-ui/core/Checkbox';

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
                                    <div className="input_col">
                                        <div className="text_field_wrapper">
                                            {/* <input
                        type="text"
                        className="srch_input"
                        placeholder="Search projects by Name/Owner/Sponsor"
                      /> */}
                                        </div>
                                    </div>

                                    <div className="action_col">
                                        <div className="flex_row">
                                            <div className="flex_col_sm_8">
                                                <ul className="filter_check">
                                                    {/* <li>Show only </li> */}

                                                    <li>
                                                        <div className="checkbox_wrap agree_check">
                                                            <input
                                                                className="filter-type filled-in"
                                                                type="checkbox"
                                                                name="filter"
                                                                id="ministry"
                                                            />
                                                            {/* <label htmlFor="ministry">Website/Portals </label> */}
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
                                                            {/* <label htmlFor="Authority">Mobile </label> */}
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
                                                            {/* <label htmlFor="Agency">E-Services </label> */}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
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

                                <Checkbox
                                    checked={checked}
                                    onClick={() => {
                                        setChecked(!checked);
                                        props.history.push('/selected/policy')}
                                    }
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
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

export default withRouter(ProjectList);
