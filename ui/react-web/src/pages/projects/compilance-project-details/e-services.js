import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import CropModal from '../../entities/crop-modal';
import DropZone from '../../entities/drop-zone';

const EServices = ({ files, setFiles, defaultData, onSubmit }) => {
  const [data, setData] = useState({
    mark_all: true,
    internal_site_search: true,
    search_across_multiple_govt_sites: true,
    registration_login: false,
    is_the_login: false,
    caters_to_people: false
  });
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);

  useEffect(() => {
    if (defaultData) {
      setData(defaultData);
    }
  }, [defaultData]);

  const errorLabels = {
    internal_site_search: 'Internal Site Search',
    search_across_multiple_govt_sites: 'Search across multiple government agencies',
    registration_login: 'Registration / Login (Other than NAS)',
    is_the_login: 'Is the login mechanisms NAS',
    caters_to_people: 'Caters to people with special needs'
  };

  const isEmpty = (name, value) =>
    value ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'internal_site_search':
      case 'search_across_multiple_govt_sites':
      case 'role':
        return isEmpty(name, value);
      default:
        return false;
    }
  };

  const updateData = (name, value) => {
    console.log({ name, value });
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

  const handleSwitchChange = (name, value) => {
    updateData(name, value);
  }

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
      onSubmit(data);
    }
  };

  const setFile = (value) => {
    setFiles(value || []);
  }

  const {
    mark_all,
    internal_site_search,
    search_across_multiple_govt_sites,
    registration_login,
    is_the_login,
    caters_to_people,
  } = data;

  return (
    <>
      {/* <CropModal
        file={files[0]?.preview}
        setFile={setFile}
        setCroppedImage={(value) => updateData('profile_picture', value)}
      /> */}

      <OuterRowFlex>
        <div className="flex_row">
          <div className="flex_col_sm_8">
            <div className="flex_row">
              <div className="flex_col_sm_5">
                <LightGreyText>
                  {'Questionnaire for '}
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

      <OuterRowFlex>
        <div className="flex_row">
          <div className="flex_col_sm_6"></div>
          <div className="flex_col_sm_6">
            <SwitchContainer>
              {'Mark all as Yes'}
              <Switch
                checked={mark_all}
                onClick={() => { handleSwitchChange('mark_all', !mark_all) }}
                name="mark_all"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              {'No'}
            </SwitchContainer>
          </div>
        </div>
      </OuterRowFlex>


      <OuterRowList>
        <div className="flex_row">
          <OuterSwitchText className="flex_col_sm_8">
            <SwitchText>
              {'Internal Site Search'}
            </SwitchText>
          </OuterSwitchText>
          <div className="flex_col_sm_4">
            <SwitchContainer>
              {'Yes'}
              <Switch
                checked={internal_site_search}
                onClick={() => { handleSwitchChange('internal_site_search', !internal_site_search) }}
                name="internal_site_search"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              {'No'}
            </SwitchContainer>
          </div>
        </div>
      </OuterRowList>
      <OuterRowList>
        <div className="flex_row">
          <OuterSwitchText className="flex_col_sm_8">
            <SwitchText>
              {'Search across multiple government agencies'}
            </SwitchText>
          </OuterSwitchText>
          <div className="flex_col_sm_4">
            <SwitchContainer>
              {'Yes'}
              <Switch
                checked={search_across_multiple_govt_sites}
                onClick={() => { handleSwitchChange('search_across_multiple_govt_sites', !search_across_multiple_govt_sites) }}
                name="search_across_multiple_govt_sites"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              {'No'}
            </SwitchContainer>
          </div>
        </div>
      </OuterRowList>
      <OuterRowList>
        <div className="flex_row">
          <OuterSwitchText className="flex_col_sm_8">
            <SwitchText>
              {'Registration / Login (Other than NAS)'}
            </SwitchText>
          </OuterSwitchText>
          <div className="flex_col_sm_4">
            <SwitchContainer>
              {'Yes'}
              <Switch
                checked={registration_login}
                onClick={() => { handleSwitchChange('registration_login', !registration_login) }}
                name="registration_login"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              {'No'}
            </SwitchContainer>
          </div>
        </div>
      </OuterRowList>
      <OuterRowList>
        <div className="flex_row">
          <OuterSwitchText className="flex_col_sm_8">
            <SwitchText>
              {'Is the login mechanisms NAS'}
            </SwitchText>
          </OuterSwitchText>
          <div className="flex_col_sm_4">
            <SwitchContainer>
              {'Yes'}
              <Switch
                checked={is_the_login}
                onClick={() => { handleSwitchChange('is_the_login', !is_the_login) }}
                name="is_the_login"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              {'No'}
            </SwitchContainer>
          </div>
        </div>
      </OuterRowList>

      <OuterRowList>
        <div className="flex_row">
          <OuterSwitchText className="flex_col_sm_8">
            <SwitchText>
              {'Caters to people with special needs'}
            </SwitchText>
          </OuterSwitchText>
          <div className="flex_col_sm_4">
            <SwitchContainer>
              {'Yes'}
              <Switch
                checked={caters_to_people}
                onClick={() => { handleSwitchChange('caters_to_people', !caters_to_people) }}
                name="caters_to_people"
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              {'No'}
            </SwitchContainer>
          </div>
        </div>
      </OuterRowList>



      {/* <div className="flex_row">
        <div className="flex_col_sm_6">
          <div className="form_field_wrapper">
            <label className="form_label">
              Full Name <mark>*</mark>
            </label>
            <div className="text_field_wrapper">
              <input
                type="text"
                placeholder="Enter user's full name"
                name="full_name"
                value={full_name}
                onChange={handleChange}
              />
              <div className="error_messg">{errors.full_name}</div>
            </div>
          </div>
        </div>
      </div> */}

      <OuterSubmit className="flex_col_sm_12 text-right">
        <button className="add_more" onClick={handleSubmit}>
          Save
        </button>
      </OuterSubmit>
    </>
  );
};


const OuterSubmit = styled.div`
  margin-top:20px;
`


const SwitchText = styled.span`
  color:#000000;
`

const OuterSwitchText = styled.div`
  display: flex;
  align-items: center;
`

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
}
`
// justify-content: flex-end;

const OuterRowList = styled.div`
border: 1px solid #ddd;
padding: 10px;
justify-content: center;
align-items: center;
`

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


export default EServices;
