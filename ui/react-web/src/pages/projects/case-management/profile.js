import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled, { css } from 'styled-components';
import { useStore } from 'effector-react';
import makeStore from '../../../store/make-store';
import AutoComplete from '../../entities/auto_complete';

const { store: complianceStore, load: loadComplianceProjects } = makeStore('reference-data/rev-projects/2/compliance-projects');
const { store: parameterStore, load: loadParameters } = makeStore('reference-data/attributes/2/parameters');
const { store: sectionStore, load: loadSections } = makeStore('reference-data/sections');
const { store: attributeStore, load: loadAttribute } = makeStore('reference-data/sections/2/attributes');

const Profile = ({ defaultData, onSubmit }) => {
  const { project_id } = useParams();
  const [data, setData] = useState({
    compliance_record: [],
    section: [],
    attribute: [],
    parameter: [],
    category: [],
    business_priority: '',
  });

  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  let dataCompilance = useStore(complianceStore).data || [];
  let dataParameter = useStore(parameterStore).data || [];
  let dataSections = useStore(sectionStore).data || [];
  let dataAttribute = useStore(attributeStore).data || [];


  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
    loadComplianceProjects();
    loadParameters();
    loadSections();
    loadAttribute();
  }, []);

  const errorLabels = {
    compliance_record: 'Compliance record',
    section: 'Section',
    attribute: 'Attribute',
    parameter: 'Parameter',
    category: 'Category',
    business_priority: 'Business priority',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'compliance_record':
      case 'section':
      case 'attribute':
      case 'parameter':
      case 'category':
      case 'business_priority':
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

  const {
    compliance_record,
    section,
    attribute,
    parameter,
    category,
    business_priority,
  } = data;
  
  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Compliance Record <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <AutoComplete
                placeholder="Search and select user group"
                name="compliance_record"
                values={compliance_record}
                onChange={handleChange}
                error={errors.compliance_record}
                options={Object.keys(dataCompilance).map(key => ({ label: dataCompilance[key].project_name, value: dataCompilance[key].id }))}
              />
            </div>
          </div>
        </div>
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Section <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <AutoComplete
                placeholder="Search and select user group"
                name="section"
                values={section}
                onChange={handleChange}
                error={errors.section}
                options={Object.keys(dataSections).map(key => ({ label: dataSections[key].label, value: dataSections[key].value }))}
              />
              {/* <input
                type="text"
                placeholder="Search and select"
                name="section"
                value={section}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.section}</div> */}
            </div>
          </div>
        </div>
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Attribute <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Search and select"
                name="attribute"
                value={attribute}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.attribute}</div>
            </div>
          </div>
        </div>
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Parameter <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Search and select"
                name="parameter"
                value={parameter}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.parameter}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Category <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="checkbox"
                    name="category"
                    id="clarification"
                    value="clarification"
                    checked={category.includes('clarification')}
                    onChange={handleChange}
                  />
                  <label htmlFor="clarification">Clarification</label>
                </div>
              </CheckboxCard>
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="checkbox"
                    name="category"
                    id="exception"
                    value="exception"
                    checked={category.includes('exception')}
                    onChange={handleChange}
                  />
                  <label htmlFor="exception">Exception</label>
                </div>
              </CheckboxCard>
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="checkbox"
                    name="category"
                    id="support"
                    value="support"
                    checked={category.includes('support')}
                    onChange={handleChange}
                  />
                  <label htmlFor="support">Support</label>
                </div>
              </CheckboxCard>
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="checkbox"
                    name="category"
                    id="relief"
                    value="relief"
                    checked={category.includes('relief')}
                    onChange={handleChange}
                  />
                  <label htmlFor="relief">Relief</label>
                </div>
              </CheckboxCard>
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="checkbox"
                    name="category"
                    id="suggestion"
                    value="suggestion"
                    checked={category.includes('suggestion')}
                    onChange={handleChange}
                  />
                  <label htmlFor="suggestion">Suggestion</label>
                </div>
              </CheckboxCard>
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="checkbox"
                    name="category"
                    id="others"
                    value="others"
                    checked={category.includes('others')}
                    onChange={handleChange}
                  />
                  <label htmlFor="others">Others</label>
                </div>
              </CheckboxCard>
              <div className="error_messg">{errors.category}</div>
            </div>
          </div>
        </div>
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Business Priority <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="radio"
                    name="business_priority"
                    id="p1"
                    value="p1"
                    checked={business_priority === 'p1'}
                    onChange={handleChange}
                  />
                  <label htmlFor="p1">
                    <PriorityBadge color="danger">P1</PriorityBadge>
                    P1 - Outmost priority with 4 hours of TAT
                  </label>
                </div>
              </CheckboxCard>
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="radio"
                    name="business_priority"
                    id="p2"
                    value="p2"
                    checked={business_priority === 'p2'}
                    onChange={handleChange}
                  />
                  <label htmlFor="p2">
                    <PriorityBadge color="primary">P2</PriorityBadge>P2 -
                    Moderate priority with 12 hours of TAT
                  </label>
                </div>
              </CheckboxCard>
              <CheckboxCard>
                <div className="checkbox_wrap agree_check">
                  <input
                    className="filter-type filled-in"
                    type="radio"
                    name="business_priority"
                    id="p3"
                    value="p3"
                    checked={business_priority === 'p3'}
                    onChange={handleChange}
                  />
                  <label htmlFor="p3">
                    <PriorityBadge color="warning">P3</PriorityBadge>P3 - Low
                    priority with 48 hours of TAT
                  </label>
                </div>
              </CheckboxCard>
              <div className="error_messg">{errors.business_priority}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex_col_sm_12 text-right">
        <button className="add_more" onClick={handleSave}>
          Save &amp; Next
        </button>
      </div>
    </>
  );
};

const CheckboxCard = styled.div`
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #676e8a3d;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  margin-bottom: 2px;
  font: normal normal bold 12px/18px Muli;
  letter-spacing: 0px;
`;

const PriorityBadge = styled.div`
  ${({ color }) => css`
    display: inline-block;
    width: 25px;
    height: 25px;
    background: ${color === 'danger'
      ? '#FFF1F1'
      : color === 'primary'
        ? '#EAF4FF'
        : '#FFF5DF'}
      0% 0% no-repeat padding-box;
    color: ${color === 'danger'
      ? '#FF6060'
      : color === 'primary'
        ? '#005CC8'
        : '#FFB300'};
    border: 1px solid
      ${color === 'danger'
      ? '#FF6060'
      : color === 'primary'
        ? '#005CC8'
        : '#FFB300'};
    border-radius: 3px;
    font: normal normal bold 12px/18px Muli;
    margin-right: 12px;
    margin-left: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `}
`;

export default Profile;
