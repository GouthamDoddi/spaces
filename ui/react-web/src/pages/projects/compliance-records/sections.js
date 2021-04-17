import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Sections = ({ onSubmit }) => {
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
              <tr onClick={() => onSubmit('Verify Educational Certificate')}>
                <td>Verify Educational Certificate</td>
                <td>2</td>
                <td>16</td>
                <td>0</td>
                <td>10</td>
                <td>
                  <NavLink to="">Create Case</NavLink> /{' '}
                  <NavLink to="">Report Issue</NavLink>
                </td>
              </tr>
              <tr onClick={() => onSubmit('eService Information')}>
                <td>eService Information</td>
                <td>2</td>
                <td>16</td>
                <td>0</td>
                <td>10</td>
                <td>
                  <NavLink to="">Create Case</NavLink> /{' '}
                  <NavLink to="">Report Issue</NavLink>
                </td>
              </tr>
              <tr onClick={() => onSubmit('eService Functionality')}>
                <td>eService Functionality</td>
                <td>2</td>
                <td>16</td>
                <td>0</td>
                <td>10</td>
                <td>
                  <NavLink to="">Create Case</NavLink> /{' '}
                  <NavLink to="">Report Issue</NavLink>
                </td>
              </tr>
              <tr onClick={() => onSubmit('Verify Educational Certificate')}>
                <td>Verify Educational Certificate</td>
                <td>2</td>
                <td>16</td>
                <td>0</td>
                <td>10</td>
                <td>
                  <NavLink to="">Create Case</NavLink> /{' '}
                  <NavLink to="">Report Issue</NavLink>
                </td>
              </tr>
              <tr onClick={() => onSubmit('ePayment')}>
                <td>ePayment</td>
                <td>2</td>
                <td>16</td>
                <td>0</td>
                <td>10</td>
                <td>
                  <NavLink to="">Create Case</NavLink> /{' '}
                  <NavLink to="">Report Issue</NavLink>
                </td>
              </tr>
            </Tbody>
          </Table>
          <LoadMoreButton>Load More</LoadMoreButton>
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
