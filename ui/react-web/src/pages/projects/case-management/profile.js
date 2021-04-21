import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled, { css } from 'styled-components';
import { useStore } from 'effector-react';
import makeStore from '../../../store/make-store';
import AutoComplete from '../../entities/auto_complete';
import Select from 'react-select'
import { caseCategoryTypes, casePriorityTypes } from '../../../store/master-data'

const { store: complianceStore, load: loadComplianceProjects } = makeStore(({ project_id }) => `reference-data/rev-projects/${project_id}/compliance-projects`);
const { store: parameterStore, load: loadParameters } = makeStore(({ project_id }) => `reference-data/attributes/${project_id}/parameters`);
const { store: sectionStore, load: loadSections } = makeStore('reference-data/sections');
const { store: attributeStore, load: loadAttribute } = makeStore(({ project_id }) => `reference-data/sections/${project_id}/attributes`);
const { load, create, update } = makeStore(({ project_id }) => `rev-projects/${project_id}/cases`);

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
    loadComplianceProjects({ project_id });
    loadParameters({ project_id });
    loadSections();
    loadAttribute({ project_id });
  }, [defaultData]);

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
      console.log("inside")
      if (data[name].includes(value)) {
        console.log("inside -- if")
        updateData(
          name,
          data[name].filter((val) => val !== value)
        );
      } else {
        console.log("inside -- else")
        updateData(name, data[name].concat([value]));
      }
      return;
    }

    console.log("inside -- end", { name, value })
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
      console.log({ data })

      let {
        compliance_record,
        section,
        attribute,
        parameter,
        category,
        business_priority,
      } = data;

      let filterCategory = [];
      if(category && Array.isArray(category) && category.length){
        filterCategory = category.map(item => parseInt(item));
      }

      if (project_id) {
        update({
          data: {
            "compliance_project_id": compliance_record,
            "section_id": section,
            "attribute_id": attribute,
            "parameter_id": parameter,
            "category_id": filterCategory,
            "priority": [+business_priority]
          },
          cb:(callback_element) => {
            console.log({callback_element})   
          },
          project_id
        });
      } else {
        create({
          data: {
            "compliance_project_id": compliance_record,
            "section_id": section,
            "attribute_id": attribute,
            "parameter_id": parameter,
            "category_id": filterCategory,
            "priority": [+business_priority]
          },
          cb:(callback_element) => {
            console.log({callback_element})   
          },
          project_id
        });
      }
      // onSubmit(data);
    }
  };

  let {
    compliance_record,
    section,
    attribute,
    parameter,
    category,
    business_priority,
  } = data;

  const handleChangeMultiSelect = (name, val) => {
    let valueItems = [];
    if (val && Array.isArray(val) && val.length) {
      valueItems = val.map(item => item.value);
      updateData(name, valueItems);
    }
  }

  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Compliance Record <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <div className="hide-options">
                <Select
                  options={Object.keys(dataCompilance).map(key => ({ label: dataCompilance[key].project_name, value: dataCompilance[key].id }))}
                  isMulti={true}
                  placeholder="Search and select"
                  name="compliance_record"
                  values={compliance_record}
                  onChange={(val) => { handleChangeMultiSelect('compliance_record', val) }}
                />
                <div className="error_messg">{errors.compliance_record}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Section <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <div className="hide-options">
                <Select
                  options={Object.keys(dataSections).map(key => ({ label: dataSections[key].label, value: dataSections[key].value }))}
                  isMulti={true}
                  placeholder="Search and select"
                  name="section"
                  values={section}
                  onChange={(val) => { handleChangeMultiSelect('section', val) }}
                />
                <div className="error_messg">{errors.section}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Attribute <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <div className="hide-options">
                <Select
                  options={Object.keys(dataAttribute).map(key => ({ label: dataAttribute[key].label, value: dataAttribute[key].value }))}
                  isMulti={true}
                  placeholder="Search and select"
                  name="attribute"
                  values={attribute}
                  onChange={(val) => { handleChangeMultiSelect('attribute', val) }}
                />
                <div className="error_messg">{errors.attribute}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Parameter <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <div className="hide-options">
                <Select
                  options={Object.keys(dataParameter).map(key => ({ label: dataParameter[key].label, value: dataParameter[key].value }))}
                  isMulti={true}
                  placeholder="Search and select"
                  name="parameter"
                  values={parameter}
                  onChange={(val) => { handleChangeMultiSelect('parameter', val) }}
                />
                <div className="error_messg">{errors.parameter}</div>
              </div>
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
              {/* {caseCategoryTypes} */}
              {caseCategoryTypes && Object.keys(caseCategoryTypes).length ?
                Object.keys(caseCategoryTypes).map(key => (
                  <CheckboxCard>
                    <div className="checkbox_wrap agree_check">
                      <input
                        className="filter-type filled-in"
                        type="checkbox"
                        name="category"
                        id={(caseCategoryTypes[key].label).toLowerCase()}
                        value={caseCategoryTypes[key].value}
                        checked={category.includes((caseCategoryTypes[key].value).toString())}
                        onChange={handleChange}
                      />
                      <label htmlFor={(caseCategoryTypes[key].label).toLowerCase()}>
                        {caseCategoryTypes[key].label}
                      </label>
                    </div>
                  </CheckboxCard>
                ))
                : null}
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
              {casePriorityTypes && Object.keys(casePriorityTypes).length ?
                Object.keys(casePriorityTypes).map(key => (
                  <CheckboxCard>
                    <div className="checkbox_wrap agree_check">
                      <input
                        className="filter-type filled-in"
                        type="radio"
                        name="business_priority"
                        id={(casePriorityTypes[key].badge).toLowerCase()}
                        value={casePriorityTypes[key].value}
                        checked={business_priority === (casePriorityTypes[key].value).toString()}
                        onChange={handleChange}
                      />
                      <label htmlFor={(casePriorityTypes[key].badge).toLowerCase()}>
                        <PriorityBadge color={casePriorityTypes[key].color}>
                          {casePriorityTypes[key].badge}
                        </PriorityBadge>
                        {casePriorityTypes[key].label}
                      </label>
                    </div>
                  </CheckboxCard>
                )) : null}
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
