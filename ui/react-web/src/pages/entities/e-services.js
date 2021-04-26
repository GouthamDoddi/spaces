import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import makeStore from '../../store/make-store';
import { projectConsumerTypes } from '../../store/master-data';
import AutoComplete from './auto_complete';
import { ButtonLink } from './details';
import { UserTag } from './entity-communication';

const { load, create, update, remove } = makeStore(
  ({ entity_id, user_id }) =>
    `entities/${entity_id}/e-services${user_id ? `/${user_id}` : ''}`
);
const { load: loadProjects } = makeStore(
  ({ entity_id, user_id }) =>
    `${entity_id}/rev-projects${user_id ? `/${user_id}` : ''}`
);
const { load: loadUsers } = makeStore(
  ({ entity_id, user_id }) =>
    `entities/${entity_id}/users${user_id ? `/${user_id}` : ''}`
);

const EServices = ({ setTableProps }) => {
  const { entity_id } = useParams();
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const defaultData = {
    project_name: '',
    project_name_ar: '',
    project_description: '',
    project_description_ar: '',
    spoc_ids: [],
    project_ids: [],
    consumer_type_ids: [],
  };
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  const errorLabels = {
    project_name: 'Name',
    project_name_ar: 'Name',
    project_description: 'Description',
    project_description_ar: 'Description',
    spoc_ids: 'Project SPOC',
    project_ids: 'Project',
    consumer_type_ids: 'Consumer type',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

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
    loadProjects({ entity_id }, (data) => setProjects(data));
  }, []);

  useEffect(() => {
    if (users.length && projects.length) {
      load({ entity_id }, (data) =>
        setTableProps({
          rows: data,
          renderCol: (colIndex, col) => {
            if (colIndex === 1) {
              const projectIndex = Array.isArray(col) && col.findIndex((i) => projects.find(({ id }) => id === i));
              const project = projects[projectIndex]; 

              return (
                <>
                  {project?.project_name && <UserTag>{project.project_name}</UserTag>}
                  {col?.length > 1 && <UserTag>+{col?.length - 1}</UserTag>}
                </>
              );
            }

            if (colIndex === 3) {
              return <>{col?.map((id) => projectConsumerTypes[id].label).join(', ')}</>
            }

            if (colIndex === 4) {
              const userIndex = Array.isArray(col) && col.findIndex((i) => users.find(({ id }) => id === i));
              const user = users[userIndex];

              return (
                <>
                  {user?.first_name && <UserTag>{user.first_name}</UserTag>}
                  {col?.length > 1 && <UserTag>+{col?.length - 1}</UserTag>}
                </>
              );
            }

            if (colIndex === 5) {
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
  }, [users, projects]);

  const isInvalid = (name, value) => {
    switch (name) {
      case 'project_name':
      case 'project_name_ar':
      case 'project_description':
      case 'project_description_ar':
      case 'project_ids':
      case 'consumer_type_ids':
      case 'spoc_ids':
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
      data.owner_id = entity_id;

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
  };

  const {
    project_name,
    project_name_ar,
    project_description,
    project_description_ar,
    project_ids,
    consumer_type_ids,
    spoc_ids,
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
                name="project_name"
                value={project_name}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.project_name}</div>
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
                name="project_name_ar"
                value={project_name_ar}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.project_name_ar}</div>
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
                name="project_description"
                value={project_description}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.project_description}</div>
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
                name="project_description_ar"
                value={project_description_ar}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.project_description_ar}</div>
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
                {Object.values(projectConsumerTypes).map(({ value, label }) => (
                  <>
                    <input
                      className="filter-type filled-in"
                      type="checkbox"
                      name="consumer_type_ids"
                      value={value}
                      onChange={handleChange}
                      checked={consumer_type_ids.includes(value)}
                      id={label}
                    />
                    <label htmlFor={label}>{label}</label>
                  </>
                ))}              
              </div>
              <div className="error_messg">{errors.consumer_type_ids}</div>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Channels <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <AutoComplete
                placeholder="Search and select user group"
                name="project_ids"
                values={project_ids}
                onChange={handleChange}
                error={errors.project_ids}
                options={projects.map(({ id, project_name }) => ({ value: id, label: project_name })) }
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex_col_sm_12">
        <div className="form_field_wrapper">
          <label className="form_label">
            Project SPOC <mark>*</mark>
          </label>
          <div className="text_field_wrapper">
            <AutoComplete
              placeholder="Search and select user group"
              name="spoc_ids"
              values={spoc_ids}
              onChange={handleChange}
              error={errors.spoc_ids}
              options={users.map(({ id, first_name }) => ({ value: id, label: first_name })) }
            />
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
