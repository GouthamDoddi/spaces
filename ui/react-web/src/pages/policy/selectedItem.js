import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderBar from '../../shared/header_bar';

import { entitiesData } from '../../store/master-data';
import { NavLink, useParams, withRouter } from 'react-router-dom';

import makeStore from '../../store/make-store';
import { useStore } from 'effector-react';
import qgate from '../../assets/images/qgate.png';

import leftArrowIcon from '../../assets/images/left-arrow.svg'
import { NewLayout } from '../entities';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


export default withRouter(function (props) {
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
                <div className="custom_container">
                    <CustomRowContainer className="flex_row">
                        <div className="flex_col_sm_12">
                            {'Cases mapped to Ground 2356'}
                        </div>
                    </CustomRowContainer>

                    <OuterRowSpace extraSpace={true} className="flex_row">
                        <div className="flex_col_sm_4">
                            <div className="flex_row">
                                <div className="flex_col_sm_12">
                                    <DisplayItemFlex>
                                        <img src={leftArrowIcon} alt="left-arrow" onClick={() => { props.history.push('/policy') }}/>
                                        <LabelCaseID>
                                            {'Ground ID: 2356'}
                                        </LabelCaseID>
                                        <SubmittedIcon>
                                            {'Active'}
                                        </SubmittedIcon>
                                    </DisplayItemFlex>

                                    <OuterRowSpace extraSpace={true} className="flex_row">
                                        <div className="flex_col_sm_12">
                                            <TextCustom fontBold={true} bigFont={true}>
                                                {'Two-factor authentication to make private, E-mail after registration so'}
                                            </TextCustom>
                                            <br /><br />
                                            <OuterRowSpace noSpace={true} className="flex_row">
                                                <div className="flex_col_sm_4">
                                                    <TextCustom greyColor={true} fontSmall={true}>
                                                        {'Created By'}
                                                    </TextCustom>
                                                </div>
                                                <div className="flex_col_sm_4">
                                                    <TextCustom greyColor={true} fontSmall={true}>
                                                        {'Created on'}
                                                    </TextCustom>
                                                </div>
                                                <div className="flex_col_sm_4">
                                                    <TextCustom greyColor={true} fontSmall={true}>
                                                        {'Proposed Date'}
                                                    </TextCustom>
                                                </div>
                                            </OuterRowSpace>
                                            <OuterRowSpace noSpace={true} className="flex_row">
                                                <div className="flex_col_sm_4">
                                                    <TextCustom fontSmall={true}>
                                                        {'John Doe'}
                                                    </TextCustom>
                                                </div>
                                                <div className="flex_col_sm_4">
                                                    <TextCustom fontSmall={true}>
                                                        {'22/02/2021'}
                                                    </TextCustom>
                                                </div>
                                                <div className="flex_col_sm_4">
                                                    <TextCustom fontSmall={true}>
                                                        {'22/02/2021'}
                                                    </TextCustom>
                                                </div>
                                            </OuterRowSpace>

                                        </div>
                                    </OuterRowSpace>


                                    <OuterRowSpace extraSpace={true} className="flex_row">
                                        <div className="flex_col_sm_12">
                                            <TextCustom greyColor={true}>
                                                {'Categories'}
                                            </TextCustom>
                                            <br /><br />
                                            {['Exception Grounds'].map(item => (
                                                <SpanCategory>
                                                    {item}
                                                </SpanCategory>
                                            ))}
                                        </div>
                                    </OuterRowSpace>

                                    <OuterRowSpace noSpace={true} className="flex_row">
                                        <div className="flex_col_sm_12">
                                            <TextCustom greyColor={true}>
                                                {'Mark as'}
                                            </TextCustom>
                                            <InfoOutlinedIcon style={{ height: '15px', fill: '#999999' }} />
                                        </div>
                                    </OuterRowSpace>

                                    <OuterRowSpace className="flex_row">
                                        <div className="flex_col_sm_6">
                                            <select
                                                name="role"
                                                value={''}
                                            >
                                                <option value="test1">Approved</option>
                                            </select>
                                        </div>
                                        <div className="flex_col_sm_6">
                                            <CustomButton>
                                                {'Submit'}
                                            </CustomButton>
                                        </div>
                                    </OuterRowSpace>
                                </div>
                            </div>
                        </div>
                    </OuterRowSpace>
                </div>
            </NewLayout>
        </div>
    );
});

const CustomButton = styled.button`
  background: #EB622B;
  padding: 8px 30px;
  border: none;
  border-radius: 5px;
  color: #fff;
`

const CustomRowContainer = styled.div`
  padding: 25px;
  color: #666666;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`



const SpanCategory = styled.span`
    background-color: #F5F5F5;
    color: #1A6B8F;
    padding: 5px 15px;
    border-radius: 15px;
    margin-right: 10px;
    font-size: 12px;
`
const TextCustom = styled.span`
    font-weight:${props => props.fontBold ? 'bold' : 'normal'};
    font-size:${props => props.bigFont ? '20px' : props.fontSmall ? '12px' : '14px'};
    color:${props => props.greyColor ? '#999999' : '#000000'};
    margin:10px 0px;
`

const OuterRowSpace = styled.div`
    margin:${props => props.extraSpace ? '40px 0px !important' : props.extraMoreSpace ? '80px 0px !important' : props.noSpace ? '0px 0px !important' : '10px 0px !important'};
`

const DisplayItemFlex = styled.div`
    display:flex;
`

const SubmittedIcon = styled.span`
    background: #0064FE;
    color: #fff;
    padding: 8px 20px;
    border-radius: 15px;
    font-size: 12px;
`

const LabelCaseID = styled.span`
    color:#666666;
    padding:5px 15px;
    font-weight:bold;
`

const FilterBreadcrumb = styled.div`
  background-color: #F7FAFD !important;
  margin-top: 75px;

  ul {
    padding-left: 0px;
  }
`;
