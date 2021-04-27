import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import makeStore from '../../../store/make-store';
import { entityUserRole } from '../../../store/master-data';
import CropModal from '../../entities/crop-modal';
import DropZone from '../../entities/drop-zone';
import { ButtonLink } from '../../entities/details';

const { load, create, update, remove } = makeStore(
  ({ project_id, user_id }) =>
    `rev-projects/${project_id}/users${user_id ? `/${user_id}` : ''}`
);

const ProjectUsers = ({
  files,
  setFiles,
  setTableProps,
}) => {
  const { project_id, user_id } = useParams();
  const defaultData = {
    first_name: '',
    email: '',
    phone: '',
    role: entityUserRole['8'].value,
    profile_pic: null,
  };
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleEdit = (id) => {
    load({ project_id, user_id: id }, (data) => setData(data));
  };

  const handleRemove = (user_id) => {
    remove({ project_id, user_id });
    setTableProps((prevValue) => ({
      ...prevValue,
      rows: prevValue.rows.filter(({ id }) => id !== user_id)
    }))
  }

  useEffect(() => {
    load({ project_id, user_id }, (data) =>
      setTableProps({
        rows: data,
        renderCol: (colIndex, col, rowIndex, row) => {
          if (colIndex === 0) {
            return row.first_name;
          }

          if (colIndex === 3) {
            return entityUserRole[col]?.label;
          }

          if (colIndex === 4) {
            return (
              <>
                <ButtonLink onClick={() => handleEdit(col)}>Edit</ButtonLink>
                <ButtonLink onClick={() => handleRemove(col)}>Delete</ButtonLink>
              </>
            );
          }

          return false;
        },
      })
    );
  }, []);

  const errorLabels = {
    first_name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    role: 'Role',
    profile_pic: 'Profile picture',
  };

  const isEmpty = (name, value) =>
    value ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'first_name':
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
      const userId = user_id || data.id;

      if (userId) {
        update({
          data,
          cb: (data) => {
            setData(defaultData);
            setTableProps((prevData) => {
              const prevUsers = [...prevData.rows];

              const updatedIndex = prevUsers.findIndex(({ id }) => id === userId);
              prevUsers[updatedIndex] = data;

              return { ...prevData, rows: [...prevUsers] };
            });
          },
          project_id,
          user_id: userId,
        });
      } else {
        create({ data, cb: (data) => {
          setData(defaultData);
          setTableProps((prevUsers) => ({
            ...prevUsers,
            rows: prevUsers.rows.concat([data]),
          }))
        }, project_id });
      }
    }
  };

  const setFile = (value) => {
    setFiles(value || []);
  };

  const { first_name, email, phone, role, profile_pic } = data;

  return (
    <>
      <CropModal
        file={files[0]?.preview}
        setFile={setFile}
        setCroppedImage={(value) => updateData('profile_pic', value)}
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
                name="first_name"
                value={first_name}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.first_name}</div>
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
                {Object.values(entityUserRole)
                  .slice(1, 4)
                  .map(({ value, label }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
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
            <DropZone files={files} setFiles={setFiles} preview={profile_pic} />
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

export default ProjectUsers;
