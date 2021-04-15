import React, { useEffect, useState } from 'react';

const EServices = ({ defaultData, onSubmit }) => {
  const [data, setData] = useState({
    name: '',
    name_ar: '',
    description: '',
    description_ar: '',
    project_spoc: '',
    channels: 'test1',
    consumer_type: [],
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
  }, [defaultData]);

  const errorLabels = {
    name: 'Name',
    name_ar: 'Name',
    description: 'Description',
    description_ar: 'Description',
    project_spoc: 'Project SPOC',
    channels: 'Channels',
    consumer_type: 'Consumer type',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'name':
      case 'name_ar':
      case 'description':
      case 'description_ar':
      case 'channels':
      case 'consumer_type':
      case 'project_spoc':
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
    if (type === 'checkbox') {
      if (data[name].includes(value)) {
        updateData(
          name,
          data[name].filter((val) => val !== value)
        );
      } else {
        updateData(name, data[name].concat([value]));
      }

      return;
    }

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

  const {
    name,
    name_ar,
    description,
    description_ar,
    channels,
    consumer_type,
    project_spoc,
  } = data;

  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Name <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.name}</div>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="form_field_wrapper ar">
            <label className="form_label">
              اسم <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="أدخل اسم المستخدم"
                name="name_ar"
                value={name_ar}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.name_ar}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Description <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <textarea
                placeholder="Enter description"
                name="description"
                value={description}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.description}</div>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="form_field_wrapper ar">
            <label className="form_label">
              وصف <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <textarea
                placeholder="أدخل الوصف"
                name="description_ar"
                value={description_ar}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.description_ar}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Consumer Type <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <div className="checkbox_wrap agree_check">
              <input
                  className="filter-type filled-in"
                  type="checkbox"
                  name="consumer_type"
                  value="government"
                  onChange={handleChange}
                  checked={consumer_type.includes('government')}
                  id="government"
                />
                <label htmlFor="government">Government </label>
                <input
                  className="filter-type filled-in"
                  type="checkbox"
                  name="consumer_type"
                  value="business"
                  onChange={handleChange}
                  checked={consumer_type.includes('business')}
                  id="business"
                />
                <label htmlFor="business">Business </label>
                <input
                  className="filter-type filled-in"
                  type="checkbox"
                  name="consumer_type"
                  value="individual"
                  onChange={handleChange}
                  checked={consumer_type.includes('individual')}
                  id="individual"
                />
                <label htmlFor="individual">Individual </label>
              </div>
              <div className="error_messg">{errors.consumer_type}</div>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Channels <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <div className="checkbox_wrap agree_check">
                <select
                  name="channels"
                  value={channels}
                  onChange={handleChange}
                >
                  <option value="test1">Test1</option>
                </select>
              </div>
              <div className="error_messg">{errors.channels}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_col_sm_12">
        <div className="form_field_wrapper">
          <label className="form_label">
            Prject SPOC <mark>*</mark>
          </label>
          <div className="text_field_wrapper">
            <input type="text" placeholder="Search and select user group" />
            <div className="error_messg">{errors.project_spoc}</div>
          </div>
        </div>
      </div>

      <div className="flex_col_sm_12 text-right">
        <button className="add_more" onClick={handleSubmit}>Submit &amp; Add more</button>
      </div>
    </>
  );
};

export default EServices;
