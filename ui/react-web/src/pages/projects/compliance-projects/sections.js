import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Switch from '../../../components/switch/switch';
import makeStore from '../../../store/make-store';
import {
  caseCategoryTypes,
  casePriorityTypes,
} from '../../../store/master-data';
import { isJAWDAUser, isMOTCUser } from '../../../store/user';

const { load } = makeStore(
  ({ compliance_project_id }) =>
    `rev-compl-projects/${compliance_project_id}/sections-report`
);
const { load: loadCases } = makeStore(
  ({ project_id }) => `rev-projects/${project_id}/cases`
);

const Sections = ({ onSubmit, selected, setTableProps, updateStatus }) => {
  const { project_id } = useParams();
  const [sections, setSections] = useState([]);
  const [approveStatus, setApproveStatus] = useState({});

  useEffect(() => {
    if (selected['1']?.id) {
      load({ compliance_project_id: selected['1'].id }, (data) => {
        setSections(data);

        setApproveStatus(() => {
          const approveStatus = {};
          data.forEach(({ section_id }) => {
            approveStatus[section_id] = false;
          });

          return approveStatus;
        });
      });
    }

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

  const allApproved = Object.values(approveStatus).every((value) => value);

  console.log(approveStatus);

  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_12">
          <Table>
            <Thead>
              <tr>
                <td>Section Name</td>
                <td>Attributes</td>
                <td>Parameters</td>
                <td>Completed</td>
                <td>Not Tested</td>
                <td>
                  {isJAWDAUser() && (
                    <Switch
                      leftLabel="Approve all"
                      rightLabel="Reject all"
                      checked={allApproved}
                      onClick={(checked) => {
                        if (selected[1].id) {
                          updateStatus({
                            checked,
                            req: {
                              data: {
                                section_id: sections.map(({ section_id }) => section_id),
                              },
                              cb: () => {
                                setApproveStatus(() => {
                                  const updatedApproveStatus = {};
                                  sections.forEach(({ section_id }) => { 
                                    updatedApproveStatus[section_id] = checked;
                                  });

                                  return updatedApproveStatus;
                                });
                              },
                              compliance_project_id: selected[1].id,
                            },
                          });
                        }
                      }}
                    />
                  )}
                </td>
              </tr>
            </Thead>
            <Tbody>
              {sections.map(
                ({
                  section_id,
                  section_name,
                  attribute_count,
                  parameter_count,
                  completed,
                  not_tested,
                }) => (
                  <tr key={section_id}>
                    <td onClick={() => onSubmit({ name: section_name, id: section_id })}>{section_name}</td>
                    <td onClick={() => onSubmit({ name: section_name, id: section_id })}>{attribute_count}</td>
                    <td onClick={() => onSubmit({ name: section_name, id: section_id })}>{parameter_count}</td>
                    <td onClick={() => onSubmit({ name: section_name, id: section_id })}>{completed}</td>
                    <td onClick={() => onSubmit({ name: section_name, id: section_id })}>{not_tested}</td>
                    <td>
                      {isMOTCUser() ? (
                        <>
                          <NavLink
                            to={{
                              pathname: `/projects/${project_id}/case-management`,
                              state: { section_id },
                            }}
                          >
                            Create Case
                          </NavLink>{' '}
                          /{' '}
                          <NavLink
                            to={{
                              pathname: `/projects/${project_id}/case-management`,
                              state: { section_id },
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
                            checked={approveStatus[section_id]}
                            onClick={(checked) => {
                              console.log(checked);
                              if (selected[1].id) {
                                updateStatus({
                                  checked,
                                  req: {
                                    data: { section_id: [section_id] },
                                    cb: () => {
                                      setApproveStatus((prevStatus) => ({
                                        ...prevStatus,
                                        [section_id]: checked
                                      }));
                                    },
                                    compliance_project_id: selected[1].id
                                  }
                                });
                              }
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
          {/* {!!sections.length && <LoadMoreButton>Load More</LoadMoreButton>} */}
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

// const LoadMoreButton = styled.button`
//   width: 197px;
//   height: 43px;
//   background: #FFFFFF 0% 0% no-repeat padding-box;
//   box-shadow: 0px 1px 2px #00000029;
//   border-radius: 3px;
//   border: none;
//   display: block;
//   margin: 12px auto 0px;
// `;

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

export default Sections;
