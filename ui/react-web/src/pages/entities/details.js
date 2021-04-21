import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import BasicTable from '../../shared/table-material';
import makeStore from '../../store/make-store';
import EServices from './e-services';
import EntityCommunication from './entity-communication';
import EntityUsers from './entity-users';
import PortalApps from './portal_apps';

const { load } = makeStore(({ entity_id }) => entity_id ? `entities/${entity_id}` : 'entities');

const tableHeadlines = {
  1: [
    { headline: 'Name', key: 'first_name' },
    { headline: 'Email', key: 'email' },
    { headline: 'Phone', key: 'phone' },
    { headline: 'Role', key: 'role' },
    { headline: '', key: 'id' },
  ],
  2: [
    { headline: 'User Groups', key: 'user_ids' },
    { headline: 'Subject', key: 'subject' },
    { headline: 'Purpose', key: 'purpose' },
    { headline: 'Details', key: 'details' },
    { headline: '', key: 'id' },
  ],
  3: [
    { headline: 'Type', key: 'project_type_id' },
    { headline: 'Name', key: 'project_name' },
    { headline: 'Description', key: 'project_description' },
    { headline: 'Consumer Type', key: 'consumer_type_ids' },
    { headline: 'Project SPOC', key: 'spoc_ids' },
    { headline: '', key: 'id' },
  ],
  4: [
    { headline: 'Name', key: 'project_name' },
    { headline: 'Channels', key: 'project_ids' },
    { headline: 'Description', key: 'project_description' },
    { headline: 'Consumer Type', key: 'consumer_type_ids' },
    { headline: 'Project SPOC', key: 'spoc_ids' },
    { headline: '', key: 'id' },
  ],
}

const Details = () => {
  const history = useHistory();
  const { entity_id } = useParams();
  const [profileData, setProfileData] = useState({});
  const [tableProps, setTableProps] = useState({
    rows: [],
    renderCol: () => {},
  });
  const {
    id: entityId,
    logo: entityLogo,
    name: entityName,
    ar_name: entityNameAr,
    description: entityDescription,
    description_ar: entityDescriptionAr,
    short_name: entityShortName,
  } = profileData;

  const [files, setFiles] = useState([]);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (/\d/.test(entity_id)) {
      load({ entity_id }, (data) => setProfileData(data));
    } else {
      history.push('/entities/new');
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
                  files={files}
                  setFiles={setFiles}
                  setTableProps={setTableProps}
                />
              ) : step === 2 ? (
                <EntityCommunication setTableProps={setTableProps} />
              ) : step === 3 ? (
                <PortalApps setTableProps={setTableProps} />
              ) : (
                <EServices setTableProps={setTableProps} />
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

export const ButtonLink = styled.button`
  border: none;
  background: none;
  color: #4C54B6;
  text-decoration: underline;
  margin: 0px 8px;
`;

export default Details;
