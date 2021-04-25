import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Records from './parameters';
import Sections from './sections';
import Parameters from './projects';
import Attributes from './attributes';
import BasicTable from '../../../shared/table-material';
import { useHistory, useParams } from 'react-router';
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
  4: [
    { headline: 'Parameter Name', key: 'parameter_name' },
    { headline: 'Platform & Language', key: 'platform_language' },
    { headline: 'Result', key: 'result' },
    { headline: 'Reviewer Comments', key: 'id' },
    { headline: '', key: 'id' },
  ]
};

const CompilanceProjectDetails = () => {
  const history = useHistory();
  const { project_id } = useParams();

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
    renderCol: () => {},
  });
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [selected, setSelected] = useState({});

  useEffect(() => {
    if (/\d/.test(project_id)) {
      load({ project_id }, (data) => setProfileData(data));
    } else {
      history.push('/projects/new');
    }
  }, []);

  const handleAdd = (value) => {
    setSelected((prevValue) => ({
      ...prevValue,
      [step]: value,
    }));

    setStep((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    setTableProps({
      rows: [],
      renderCol: () => {},
    })
  }, [step]);

  return (
    <DetailsElement className="custom_container">
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
                      <span className="title">Compliance Projects</span>
                      <span className="sub_title">
                        {step !== 1 && selected['1'] ? (
                          <StepCompleteBadge>
                            <span>{selected['1']?.name}</span>
                            <CheckIcon />
                          </StepCompleteBadge>
                        ) : (
                          'Select a compliance record'
                        )}
                      </span>
                    </span>
                  </span>
                </li>

                <li onClick={() => setStep(2)}>
                  <span className={step === 2 ? 'active' : 'clickable'}>
                    <span className="step_count">2</span>
                    <span className="detail">
                      <span className="title">Sections</span>
                      <span className="sub_title">
                        {step !== 2 && selected['2'] ? (
                          <StepCompleteBadge>
                            <span>{selected['2']?.name}</span>
                            <CheckIcon />
                          </StepCompleteBadge>
                        ) : (
                          'Select suitable section'
                        )}
                      </span>
                    </span>
                  </span>
                </li>

                <li onClick={() => setStep(3)}>
                  <span className={step === 3 ? 'active' : 'clickable'}>
                    <span className="step_count">3</span>
                    <span className="detail">
                      <span className="title">Attribues</span>
                      <span className="sub_title">
                        {step !== 3 && selected['3'] ? (
                          <StepCompleteBadge>
                            <span>{selected['3']?.name}</span>
                            <CheckIcon />
                          </StepCompleteBadge>
                        ) : (
                          'Load necessary attributes'
                        )}
                      </span>
                    </span>
                  </span>
                </li>

                <li onClick={() => setStep(4)}>
                  <span className={step === 4 ? 'active' : 'clickable'}>
                    <span className="step_count">4</span>
                    <span className="detail">
                      <span className="title">Parameters</span>
                      <span className="sub_title">
                        {step !== 4 && selected['4']?.name ? (
                          <StepCompleteBadge>
                            <span>{selected['4']}</span>
                            <CheckIcon />
                          </StepCompleteBadge>
                        ) : (
                          'Parameters based on attributes'
                        )}
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex_col_sm_9">
              {step === 1 ? (
                <Parameters data={data} onSubmit={handleAdd} setTableProps={setTableProps} selected={selected} />
              ) : step === 2 ? (
                <Sections data={data} onSubmit={handleAdd} setTableProps={setTableProps} selected={selected} />
              ) : step === 3 ? (
                <Attributes data={data} onSubmit={handleAdd} setTableProps={setTableProps} selected={selected} />
              ) : (
                <Records data={data} setTableProps={setTableProps} selected={selected} />
              )}
            </div>
          </div>
          <div className="flex_col_sm_12 prev_next">
            <button
              className="btn_solid"
              onClick={() => setStep((prevValue) => prevValue - 1)}
            >
              Previous{' '}
            </button>
            {step !== 4 && (
              <button
                className="btn_solid"
                onClick={() => setStep((prevValue) => prevValue + 1)}>
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
            />
          </div>
        </div>
      </div>
    </DetailsElement>
  );
};

const DetailsElement = styled.div`
  padding-top: 60px !important;
`;

const StepCompleteBadge = styled.span`
  width: 100%;
  height: 30px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border: 1px solid #043555;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  color: #043555;
  padding: 0px 10px 0px 16px;

  > span {
    width: calc(100% - 24px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
  >
    <path
      fill="#043555"
      d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.5,7.5,0,0,0,7.5,0Zm4.129,5.2L6.272,10.557a.536.536,0,0,1-.757,0L3.371,8.414a.536.536,0,1,1,.744-.771l.013.013L5.893,9.421l4.978-4.978a.536.536,0,0,1,.757.757Z"
    />
  </svg>
);

export default CompilanceProjectDetails;
