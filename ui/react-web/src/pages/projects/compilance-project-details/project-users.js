import React, { useEffect, useState } from 'react';
import DropZone from '../drop-zone';
import CropModal from '../../entities/crop-modal';

const ProjectUsers = ({ defaultData, onSubmit }) => {
  const [files, setFiles] = useState([]);
  const [data, setData] = useState({
    full_name: '',
    email: '',
    phone: '',
    role: 'test1',
    logo: null
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
  }, [defaultData]);

  const errorLabels = {
    full_name: 'Full Name',
    email: 'Email',
    phone: 'Phone Number',
    role: 'Role',
    logo: 'Upload'
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'full_name':
        return isEmpty(name, value);
      case 'email':
        return isEmpty(name, value);
      case 'phone':
        return isEmpty(name, value);
      case 'role':
        return isEmpty(name, value);
      case 'logo':
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

  const setFile = (value) => {
    setFiles(value || []);
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
    full_name,
    email,
    phone,
    role,
    logo
  } = data;

  return (
    <>
      <CropModal
        file={files[0]?.preview}
        setFile={setFile}
        setCroppedImage={(value) => updateData('logo', value)}
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
              E-mail <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter Email"
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
            <label className="form_label">
              Phone <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter Phone"
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
              <select
                name="role"
                value={role}
                onChange={handleChange}
              >
                <option value="test1">Test1</option>
              </select>
              <span className="error_messg">{errors.role}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_col_sm_8">
        <div className="form_field_wrapper">
          <label className="form_label">
            Upload Entity Logo <mark>*</mark>
          </label>
          <DropZone
            files={files}
            setFiles={setFiles}
            preview={logo}
            sizeInMb={10}
            formats={['image/png', 'image/jpg']}
            label={'Click here or drag and drop here'}
            sub_label={'Allowed file formats are PNG, JPG within 10MB'}
          />
          <span className="error_messg">{errors.logo}</span>
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

export default ProjectUsers;
