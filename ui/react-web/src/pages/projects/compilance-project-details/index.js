import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EServices from './e-services';
import SubmitEvidence from './submit-evidence';
import PortalMobileApps from './portal-mobile-apps';
import ProjectUsers from './project-users';
import { useHistory, useParams } from 'react-router';
import makeStore from '../../../store/make-store';
import BasicTable from '../../../shared/table-material';

const { load } = makeStore(({ project_id }) => `rev-projects/${project_id}`);

const tableHeadlines = {
  1: [
    { headline: 'Type', key: 'type_id' },
    { headline: 'Name', key: 'label' },
    { headline: '', key: 'id' },
  ],
  2: [
    { headline: 'Type', key: 'type_id' },
    { headline: 'Name', key: 'label' },
    { headline: '', key: 'id' },
  ],
  3: [
    { headline: 'Name', key: 'first_name' },
    { headline: 'Email', key: 'email' },
    { headline: 'Phone', key: 'phone' },
    { headline: 'Role', key: 'role' },
    { headline: '', key: 'id' },
  ],
  4: [
    { headline: 'Type', key: 'type_id' },
    { headline: 'Name', key: 'label' },
    { headline: '', key: 'id' },
  ],
};

const CompilanceProjectDetails = () => {
  const history = useHistory();
  const { project_id } = useParams();
  const [profileData, setProfileData] = useState({});
  const [tableProps, setTableProps] = useState({
    rows: [],
    renderCol: () => {},
  });
  const {
    id: projectId,
    logo: projectLogo,
    project_name: projectName,
    project_name_ar: projectNameAr,
    project_description: projectDescription,
    project_description_ar: projectDescriptionAr,
    short_name: projectShortName,
  } = profileData;

  const [files, setFiles] = useState([]);
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

            <span className="ministry">
              {' '}
              {projectId} - {projectName}{' '}
            </span>

            <p className="para">{projectDescription}</p>

            <span className="mci_bottom">
              {' '}
              {projectId} - {projectNameAr}
            </span>

            <p className="para text-right arbic_para">{projectDescriptionAr}</p>
          </div>
        </div>

        <div className="flex_col_sm_8">
          <div className="flex_row">
            <OuterHorizontalLine className="flex_col_sm_3">
              <ul className="entity_detail_menu">
                <li onClick={() => setStep(1)}>
                  <span className={step === 1 ? 'active' : 'clickable'}>
                    <span className="step_count">1</span>
                    <span className="detail">
                      <span className="title"> Portal / Mobile Apps</span>
                      <span className="sub_title">
                         Details of ------------
                      </span>
                    </span>
                  </span>
                </li>

                <li onClick={() => setStep(2)}>
                  <span className={step === 2 ? 'active' : 'clickable'}>
                    <span className="step_count">2</span>
                    <span className="detail">
                      <span className="title"> eServices </span>
                      <span className="sub_title">
                        Details of ------------
                      </span>
                    </span>
                  </span>
                </li>

                <li onClick={() => setStep(3)}>
                  <span className={step === 3 ? 'active' : 'clickable'}>
                    <span className="step_count">3</span>
                    <span className="detail">
                      <span className="title"> Project Users </span>
                      <span className="sub_title">
                        Role based access control
                      </span>
                    </span>
                  </span>
                </li>

                <li onClick={() => setStep(4)}>
                  <span className={step === 4 ? 'active' : 'clickable'}>
                    <span className="step_count">4</span>
                    <span className="detail">
                      <span className="title"> Submit Evidence </span>
                      <span className="sub_title"> Upload test profile and test data </span>
                    </span>
                  </span>
                </li>
              </ul>
            </OuterHorizontalLine>
            <div className="flex_col_sm_9">
              {step === 1 ? (
                <PortalMobileApps setTableProps={setTableProps} />
              ) : step === 2 ? (
                <EServices setTableProps={setTableProps} />
              ) : step === 3 ? (
                <ProjectUsers files={files} setFiles={setFiles} setTableProps={setTableProps} />
              ) : (
                <SubmitEvidence setTableProps={setTableProps} />
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
            <button
              className="btn_solid"
              onClick={
                step !== 4
                  ? () => setStep((prevValue) => prevValue + 1)
                  : undefined
              }
            >
              Next{' '}
            </button>
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

const OuterHorizontalLine = styled.div`
  border-right: 1px solid #ddd;
  margin-right: 2.5%;
`

const DetailsElement = styled.div`
  padding-top: 60px !important;
`;

export default CompilanceProjectDetails;
