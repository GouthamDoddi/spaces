import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CropModal from '../entities/crop-modal';
import { useParams } from 'react-router';
import DropZone from './drop-zone';

const MasterProjectProfile = ({ onSubmit }) => {
    const { entity_id } = useParams();
    const [files, setFiles] = useState([]);
    const [data, setData] = useState({
        name: 'Metrash Portal',
        name_ar: '',
        description: '',
        description_ar: '',
        short_name: '',
        project_type: 'test1',
        owner_type: 'test1',
        sponsor_type: 'test1',
        logo: null,
    });
    const [errors, setErrors] = useState({});
    const [submitClicked, setSubmitClicked] = useState(false);

    useEffect(() => {
        if (entity_id) {
            // get details
            // setData();
        }
    }, []);

    const errorLabels = {
        name: 'Project name',
        name_ar: 'Project name',
        description: 'Project description',
        description_ar: 'Project description',
        short_name: 'Short name',
        project_type: 'Project type',
        sponsor_type: 'Project type',
        owner_type: 'Project type',
        logo: 'Project logo',
    };

    const isEmpty = (name, value) =>
        value ? '' : errorLabels[name] + ' is a required field';

    const isInvalid = (name, value) => {
        switch (name) {
            case 'name':
            case 'name_ar':
            case 'description':
            case 'description_ar':
            case 'short_name':
            case 'project_type':
            case 'logo':
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

    const setFile = (value) => {
        setFiles(value || []);
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
            onSubmit(data);
        }
    };

    const {
        name,
        name_ar,
        short_name,
        description,
        description_ar,
        project_type,
        sponsor_type,
        owner_type,
        logo,
    } = data;

    return (
        <ProfileWrapper className="custom_container">
            <CropModal
                file={files[0]?.preview}
                setFile={setFile}
                setCroppedImage={(value) => updateData('logo', value)}
            />
            <div className="custom_row">
                <div className="flex_row">
                    <div className="flex_col_sm_6">
                        <div className="form_field_wrapper">
                            <div className="flex_row">
                                <div className="flex_col_sm_6">
                                    <label className="form_label">
                                        Name <mark>*</mark>
                                    </label>
                                    <div className="text_field_wrapper">
                                        {name}
                                        {/* <input
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={handleChange}
                                        /> */}
                                        {/* <div className="text-right">
                                            <span className="limit">
                                                {100 - name.length} C{'haracters left'}
                                            </span>
                                        </div> */}
                                    </div>
                                    <span className="error_messg">{errors.name}</span>
                                </div>

                                <div className="flex_col_sm_6">
                                    <label className="form_label">
                                        Project Short Name <mark>*</mark>
                                    </label>
                                    <div className="text_field_wrapper">
                                        <input
                                            type="text"
                                            name="short_name"
                                            value={short_name}
                                            onChange={handleChange}
                                        />
                                        <div className="text-right">
                                            <span className="limit">
                                                {100 - short_name.length} C{'haracters left'}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="error_messg">{errors.short_name}</span>
                                </div>
                            </div>
                        </div>
                        <div className="form_field_wrapper">
                            <label className="form_label">
                                Description <mark>*</mark>
                            </label>
                            <div className="text_field_wrapper">
                                <textarea name="description" onChange={handleChange}>
                                    {description}
                                </textarea>
                                <span className="error_messg">{errors.description}</span>
                            </div>
                        </div>

                        <div className="flex_row">

                            <div className="flex_col_sm_4">
                                <div className="form_field_wrapper">
                                    <label className="form_label">
                                        Sponsor
                                    </label>
                                    <div className="text_field_wrapper">
                                        <select
                                            name="sponsor_type"
                                            value={sponsor_type}
                                            onChange={handleChange}
                                        >
                                            <option value="test1">Test1</option>
                                        </select>
                                        <span className="error_messg">{errors.sponsor_type}</span>
                                    </div>
                                </div>
                            </div>


                            <div className="flex_col_sm_4">
                                <div className="form_field_wrapper">
                                    <label className="form_label">
                                        Owner
                                    </label>
                                    <div className="text_field_wrapper">
                                        <select
                                            name="owner_type"
                                            value={owner_type}
                                            onChange={handleChange}
                                        >
                                            <option value="test1">Test1</option>
                                        </select>
                                        <span className="error_messg">{errors.owner_type}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex_col_sm_4">
                                <div className="form_field_wrapper">
                                    <label className="form_label">
                                        Project Type <mark>*</mark>
                                    </label>
                                    <div className="text_field_wrapper">
                                        <select
                                            name="project_type"
                                            value={project_type}
                                            onChange={handleChange}
                                        >
                                            <option value="test1">Test1</option>
                                        </select>
                                        <span className="error_messg">{errors.project_type}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form_field_wrapper">
                            <label className="form_label">
                                Upload Entity Logo <mark>*</mark>
                            </label>
                            <DropZone
                                files={files}
                                setFiles={setFiles}
                                preview={logo}
                                sizeInMb={10}
                                formats={['image/png','image/jpg']}
                                label={'Click here or drag and drop logo image'}
                                sub_label={'Allowed file formats are PNG, JPG within 10MB, Suggested dimensions are W-300px & H-300px'}
                            />
                            <span className="error_messg">{errors.logo}</span>
                        </div>
                    </div>

                    <div className="flex_col_sm_6">
                        <div className="form_field_wrapper ar">
                            <label className="form_label">
                                {' '}
                اسم <mark>*</mark>{' '}
                            </label>
                            <div
                                className="text_field_wrapper"
                                placeholder="على سبيل المثال ، وزارة التجارة والصناعة"
                            >
                                <input
                                    name="name_ar"
                                    value={name_ar}
                                    onChange={handleChange}
                                    type="text"
                                />
                                <div className="text-right">
                                    <span className="limit">بقي {100 - name_ar.length} حرف</span>
                                </div>
                            </div>
                            <span className="error_messg">{errors.name_ar}</span>
                        </div>
                        <div className="form_field_wrapper ar">
                            <label className="form_label">
                                {' '}
                وصف <mark>*</mark>
                            </label>
                            <div className="text_field_wrapper">
                                <textarea
                                    name="description_ar"
                                    value={description_ar}
                                    onChange={handleChange}
                                    placeholder="اشرح تفاصيل الكيان هنا"
                                ></textarea>
                                <span className="error_messg">{errors.description_ar}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex_col_sm_12 text-right">
                    <button className="btn_solid" onClick={handleSubmit}>
                        Save{' '}
                    </button>
                </div>
            </div>
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled.div`
  padding-top: 40px !important;
  padding-bottom: 40px !important;
`;

export default MasterProjectProfile;
