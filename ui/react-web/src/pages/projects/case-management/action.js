import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled, { css } from 'styled-components';
import makeStore from '../../../store/make-store';
import { caseCategoryTypes, casePriorityTypes } from '../../../store/master-data';
import { isJAWDAUser, isMOTCUser, role } from '../../../store/user';
import { CheckIcon } from '../compliance-projects/parameters';

const { load: loadCases } = makeStore(({ project_id, case_id }) => `rev-projects/${project_id}/cases${case_id ? `/${case_id}` : ''}`);
const { create: approve } = makeStore(({ project_id, case_id }) => `rev-projects/${project_id}/cases/${case_id}/approve`);
const { create: reject } = makeStore(({ project_id, case_id }) => `rev-projects/${project_id}/cases/${case_id}/reject`);
const { load: loadGrounds } = makeStore(() => 'case-grounds/');

const Action = ({ setTableProps, rowId, setRowId }) => {
  const { project_id } = useParams();
  const [grounds, setGrounds] = useState([]);
  const [data, setData] = useState({
    ground: '',
    comments: '',
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (isMOTCUser()) {
      loadGrounds('', (data) => setGrounds(data));
    }

    loadCases({ project_id }, (data) => {
      if (data.length && data[0].id) {
        setRowId(data[0].id);
      }

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
    });
  }, []);

  const errorLabels = {
    ground: 'Ground',
    comments: 'Comments',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'ground':
      case 'comments':
        return isEmpty(name, value);
      default:
        return false;
    }
  };

  const updateData = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (submitClicked) {
      setErrors((prevValue) => ({
        ...prevValue,
        [name]: isInvalid(name, value),
      }));
    }
  };

  const handleChange = ({ target: { value, name, type } }) => {
    updateData(name, value);
  };

  const handleSave = () => {
    if (!submitClicked) {
      setSubmitClicked(true);
    }

    const hasErrors = Object.keys(data).reduce((prevValue, name) => {
      const hasError = isInvalid(name, data[name]);

      setErrors((prevValue) => ({
        ...prevValue,
        [name]: hasError,
      }));

      return prevValue || hasError;
    }, false);

    if (!hasErrors) {
    }
  };

  const { ground, comments } = data;

  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Agency Comments <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <textarea
                placeholder="Agency comments"
                name="agency comment"
                value="Two-factor authentication to make private is complicated hence, please provide exception for this case"
                disabled={isMOTCUser() || isJAWDAUser()}
              />
            </div>
          </div>
        </div>
        <div className="flex_col_sm_6">
          {(isMOTCUser() || isJAWDAUser()) && (
            <AgencyCommentActions>
              <Button color="success" onClick={() => rowId ? approve({ data: {}, project_id, case_id: rowId }) : undefined}>
                <CheckIcon />
                Approve
              </Button>
              <Button color="danger" onClick={() => rowId ? reject({ data: {}, project_id, case_id: rowId }) : undefined}>
                <CrossIcon />
                Reject
              </Button>
            </AgencyCommentActions>
          )}
        </div>
      </div>

      {isMOTCUser() && (
        <>
          <div className="flex_row">
            <div className="flex_col_sm_6">
              <div className="form_field_wrapper">
                <label className="form_label">
                  Select Ground <mark>*</mark>
                </label>
                <div className="text_field_wrapper">
                  <select name="ground" value={ground} onChange={handleChange}>
                    {grounds.map(({ name }) => <option>{name}</option>)}
                  </select>
                  <div className="error_messg">{errors.ground}</div>
                </div>
              </div>
            </div>
            <div className="flex_col_sm_6">
              <OR>[OR]</OR>
              <Button color="primary" width="auto">
                <PlusIcon />
                Request New Ground
              </Button>
            </div>
          </div>
          <div className="flex_row">
            <div className="flex_col_sm_6">
              <div className="form_field_wrapper">
                <label className="form_label">
                  Ground comments <mark>*</mark>
                </label>
                <div className="text_field_wrapper">
                  <textarea
                    placeholder="Enter comments"
                    name="comments"
                    value={comments}
                    onChange={handleChange}
                  />
                  <div className="error_messg">{errors.comments}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex_col_sm_12 text-right">
            <button className="add_more" onClick={handleSave}>
              Submit
            </button>
          </div>
        </>
      )}
    </>
  );
};

