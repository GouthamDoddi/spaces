import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import styled, { css } from 'styled-components';
import { useStore } from 'effector-react';
import makeStore from '../../../store/make-store';
import AutoComplete from '../../entities/auto_complete';
import { caseCategoryTypes, casePriorityTypes } from '../../../store/master-data'

const { store: complianceStore, load: loadComplianceProjects } = makeStore(({ project_id }) => `reference-data/rev-projects/${project_id}/compliance-projects`);
const { store: sectionStore, load: loadSections } = makeStore('reference-data/sections');
const { store: attributeStore, load: loadAttributes } = makeStore(({ section_id }) => `reference-data/sections/${section_id}/attributes`);
const { store: parameterStore, load: loadParameters } = makeStore(({ attribute_id }) => `reference-data/attributes/${attribute_id}/parameters`);
const { load: loadCases, create, update } = makeStore(({ project_id, case_id }) => `rev-projects/${project_id}/cases${case_id ? `/${case_id}` : ''}`);

const Profile = ({ setTableProps, handleNext, rowId }) => {
  const { project_id } = useParams();
  const { state = {} } = useLocation();
  const defaultData = {
    compliance_project_id: [],
    section_id: [],
    attribute_id: [],
    parameter_id: [],
    category_ids: [],
    priority: '',
  };
  const [data, setData] = useState(defaultData);

  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  let complianceProjects = useStore(complianceStore).data;
  let parameters = useStore(parameterStore).data;
  let sections = useStore(sectionStore).data;
  let attributes = useStore(attributeStore).data;

  complianceProjects = complianceProjects ? Object.values(complianceProjects) : [];
  parameters = parameters ? Object.values(parameters) : [];
  sections = sections ? Object.values(sections) : [];
  attributes = attributes ? Object.values(attributes) : [];

  useEffect(() => {
    loadComplianceProjects({ project_id }, () => {
      if (state?.project_id) {
        setData((prevData) => ({
          ...prevData,
          compliance_project_id: state?.project_id,          
        }));
      }
    });
    loadSections('', () => {
      if (state?.section_id) {
        setData((prevData) => ({
          ...prevData,
          section_id: state?.section_id,          
        }));
      }
    });

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
    if (data.section_id) {
      loadAttributes({ section_id: state?.section_id || data.section_id }, () => {
        if (state?.attribute_id) {
          setData((prevData) => ({
            ...prevData,
            attribute_id: state?.attribute_id,          
          }));
        }
      });
    }
  }, [data.section_id]);

  useEffect(() => {
    if (data.attribute_id) {
      loadParameters({ attribute_id: data.attribute_id });
    }
  }, [data.attribute_id]);

  useEffect(() => {
    if (rowId) {
      loadCases({ project_id, case_id: rowId }, (data) => setData(data));
    }
  }, [rowId]);

  const errorLabels = {
    compliance_project_id: 'Compliance record',
    section_id: 'Section',
    attribute_id: 'Attribute',
    parameter_id: 'Parameter',
    category_ids: 'Category',
    priority: 'Business priority',
  };

  const isEmpty = (name, value) =>
    value?.length ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'compliance_project_id':
      case 'section_id':
      case 'attribute_id':
      case 'parameter_id':
      case 'priority':
        return isEmpty(name, value + '');
      case 'category_ids':
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
    const values = Array.isArray(data[name]) ? data[name] : [data[name]];

    if (type === 'radio') {
      value = parseInt(value);
    }

    if (type === 'checkbox') {
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

  const {
    compliance_project_id,
    section_id,
    attribute_id,
    parameter_id,
    category_ids,
    priority,
  } = data;

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

    if (!hasErrors) {console.log(data);
      const reqData = {
        priority,
        category_ids,
        compliance_project_id: Array.isArray(compliance_project_id) ? compliance_project_id[0] : compliance_project_id,
        section_id: Array.isArray(section_id) ? section_id[0] : section_id,
        attribute_id: Array.isArray(attribute_id) ? attribute_id[0] : attribute_id,
        paramter_id: Array.isArray(parameter_id) ? parameter_id[0] : parameter_id,
      };

      if (data.id) {
        update({
          data: reqData,
          cb: (data) => {
            setData(defaultData);
            handleNext(data.id);
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
      } else {
        create({
          data: reqData,
          cb: (data) => {
            setData(defaultData);
            handleNext(data.id);
            setTableProps((prevCases) => ({
              ...prevCases,
              rows: prevCases.rows.concat([data]),
            }));
          },
          project_id,
        });
      }
    }
  };

  return (
    <>
      <div className="flex_row">
        <div className="flex_col_sm_3">
          <div className="form_field_wrapper">
            <label className="form_label">
              Compliance Project <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <div className="hide-options">
                <AutoComplete
                  placeholder="Search and select compliance project"
                  name="compliance_project_id"
                  values={Array.isArray(compliance_project_id) ? compliance_project_id : [compliance_project_id]}
                  onChange={handleChange}
                  error={errors.compliance_project_id}
                  options={complianceProjects.map(({ value, label }) => ({ value, label }))}
                />
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
                <AutoComplete
                  placeholder="Search and select section"
                  name="section_id"
                  values={Array.isArray(section_id) ? section_id : [section_id]}
                  onChange={handleChange}
                  error={errors.section_id}
                  options={sections.map(({ value, label }) => ({ value, label }))}
                />
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
                <AutoComplete
                  placeholder="Search and select attribute"
                  name="attribute_id"
                  values={Array.isArray(attribute_id) ? attribute_id : [attribute_id]}
                  onChange={handleChange}
                  error={errors.attribute_id}
                  options={attributes.map(({ value, label }) => ({ value, label }))}
                />
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
                <AutoComplete
                  placeholder="Search and select parameter"
                  name="parameter_id"
                  values={Array.isArray(parameter_id) ? parameter_id : [parameter_id]}
                  onChange={handleChange}
                  error={errors.parameter_id}
                  options={parameters.map(({ value, label }) => ({ value, label }))}
                />
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
              {Object.keys(caseCategoryTypes).map(key => (
                <CheckboxCard>
                  <div className="checkbox_wrap agree_check">
                    <input
                      className="filter-type filled-in"
                      type="checkbox"
                      name="category_ids"
                      id={caseCategoryTypes[key].label}
                      value={caseCategoryTypes[key].value}
                      checked={category_ids?.includes(caseCategoryTypes[key].value)}
                      onChange={handleChange}
                    />
                    <label htmlFor={caseCategoryTypes[key].label}>
                      {caseCategoryTypes[key].label}
                    </label>
                  </div>
                </CheckboxCard>
              ))}
              <div className="error_messg">{errors.category_ids}</div>
            </div>
          </div>
        </div>
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Business Priority <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              {Object.keys(casePriorityTypes).map(key => (
                <CheckboxCard>
                  <div className="checkbox_wrap agree_check">
                    <input
                      className="filter-type filled-in"
                      type="radio"
                      name="priority"
                      id={casePriorityTypes[key].badge}
                      value={casePriorityTypes[key].value}
                      checked={priority === casePriorityTypes[key].value}
                      onChange={handleChange}
                    />
                    <label htmlFor={casePriorityTypes[key].badge}>
                      <PriorityBadge color={casePriorityTypes[key].color}>
                        {casePriorityTypes[key].badge}
                      </PriorityBadge>
                      {casePriorityTypes[key].label}
                    </label>
                  </div>
                </CheckboxCard>
              ))}
              <div className="error_messg">{errors.priority}</div>
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

export default Profile;
