import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import makeStore from '../../../store/make-store';
import {
  casePriorityTypes,
  caseCategoryTypes,
} from '../../../store/master-data';
import { isMOTCUser, isJAWDAUser } from '../../../store/user';
import Switch from '../../../components/switch/switch';

const { load } = makeStore(
  ({ project_id }) => `rev-projects/${project_id}/compl-projects-report`
);
const { load: loadCases } = makeStore(
  ({ project_id }) => `rev-projects/${project_id}/cases`
);

const Projects = ({ onSubmit, setTableProps, updateStatus }) => {
  const { project_id } = useParams();
  const [projects, setProjects] = useState([]);
  const [approveStatus, setApproveStatus] = useState({});

  useEffect(() => {
    load({ project_id }, (data) => {
      setProjects(data);

      setApproveStatus(() => {
        const approveStatus = {};
        data.forEach(({ id, status }) => {
          approveStatus[id] = status;
        });

        return approveStatus;
      });
    });

    loadCases({ project_id }, (data) =>
      setTableProps({
        rows: data,
        renderCol: (colIndex, col) => {
          if (colIndex === 0) {
            return <Badge status={col}>{col}</Badge>;
          }

          if (colIndex === 3) {
            return ' ';
          }

          if (colIndex === 4) {
            return (
              <Priority active={col}>{casePriorityTypes[col]?.badge}</Priority>
            );
          }

          if (colIndex === 5) {
            return col
              ? col.map((key) => (
                  <CatergoryBadge key={key}>
                    {caseCategoryTypes[key]?.label}
                  </CatergoryBadge>
                ))
              : '';
          }

          if (colIndex === 6) {
            return ' ';
          }

          if (colIndex === 7) {
            return col ? new Date(col).toLocaleDateString() : '';
          }

          return false;
        },
      })
    );
  }, []);

  const allApproved = Object.values(approveStatus).every((value) => value.includes('approved'));

  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_12">
          <Table>
            <Thead>
              <tr>
                <td>Compliance Projects Name</td>
                <td>Section</td>
                <td>Attributes</td>
                <td>Parameters</td>
                <td>Status</td>
                <td>
                  {isJAWDAUser() && (
                    <Switch
                      leftLabel="Approve all"
                      rightLabel="Reject all"
                      checked={allApproved}
                      onClick={(checked) => {
                        updateStatus({
                          checked,
                          req: {
                            data: {
                              compliance_record_id: projects.map(({ id }) => id),
                            },
                            cb: () => {
                              setApproveStatus(() => {
                                const updatedApproveStatus = {};
                                projects.forEach(({ id }) => { 
                                  updatedApproveStatus[id] = checked ? 'approved' : 'rejected';
                                });

                                return updatedApproveStatus;
                              });
                            },
                            compliance_project_id: project_id,
                          },
                        });
                      }}
                    />
                  )}
                </td>
              </tr>
            </Thead>
            <Tbody>
              {projects.map(
                ({
                  id,
                  project_name,
                  section_count,
                  attribute_count,
                  parameter_count,
                }) => (
                  <tr>
                    <td onClick={() => onSubmit({ name: project_name, id })}>{project_name}</td>
                    <td onClick={() => onSubmit({ name: project_name, id })}>{section_count}</td>
                    <td onClick={() => onSubmit({ name: project_name, id })}>{attribute_count}</td>
                    <td onClick={() => onSubmit({ name: project_name, id })}>{parameter_count}</td>
                    <td onClick={() => onSubmit({ name: project_name, id })}>
                      <Badge status={approveStatus[id]}>{approveStatus[id]}</Badge>
                    </td>
                    <td>
                      {isMOTCUser() ? (
                        <>
                          <NavLink
                            to={{
                              pathname: `/projects/${project_id}/case-management`,
                              state: { project_id: id },
                            }}
                          >
                            Create Case
                          </NavLink>{' '}
                          /{' '}
                          <NavLink
                            to={{
                              pathname: `/projects/${project_id}/case-management`,
                              state: { project_id: id },
                            }}
                          >
                            Report Issue
                          </NavLink>
                        </>
                      ) : isJAWDAUser() ? (
                        <td>
                          <Switch
                            leftLabel="Approve"
                            rightLabel="Reject"
                            checked={approveStatus[id] === 'approved'}
                            onClick={(checked) => {
                              updateStatus({
                                checked,
                                req: {
                                  data: { compliance_record_id: [id] },
                                  cb: () => {
                                    setApproveStatus((prevStatus) => ({
                                      ...prevStatus,
                                      [id]: checked ? 'approved' : 'rejected'
                                    }));
                                  },
                                  compliance_project_id: id
                                }
                              });
                            }}
                          />
                        </td>
                      ) : null}
                    </td>
                  </tr>
                )
              )}
            </Tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 3px;

  td {
    padding: 0px 18px;

    &:not(:first-child) {
      text-align: center;
    }
  }
`;

const Thead = styled.thead`
  tr {
    height: 48px;

    td {
      font: normal normal normal 12px/18px Muli;
      color: #666666;
      white-space: nowrap;
    }
  }
`;

const Tbody = styled.tbody`
  tr {
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 2px #00000029;
    height: 55px;
    cursor: pointer;

    td {
      font: normal normal 600 15px/22px Muli;

      &:not(:first-child) {
        color: #666666;
      }

      a {
        text-align: right;
        text-decoration: underline;
        font: normal normal 600 12px/22px Muli;
        color: #2680eb;
      }
    }
  }
`;

const colors = {
  submitted: '#0064FE',
  draft: '#FFBF00',
  created: '#FFBF00',
  in_review: '#EB622B',
  approved: '#3FBF11',
  rejected: '#FF6060',
  on_hold: '#999999',
};

const Badge = styled.span`
  ${({ status }) => css`
    display: inline-block;
    height: 20px;
    width: 80px;
    color: white;
    border-radius: 11px;
    font: normal normal normal 12px/20px Muli;
    background-color: ${colors[status]};
    text-transform: capitalize;
    text-align: center;
  `}
`;

const Priority = styled.span`
  background-color: ${(props) =>
    props.active === 1
      ? '#FFF1F1'
      : props.active === 2
      ? '#EAF4FF'
      : '#FFF5DF'};
  color: ${(props) =>
    props.active === 1
      ? '#FF6060'
      : props.active === 2
      ? '#005CC8'
      : '#FFB300'};
  border: ${(props) =>
    props.active === 1
      ? '1px solid #FF6060'
      : props.active === 2
      ? '1px solid #005CC8'
      : '1px solid #FFB300'};
  font-size: 12px;
  padding: 3px;
  border-radius: 3px;
`;

const CatergoryBadge = styled.span`
  padding: 5px 10px;
  background: #f5f5f5;
  color: #1a6b8f;
  border-radius: 15px;
  margin: 0px 4px 4px 0px;
`;

export default Projects;
