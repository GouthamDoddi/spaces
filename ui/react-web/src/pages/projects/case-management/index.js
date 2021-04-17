import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from './profile';
import Details from './details';
import Action from './action';

const CaseManagement = ({ profileData }) => {
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
                <Profile data={data} onSubmit={handleAdd} />
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
        </div>
      </div>
    </DetailsElement>
  );
};

const DetailsElement = styled.div`
  padding-top: 60px !important;
`;

export default CaseManagement;
