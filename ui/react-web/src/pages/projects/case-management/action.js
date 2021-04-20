import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { CheckIcon } from '../compliance-records/records';

const Action = ({ defaultData, onSubmit }) => {
  const [data, setData] = useState({
    ground: '',
    comments: '',
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
  }, [defaultData]);

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
      onSubmit(data);
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
                disabled
              />
            </div>
          </div>
        </div>
        <div className="flex_col_sm_6">
          <AgencyCommentActions>
            <Button color="success">
              <CheckIcon />
              Approve
            </Button>
            <Button color="danger">
              <CrossIcon />
              Reject
            </Button>
          </AgencyCommentActions>
        </div>
      </div>

      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Select Ground <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <select name="ground" value={ground} onChange={handleChange}>
                <option>Test1</option>
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

export default Action;
