import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const PortalMobileApps = ({ onSubmit }) => {
  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_12">
          <Table>
            <Thead>
              <tr>
                <td>Compliance Records Name</td>
                <td>Section</td>
                <td>Attributes</td>
                <td>Parameters</td>
                <td>Status</td>
                <td></td>
              </tr>
            </Thead>
            <Tbody>
              <tr onClick={() => onSubmit('Verify Educational Certificate')}>
                <td>Verify Educational Certificate</td>
                <td>2</td>
                <td>16</td>
                <td>0</td>
                <td>
                  <Badge type="warning">Draft</Badge>
                </td>
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
                <td>
                  <Badge type="primary">Submitted</Badge>
                </td>
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
                <td>
                  <Badge type="danger">In Review</Badge>
                </td>
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
                <td>
                  <Badge type="success">Presented</Badge>
                </td>
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
                <td>
                  <Badge type="warning">Draft</Badge>
                </td>
                <td>
                  <NavLink to="">Create Case</NavLink> /{' '}
                  <NavLink to="">Report Issue</NavLink>
                </td>
              </tr>
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
  primary: '#0064FE',
  warning: '#FFBF00',
  danger: '#EB622B',
  success: '#3FBF11',
}

const Badge = styled.span`${({ type }) => css`
  display: inline-block;
  height: 20px;
  width: 80px;
  color: white;
  border-radius: 11px;
  font: normal normal normal 12px/20px Muli;
  background-color: ${colors[type]}
`}`;

export default PortalMobileApps;
