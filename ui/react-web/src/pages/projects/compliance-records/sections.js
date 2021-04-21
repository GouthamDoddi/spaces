import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import makeStore from '../../../store/make-store';

const { load } = makeStore(({ project_id }) => `rev-compl-projects/${project_id}/sections-report`);

const Sections = ({ onSubmit }) => {
  const { project_id } = useParams();
  const [sections, setSections] = useState([]);

  useEffect(() => {
    load({ project_id }, (data) => setSections(data));
  }, []);

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
                <td></td>
              </tr>
            </Thead>
            <Tbody>
              {sections.map(({ id, section_name, attribute_count, parameter_count, completed, not_tested }) => (
                <tr onClick={() => onSubmit({ name: section_name, id })}>
                  <td>{section_name}</td>
                  <td>{attribute_count}</td>
                  <td>{parameter_count}</td>
                  <td>{completed}</td>
                  <td>{not_tested}</td>
                  <td>
                    <NavLink to="">Create Case</NavLink> /{' '}
                    <NavLink to="">Report Issue</NavLink>
                  </td>
                </tr>
              ))}
            </Tbody>
          </Table>
          {!!sections.length && <LoadMoreButton>Load More</LoadMoreButton>}
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

const LoadMoreButton = styled.button`
  width: 197px;
  height: 43px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  border-radius: 3px;
  border: none;
  display: block;
  margin: 12px auto 0px;
`;

export default Sections;
