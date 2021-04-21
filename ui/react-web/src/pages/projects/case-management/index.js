import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Profile from './profile';
import Details from './details';
import Action from './action';
import GroundComponent from './ground-profile'
import { useStore } from 'effector-react';
import makeStore from '../../../store/make-store';
import BasicTable from '../../../shared/table-material';
import moment from 'moment';
import { projectTypes } from '../../../store/master-data';
import { caseCategoryTypes, casePriorityTypes } from '../../../store/master-data'

const { store, load } = makeStore('reference-data/rev-projects/2/compliance-projects');
const { store: storeTable, load: loadTable } = makeStore(({ project_id }) => `rev-projects/${project_id}/cases/`);

const tableHeadlines = {
  1: [
    { headline: 'Status', key: 'status' },
    { headline: 'Case ID', key: 'id' },
    { headline: 'Title', key: 'name' },
    { headline: 'Reference', key: 'created_by' },
    { headline: 'Priority', key: 'priority' },
    { headline: 'Categories', key: 'category_id' },
    { headline: 'SLA', key: '' },
    { headline: 'Raised On', key: 'created_at' },
  ]
};

const CaseManagement = ({ profileData }) => {
  const { project_id } = useParams();
  const [seletedRow, setSelectedRow] = useState({});
  const [tableProps, setTableProps] = useState({
    rows: [],
    renderCol: () => { },
  });

  const {
    logo: projectLogo,
    name: projectName,
    name_ar: projectNameAr,
    description: projectDescription,
    description_ar: projectDescriptionAr,
    short_name: projectShortName,
  } = profileData;

  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleAdd = () => {
    setStep((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    loadTable({ project_id });
  }, [])

  const tableData = useStore(storeTable).data;
  if (tableData && Array.isArray(tableData) && tableData.length && !tableProps.rows.length) {
    setTableProps({
      rows: tableData,
      renderCol: (colIndex, col) => {

        if (colIndex === 0) {
          return (
            <RenderBadge>
              {col}
            </RenderBadge>
          )
        }

        if (colIndex === 3) {
          return (
            <React.Fragment>
              <Alphabet>{'E'}</Alphabet>
              {col}
            </React.Fragment>
          )
        }

        if (colIndex === 4) {
          return (
            <React.Fragment>
              {[1, 2, 3].includes(col) ? (
                <Priority active={col}>
                  {col === 1 && 'P1'}
                  {col === 2 && 'P2'}
                  {col === 3 && 'P3'}
                </Priority>
              ) : ''}

            </React.Fragment>
          )
        }

        if (colIndex === 5) {
          return (
            <React.Fragment>
              {col && Array.isArray(col) && col.length ?
                col.map(item => (
                  <CatergoriesWrapper>
                    {caseCategoryTypes[item].label}
                  </CatergoriesWrapper>
                ))
                :
                <CatergoriesWrapper>
                  {caseCategoryTypes[col].label || ''}
                </CatergoriesWrapper>}
            </React.Fragment>
          )
        }

        if (colIndex === 7) {
          return (
            <React.Fragment>
              {moment(col).format('DD/MM/YYYY')}
            </React.Fragment>
          );
        }

      },
    });
  }

  let groundEnable = false;
  return (
    <DetailsElement className="custom_container">
      {groundEnable ?
        <GroundComponent />
        :
        <div className="flex_row">
          <div className="flex_col_sm_4">
            <div className="moci_block">
              <div className="logo_moci">
                <figure className="logo_mci">
                  <img src={projectLogo} alt="logo" />
                </figure>
                <div className="moci">
                  <span className="moci_text">{projectShortName}</span>
                </div>
              </div>

              <span className="ministry"> {projectName} </span>
              <p className="para">{projectDescription}</p>
              <span className="mci_bottom"> {projectNameAr}</span>
              <p className="para text-right arbic_para">{projectDescriptionAr}</p>
            </div>
          </div>

          <div className="flex_col_sm_8">
            <div className="flex_row">
              <div className="flex_col_sm_3">
                <ul className="entity_detail_menu">
                  <li onClick={() => setStep(1)}>
                    <span className={step === 1 ? 'active' : 'clickable'}>
                      <span className="step_count">1</span>
                      <span className="detail">
                        <span className="title">Case Profile</span>
                        <span className="sub_title">
                          Provide the context for this case
                      </span>
                      </span>
                    </span>
                  </li>

                  <li onClick={() => setStep(2)}>
                    <span className={step === 2 ? 'active' : 'clickable'}>
                      <span className="step_count">2</span>
                      <span className="detail">
                        <span className="title">Case Details</span>
                        <span className="sub_title">
                          Explain about the case
                      </span>
                      </span>
                    </span>
                  </li>

                  <li onClick={() => setStep(3)}>
                    <span className={step === 3 ? 'active' : 'clickable'}>
                      <span className="step_count">3</span>
                      <span className="detail">
                        <span className="title">Case Action</span>
                        <span className="sub_title">
                          Action &amp; consequence
                      </span>
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="flex_col_sm_9">
                {step === 1 ? (
                  <Profile
                    defaultData={Object.keys(seletedRow).length ? {
                      compliance_record: Array.isArray(seletedRow.compliance_project_id) ? seletedRow.compliance_project_id : [seletedRow.compliance_project_id],
                      section: Array.isArray(seletedRow.section_id) ? seletedRow.section_id : [seletedRow.section_id],
                      attribute: Array.isArray(seletedRow.attribute_id) ? seletedRow.attribute_id : [seletedRow.attribute_id],
                      parameter: Array.isArray(seletedRow.parameter_id) ? seletedRow.parameter_id : [seletedRow.parameter_id],
                      category: Array.isArray(seletedRow.category_id) ? seletedRow.category_id : [seletedRow.category_id],
                      business_priority: seletedRow.priority
                    } : null}
                    onSubmit={handleAdd} />
                ) : step === 2 ? (
                  <Details data={data} onSubmit={handleAdd} />
                ) : step === 3 ? (
                  <Action data={data} onSubmit={handleAdd} />
                ) : null}
              </div>
            </div>
            <div className="flex_col_sm_12 prev_next">
              <button
                className="btn_solid"
                onClick={() => setStep((prevValue) => prevValue - 1)}
              >
                Previous{' '}
              </button>
              {step <= 3 && (
                <button
                  className="btn_solid"
                  onClick={() => setStep((prevValue) => prevValue + 1)}
                >
                  Next{' '}
                </button>
              )}
            </div>

            <div className="table_wrapper">
              <BasicTable
                tableCells={tableHeadlines[step]}
                rows={tableProps.rows}
                renderCol={tableProps.renderCol}
                keyField="id"
                onRowClick={(rowId) => {
                  let rowSelected = tableData.find(item => item.id === rowId);
                  console.log({ rowSelected });
                  if (rowSelected) {
                    setSelectedRow(rowSelected)
                  }
                }}
              />
            </div>

          </div>
        </div>}
    </DetailsElement>
  );
};

const CatergoriesWrapper = styled.span`
    padding: 5px 10px;
    background:#F5F5F5;
    color:#1A6B8F;
    border-radius:15px;
`

const Priority = styled.span`
  background-color: ${props => props.active === 1 ? '#FFF1F1' : props.active === 2 ? '#EAF4FF' : '#FFF5DF'};
  color: ${props => props.active === 1 ? '#FF6060' : props.active === 2 ? '#005CC8' : '#FFB300'};
  border: ${props => props.active === 1 ? '1px solid #FF6060' : props.active === 2 ? '1px solid #005CC8' : '1px solid #FFB300'};
  font-size: 12px;
  padding: 3px;
`

const Alphabet = styled.span`
    background: #2B3F58;
    color: #fff;
    padding: 2px 5px;
    border-radius: 2px;
    margin-right: 5px;
`

const RenderBadge = styled.span`
  padding:5px 10px;
  background:${props => props.review ? '#EB622B' :
    props.approve ? '#3FBF11' :
      props.rejected ? '#FF6060' :
        props.draft ? '#FFBF00' :
          props.onHold ? '#999999' :
            props.submitted ? '#0064FE' : '#EB622B'};         
    color: #fff;
    border-radius: 15px;
`

const DetailsElement = styled.div`
  padding-top: 60px !important;
`;

export default CaseManagement;
