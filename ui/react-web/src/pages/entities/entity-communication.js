import React, { useEffect, useState } from 'react';

const EntityCommunication = ({ defaultData, onSubmit }) => {
  const [data, setData] = useState({
    user_groups: '',
    subject: '',
    purpose: '',
    details: '',
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
  }, [defaultData]);

  const errorLabels = {
    user_groups: 'User groups',
    purpose: 'Purpose',
    subject: 'Subject',
    details: 'Details',
  };

  const isEmpty = (name, value) =>
    value ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
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

  const handleChange = ({ target: { value, name } }) => {
    updateData(name, value);
  };

  const handleSubmit = () => {
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

  const { user_groups, subject, purpose, details } = data;

  return (
    <>
      <div className="flex_col_sm_12">
        <div className="form_field_wrapper">
          <label className="form_label">User Groups</label>
          <div className="text_field_wrapper">
            <input
              type="text"
              placeholder="Search and select user group"
              name="user_groups"
              value={user_groups}
              onChange={handleChange}
            />
            <div className="error_messg">{errors.user_groups}</div>
          </div>
        </div>
      </div>

      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">Subject</label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter subject"
                name="subject"
                value={subject}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.subject}</div>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">Purpose</label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter purpose"
                name="purpose"
                value={purpose}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.purpose}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_col_sm_12">
        <div className="form_field_wrapper">
          <label className="form_label">Details</label>
          <div className="text_field_wrapper">
            <textarea placeholder="Enter communication details" />
            <div className="error_messg">{errors.details}</div>
          </div>
        </div>
      </div>

      <div className="flex_col_sm_12 text-right">
        <button className="add_more" onClick={handleSubmit}>
          Submit &amp; Add more
        </button>
      </div>
    </>
  );
};

export default EntityCommunication;
