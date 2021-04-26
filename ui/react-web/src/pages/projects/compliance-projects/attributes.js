import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
// import Pagination from '@material-ui/lab/Pagination';
import makeStore from '../../../store/make-store';
import { caseCategoryTypes, casePriorityTypes } from '../../../store/master-data';

const { load } = makeStore(({ compliance_project_id, section_id }) => `rev-compl-projects/${compliance_project_id}/section/${section_id}/attribute-report`);
const { load: loadCases } = makeStore(({ project_id }) => `rev-projects/${project_id}/cases`);

const Attributes = ({ onSubmit, selected, setTableProps }) => {
  const { project_id } = useParams();
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    if (selected['1']?.id && selected['2']?.id) {
      load({ compliance_project_id: selected['1'].id, section_id: selected['2'].id }, (data) => setAttributes(data));
    }

    loadCases({ project_id }, (data) =>
      setTableProps({
        rows: data,
        renderCol: (colIndex, col) => {
          if (colIndex === 0) {
            return <Badge status={col}>{col}</Badge>
          }

          if (colIndex === 3) {
            return ' ';
          }

          if (colIndex === 4) {
            return <Priority active={col}>{casePriorityTypes[col]?.badge}</Priority>
          }

          if (colIndex === 5) {
            return col ? col.map((key) => <CatergoryBadge key={key}>{caseCategoryTypes[key]?.label}</CatergoryBadge>) : '';
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

  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_12">
          <Table>
            <Thead>
              <tr>
                <td>Section Name</td>
                <td>Parameters</td>
                <td>Completed</td>
                <td>Not Tested</td>
                <td></td>
              </tr>
            </Thead>
            <Tbody>
              {attributes.map(({ attribute_id, attribute_name, parameter_count, completed, not_tested }) => (
                <tr key={attribute_id} onClick={() => onSubmit({ name: attribute_name, id: attribute_id})}>
                  <td>{attribute_name}</td>
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
          {/* <PaginationWrapper>
            <Pagination count={10} size="small" />
          </PaginationWrapper> */}
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

const colors = {
  submitted: '#0064FE',
  draft: '#FFBF00',
  created: '#FFBF00',
  in_review: '#EB622B',
  approved: '#3FBF11',
  rejected: '#FF6060',
  on_hold: '#999999',
}

const Badge = styled.span`${({ status }) => css`
  display: inline-block;
  height: 20px;
  width: 80px;
  color: white;
  border-radius: 11px;
  font: normal normal normal 12px/20px Muli;
  background-color: ${colors[status]};
  text-transform: capitalize;
  text-align: center;
`}`;

const Priority = styled.span`
  background-color: ${props => props.active === 1 ? '#FFF1F1' : props.active === 2 ? '#EAF4FF' : '#FFF5DF'};
  color: ${props => props.active === 1 ? '#FF6060' : props.active === 2 ? '#005CC8' : '#FFB300'};
  border: ${props => props.active === 1 ? '1px solid #FF6060' : props.active === 2 ? '1px solid #005CC8' : '1px solid #FFB300'};
  font-size: 12px;
  padding: 3px;
  border-radius: 3px;
`;

const CatergoryBadge = styled.span`
    padding: 5px 10px;
    background:#F5F5F5;
    color:#1A6B8F;
    border-radius:15px;
    margin: 0px 4px 4px 0px;
`;

export default Attributes;