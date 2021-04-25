import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DropZone from '../drop-zone';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ButtonLink } from '../../entities/details';
import makeStore from '../../../store/make-store';
import { useParams } from 'react-router';
import { projectCategoryTypes } from '../../../store/master-data';
import AutoComplete from '../../entities/auto_complete';

const { load } = makeStore(
  ({ project_id, id }) =>
    `${project_id}/rev-compl-projects${id ? `/${id}` : ''}`
);
const { update: updateProject } = makeStore(
  ({ id }) => `rev-compl-projects/${id}`
);
const { load: loadUsers } = makeStore(
  ({ project_id }) => `rev-projects/${project_id}/users`
);

const SubmitEvidence = ({ setTableProps }) => {
  const { project_id } = useParams();
  const [id, setId] = useState();
  const [users, setUsers] = useState([]);
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const [start_date, setStartDate] = React.useState();
  const [end_date, setEndDate] = React.useState(new Date());
  const [update, forceUpdate] = React.useState({});

  const defaultData = {
    spoc_ids: [],
    notes: '',
    logo: null,
  };
  const [data, setData] = useState(defaultData);

  const errorLabels = {
    spoc_ids: 'Full Name',
    notes: 'Notes',
    logo: 'Upload',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'spoc_ids':
        return isEmpty(name, value);
      case 'notes':
        return isEmpty(name, value);
      case 'logo':
        return isEmpty(name, files);
      default:
        return false;
    }
  };

  const fetchFiles = (updated) => {
    forceUpdate([]);
  };

  const handleEdit = (id) => {
    setId(id);
    load({ project_id, id }, (data) =>
      setData(
        data.reduce((prevVal, { id, question, answer }) => {
          return {
            ...prevVal,
            [id]: { question, answer: answer === 'yes' },
          };
        }, {})
      )
    );
  };

  useEffect(() => {
    loadUsers({ project_id }, (data) => {
      setUsers(data);

      load({ project_id }, (data) => {
        setId(data[0]?.id);
        load({ project_id, id: data[0]?.id }, (data) => setData(data[0]));

        setTableProps({
          rows: data,
          renderCol: (colIndex, col) => {
            if (colIndex === 0) {
              return projectCategoryTypes[col]?.label;
            }
            if (colIndex === 2) {
              return (
                <ButtonLink onClick={() => handleEdit(col)}>
                  Edit Compliance Record
                </ButtonLink>
              );
            }
            return false;
          },
        });
      });
    });
  }, []);

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
      const values = Array.isArray(data[name]) ? data[name] : [];
      if (values.includes(parseInt(value))) {
        updateData(
          name,
          values.filter((val) => val !== parseInt(value))
        );
      } else {
        updateData(name, values.concat([parseInt(value)]));
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
      updateProject({ data: { spoc_ids, notes }, id, cb: () => setData(defaultData) });
    }
  };

  const { spoc_ids, notes, logo } = data;

  return (
    <>
      <OuterRowFlex>
        <div className="flex_row">
          <div className="flex_col_sm_8">
            <div className="flex_row">
              <div className="flex_col_sm_5">
                <LightGreyText>{'Evidence for '}</LightGreyText>
              </div>

              <div className="flex_col_sm_6">
                <BlueBorder>{'Login & Register'}</BlueBorder>
              </div>
            </div>
          </div>
        </div>
      </OuterRowFlex>

      <div className="flex_row">
        <div className="flex_col_sm_8">
          <div className="form_field_wrapper">
            <label className="form_label">
              Name <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <AutoComplete
                placeholder="Search and select user group"
                name="spoc_ids"
                values={spoc_ids}
                onChange={handleChange}
                error={errors.spoc_ids}
                options={users.map(({ id, first_name }) => ({ value: id, label: first_name })) || []}
              />
            </div>
          </div>

          <div className="flex_row">
            <div className="flex_col_sm_6">
              <label className="form_label">
                Start Date <mark>*</mark>
              </label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd-MM-yyyy"
                  id="date-picker-inline"
                  value={start_date}
                  onChange={(date) => {
                    setStartDate(date);
                  }}
                  autoOk={true}
                  KeyboardButtonProps={{ 'aria-label': 'change date' }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className="flex_col_sm_6">
              <label className="form_label">
                End Date <mark>*</mark>
              </label>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="dd-MM-yyyy"
                  id="date-picker-inline"
                  value={end_date}
                  onChange={(date) => {
                    setEndDate(date);
                  }}
                  autoOk={true}
                  KeyboardButtonProps={{ 'aria-label': 'change date' }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </div>

          <div className="form_field_wrapper">
            <label className="form_label">
              Notes <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <textarea
                name="notes"
                value={notes}
                placeholder="Enter Notes"
                onChange={handleChange}
              />
              <span className="error_messg">{errors.notes}</span>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_4">
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
              formats={['.csv', '.xlsx', '.xls']}
              label={'Click here or drag and drop here'}
              sub_label={'Allowed file formats are XLS, XLSX, CSV within 20MB'}
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

const OuterRowFlex = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const LightGreyText = styled.span`
  color: #666666;
`;

const BlueBorder = styled.span`
  color: #2680eb;
  border: 2px solid #2680eb;
  padding: 5px 15px;
  border-radius: 20px;
`;

export default SubmitEvidence;
