import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import makeStore from '../../store/make-store';
import AutoComplete from './auto_complete';
import { ButtonLink } from './details';

const { load, create, update, remove } = makeStore(
  ({ entity_id, user_id }) =>
    `entities/${entity_id}/communication${user_id ? `/${user_id}` : ''}`
);
const { load: loadUsers } = makeStore(
  ({ entity_id, user_id }) =>
    `entities/${entity_id}/users${user_id ? `/${user_id}` : ''}`
);

const EntityCommunication = ({ setTableProps }) => {
  const { entity_id } = useParams();
  const [users, setUsers] = useState([]);
  const defaultData = {
    user_ids: [],
    subject: '',
    purpose: '',
    details: '',
  };
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleEdit = (id) => {
    load({ entity_id, user_id: id }, (data) => setData(data));
  };

  const handleRemove = (user_id) => {
    remove({ entity_id, user_id });
    setTableProps((prevValue) => ({
      ...prevValue,
      rows: prevValue.rows.filter(({ id }) => id !== user_id),
    }));
  };

  useEffect(() => {
    loadUsers({ entity_id }, (data) => setUsers(data));
  }, []);

  useEffect(() => {
    if (users.length) {
      load({ entity_id }, (data) =>
        setTableProps({
          rows: data,
          renderCol: (colIndex, col) => {
            if (colIndex === 0) {
              const userIndex = Array.isArray(col) && col.findIndex((i) => users.find(({ id }) => id === i));
              const user = users[userIndex];

              return (
                <>
                  {user?.first_name && <UserTag>{user.first_name}</UserTag>}
                  {col?.length > 1 && <UserTag>+{col?.length - 1}</UserTag>}
                </>
              );
            }

            if (colIndex === 4) {
              return (
                <>
                  <ButtonLink onClick={() => handleEdit(col)}>Edit</ButtonLink>
                  <ButtonLink onClick={() => handleRemove(col)}>
                    Delete
                  </ButtonLink>
                </>
              );
            }

            return false;
          },
        })
      );
    }
  }, [users]);

  const errorLabels = {
    user_ids: 'User groups',
    purpose: 'Purpose',
    subject: 'Subject',
    details: 'Details',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'user_ids':
      case 'subject':
      case 'purpose':
      case 'details':
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
      if (data[name].includes(parseInt(value))) {
        updateData(
          name,
          data[name].filter((val) => val !== parseInt(value))
        );
      } else {
        updateData(name, data[name].concat([parseInt(value)]));
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
      if (data.id) {
        update({
          data,
          cb: (data) => {
            setData(defaultData);
            setTableProps((prevData) => {
              const prevUsers = [...prevData.rows];

              const updatedIndex = prevUsers.findIndex(({ id }) => id === data.id);
              prevUsers[updatedIndex] = data;

              return { ...prevData, rows: [...prevUsers] };
            });
          },
          entity_id,
          user_id: data.id,
        });
      } else {
        if (
          data.user_ids.length ||
          data.details ||
          data.purpose ||
          data.subject
        ) {
          create({
            data,
            cb: (data) => {
              setData(defaultData);
              setTableProps((prevUsers) => ({
                ...prevUsers,
                rows: prevUsers.rows.concat([data]),
              }));
            },
            entity_id,
          });
        }
      }
    }
  };

  const { user_ids, subject, purpose, details } = data;

  return (
    <>
      <div className="flex_col_sm_12">
        <div className="form_field_wrapper">
          <label className="form_label">User Groups <span>*</span></label>
          <div className="text_field_wrapper">
            <AutoComplete
              placeholder="Search and select user group"
              name="user_ids"
              values={user_ids}
              onChange={handleChange}
              error={errors.user_ids}
              options={users.map(({ id, first_name }) => ({ value: id, label: first_name })) }
            />
          </div>
        </div>
      </div>

      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">Subject <span>*</span></label>
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
            <label className="form_label">Type <span>*</span></label>
            <div className="text_field_wrapper">
              <select name="purpose">
                <option value="">Select</option>
                {['Phone call', 'Email', 'Meeting', 'In Person'].map((value) => <option value={value}>{value}</option>)}
              </select>
              <div className="error_messg">{errors.purpose}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_col_sm_12">
        <div className="form_field_wrapper">
          <label className="form_label">Details <span>*</span></label>
          <div className="text_field_wrapper">
            <textarea
              placeholder="Enter communication details"
              name="details"
              value={details}
              onChange={handleChange}
            />
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

export const UserTag = styled.span`
  display: inline-block;
  background-color: #043555;
  color: white;
  height: 28px;
  padding: 0px 24px;
  font: normal normal normal 12px/28px Muli;
  border-radius: 18px;
  margin: 2px 5px;
`;