const OR = styled.span`
  margin-right: 48px;
`;

const AgencyCommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin-top: 30px;
  flex-direction: column;
`;

const Button = styled.button`
  ${({ color, width }) => css`
    width: ${width || '116px'};
    height: 36px;
    color: white;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    font: normal normal 600 14px/20px Muli;
    background: ${color === 'danger'
        ? '#F84848'
        : color === 'success'
        ? '#3FBF11'
        : '#2680EB'}
      0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #dddddd;
    border: none;
    white-space: nowrap;

    > svg {
      margin-right: 10px;
    }
  `}
`;

export const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21.213"
    height="21.213"
    viewBox="0 0 21.213 21.213"
    transform="rotate(45)"
  >
    <g transform="translate(-467.398 -1185.111) rotate(45)">
      <circle
        fill="#fff"
        cx="7.5"
        cy="7.5"
        r="7.5"
        transform="translate(1176 500)"
      />
      <g transform="translate(-40.965 411.035)">
        <line
          fill="none"
          stroke="#f84848"
          strokeLinecap="round"
          y2="10"
          transform="translate(1228.036 92.965) rotate(45)"
        />
        <line
          fill="none"
          stroke="#f84848"
          strokeLinecap="round"
          y1="10"
          transform="translate(1228.036 100.036) rotate(135)"
        />
      </g>
    </g>
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21.213"
    height="21.213"
    viewBox="0 0 21.213 21.213"
  >
    <g transform="translate(-467.398 -1185.111) rotate(45)">
      <circle
        fill="#fff"
        cx="7.5"
        cy="7.5"
        r="7.5"
        transform="translate(1176 500)"
      />
      <g transform="translate(-40.965 411.035)">
        <line
          fill="none"
          stroke="#2680eb"
          strokeLinecap="round"
          y2="10"
          transform="translate(1228.036 92.965) rotate(45)"
        />
        <line
          fill="none"
          stroke="#2680eb"
          strokeLinecap="round"
          y1="10"
          transform="translate(1228.036 100.036) rotate(135)"
        />
      </g>
    </g>
  </svg>
);

const CatergoryBadge = styled.span`
    padding: 5px 10px;
    background:#F5F5F5;
    color:#1A6B8F;
    border-radius:15px;
    margin: 0px 4px 4px 0px;
`;

const Priority = styled.span`
  background-color: ${props => props.active === 1 ? '#FFF1F1' : props.active === 2 ? '#EAF4FF' : '#FFF5DF'};
  color: ${props => props.active === 1 ? '#FF6060' : props.active === 2 ? '#005CC8' : '#FFB300'};
  border: ${props => props.active === 1 ? '1px solid #FF6060' : props.active === 2 ? '1px solid #005CC8' : '1px solid #FFB300'};
  font-size: 12px;
  padding: 3px;
  border-radius: 3px;
`;

const Alphabet = styled.span`
    background: #2B3F58;
    color: #fff;
    padding: 2px 5px;
    border-radius: 2px;
    margin-right: 5px;
`;

const Badge = styled.span`
  padding:5px 10px;
  background:${props => props.review ? '#EB622B' :
    props.approve ? '#3FBF11' :
      props.rejected ? '#FF6060' :
        props.draft ? '#FFBF00' :
          props.onHold ? '#999999' :
            props.submitted ? '#0064FE' : '#EB622B'};         
    color: #fff;
    border-radius: 15px;
    text-transform: capitalize;
`;

export default Action;
