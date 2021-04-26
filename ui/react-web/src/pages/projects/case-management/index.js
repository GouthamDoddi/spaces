import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import Profile from './profile';
import Details from './details';
import Action from './action';
import GroundComponent from './ground-profile'
import BasicTable from '../../../shared/table-material';
import makeStore from '../../../store/make-store';

const { load } = makeStore(({ project_id }) => `rev-projects/${project_id}`);

const tableHeadlines = {
  1: [
    { headline: 'Status', key: 'status' },
    { headline: 'Case ID', key: 'id' },
    { headline: 'Title', key: 'name' },
    { headline: 'Reference', key: 'id'},
    { headline: 'Priority', key: 'priority' },
    { headline: 'Category', key: 'category_ids' },
    { headline: 'SLA', key: 'id'},
    { headline: 'Raised on', key: 'created_at' },
  ],
  2: [
    { headline: 'Status', key: 'status' },
    { headline: 'Case ID', key: 'id' },
    { headline: 'Title', key: 'name' },
    { headline: 'Reference', key: 'id'},
    { headline: 'Priority', key: 'priority' },
    { headline: 'Category', key: 'category_ids' },
    { headline: 'SLA', key: 'id'},
    { headline: 'Raised on', key: 'created_at' },
  ],
  3: [
    { headline: 'Status', key: 'status' },
    { headline: 'Case ID', key: 'id' },
    { headline: 'Title', key: 'name' },
    { headline: 'Reference', key: 'id'},
    { headline: 'Priority', key: 'priority' },
    { headline: 'Category', key: 'category_ids' },
    { headline: 'SLA', key: 'id'},
    { headline: 'Raised on', key: 'created_at' },
  ],
};

const CaseManagement = () => {
  const history = useHistory();
  const { project_id } = useParams();

  const [rowId, setRowId] = useState(null);
  const [profileData, setProfileData] = useState({});
  const {
    id: projectId,
    logo: projectLogo,
    project_name: projectName,
    project_name_ar: projectNameAr,
    project_description: projectDescription,
    project_description_ar: projectDescriptionAr,
    short_name: projectShortName,
  } = profileData;
  const [tableProps, setTableProps] = useState({
    rows: [],
    renderCol: () => { },
  });

  const [step, setStep] = useState(1);

  useEffect(() => {
    if (/\d/.test(project_id)) {
      load({ project_id }, (data) => setProfileData(data));
    } else {
      history.push('/projects/new');
    }
  }, []);

  useEffect(() => {
    setTableProps({
      rows: [],
      renderCol: () => {},
    })
  }, [step]);

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
                  <Profile setTableProps={setTableProps} rowId={rowId} handleNext={(id) => { setRowId(id); setStep((prevValue) => prevValue + 1); }} />
                ) : step === 2 ? (
                  <Details setTableProps={setTableProps} rowId={rowId} setRowId={setRowId} />
                ) : step === 3 ? (
                  <Action setTableProps={setTableProps} rowId={rowId} setRowId={setRowId} />
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
                onRowClick={(rowId) => setRowId(rowId)}
              />
            </div>
          </div>
        </div>
      }
    </DetailsElement>
  );
};

const DetailsElement = styled.div`
  padding-top: 60px !important;
`;

export default CaseManagement;
