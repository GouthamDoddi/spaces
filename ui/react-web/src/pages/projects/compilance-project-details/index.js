import React, { useState } from 'react';
import styled from 'styled-components';
import EServices from './e-services';
import SubmitEvidence from './submit-evidence';
import PortalMobileApps from './portal-mobile-apps';
import ProjectUsers from './project-users';

const CompilanceProjectDetails = ({ profileData }) => {
  const {
    id: entityId,
    logo: entityLogo,
    name: entityName,
    name_ar: entityNameAr,
    description: entityDescription,
    description_ar: entityDescriptionAr,
    short_name: entityShortName,
  } = profileData;

  const [files, setFiles] = useState([]);
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});

  const handleAdd = () => {
    
  };

  return (
    <DetailsElement className="custom_container">
      <div className="flex_row">
        <div className="flex_col_sm_3">
          <div className="moci_block">
            <div className="logo_moci">
              <figure className="logo_mci">
                <img src={entityLogo} alt="logo" />
              </figure>
              <div className="moci">
                <span className="moci_text">{entityShortName}</span>
              </div>
            </div>

            <span className="ministry">
              {' '}
              {entityId} - {entityName}{' '}
            </span>

            <p className="para">{entityDescription}</p>

            <span className="mci_bottom">
              {' '}
              {entityId} - {entityNameAr}
            </span>

            <p className="para text-right arbic_para">{entityDescriptionAr}</p>
          </div>
        </div>

        <div className="flex_col_sm_9">
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
                <PortalMobileApps
                  data={data}
                  files={files}
                  setFiles={setFiles}
                  onSubmit={handleAdd}
                />
              ) : step === 2 ? (
                <EServices data={data} onSubmit={handleAdd} />
              ) : step === 3 ? (
                <ProjectUsers data={data} onSubmit={handleAdd} />
              ) : (
                <SubmitEvidence data={data} onSubmit={handleAdd} />
              )}
            </div>
          </div>
          
          <div className="flex_col_sm_12 prev_next">
            <button
              className="btn_solid"
              // onClick={() => setStep((prevValue) => prevValue - 1)}
            >
              Previous{' '}
            </button>
            <button
              className="btn_solid"
              // onClick={
                // step !== 4
                //   ? () => setStep((prevValue) => prevValue + 1)
                //   : undefined
              // }
            >
              Next{' '}
              <span>
              </span>
            </button>
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
