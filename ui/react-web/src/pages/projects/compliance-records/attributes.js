import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import makeStore from '../../../store/make-store';

const { load } = makeStore(({ project_id, attribute_id }) => `rev-compl-projects/${project_id}/section/${attribute_id}/attribute-report`);

const Attributes = ({ onSubmit, selected }) => {
  const { project_id } = useParams();
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    if (selected['3']?.id) {
      load({ project_id, attribute_id: selected['3'].id }, (data) => setAttributes(data));
    }
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
                <td>Completed</td>
                <td>Not Tested</td>
                <td></td>
              </tr>
            </Thead>
            <Tbody>
              {attributes.map(({ section_name, attribute_count, parameter_count, completed, not_tested }) => (
                <tr onClick={() => onSubmit(section_name)}>
                  <td>{section_name}</td>
                  <td>{attribute_count}</td>
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
          <PaginationWrapper>
            <Pagination count={10} size="small" />
          </PaginationWrapper>
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
        color: #2680eb;
      }
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 28px;

  .MuiPaginationItem {
    &-page {
      color: #999999;

      &.Mui-selected {
        background: none;
        color: #525659;
      }
    }

    &-icon {
      font-size: 32px !important;
    }
  }
`;

export default Attributes;
