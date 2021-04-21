import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import makeStore from '../../../store/make-store';

const { load } = makeStore(({ project_id }) => `rev-projects/${project_id}/compl-projects-report`);

const PortalMobileApps = ({ onSubmit }) => {
  const { project_id } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    load({ project_id }, (data) => setProjects(data));
  }, []);

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
                <td></td>
              </tr>
            </Thead>
            <Tbody>
              {projects.map(({ id, project_name, section_count, attribute_count, parameter_count, status }) => (
                <tr onClick={() => onSubmit({ name: project_name, id })}>
                  <td>{project_name}</td>
                  <td>{section_count}</td>
                  <td>{attribute_count}</td>
                  <td>{parameter_count}</td>
                  <td>
                    <Badge status={status}>{status}</Badge>
                  </td>
                  <td>
                    <NavLink to="">Create Case</NavLink> /{' '}
                    <NavLink to="">Report Issue</NavLink>
                  </td>
                </tr>
              ))}
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
        color: #2680EB;
      }
    }
  }
`;

const colors = {
  submitted: '#0064FE',
  draft: '#FFBF00',
  in_review: '#EB622B',
  presented: '#3FBF11',
}

const Badge = styled.span`${({ status }) => css`
  display: inline-block;
  height: 20px;
  width: 80px;
  color: white;
  border-radius: 11px;
  font: normal normal normal 12px/20px Muli;
  background-color: ${colors[status]}
  text-transform: capitalize;
`}`;

export default PortalMobileApps;
