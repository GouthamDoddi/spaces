import React, { useState } from 'react';
import styled from 'styled-components';
import makeStore from '../../store/make-store';
import leftArrowIcon from '../../assets/images/left-arrow.svg'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DropZone from '../projects/drop-zone';

const { store, load } = makeStore('entities/list');

const CustomCheckbox = withStyles({
  root: {
      color: '#DEDEDE',
      '&$checked': {
          color: '#EB622B',
      },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function (props) {
  const [step, setStep] = useState(1);  
  const [files, setFiles] = useState([]);
  const [checked, setChecked] = useState(false);
  const [update, forceUpdate] = useState({});
  const [data, setData] = useState({
      logo: null
  })

  console.log(`${data} data here `);

  const handleChange = (event) => {
      console.log({ check: event.target.checked })
      setChecked(!checked);
  };

  const fetchFiles = () => {
      forceUpdate([]);
  }

  let { logo } = data;


  return (
    <>
      <div className="custom_container">
        <CustomRowContainer className="flex_row">
          <div className="flex_col_sm_12">
            {'Creating a Ground'}
          </div>
        </CustomRowContainer>

        <OuterExtraSpace className="flex_row">
                <div className="flex_col_sm_6">

                    <div className="flex_row">
                        <div className="flex_col_sm_6">
                            <DisplayItemFlex>
                                <img src={leftArrowIcon} alt="left-arrow" />
                                <LabelCaseID>
                                    {'Back to Grounds'}
                                </LabelCaseID>
                               
                            </DisplayItemFlex>
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
                {step === 1 ?
                    <OuterBorder className="flex_col_sm_6">
                        <div className="flex_row">
                            <div className="flex_col_sm_6">
                                <div className="form_field_wrapper">
                                    <label className="form_label">
                                        <TextCustom bigFont={true}>
                                            {` Category `}
                                        </TextCustom>
                                        <mark>*</mark>
                                    </label>
                                    <TextFieldWrapper className="text_field_wrapper">
                                        <CustomCheckbox
                                            checked={checked}
                                            onChange={handleChange}
                                            onClick={() => { setChecked(!checked) }}
                                        />
                                        <TextCustom fontBold={true}>
                                            {'Policy Backlog'}
                                        </TextCustom>
                                    </TextFieldWrapper>

                                    <TextFieldWrapper className="text_field_wrapper">
                                        <CustomCheckbox
                                            checked={checked}
                                            onChange={handleChange}
                                            onClick={() => { setChecked(!checked) }}
                                        />
                                        <TextCustom fontBold={true}>
                                            {'Knowledge Tasks'}
                                        </TextCustom>
                                    </TextFieldWrapper>

                                    <TextFieldWrapper className="text_field_wrapper">
                                        <CustomCheckbox
                                            checked={checked}
                                            onChange={handleChange}
                                            onClick={() => { setChecked(!checked) }}
                                        />
                                        <TextCustom fontBold={true}>
                                            {'Exception Grounds'}
                                        </TextCustom>
                                    </TextFieldWrapper>

                                    <TextFieldWrapper className="text_field_wrapper">
                                        <CustomCheckbox
                                            checked={checked}
                                            onChange={handleChange}
                                            onClick={() => { setChecked(!checked) }}
                                        />
                                        <TextCustom fontBold={true}>
                                            {'Initiative Requests'}
                                        </TextCustom>
                                    </TextFieldWrapper>
                                </div>
                            </div>
                            <div className="flex_col_sm_6">

                                <div className="flex_row">
                                    <div className="flex_col_sm_12">
                                        <div className="form_field_wrapper">
                                            <label className="form_label">
                                                <TextCustom bigFont={true}>
                                                    {` Status `}
                                                </TextCustom>
                                                <mark>*</mark>
                                            </label>
                                            <TextFieldWrapper borderBlue={true} className="text_field_wrapper">
                                                <CustomCheckbox
                                                    checked={checked}
                                                    onChange={handleChange}
                                                    onClick={() => { setChecked(!checked) }}
                                                />
                                                <TextCustom fontBold={true}>
                                                    {'Active'}
                                                </TextCustom>
                                            </TextFieldWrapper>
                                            <TextFieldWrapper borderGreen={true} className="text_field_wrapper">
                                                <CustomCheckbox
                                                    checked={checked}
                                                    onChange={handleChange}
                                                    onClick={() => { setChecked(!checked) }}
                                                />
                                                <TextCustom fontBold={true} >
                                                    {'InActive'}
                                                </TextCustom>
                                            </TextFieldWrapper>
                                            <TextFieldWrapper borderYellow={true} className="text_field_wrapper">
                                                <CustomCheckbox
                                                    checked={checked}
                                                    onChange={handleChange}
                                                    onClick={() => { setChecked(!checked) }}
                                                />
                                                <TextCustom fontBold={true}>
                                                    {'Work In Progress'}
                                                </TextCustom>
                                            </TextFieldWrapper>
                                        </div>


                                        <OuterRowSpace extraSpace={true} className="text-field-wrapper">
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
                                                    value={new Date()}
                                                    onChange={(date) => { }}
                                                    autoOk={true}
                                                    KeyboardButtonProps={{ 'aria-label': 'change date' }}
                                                />
                                            </MuiPickersUtilsProvider>
                                        </OuterRowSpace>

                                        <OuterRowSpace extraSpace={true}>
                                            <div className="flex_col_sm_12 text-right">
                                                <button className="add_more" onClick={() => { }}>
                                                    {'Save & Exit'}
                                                </button>
                                            </div>
                                        </OuterRowSpace>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </OuterBorder>
                    :
                    <OuterBorder className="flex_col_sm_6">
                        <div className="flex_row">
                            <div className="flex_col_sm_8">
                                <div className="form_field_wrapper">
                                    <label className="form_label">
                                        <TextCustom>
                                            {` Ground Name `}
                                        </TextCustom>
                                        <mark>*</mark>
                                    </label>
                                    <div className="text_field_wrapper">
                                        <input
                                            type="text"
                                            placeholder="For example, Raising a clarification request"
                                            name="full_name"
                                            value={''}
                                            onChange={handleChange}
                                        />
                                        {/* <div className="error_messg">{errors.full_name}</div> */}
                                    </div>
                                </div>

                                <div className="form_field_wrapper">
                                    <label className="form_label">
                                        Description <mark>*</mark>
                                    </label>
                                    <div className="text_field_wrapper">
                                        <textarea name="description" value={''} placeholder="Enter Notes" onChange={handleChange} />
                                        {/* <span className="error_messg">{errors.notes}</span> */}
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
                                        sub_label={'Allowed file formats are PNG, JPG, PDF, DOCX within 20MB'}
                                    />
                                    {/* <span className="error_messg">{errors.logo}</span> */}
                                </div>

                                <OuterRowSpace extraMoreSpace={true}>
                                    <div className="flex_col_sm_12 text-right">
                                        <button className="add_more" onClick={() => { }}>
                                            {'Submit'}
                                        </button>
                                    </div>
                                </OuterRowSpace>
                            </div>
                        </div>
                    </OuterBorder>
                }
            </OuterExtraSpace>
      </div>
    </>
  );
}

const OuterExtraSpace = styled.div`
  margin-top:40px !important;
`

const CustomButton = styled.button`
  background: #EB622B;
  padding: 8px 30px;
  border: none;
  border-radius: 5px;
  color: #fff;
`

const CustomRowContainer = styled.div`
  padding: 25px;
  color: #666666;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`

const TextFieldWrapper = styled.div`
    border: 1px solid #ddd;
    padding-right: 20px;
    border-left:${props => props.borderBlue ? '4px solid blue' : props.borderGreen ? '4px solid green' : props.borderYellow ? '4px solid yellow' : '1px solid #ddd'};
`

const OuterRowSpace = styled.div`
    margin:${props => props.extraSpace ? '40px 0px !important' : props.extraMoreSpace ? '80px 0px !important' : props.noSpace ? '0px 0px !important' : '10px 0px !important'};
`

const DisplayItemFlex = styled.div`
    display:flex;
`

const SubmittedIcon = styled.span`
    background: #0064FE;
    color: #fff;
    padding: 8px 20px;
    border-radius: 15px;
    font-size: 12px;
`

const LabelCaseID = styled.span`
    color:#666666;
    padding:5px 15px;
    font-weight:bold;
`
const OuterBorder = styled.div`
    border-left:1px solid #ddd;
`

const SpanCategory = styled.span`
    background-color: #F5F5F5;
    color: #1A6B8F;
    padding: 5px 15px;
    border-radius: 15px;
    margin-right: 10px;
    font-size: 12px;
`
const TextCustom = styled.span`
    font-weight:${props => props.fontBold ? 'bold' : 'normal'};
    font-size:${props => props.bigFont ? '20px' : '14px'};
    color:${props => props.greyColor ? '#999999' : '#000000'};
    margin:10px 0px;
`
