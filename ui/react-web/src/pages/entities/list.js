import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import HeaderBar from '../../shared/header_bar';
import Table, { Header, Row } from '../../shared/table';
import LeftMenu from '../../shared/left-menu';
import Banner from '../../shared/hmc-banner';

import { entitiesData, entityTypes } from '../../store/master-data';
import { Link, NavLink, Route, Switch, useParams } from 'react-router-dom';
import { entityEnter, entityList } from '../../pages/routes';
import { Input } from '../../components/form';
import { Button } from '../../shared/button';

import EntityElem from '../../pages/entities';
import makeStore from '../../store/make-store';
import { useStore } from 'effector-react';
import { hasMenuAccess } from '../../store/user';
import qgate from '../../assets/images/qgate.png';

const { store, load } = makeStore('entities/list');

const columns1 = '80px 3.5fr 1.5fr repeat(7, 1fr);';
export default function (props) {
  const { entity_id } = useParams();

  const [bannerTitle, setBannerTitle] = useState('');

  const data = Object.values(entitiesData);
  const [filterVal, setFilterVal] = useState('');
  const filter = (metadata, { key, value }) =>
    metadata.filter((o) =>
      o[key]?.toLowerCase()?.includes(value.toLowerCase().trim())
    );

  useEffect(() => {
    if (!entity_id) {
      load();
    }
    entity_id
      ? setBannerTitle(entitiesData[entity_id]?.name || 'Entities')
      : setBannerTitle('Entities');
  }, [entity_id]);

  const entityStore = useStore(store);

  const entityData = entityStore.data || [];

  return (
    <div className="app_wrapper">
      <Layout>
        {/* <Left>
        <LeftMenu selected='entities' except={['my-tasks']}></LeftMenu>
      </Left> */}

        <HeaderBar className="hb" />
        {/* <Banner type={bannerTitle} size='32px' mobile='10' websites='10' eservices='32' hideScore className='bnr' /> */}
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
          <Route path={entityEnter()}>
            <EntityElem />
          </Route>
          <Route path={entityList()}>
            {/* <Banner type={bannerTitle} size='32px' hideItems hideScore className='bnr' />
            { hasMenuAccess(['entity', 'profile'], 'C') ? <Button top='295px' className='right' href="#/entities/new">Create Entity</Button> : null }
            <CustomInput label='Filter' type='text' name='filter' onChange={(ev) => setFilterVal(ev.target.value)} value={filterVal || ''}/>
            <Table className='tbl' title='Entities' showAll={false}>
              <Header columns={columns1}>
                {
                  ['#', 'Name', 'Short Name', 
                    'Type', 'Websites', 'Mobile', 
                    'E-Services', 'Tested %', 'Defects', 'Fixed'
                  ].map((h, i) => <div className={i > 3 ? 'center' : ''} key={i}>{h}</div>)
                }
                  
              </Header>
              { filter(entityData, {key: 'name', value: filterVal}).map((o, i) => (
                <Row key={i} columns={columns1} className='row'>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {i + 1} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} style={{'padding-right': '20px'}}> {o.name} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {o.short_name} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})}> {entityTypes[o.type_id]?.label} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.websites} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.mobile} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.eservices} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.tested}% </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.defects} </CLink>
                  <CLink to={entityEnter({entity_id: o.id, expand: true})} className='center'> {entitiesData[o.id]?.fixed} </CLink>
                 </Row>

              ))}
            </Table> */}

            <div className="entity_cards">
              <ul className="entity_boardcard_wrap">
                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Total Entities</span>

                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Total Entities</span>
                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Total Entities</span>
                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Total Entities</span>
                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Total Entities</span>
                    <span className="count">34</span>
                  </a>
                </li>

                <li className="entity_boardcard">
                  <a className="inner_wrap">
                    <span className="title">Total Entities</span>
                    <span className="count green">74%</span>
                    <span className="progressbar_wrap">
                      <Progress className="progress" width="74%" />
                    </span>
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
                              <label htmlFor="ministry">Ministry </label>
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
                              <label htmlFor="Authority">Authority </label>
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
                              <label htmlFor="Agency">Authority </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="flex_col_sm_4 text-right">
                        <Link to="/entities/new">
                          <button className="btn_solid">
                            + Create Entity{' '}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table_wrapper">Table Here</div>
              </div>
            </div>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

const Left = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 270px;
`;

// const Content = styled.div`
//   margin: 0 30px;
//   margin-bottom: 30px;
//   display: grid;
//   grid-gap: 30px;
//   grid-template-columns: repeat(12, 1fr);
//   grid-auto-rows: auto;

//   .hb { grid-column: 1 / -1};
//   .bnr { grid-column: 1 / -1};
//   .tbl {
//     grid-column: 1 / -1;
//     height: 100%;
//     .row {
//       &:last-child {border-bottom: none;}
//     }
//   };
// `

const FilterBreadcrumb = styled.div`
  background: transparent !important;
  margin-top: 75px;

  ul {
    padding-left: 0px;
  }
`;

const Progress = styled.span`
  ${({ width }) => css`
    display: block;
    position: absolute;
    height: 100%;
    width: ${width};
    background-color: #3fbf11;
  `}
`;

const Layout = styled.div`
  ul {
    list-style: none;
    margin: 0px !important;
  }

  .entity_cards {
    border: 1px solid #bbbbbb;
    display: flex;
    justify-content: center;
    border-top: none;
    padding: 0px 78px;
    background: white;

    .entity_boardcard_wrap {
      display: flex;
      justify-content: center;
      padding: 20px 0;
      width: 100%;
      max-width: 1740px;
    }
  }

  .entity_boardcard {
    width: 16.6%;
    padding: 0 10px;
  }

  .entity_boardcard .inner_wrap {
    height: 147px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddddd;
    opacity: 1;
    padding: 0 20px;
    display: block;
  }

  .entity_boardcard .inner_wrap .title {
    text-align: left;
    font: normal normal bold 15px/22px Muli;
    letter-spacing: 0px;
    color: #000000;
    display: block;
    margin: 20px 0 40px 0;
  }

  /* .entity_boardcard .inner_wrap:nth-child(1){
  border-top: 2px solid #3FBF11 ;
} */

  .entity_boardcard_wrap .entity_boardcard:first-child .inner_wrap {
    border-top: 2px solid #3fbf11;
  }

  .entity_boardcard_wrap .entity_boardcard:nth-child(2) .inner_wrap {
    border-top: 2px solid #eb622b;
  }

  .entity_boardcard_wrap .entity_boardcard:nth-child(3) .inner_wrap {
    border-top: 2px solid #2680eb;
  }

  .entity_boardcard_wrap .entity_boardcard:nth-child(4) .inner_wrap {
    border-top: 2px solid #ff7f31;
  }

  .entity_boardcard_wrap .entity_boardcard:nth-child(5) .inner_wrap {
    border-top: 2px solid #043555;
  }

  .entity_boardcard_wrap .entity_boardcard:nth-child(6) .inner_wrap {
    border-top: 2px solid #3fbf11;
  }

  .green {
    color: #3fbf11;
  }

  .progressbar_wrap {
    position: relative;
    display: block;
    background: #dcdfe8 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    width: 100%;
    height: 5px;
    margin: 10px 0 0;
  }

  .custom_container {
    padding: 0px 100px;
    background: white;

    .custom_row {
      max-width: 1740px;
    }
  }

  .input_col {
    max-width: 392px;
    width: 392px;
  }

  .action_col {
    flex: 1 0 0;
  }

  .table-header {
    align-items: top;
  }

  .flex_row {
    display: flex;
    margin: 0 -10px;
  }
  .flex_col_sm_6 {
    width: 50%;
    padding: 0 10px;
  }
  .flex_col_sm_4 {
    width: 33.33%;
    padding: 0 10px;
  }
  .flex_col_sm_8 {
    width: 66.666667%;
    padding: 0 10px;
  }

  .srch_input {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dedede;
    border-radius: 3px;
    width: 392px;
    font-size: 15px;
    padding: 8px 12px;
  }

  .text-right {
    text-align: right;
  }

  .filter_check li {
    display: inline-block;
    margin: 0 0 0 35px;
  }
  .btn_solid {
    width: 165px;
    height: 36px;
    background: #eb622b 0% 0% no-repeat padding-box;
    opacity: 1;
    border: none;
    font-size: 14px;
    color: #fff;
  }

  .padding-t-b {
    padding: 20px 0;
  }

  .filter_check {
    text-align: right;
    margin-top: 0px;
  }

  .filter_check li {
    display: inline-block;
    margin: 11px 0 0 20px;
    font-size: 14px;
  }

  [type='checkbox']:not(:checked),
  [type='checkbox']:checked {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }

  [type='checkbox'] + label {
    position: relative;
    padding-left: 32px;
    cursor: pointer;
    display: inline-block;
    height: 25px;
    line-height: 18px;
    font-size: 14px;
    color: #282828;
    font-weight: 400;
    -webkit-user-select: none;
    -moz-user-select: none;
  }

  [type='checkbox'].filled-in:not(:checked) + label:before {
    width: 0;
    height: 0;
    border: 3px solid transparent;
    left: 6px;
    top: 10px;
    -webkit-transform: rotateZ(37deg);
    transform: rotateZ(37deg);
    -webkit-transform-origin: 20% 40%;
    transform-origin: 100% 100%;
  }

  [type='checkbox'] + label:before,
  [type='checkbox']:not(.filled-in) + label:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 18px;
    height: 18px;
    z-index: 0;
    border: 2px solid #5a5a5a;
    border-radius: 1px;
    margin-top: 2px;
    transition: 0.2s;
  }

  [type='checkbox'].filled-in:checked + label:before {
    top: 1px;
    left: 1px;
    width: 6px;
    height: 11px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #fc6e20;
    border-bottom: 2px solid #fc6e20;
    -webkit-transform: rotateZ(37deg);
    transform: rotateZ(37deg);
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  [type='checkbox'].filled-in + label:before,
  [type='checkbox'].filled-in + label:after {
    content: '';
    left: 0;
    position: absolute;
    transition: border 0.25s, background-color 0.25s, width 0.2s 0.1s,
      height 0.2s 0.1s, top 0.2s 0.1s, left 0.2s 0.1s;
    z-index: 1;
  }

  [type='checkbox'].filled-in:not(:checked) + label:after {
    width: 22px;
    height: 22px;
    background-color: transparent;
    border: 1px solid #d2d1d1;
    top: 0px;
    z-index: 0;
    border-radius: 3px;
  }

  [type='checkbox'].filled-in:checked + label:after {
    top: 0;
    width: 22px;
    height: 22px;
    border: 1px solid #ebebeb;
    background-color: #ffffff;
    z-index: 0;
    border-radius: 3px;
  }

  [type='radio']:not(:checked),
  [type='radio']:checked {
    position: absolute;
    left: -9999px;
    opacity: 0;
  }

  [type='radio']:not(:checked) + label,
  [type='radio']:checked + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
    display: inline-block;
    height: 25px;
    line-height: 24px;
    font-size: 14px;
    transition: 0.28s ease;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-weight: 400;
    color: #363636;
    font-weight: 400;
  }

  [type='radio'] + label:before,
  [type='radio'] + label:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    margin: 4px;
    width: 16px;
    height: 16px;
    z-index: 0;
    transition: 0.28s ease;
  }

  [type='radio']:checked + label:before {
    border: 2px solid transparent;
  }

  [type='radio']:not(:checked) + label:before,
  [type='radio']:not(:checked) + label:after,
  [type='radio']:checked + label:before,
  [type='radio']:checked + label:after,
  [type='radio']:checked + label:before,
  [type='radio']:checked + label:after {
    border-radius: 50%;
  }

  [type='radio']:checked + label:after,
  [type='radio']:checked + label:before,
  [type='radio']:checked + label:after {
    border: 2px solid #7da527;
  }

  [type='radio']:checked + label:after {
    -webkit-transform: scale(1.02);
    transform: scale(1.02);
  }

  [type='radio']:checked + label:after {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  [type='radio']:checked + label:after,
  [type='radio']:checked + label:after {
    background-color: #f05038;
  }

  [type='radio']:not(:checked) + label:before,
  [type='radio']:not(:checked) + label:after {
    border: 1px solid #c1c1c1;
  }

  [type='radio']:checked + label:after,
  [type='radio']:checked + label:before,
  [type='radio']:checked + label:after {
    border: 1px solid #c1c1c1;
  }

  .checkbox_wrap label {
    font-size: 14px;
    line-height: 1.5;
    color: #000;
    margin-right: 5px;
  }
  .checkbox_wrap label a {
    font-weight: bold;
    color: var(--orange);
  }
  .checkbox_wrap .and {
    display: inline-block;
  }
  @media (max-width: 650px) {
    .checkbox_wrap .m-l-30 {
      margin-left: 0;
    }
  }

  .m-l-30 {
    margin-left: 30px;
  }

  input[type='text'],
  textarea,
  select {
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dedede;
    border-radius: 3px;
    width: 100%;
    font-size: 15px;
    padding: 8px 12px;
    font-size: 15px;
  }
  textarea {
    height: 124px;
    resize: none;
  }
  mark {
    background-color: transparent;
    color: #f00;
  }

  .form_field_wrapper {
    margin-bottom: 20px;
  }
  .form_label {
    margin-bottom: 4px;
    display: block;
    font: normal normal normal 20px/25px Muli;
    letter-spacing: 0px;
    color: #000000;
    font-size: 14px;
  }

  .error_messg {
    font-size: 14px;
    display: block;
    color: #f00;
    margin: 5px 0 0;
  }

  .upload-icon {
    width: 100%;
    height: 138px;
    background: #f7fafd 0% 0% no-repeat padding-box;
    border: 1px dashed #999999;
    display: flex;
    cursor: pointer;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
  }

  .add_more {
    width: 186px;
    height: 36px;
    background: #043555 0% 0% no-repeat padding-box;
    color: #fff;
    border: none;
    font: normal normal 600 14px/20px Muli;
  }

  .upload-icon img {
    width: 39px;
    height: 39px;
    margin-bottom: 12px;
    display: block;
  }

  img.preview-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin-bottom: 0px;
  }

  .click_label {
    font: normal normal normal 15px/19px Muli;
    letter-spacing: 0px;
    color: #666666;
  }

  .hide {
    display: none;
  }

  .upload-icon .extension {
    font: normal normal normal 12px/15px Muli;
    letter-spacing: 0px;
    color: #666666;
  }

  .ar {
    direction: rtl;
    text-align: right;
  }

  .limit {
    font: normal normal normal 12px/15px Muli;
    letter-spacing: 0px;
    color: #666666;
  }

  .text-right {
    text-align: right;
  }

  .entity_detail_menu li {
    margin: 20px 0;

    &.separator {
      display: flex;
      align-items: center;
      margin-right: 40px;
    }
  }

  .entity_detail_menu li > span {
    display: flex;
    justify-content: center;

    &.clickable {
      cursor: pointer;
    }
  }

  .entity_detail_menu li .detail {
    display: inline-flex;
    width: 200px;
    margin-left: 25px;
    flex-flow: column;
  }

  .entity_detail_menu .step_count {
    display: inline-flex;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background: #e8eef3 0% 0% no-repeat padding-box;
    color: #666666;
  }

  ul.entity_detail_menu li > span .title {
    display: block;
    width: 100%;
    color: #666666;
    font-size: 15px;
  }

  ul.entity_detail_menu li > span .sub_title {
    color: #999999;
    font-size: 12px;
    margin: 10px 0 0 0;
    display: block;
  }

  ul.entity_detail_menu li > span.active .step_count {
    background: #eb622b 0% 0% no-repeat padding-box;
    border-radius: 5px;
    color: #fff;
  }

  ul.entity_detail_menu li > span.active .title {
    color: #eb622b;
  }

  .flex_col_sm_9 {
    width: 75%;
    padding: 0 10px;
  }

  .add_more {
    width: 186px;
    height: 36px;
    background: #043555 0% 0% no-repeat padding-box;
    color: #fff;
    border: none;
    font: normal normal 600 14px/20px Muli;
  }

  .moci_block {
    max-width: 395px;
  }

  .mci_bottom {
    display: block;
    text-align: right;
    text-align: right;
    font: normal normal normal 20px/25px Muli;
    letter-spacing: 0px;
    color: #000000;
    margin: 20px 0;
  }
  .logo_moci {
    display: flex;
    align-items: center;

    img {
      height: 36px;
      width: 36px;
    }
  }

  .moci_text {
    text-align: left;
    font: normal normal bold 25px/36px Muli;
    letter-spacing: 0px;
    color: #666666;
    margin: 0 0 0 20px;
  }

  .ministry {
    text-align: left;
    font: normal normal normal 20px/25px Muli;
    letter-spacing: 0px;
    color: #000000;
    display: block;
    margin: 25px 0;
  }

  p.para {
    text-align: left;
    font: normal normal normal 15px/19px Muli;
    letter-spacing: 0px;
    color: #000000;
    width: 408px;
    line-height: 1.7;
  }

  .arbic_para {
    width: 219px !important;
    text-align: right;
    margin: 0 0 0 174px;
    font: normal normal 600 14px/20px Muli;
    letter-spacing: 0px;
    color: #ffffff;
  }

  .breadcrumb {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 20px;
  }

  .breadcrumb li:before {
    position: absolute;
    right: 27px;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    width: 11px;
    height: 20px;
    background-image: url('./assets/images/angle_right.svg');
  }

  .breadcrumb li:last-child::before {
    background: transparent;
  }

  .prev_next {
    display: flex;
    justify-content: space-between;
    margin-top: 42px;
  }

  .filter_breadcrumb ul {
    display: flex;
    background: #F7FAFD;
  }
  
  .filter_sele{
    display: flex;
    flex-flow: column;
    position: relative;
  }
  .filter_breadcrumb ul li{
    position: relative;
    width: 210px;
    margin: 0 34px 0 0;
  }
  .filter_breadcrumb ul li:last-child::before{
    background: transparent;
  }
  
  .filter_breadcrumb ul li:before{
    position: absolute;
    right: -19px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    width: 11px;
    height: 20px;
    background-image: url('./assets/images/angle_right.svg');
  }
  
  
  
  .filter_sele label {
    letter-spacing: 0px;
    color: #999999;
    margin-bottom: 10px;
    font-size: 12px;
  }
  
  
  .filter_sele select{
    width: 100%;
    font-size: 11px;
    background-color: transparent;
    border: none;
    padding: 0;
    color: #999999;
    border-bottom: 1px solid transparent;
    border-radius: none;
    position: relative;
  }
  
  .filter_breadcrumb {
    padding: 15px 0;
  }
  
  .filter_sele.active select{
    color:  #3FBF11;
  }
  
  .filter_sele.active:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #3FBF11;
    bottom: -15px;
  }
`;

const CLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
`;

const CustomInput = styled(Input)`
  // margin: 0 0 10px 20px;
`;
