import React, { useState } from 'react';
import styled from 'styled-components';
import EServices from './e-services';
import EntityCommunication from './entity-communication';
import EntityUsers from './entity-users';
import PortalApps from './portal_apps';

const Details = ({ profileData }) => {
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
        <div className="flex_col_sm_4">
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

            <p class="para text-right arbic_para">{entityDescriptionAr}</p>
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
                      <span className="title">Entity Users</span>
                      <span className="sub_title">
                        Explain about the entity
                      </span>
                    </span>
                  </span>
                </li>

                <li onClick={() => setStep(2)}>
                  <span className={step === 2 ? 'active' : 'clickable'}>
                    <span className="step_count">2</span>
                    <span className="detail">
                      <span className="title">Entity Communication</span>
                      <span className="sub_title">Set communication rules</span>
                    </span>
                  </span>
                </li>

                <li onClick={() => setStep(3)}>
                  <span className={step === 3 ? 'active' : 'clickable'}>
                    <span className="step_count">3</span>
                    <span className="detail">
                      <span className="title">Portal &amp; Mobile Apps</span>
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
                      <span className="title">eServices</span>
                      <span className="sub_title">Map services to entity</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex_col_sm_9">
              {step === 1 ? (
                <EntityUsers
                  data={data}
                  files={files}
                  setFiles={setFiles}
                  onSubmit={handleAdd}
                />
              ) : step === 2 ? (
                <EntityCommunication data={data} onSubmit={handleAdd} />
              ) : step === 3 ? (
                <PortalApps data={data} onSubmit={handleAdd} />
              ) : (
                <EServices data={data} onSubmit={handleAdd} />
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

export default Details;
