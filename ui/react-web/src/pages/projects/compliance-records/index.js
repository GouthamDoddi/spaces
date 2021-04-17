import React, { useState } from 'react';
import styled from 'styled-components';
import Records from './records';
import Sections from './sections';
import Parameters from './parameters';
import Attributes from './attributes';

const CompilanceProjectDetails = ({ profileData }) => {
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
  const [selected, setSelected] = useState({});

  const handleAdd = (value) => {
    setSelected((prevValue) => ({
      ...prevValue,
      [step]: value,
    }));

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
                      <span className="title">Compliance Records</span>
                      <span className="sub_title">
                        {step !== 1 && selected['1'] ? (
                          <StepCompleteBadge>
                            {selected['1']}
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
                            {selected['2']}
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
                        {step !== 1 && selected['3'] ? (
                          <StepCompleteBadge>
                            {selected['3']}
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
                        {step !== 1 && selected['4'] ? (
                          <StepCompleteBadge>
                            {selected['4']}
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
                <Parameters data={data} onSubmit={handleAdd} />
              ) : step === 2 ? (
                <Sections data={data} onSubmit={handleAdd} />
              ) : step === 3 ? (
                <Attributes data={data} onSubmit={handleAdd} />
              ) : (
                <Records data={data} onSubmit={handleAdd} />
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
        </div>
      </div>
    </DetailsElement>
  );
};

const DetailsElement = styled.div`
  padding-top: 60px !important;
`;

const StepCompleteBadge = styled.span`
  width: 189px;
  height: 30px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border: 1px solid #043555;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  color: #043555;
  padding: 0px 10px 0px 16px;
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
