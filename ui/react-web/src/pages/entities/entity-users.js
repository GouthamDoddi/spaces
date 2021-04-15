import React, { useEffect, useState } from 'react';
import CropModal from './crop-modal';
import DropZone from './drop-zone';

const EntityUsers = ({ files, setFiles, defaultData, onSubmit }) => {
  const [data, setData] = useState({
    full_name: '',
    email: '',
    phone: '',
    role: 'test1',
    profile_picture: null,
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
  }, [defaultData]);

  const errorLabels = {
    full_name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    role: 'Role',
    profile_picture: 'Profile picture',
  };

  const isEmpty = (name, value) =>
    value ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'full_name':
      case 'email':
      case 'role':
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

  const setFile = (value) => {
    setFiles(value || []);
  }

  const { full_name, email, phone, role, profile_picture } = data;

  return (
    <>
      <CropModal
        file={files[0]?.preview}
        setFile={setFile}
        setCroppedImage={(value) => updateData('profile_picture', value)}
      />
      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Full Name <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter user's full name"
                name="full_name"
                value={full_name}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.full_name}</div>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Email <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.email}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">Phone</label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter phone"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.phone}</div>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Role <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <select name="role" value={role} onChange={handleChange}>
                <option value="test1">Test1</option>
              </select>
              <div className="error_messg">{errors.role}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">Upload profile picture</label>
            <DropZone
              files={files}
              setFiles={setFiles}
              preview={profile_picture}
            />
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

export default EntityUsers;
