import React, { useState } from 'react';
import MasterProjectProfile from './master-project-profile';
import CompilanceProjectDetails from './compilance-project-details';
import CompilanceRecords from './compliance-records';
import CaseManagement from './case-management';

const AngleRight = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10.801"
      height="20"
      viewBox="0 0 10.801 20"
    >
      <path
        fill="#cfcfcf"
        d="M128.316,9.451,119.065.226a.775.775,0,1,0-1.095,1.1L126.67,10l-8.7,8.676a.775.775,0,0,0,1.1,1.1l9.251-9.225a.775.775,0,0,0,0-1.1Z"
        transform="translate(-117.742 0)"
      />
    </svg>
  );
};

const Panel = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevVal) => prevVal + 1);
  };

  return (
    <>
      <div className="custom_container">
        <ul className="breadcrumb entity_detail_menu">
          <li>
            <span
              className={step === 1 ? 'active' : 'clickable'}
              onClick={step !== 1 ? () => setStep(1) : undefined}
            >
              <span className="step_count">1</span>
              <span className="detail">
                <span className="title">Master Project Profile</span>
                <span className="sub_title"> Summary of roject </span>
              </span>
            </span>
          </li>
          <li className="separator">
            <AngleRight />
          </li>
          <li>
            <span
              className={step === 2 ? 'active' : 'clickable'}
              onClick={step !== 2 ? () => setStep(2) : undefined}
            >
              <span className="step_count">2</span>
              <span className="detail">
                <span className="title">Compilance Project Details</span>
                <span className="sub_title"> Detailed view of project </span>
              </span>
            </span>
          </li>

          <li className="separator">
            <AngleRight />
          </li>
          <li>
            <span
              className={step === 3 ? 'active' : 'clickable'}
              onClick={step !== 3 ? () => setStep(3) : undefined}
            >
              <span className="step_count">3</span>
              <span className="detail">
                <span className="title">Compilance Records</span>
                <span className="sub_title">
                  {' '}
                  Detailed view of compilance records{' '}
                </span>
              </span>
            </span>
          </li>

          <li className="separator">
            <AngleRight />
          </li>
          <li>
            <span
              className={step === 4 ? 'active' : 'clickable'}
              onClick={step !== 4 ? () => setStep(4) : undefined}
            >
              <span className="step_count">4 </span>
              <span className="detail">
                <span className="title">Case Management</span>
                <span className="sub_title">Detailed view of issues/cases</span>
              </span>
            </span>
          </li>
        </ul>
      </div>
      {step === 1 && <MasterProjectProfile onSubmit={handleNext} />}
      {step === 2 && (
        <CompilanceProjectDetails
          onSubmit={handleNext}
          profileData={{}}
        />
      )}
      {step === 3 && (
        <CompilanceRecords onSubmit={handleNext} profileData={{}} />
      )}
      {step === 4 && (
        <CaseManagement onSubmit={handleNext} profileData={{}} />
      )}
    </>
  );
}

export default Panel;
