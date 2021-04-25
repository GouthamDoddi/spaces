import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled, { css } from 'styled-components';
import makeStore from '../../../store/make-store';
import { resultTypes } from '../../../store/master-data';

const { loadParameters } = makeStore(
  ({ project_id, attribute_id }) =>
    `rev-compl-projects/${project_id}/attribute/${attribute_id}/parameters`
);
const { loadVariance } = makeStore(
  ({ project_id, parameter_id }) =>
    `rev-compl-projects/${project_id}/parameter/${parameter_id}/variations`
);
const { load, update } = makeStore(
  ({ record_id }) => `rev-compl-records/${record_id}`
);
const { load: loadComments, create: createComment } = makeStore(
  ({ record_id }) => `rev-compl-records/${record_id}/comments`
);
const { loadProjects } = makeStore(({ project_id }) => `reference-data/rev-projects/${project_id}/compliance-projects`);

const EServices = ({ onSubmit, selected }) => {
  const { project_id } = useParams();
  const [parameters, setParameters] = useState([]);
  const [data, setData] = useState({
    parameter: '',
    platform: '',
    language: '',
    result: '',
  });
  const [errors, setErrors] = useState({});
  const [attachments, setAttachments] = useState([]);
  const defaultAttachmentData = {
    file: '',
    comment: '',
  };
  const [attachmentData, setAttachmentData] = useState(defaultAttachmentData);
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (selected['4']?.id) {
      loadParameters({ project_id, attribute_id: selected['3'].id }, (data) =>
        setParameters(data)
      );
    }
  }, []);

  useEffect(() => {
    if (parameter) {
      loadVariance({ project_id, parameter_id: data.parameter }, (data) => console.log(data));
    }
  }, [data.parameter]);

  const handleComments = (record_id) => {
    loadComments({ record_id }, (data) => setAttachments(data));
  };

  const errorLabels = {
    parameter: 'Name',
    platform: 'Platform',
    language: 'Language',
    result: 'Result',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'parameter':
      case 'platform':
      case 'language':
      case 'result':
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

  const handleSave = () => {
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

  const updateAttachmentData = (name, value) => {
    setAttachmentData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const { comment, file } = attachmentData;

  const handleSubmit = () => {
    if (file || comment) {
      setAttachments((prevValue) =>
        prevValue.concat([
          { ...attachmentData, date: new Date().toLocaleDateString() },
        ])
      );
      setAttachmentData(defaultAttachmentData);
    }
  };

  const { parameter, platform, language, result } = data;

  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="flex_col_sm_12">
            <div className="form_field_wrapper">
              <label className="form_label">
                Parameter <mark>*</mark>
              </label>
              <div className="text_field_wrapper">
                <select
                  name="parameter"
                  value={parameter}
                  onChange={handleChange}
                >
                  {parameters.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <div className="error_messg">{errors.parameter}</div>
              </div>
            </div>
          </div>
          <div className="flex_col_sm_12">
            <div className="form_field_wrapper">
              <label className="form_label">
                Platform &amp; Language <mark>*</mark>
              </label>
              <SelectBadge
                selected={language === 'english'}
                onClick={() => updateData('language', 'english')}
              >
                English{language === 'english' && <CheckIcon />}
              </SelectBadge>
              <SelectBadge
                selected={language === 'arabic'}
                onClick={() => updateData('language', 'arabic')}
              >
                Arabic{language === 'arabic' && <CheckIcon />}
              </SelectBadge>
              {parameter === 'mobile_app' && (
                <>
                  <SelectBadge
                    selected={platform === 'android'}
                    onClick={() => updateData('platform', 'android')}
                  >
                    <AppleLogo />
                    Android{platform === 'android' && <CheckIcon />}
                  </SelectBadge>
                  <SelectBadge
                    selected={platform === 'ios'}
                    onClick={() => updateData('platform', 'ios')}
                  >
                    <AndroidLogo />
                    Apple{platform === 'ios' && <CheckIcon />}
                  </SelectBadge>
                </>
              )}
              <div className="error_messg">
                {errors.platform || errors.language}
              </div>
            </div>

            <div className="flex_col_sm_12">
              <div className="form_field_wrapper">
                <label className="form_label">
                  Result <mark>*</mark>
                </label>
                <div className="text_field_wrapper">
                  <select name="result" value={result} onChange={handleChange}>
                    {Object.values(resultTypes).map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <div className="error_messg">{errors.result}</div>
                </div>
              </div>
            </div>

            <div className="flex_col_sm_12 text-right">
              <button className="add_more" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex_col_sm_6">
          <div className="flex_col_sm_12">
            <Heading>Test Profile, Test Data &amp; Comments</Heading>
          </div>
          <Scroll className="flex_col_sm_12">
            {attachments.map(({ file, comment, date }) => (
              <FileCard>
                <FileCardHeader>
                  <Badge>Reviewer</Badge>
                  <span>{date}</span>
                </FileCardHeader>
                <div>{comment}</div>
                <div>{file}</div>
              </FileCard>
            ))}
          </Scroll>
          <br />
          <br />
          <div className="flex_col_sm_12">
            <div className="form_field_wrapper">
              <div className="text_field_wrapper">
                <textarea
                  placeholder="Add a comment"
                  value={comment}
                  onChange={({ target: { value } }) =>
                    updateAttachmentData('comment', value)
                  }
                />
              </div>
              <div className="error_messg">{errors.result}</div>
            </div>
          </div>
          <Footer className="flex_col_sm_12">
            <UploadInput
              onChange={({ target }) => {
                updateAttachmentData('file', target.value);
                target.value = null;
              }}
            />
            <UploadButton htmlFor="file">Upload Attachment </UploadButton>
            <button className="btn_solid" onClick={handleSubmit}>
              Submit{' '}
            </button>
          </Footer>
        </div>
      </div>
    </>
  );
};

const SelectBadge = styled.div`
  ${({ selected }) => css`{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 36px;
  background: ${selected ? '#043555' : 'white'} 0% 0% no-repeat padding-box;
  border: 1px solid #DEDEDE;
  border-radius: 18px;
  margin: 0px 24px 12px 0px;
  color: ${selected ? 'white' : '#666666'};
  cursor: pointer;

  svg {
    margin: 0px 4px;

    path {
      fill: ${selected ? 'white' : undefined};
    }
  }
`}
`;

const FileCard = styled.div`
  height: auto;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #676e8a3d;
  margin-bottom: 4px;
  padding: 8px 16px;
`;

const Heading = styled.div`
  font: normal normal normal 20px/25px Muli;
  margin-bottom: 8px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FileCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font: normal normal normal 12px/18px Muli;
  letter-spacing: 0px;
  color: #666666;

  > div {
    font: normal normal normal 12px/15px Muli;
  }
`;

const Scroll = styled.div`
  overflow-y: auto;
  max-height: 150px;
`;

const Badge = styled.span`
  display: inline-block;
  width: 68px;
  height: 20px;
  background: #f5f5f5 0% 0% no-repeat padding-box;
  border-radius: 11px;
  font: normal normal normal 10px/20px Muli;
  color: #1a6b8f;
  text-align: center;
`;

const UploadInput = styled.input.attrs({ type: 'file', id: 'file' })`
  display: none;
`;

const UploadButton = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 174px;
  height: 36px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #dddddd;
  font: normal normal normal 14px/18px Muli;
  color: #999999;
  cursor: pointer;
`;

export const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 15 15"
  >
    <path
      fill="#ffffff"
      d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.5,7.5,0,0,0,7.5,0Zm4.129,5.2L6.272,10.557a.536.536,0,0,1-.757,0L3.371,8.414a.536.536,0,1,1,.744-.771l.013.013L5.893,9.421l4.978-4.978a.536.536,0,0,1,.757.757Z"
    />
  </svg>
);

const AppleLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19.26"
    height="23.481"
    viewBox="0 0 19.26 23.481"
  >
    <g transform="translate(0)">
      <path
        fill="#666"
        d="M52.407,136.029c-3.495-.02-6.385-7.154-6.385-10.787,0-5.935,4.452-7.234,6.168-7.234a7.1,7.1,0,0,1,2.327.572,5.2,5.2,0,0,0,1.329.381,4.135,4.135,0,0,0,.953-.309,7.64,7.64,0,0,1,2.873-.695h.007a5.889,5.889,0,0,1,4.928,2.489l.359.54-.517.39a4.353,4.353,0,0,0-2.087,3.589,4.051,4.051,0,0,0,2.261,3.745c.324.195.659.4.659.835,0,.287-2.29,6.447-5.614,6.447a4.515,4.515,0,0,1-1.9-.46,3.845,3.845,0,0,0-1.688-.406,4.34,4.34,0,0,0-1.336.361,6.545,6.545,0,0,1-2.318.541Z"
        transform="translate(-46.022 -112.548)"
      />
      <path
        fill="#666"
        d="M259.566,0c.087,3.122-2.146,5.288-4.376,5.152C254.822,2.661,257.419,0,259.566,0Z"
        transform="translate(-245.563)"
      />
    </g>
  </svg>
);

const AndroidLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="19.869"
    height="23.481"
    viewBox="0 0 19.869 23.481"
  >
    <g transform="translate(0 0)">
      <g transform="translate(0 0)">
        <path
          fill="#666"
          d="M44,179.141a1.4,1.4,0,0,0-1.03.423,1.386,1.386,0,0,0-.423,1.016v6.068A1.445,1.445,0,0,0,44,188.1a1.38,1.38,0,0,0,1.023-.423,1.415,1.415,0,0,0,.416-1.03V180.58A1.445,1.445,0,0,0,44,179.141Z"
          transform="translate(-42.544 -171.535)"
        />
        <path
          fill="#666"
          d="M132.387,2.159l1-1.848a.186.186,0,0,0-.07-.282.2.2,0,0,0-.282.084l-1.016,1.863a7.078,7.078,0,0,0-5.673,0L125.332.113a.2.2,0,0,0-.282-.084.186.186,0,0,0-.07.282l1,1.848a6.187,6.187,0,0,0-2.427,2.166,5.471,5.471,0,0,0-.9,3.041H135.7a5.473,5.473,0,0,0-.9-3.041A6.214,6.214,0,0,0,132.387,2.159Zm-5.793,2.688a.529.529,0,0,1-.388.163.5.5,0,0,1-.381-.163.563.563,0,0,1,0-.776.507.507,0,0,1,.381-.162.548.548,0,0,1,.388.938Zm5.948,0a.506.506,0,0,1-.381.163.55.55,0,0,1,0-1.1.507.507,0,0,1,.381.162.563.563,0,0,1,0,.776Z"
          transform="translate(-119.25 0)"
        />
        <path
          fill="#666"
          d="M123.971,194.848a1.541,1.541,0,0,0,1.552,1.552h1.044l.014,3.2a1.4,1.4,0,0,0,.423,1.03,1.386,1.386,0,0,0,1.016.423,1.445,1.445,0,0,0,1.453-1.454v-3.2h1.947v3.2a1.453,1.453,0,1,0,2.907,0v-3.2h1.058a1.541,1.541,0,0,0,1.538-1.552v-9.4H123.971Z"
          transform="translate(-120.514 -177.576)"
        />
        <path
          fill="#666"
          d="M443.815,179.141a1.4,1.4,0,0,0-1.016.416,1.38,1.38,0,0,0-.423,1.023v6.068a1.4,1.4,0,0,0,.423,1.03,1.386,1.386,0,0,0,1.016.423,1.445,1.445,0,0,0,1.453-1.454V180.58a1.38,1.38,0,0,0-.423-1.023A1.415,1.415,0,0,0,443.815,179.141Z"
          transform="translate(-425.4 -171.535)"
        />
      </g>
    </g>
  </svg>
);

const BrowserLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.51"
    height="17.267"
    viewBox="0 0 20.51 17.267"
  >
    <g transform="translate(0 -40.484)">
      <path
        fill="#666"
        d="M19.03,40.484H1.48A1.48,1.48,0,0,0,0,41.964v2.7H20.51v-2.7a1.48,1.48,0,0,0-1.48-1.48ZM2.567,43.214a.643.643,0,1,1,.643-.643A.643.643,0,0,1,2.567,43.214Zm2.613,0a.643.643,0,1,1,.643-.643A.643.643,0,0,1,5.181,43.214Zm2.732,0a.643.643,0,1,1,.643-.643A.643.643,0,0,1,7.912,43.214Z"
        transform="translate(0)"
      />
      <path
        fill="#666"
        d="M0,176.808v10.325a1.48,1.48,0,0,0,1.48,1.48H19.03a1.48,1.48,0,0,0,1.48-1.48V176.808Zm6.76,4.767-.836,2.431a.639.639,0,0,1-.593.431H5.32a.639.639,0,0,1-.6-.41l-.3-.789-.264.768a.639.639,0,0,1-.593.431H3.554a.638.638,0,0,1-.6-.41L2.027,181.6a.638.638,0,0,1,1.193-.456l.3.789.264-.768a.641.641,0,0,1,1.2-.021l.3.789.264-.768a.639.639,0,0,1,1.208.415Zm5.865,0-.836,2.431a.639.639,0,0,1-.593.431h-.011a.638.638,0,0,1-.6-.41l-.3-.789-.264.768a.639.639,0,0,1-.593.431H9.419a.638.638,0,0,1-.6-.41L7.892,181.6a.638.638,0,0,1,1.193-.456l.3.789.264-.768a.645.645,0,0,1,1.2-.021l.3.789.264-.768a.639.639,0,0,1,1.208.415Zm5.866,0-.836,2.431a.639.639,0,0,1-.593.431h-.011a.638.638,0,0,1-.6-.41l-.3-.789-.264.768a.639.639,0,0,1-.593.431h-.011a.639.639,0,0,1-.6-.41l-.931-2.431a.639.639,0,0,1,1.193-.456l.3.789.264-.769a.64.64,0,0,1,1.2-.021l.3.789.264-.768a.639.639,0,0,1,1.208.415Z"
        transform="translate(0 -130.863)"
      />
    </g>
  </svg>
);

export default EServices;
