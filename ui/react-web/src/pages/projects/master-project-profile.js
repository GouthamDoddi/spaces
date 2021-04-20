import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CropModal from '../entities/crop-modal';
import { useHistory, useParams } from 'react-router';
import DropZone from './drop-zone';
import makeStore from '../../store/make-store';
import { projectCategoryTypes, projectSponsorOptions } from '../../store/master-data';

const { load, update, create } = makeStore(({ project_id }) => project_id ? `rev-projects/${project_id}` : 'rev-projects');
const { load: loadEntities } = makeStore('entities');

const MasterProjectProfile = ({ onSubmit }) => {
    const history = useHistory();
    const [entities, setEntities] = useState([]);
    const { project_id } = useParams();
    const [files, setFiles] = useState([]);
    const [data, setData] = useState({
        project_name: '',
        project_name_ar: '',
        project_description: '',
        project_description_ar: '',
        short_name: '',
        project_type_id: 'test1',
        owner_id: 'test1',
        sponsor_id: 'test1',
        logo: null,
    });
    const [errors, setErrors] = useState({});
    const [submitClicked, setSubmitClicked] = useState(false);

    useEffect(() => {
      loadEntities('', (data) => setEntities(data));
      if (/\d/.test(project_id)) {
        load({ project_id }, (data) => setData(data));
      } else if (project_id !== 'new') {
        history.push('/projects');
      }
    }, []);

    const errorLabels = {
        project_name: 'Project name',
        project_name_ar: 'Project name',
        project_description: 'Project description',
        project_description_ar: 'Project description',
        short_name: 'Short name',
        project_type_id: 'Project type',
        sponsor_id: 'Project type',
        owner_id: 'Project type',
        logo: 'Project logo',
    };

    const isEmpty = (name, value) =>
        value ? '' : errorLabels[name] + ' is a required field';

    const isInvalid = (name, value) => {
        switch (name) {
            case 'project_name':
            case 'project_name_ar':
            case 'project_description':
            case 'project_description_ar':
            case 'short_name':
            case 'project_type_id':
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
            if (project_id !== 'new') {
              update({ data, cb: () => history.push(`/projects/${project_id}/compliance-project-details`), project_id });
            } else {
              create({ data, cb: () => history.push(`/projects/${project_id}/compliance-project-details`) });
            }
        }
    };

    const {
        project_name,
        project_name_ar,
        short_name,
        project_description,
        project_description_ar,
        project_type_id,
        sponsor_id,
        owner_id,
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
                                        <input
                                            type="text"
                                            name="project_name"
                                            value={project_name}
                                            onChange={handleChange}
                                        />
                                        <div className="text-right">
                                            <span className="limit">
                                                {100 - project_name.length} C{'haracters left'}
                                            </span>
                                        </div>
                                    </div>
                                    <span className="error_messg">{errors.project_name}</span>
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
                                                {100 - (short_name?.length || 0)} C{'haracters left'}
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
                                <textarea name="project_description" value={project_description} onChange={handleChange} />
                                <span className="error_messg">{errors.project_description}</span>
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
                                            name="sponsor_id"
                                            value={sponsor_id}
                                            onChange={handleChange}
                                        >
                                            {Object.values(projectSponsorOptions).map(({ label, value }) => <option id={value} value={value}>{label}</option>)}
                                        </select>
                                        <span className="error_messg">{errors.sponsor_id}</span>
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
                                            name="owner_id"
                                            value={owner_id}
                                            onChange={handleChange}
                                        >
                                            {entities.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                                        </select>
                                        <span className="error_messg">{errors.owner_id}</span>
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
                                            name="project_type_id"
                                            value={project_type_id}
                                            onChange={handleChange}
                                        >
                                            {Object.values(projectCategoryTypes).map(({ value, label }) => <option id={value} value={value}>{label}</option>)}
                                        </select>
                                        <span className="error_messg">{errors.project_type_id}</span>
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
                                    name="project_name_ar"
                                    value={project_name_ar}
                                    onChange={handleChange}
                                    type="text"
                                />
                                <div className="text-right">
                                    <span className="limit">بقي {100 - project_name_ar?.length} حرف</span>
                                </div>
                            </div>
                            <span className="error_messg">{errors.project_name_ar}</span>
                        </div>
                        <div className="form_field_wrapper ar">
                            <label className="form_label">
                                {' '}
                وصف <mark>*</mark>
                            </label>
                            <div className="text_field_wrapper">
                                <textarea
                                    name="project_description_ar"
                                    value={project_description_ar}
                                    onChange={handleChange}
                                    placeholder="اشرح تفاصيل الكيان هنا"
                                ></textarea>
                                <span className="error_messg">{errors.project_description_ar}</span>
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
