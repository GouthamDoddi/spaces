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

const { load, create, update } = makeStore(({ project_id, id }) => `${project_id}/rev-compl-projects/${id ? `/${id}` : ''}`);

const SubmitEvidence = ({ setTableProps }) => {
  const { project_id } = useParams();
  const [id, setId] = useState();
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const [start_date, setStartDate] = React.useState();
  const [end_date, setEndDate] = React.useState(new Date());
  const [update, forceUpdate] = React.useState({});

  const [data, setData] = useState({
    full_name: '',
    notes: '',
    logo: null
  });

  const errorLabels = {
    full_name: 'Full Name',
    notes: 'Notes',
    logo: 'Upload'
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'full_name':
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
  }

  const handleEdit = (id) => {
    setId(id);
    load({ id }, (data) =>
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
    load({ project_id }, (data) => {
      // data = Object.values(data).filter(({ type_id }) => type_id === 3);

      // if (data[0]?.id) {
      //   setId(data[0]?.id);
      //   load({ id: data[0].id }, (data) =>
      //     setData(
      //       data.reduce((prevVal, { id, question, answer }) => {
      //         return {
      //           ...prevVal,
      //           [id]: { question, answer: answer === 'yes' },
      //         };
      //       }, {})
      //     )
      //   );
      // }

      // setTableProps({
      //   rows: data,
      //   renderCol: (colIndex, col) => {
      //     if (colIndex === 0) {
      //       return projectCategoryTypes[col]?.label;
      //     }

      //     if (colIndex === 2) {
      //       return (
      //         <ButtonLink onClick={() => handleEdit(col)}>
      //           Edit Compliance Record
      //         </ButtonLink>
      //       );
      //     }

      //     return false;
      //   },
      // });
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
      
    }
  };

  const {
    full_name,
    notes,
    logo
  } = data;
  return (
    <>
      <OuterRowFlex>
        <div className="flex_row">
          <div className="flex_col_sm_8">
            <div className="flex_row">
              <div className="flex_col_sm_5">
                <LightGreyText>
                  {'Evidence for '}
                </LightGreyText>
              </div>

              <div className="flex_col_sm_6">
                <BlueBorder>
                  {'Login & Register'}
                </BlueBorder>
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
              <input
                type="text"
                placeholder="Search and select user group"
                name="full_name"
                value={full_name}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.full_name}</div>
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
                  onChange={(date) => { setStartDate(date) }}
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
                  onChange={(date) => { setEndDate(date) }}
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
              <textarea name="description" value={notes} placeholder="Enter Notes" onChange={handleChange} />
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
          Submit &amp; Add more
        </button>
      </div>
    </>
  );
};


const OuterRowFlex = styled.div`
  margin-top:10px;
  margin-bottom:10px;
`

const LightGreyText = styled.span`
  color:#666666;
`

const BlueBorder = styled.span`
  color: #2680EB;
  border: 2px solid #2680EB;
  padding: 5px 15px;
  border-radius: 20px;
`;


export default SubmitEvidence;
