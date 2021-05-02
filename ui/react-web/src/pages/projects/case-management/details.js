import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import makeStore from '../../../store/make-store';
import { casePriorityTypes, caseCategoryTypes } from '../../../store/master-data';
import DropZone from '../drop-zone';

const { load: loadCases, update: updateCase } = makeStore(({ project_id, case_id }) => `rev-projects/${project_id}/cases${case_id ? `/${case_id}` : ''}`);

const Details = ({ setTableProps, rowId, setRowId }) => {
  const { project_id } = useParams();
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const [update, forceUpdate] = React.useState({});

  const defaultData = {
    name: '',
    description: '',
    logo: null
  };
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    loadCases({ project_id }, (data) =>
      setTableProps({
        rows: data,
        renderCol: (colIndex, col) => {
          if (colIndex === 0) {
            return <Badge status={col}>{col}</Badge>
          }

          if (colIndex === 3) {
            return ' ';
          }

          if (colIndex === 4) {
            return <Priority active={col}>{casePriorityTypes[col]?.badge}</Priority>
          }

          if (colIndex === 5) {
            return col ? col.map((key) => <CatergoryBadge key={key}>{caseCategoryTypes[key]?.label}</CatergoryBadge>) : '';
          }

          if (colIndex === 6) {
            return ' ';
          }

          if (colIndex === 7) {
            return col ? new Date(col).toLocaleDateString() : '';
          }

          return false;
        },
      })
    );
  }, []);

  useEffect(() => {
    if (rowId) {
      loadCases({ project_id, case_id: rowId }, (data) => setData(data));
    }
  }, [rowId]);

  useEffect(() => {
    setErrors({});
    setSubmitClicked(false);
  }, [data.id]);

  const errorLabels = {
    name: 'Case Name',
    description: 'Description',
    logo: 'Upload'
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'name':
        return isEmpty(name, value);
      case 'description':
        return isEmpty(name, value);
      // case 'logo':
      //   return isEmpty(name, files);
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
      if (data.id) {
        updateCase({
          data,
          cb: (data) => {
            setData(defaultData);
            setRowId(null);
            setTableProps((prevData) => {
              const prevCases = [...prevData.rows];

              const updatedIndex = prevCases.findIndex(({ id }) => id === data.id);
              prevCases[updatedIndex] = data;

              return { ...prevData, rows: [...prevCases] };
            });
          },
          project_id,
          case_id: data.id,
        });
      }
    }
  };

  const {
    name,
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
                name="name"
                value={name}
                onChange={handleChange}
                maxLength={100}
              />
              <div className="error_messg">{errors.name}</div>
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
        {data?.id && (
          <button className="cancel" onClick={() => setData(defaultData)}>
            Cancel
          </button>
        )}
        <button className="add_more" onClick={handleSubmit}>
          {data?.id ? 'Update' : 'Submit & Add more'}
        </button>
      </div>
    </>
  );
};

const CatergoryBadge = styled.span`
    padding: 5px 10px;
    background:#F5F5F5;
    color:#1A6B8F;
    border-radius:15px;
    margin: 0px 4px 4px 0px;
`;

const Priority = styled.span`
  background-color: ${props => props.active === 1 ? '#FFF1F1' : props.active === 2 ? '#EAF4FF' : '#FFF5DF'};
  color: ${props => props.active === 1 ? '#FF6060' : props.active === 2 ? '#005CC8' : '#FFB300'};
  border: ${props => props.active === 1 ? '1px solid #FF6060' : props.active === 2 ? '1px solid #005CC8' : '1px solid #FFB300'};
  font-size: 12px;
  padding: 3px;
  border-radius: 3px;
`;

const Alphabet = styled.span`
    background: #2B3F58;
    color: #fff;
    padding: 2px 5px;
    border-radius: 2px;
    margin-right: 5px;
`;

const Badge = styled.span`
  padding:5px 10px;
  background:${props => props.review ? '#EB622B' :
    props.approve ? '#3FBF11' :
      props.rejected ? '#FF6060' :
        props.draft ? '#FFBF00' :
          props.onHold ? '#999999' :
            props.submitted ? '#0064FE' : '#EB622B'};         
    color: #fff;
    border-radius: 15px;
    text-transform: capitalize;
`;

export default Details;
