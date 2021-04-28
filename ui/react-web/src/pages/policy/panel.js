import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import makeStore from '../../store/make-store';
import leftArrowIcon from '../../assets/images/left-arrow.svg';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DropZone from '../projects/drop-zone';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { caseQueueTypes, policyStatusTypes } from '../../store/master-data';
import BasicTable from '../../shared/table-material';

const { load, create, update: updatePolicy } = makeStore(
  ({ policy_id }) => `case-grounds${policy_id ? `/${policy_id}` : ''}`
);

export default function () {
  const { policy_id } = useParams();
  const history = useHistory();

  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [update, forceUpdate] = useState({});
  const defaultData = {
    name: '',
    description: '',
    attachments: [],
    category_ids: [],
    status: 1,
    start_date: null,
  };
  const [policies, setPolicies] = useState([]);
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (/\d/.test(policy_id)) {
      load({ policy_id }, (data) => setData({ ...defaultData, ...data }));
    } else if (policy_id !== 'new') {
      history.push('/policies');
    }

    load('', (data) => setPolicies(data));
  }, []);

  useEffect(() => {
    if (policy_id !== 'new') {
      load({ policy_id }, (data) => setData({ ...defaultData, ...data }));
    }
  }, [policy_id]);

  const errorLabels = {
    name: 'Ground name',
    description: 'Ground description',
    attachments: [],
    category_ids: 'Ground category',
    status: 'Status',
    start_date: 'Start date',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'name':
      case 'description':
        // case 'attachments':
        return step === 2 && isEmpty(name, value);
      case 'category_ids':
        return step === 1 && isEmpty(name, value);
      case 'start_date':
        return step === 1 && isEmpty(name, value?.toString());
      case 'status':
        return (
          step === 1 &&
          isEmpty(name, typeof value === 'number' ? value + '' : value)
        );
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
    if (type === 'radio') {
      value = parseInt(value);
    }

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

  const fetchFiles = () => {
    forceUpdate([]);
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
      if (policy_id !== 'new') {
        updatePolicy({
          data,
          cb: () => {
            setStep(2);
            setPolicies((prevPolicies) => {
              const updatedPolicies = [...prevPolicies];

              const updatedIndex = updatedPolicies.findIndex(({ id }) => id === data.id);
              updatedPolicies[updatedIndex] = data;

              return [...updatedPolicies];
            });
          },
          policy_id,
        });
      } else {
        create({ data, cb: (data) => { setPolicies((prevPolicies) => prevPolicies.concat([data])); } });
      }
    }
  };

  let {
    logo,
    attachments,
    category_ids,
    description,
    name,
    start_date,
    status,
  } = data;

  return (
    <>
      <div className="custom_container">
        <CustomRowContainer className="flex_row">
          <div className="flex_col_sm_12">{'Creating a Ground'}</div>
        </CustomRowContainer>

        <OuterExtraSpace className="flex_row">
          <div className="flex_col_sm_6">
            <div className="flex_row">
              <div className="flex_col_sm_6">
                <NavLink to="/policies">
                  <DisplayItemFlex>
                    <img src={leftArrowIcon} alt="left-arrow" />
                    <LabelCaseID>{'Back to Grounds'}</LabelCaseID>
                  </DisplayItemFlex>
                </NavLink>
              </div>
              <div className="flex_col_sm_6">
                <div className="flex_row">
                  <div className="flex_col_sm_12">
                    <ul className="entity_detail_menu">
                      <li onClick={() => setStep(1)}>
                        <span className={step === 1 ? 'active' : 'clickable'}>
                          <span className="step_count">1</span>
                          <span className="detail">
                            <span className="title">Ground Profile</span>
                            <span className="sub_title">
                              {'Provide the context for this ground'}
                            </span>
                          </span>
                        </span>
                      </li>

                      <li onClick={() => setStep(2)}>
                        <span className={step === 2 ? 'active' : 'clickable'}>
                          <span className="step_count">2</span>
                          <span className="detail">
                            <span className="title">Ground Details</span>
                            <span className="sub_title">
                              {'Explain about the ground'}
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {step === 1 ? (
            <OuterBorder className="flex_col_sm_6">
              <div className="flex_row">
                <div className="flex_col_sm_6">
                  <div className="form_field_wrapper">
                    <label className="form_label">
                      <TextCustom bigFont={true}>{` Category `}</TextCustom>
                      <mark>*</mark>
                    </label>
                    {Object.keys(caseQueueTypes).map((key) => (
                      <TextFieldWrapper
                        key={key}
                        className="text_field_wrapper"
                      >
                        <div className="checkbox_wrap agree_check">
                          <input
                            className="filter-type filled-in"
                            type="checkbox"
                            name="category_ids"
                            id={caseQueueTypes[key].label}
                            value={caseQueueTypes[key].value}
                            checked={category_ids?.includes(
                              caseQueueTypes[key].value
                            )}
                            onChange={handleChange}
                          />
                          <label htmlFor={caseQueueTypes[key].label}>
                            {caseQueueTypes[key].label}
                          </label>
                        </div>
                      </TextFieldWrapper>
                    ))}
                    <span className="error_messg">{errors.category_ids}</span>
                  </div>
                </div>
                <div className="flex_col_sm_6">
                  <div className="flex_row">
                    <div className="flex_col_sm_12">
                      <div className="form_field_wrapper">
                        <label className="form_label">
                          <TextCustom bigFont={true}>{` Status `}</TextCustom>
                          <mark>*</mark>
                        </label>
                        {Object.keys(policyStatusTypes).map((key) => (
                          <TextFieldWrapper
                            key={key}
                            className="text_field_wrapper"
                            color={policyStatusTypes[key].color}
                          >
                            <div className="checkbox_wrap agree_check">
                              <input
                                className="filter-type filled-in"
                                type="radio"
                                name="status"
                                id={policyStatusTypes[key].label}
                                value={policyStatusTypes[key].value}
                                checked={
                                  status === policyStatusTypes[key].value
                                }
                                onChange={handleChange}
                              />
                              <label htmlFor={policyStatusTypes[key].label}>
                                {policyStatusTypes[key].label}
                              </label>
                            </div>
                          </TextFieldWrapper>
                        ))}
                        <span className="error_messg">{errors.status}</span>
                      </div>

                      <OuterRowSpace
                        extraSpace={true}
                        className="text-field-wrapper"
                      >
                        <label className="form_label">
                          <TextCustom bigFont={true}>
                            {` Start Date `}
                          </TextCustom>
                          <mark>*</mark>
                        </label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd-MM-yyyy"
                            id="date-picker-inline"
                            value={start_date}
                            onChange={(date) => {
                              updateData('start_date', date);
                            }}
                            autoOk={true}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </OuterRowSpace>

                      <OuterRowSpace extraSpace={true}>
                        <div className="flex_col_sm_12 text-right">
                          <button className="add_more" onClick={() => setStep(2)}>
                            {'Save & Next'}
                          </button>
                        </div>
                      </OuterRowSpace>
                    </div>
                  </div>
                </div>
              </div>
            </OuterBorder>
          ) : (
            <OuterBorder className="flex_col_sm_6">
              <div className="flex_row">
                <div className="flex_col_sm_8">
                  <div className="form_field_wrapper">
                    <label className="form_label">
                      <TextCustom>{` Ground Name `}</TextCustom>
                      <mark>*</mark>
                    </label>
                    <div className="text_field_wrapper">
                      <input
                        type="text"
                        placeholder="For example, Raising a clarification request"
                        name="name"
                        value={name}
                        onChange={handleChange}
                      />
                      <div className="error_messg">{errors.name}</div>
                    </div>
                  </div>

                  <div className="form_field_wrapper">
                    <label className="form_label">
                      Description <mark>*</mark>
                    </label>
                    <div className="text_field_wrapper">
                      <textarea
                        name="description"
                        value={description}
                        placeholder="Enter Notes"
                        onChange={handleChange}
                      />
                      <span className="error_messg">{errors.description}</span>
                    </div>
                  </div>
                </div>
                <div className="flex_col_sm_4">
                  <div className="form_field_wrapper">
                    <label className="form_label">
                      {'Attachments'} <mark>*</mark>
                    </label>
                    <DropZone
                      files={files}
                      setFiles={setFiles}
                      preview={logo}
                      sizeInMb={20}
                      maxFilesToUpload={4}
                      fetchFiles={fetchFiles}
                      formats={['image/png', 'image/jpg', '.pdf', '.docx']}
                      label={'Click here or drag and drop attachments'}
                      sub_label={
                        'Allowed file formats are PNG, JPG, PDF, DOCX within 20MB'
                      }
                    />
                    <span className="error_messg">{errors.attachments}</span>
                  </div>

                  <OuterRowSpace extraMoreSpace={true}>
                    <div className="flex_col_sm_12 text-right">
                      <button className="add_more" onClick={handleSubmit}>
                        {'Submit'}
                      </button>
                    </div>
                  </OuterRowSpace>
                </div>
              </div>
            </OuterBorder>
          )}
        </OuterExtraSpace>

        <div className="flex_row">
          <div className="flex_col_sm_3" />
          <div className="flex_col_sm_9">
            <hr />
            <BasicTable
              rows={policies}
              keyField="id"
              tableCells={[
                { headline: 'Case ID', key: 'id', align: 'center' },
                { headline: 'Title', key: 'name', align: 'center' },
                { headline: 'Created By', key: 'created_by', align: 'center' },
                { headline: 'Created On', key: 'created_at', align: 'center' },
                { headline: 'Proposed date', key: 'start_date', align: 'center' },
              ]}
              renderCol={(colIndex, col) => {
                if (colIndex === 3 || colIndex === 4) {
                  return col ? new Date(col).toLocaleDateString() : '';
                }

                if (colIndex === 2) {
                  return ' ';
                }

                return false
              }}
              onRowClick={(id) => { history.push(`/policies/${id}/profile`); }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const OuterExtraSpace = styled.div`
  margin-top: 40px !important;
`;

const CustomRowContainer = styled.div`
  padding: 25px;
  color: #666666;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

const TextFieldWrapper = styled.div`
  box-shadow: 0px 1px 2px #676e8a3d;
  margin-bottom: 1px;
  padding: 6px 10px;
  height: 40px;
  label {
    font-weight: bold;
  }
  border-left: ${({ color }) =>
    color === 'blue'
      ? '4px solid blue'
      : color === 'green'
      ? '4px solid green'
      : color === 'yellow'
      ? '4px solid yellow'
      : '1px solid #ddd'};
`;

const OuterRowSpace = styled.div`
  margin: ${(props) =>
    props.extraSpace
      ? '40px 0px !important'
      : props.extraMoreSpace
      ? '80px 0px !important'
      : props.noSpace
      ? '0px 0px !important'
      : '10px 0px !important'};
`;

const DisplayItemFlex = styled.div`
  display: flex;
`;

const SubmittedIcon = styled.span`
  background: #0064fe;
  color: #fff;
  padding: 8px 20px;
  border-radius: 15px;
  font-size: 12px;
`;

const LabelCaseID = styled.span`
  color: #666666;
  padding: 5px 15px;
  font-weight: bold;
`;
const OuterBorder = styled.div`
  border-left: 1px solid #ddd;
`;

const SpanCategory = styled.span`
  background-color: #f5f5f5;
  color: #1a6b8f;
  padding: 5px 15px;
  border-radius: 15px;
  margin-right: 10px;
  font-size: 12px;
`;
const TextCustom = styled.span`
  font-weight: ${(props) => (props.fontBold ? 'bold' : 'normal')};
  font-size: ${(props) => (props.bigFont ? '20px' : '14px')};
  color: ${(props) => (props.greyColor ? '#999999' : '#000000')};
  margin: 10px 0px;
`;
