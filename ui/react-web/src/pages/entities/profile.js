import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CropModal from './crop-modal';
import { useParams } from 'react-router';
import DropZone from './drop-zone';
import { entityTypes } from '../../store/master-data';

const Profile = () => {
  const { entity_id } = useParams();
  const [files, setFiles] = useState([]);
  const [data, setData] = useState({
    name: '',
    name_ar: '',
    description: '',
    description_ar: '',
    short_name: '',
    type_id: entityTypes['1'].value,
    logo: null,
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (entity_id) {
      // get details
      // setData();
    }
  }, []);

  const errorLabels = {
    name: 'Entity name',
    name_ar: 'Entity name',
    description: 'Entity description',
    description_ar: 'Entity description',
    short_name: 'Short name',
    type_id: 'Entity type',
    logo: 'Entity logo',
  };

  const isEmpty = (name, value) =>
    value ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'name':
      case 'name_ar':
      case 'description':
      case 'description_ar':
      case 'short_name':
      case 'type_id':
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

  const handleChange = ({ target: { value, name } }) => {
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
    }
  };

  const {
    name,
    name_ar,
    description,
    description_ar,
    short_name,
    type_id,
    logo,
  } = data;

  return (
    <ProfileWrapper className="custom_container">
      <CropModal
        file={files[0]?.preview}
        setFile={setFile}
        setCroppedImage={(value) => updateData('logo', value)}
      />
      <div className="custom_row">
        <div className="flex_row">
          <div className="flex_col_sm_6">
            <div className="form_field_wrapper">
              <label className="form_label">
                Name <mark>*</mark>
              </label>
              <div className="text_field_wrapper">
                <input
                  type="text"
                  placeholder="For example, Ministry of Commerce and Industry"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  maxLength={100}
                />
                <div className="text-right">
                  <span className="limit">
                    {100 - name.length} Characters left
                  </span>
                </div>
              </div>
              <span className="error_messg">{errors.name}</span>
            </div>
            <div className="form_field_wrapper">
              <label className="form_label">
                Description <mark>*</mark>
              </label>
              <div className="text_field_wrapper">
                <textarea
                  placeholder="Elaborate entity details here"
                  name="description"
                  value={description}
                  onChange={handleChange}
                />
                <span className="error_messg">{errors.description}</span>
              </div>
            </div>

            <div className="flex_row">
              <div className="flex_col_sm_6">
                <div className="form_field_wrapper">
                  <label className="form_label">
                    Short Name <mark>*</mark>
                  </label>
                  <div className="text_field_wrapper">
                    <input
                      placeholder="MOCI"
                      name="short_name"
                      value={short_name}
                      onChange={handleChange}
                      type="text"
                    />
                    <span className="error_messg">{errors.short_name}</span>
                  </div>
                </div>
              </div>

              <div className="flex_col_sm_6">
                <div className="form_field_wrapper">
                  <label className="form_label">
                    Entity Type* <mark>*</mark>
                  </label>
                  <div className="text_field_wrapper">
                    <select
                      name="type_id"
                      value={type_id}
                      onChange={handleChange}
                    >
                      {Object.values(entityTypes).map(({ value, label }) => (
                        <option value={value}>{label}</option>
                      ))}
                    </select>
                    <span className="error_messg">{errors.type_id}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="form_field_wrapper">
              <label className="form_label">
                Upload Entity Logo <mark>*</mark>
              </label>
              <DropZone files={files} setFiles={setFiles} preview={logo} />
              <span className="error_messg">{errors.logo}</span>
            </div>
          </div>

          <div className="flex_col_sm_6">
            <div className="form_field_wrapper ar">
              <label className="form_label">
                {' '}
                اسم <mark>*</mark>{' '}
              </label>
              <div className="text_field_wrapper">
                <input
                  placeholder="على سبيل المثال ، وزارة التجارة والصناعة"
                  name="name_ar"
                  value={name_ar}
                  onChange={handleChange}
                  type="text"
                  maxLength={100}
                />
                <div className="text-right">
                  <span className="limit">بقي {100 - name_ar.length} حرف</span>
                </div>
              </div>
              <span className="error_messg">{errors.name_ar}</span>
            </div>
            <div className="form_field_wrapper ar">
              <label className="form_label">
                {' '}
                وصف <mark>*</mark>
              </label>
              <div className="text_field_wrapper">
                <textarea
                  name="description_ar"
                  value={description_ar}
                  onChange={handleChange}
                  placeholder="اشرح تفاصيل الكيان هنا"
                />
                <span className="error_messg">{errors.description_ar}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex_col_sm_12 text-right">
          <button className="btn_solid" onClick={handleSubmit}>
            Save{' '}
          </button>
        </div>
      </div>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  padding-top: 40px !important;
  padding-bottom: 40px !important;
`;

export default Profile;
