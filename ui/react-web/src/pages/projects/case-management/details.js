import React, { useEffect, useState } from 'react';
import DropZone from '../drop-zone';

const Details = ({ defaultData, onSubmit }) => {
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const [update, forceUpdate] = React.useState({});

  const [data, setData] = useState({
    case_name: '',
    description: '',
    logo: null
  });

  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
  }, [defaultData, files]);

  const errorLabels = {
    case_name: 'Case Name',
    description: 'Description',
    logo: 'Upload'
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'case_name':
        return isEmpty(name, value);
      case 'description':
        return isEmpty(name, value);
      case 'logo':
        return isEmpty(name, files);
      default:
        return false;
    }
  };

  const fetchFiles = (updated) => {
    forceUpdate([]);
  }

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
    case_name,
    description,
    logo
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
                placeholder="Search and select user group"
                name="case_name"
                value={case_name}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.case_name}</div>
            </div>
          </div>

          <div className="form_field_wrapper">
            <label className="form_label">
              Description <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <textarea name="description" value={description} placeholder="Enter Description" onChange={handleChange} />
              <span className="error_messg">{errors.description}</span>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
            {'Upload Test Profile & Test Data'} <mark>*</mark>
            </label>
            <DropZone
              files={files}
              setFiles={setFiles}
              preview={logo}
              sizeInMb={20}
              maxFilesToUpload={4}
              fetchFiles={fetchFiles}
              formats={['.png', '.jpg', '.pdf', '.docx']}
              label={'Click here or drag and drop here'}
              sub_label={'Allowed file formats are PNG, JPG, PDF, DOCX within 20MB'}
            />
            <span className="error_messg">{errors.logo}</span>
          </div>
        </div>

      </div>

      <div className="flex_col_sm_12 text-right">
        <button className="add_more" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};

export default Details;
