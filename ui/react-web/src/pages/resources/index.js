import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import FolderButton from '../../components/folderButton';
import HeaderBar from '../../shared/header_bar';
import VerticalTabs from '../../components/verticleTab';
import Footer from '../../components/footer';

import { ReactComponent as Docs } from '../../assets/images/doc.svg';
import { ReactComponent as XLS } from '../../assets/images/xls.svg';
import { ReactComponent as PDF } from '../../assets/images/pdf.svg';
import { ReactComponent as Zip } from '../../assets/images/zip.svg';
import { ReactComponent as Download } from '../../assets/images/download.svg';
import { ReactComponent as LeftArrow } from '../../assets/images/left-arrow.svg';

import { NavLink } from 'react-router-dom';

import { NewLayout } from '../../pages/entities';

import makeStore from '../../store/make-store';
import { useStore } from 'effector-react';
import qgate from '../../assets/images/qgate.png';
import { isJAWDAUser } from '../../store/user';
import DropZone from '../entities/drop-zone';
import { CrossIcon } from '../projects/case-management/action';
import { role } from '../../store/user';
import { readFile, uploadFile } from '../../utils/azure_blob_storage';

const { load: loadEntities } = makeStore(() => 'entities');
const { store: projectStore, load: loadProjects } = makeStore(
  ({ entity_id }) => `${entity_id}/rev-projects`
);
const { load: loadComplianceProjects } = makeStore(
  ({ project_id, id }) =>
    `${project_id}/rev-compl-projects${id ? `/${id}` : ''}`
);
const { load, create, remove } = makeStore(
  ({ project_id, type_id }) =>
    `rev-projects/${project_id}/resources${
      type_id ? `?type_id=${type_id}` : ''
    }`
);

const types = {
  docs: <Docs />,
  xls: <XLS />,
  pdf: <PDF />,
  zip: <Zip />,
};

export default function () {
  const [framework, setFramework] = useState('Portal Framework');
  const [uploadMode, setUploadMode] = useState(false);
  const [entities, setEntities] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState(null);
  const projects = useStore(projectStore).data || [];
  const [selectedProject, setSelectedProject] = useState(null);
  const [complianceProjects, setComplianceProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [resources, setResources] = useState([]);
  const defaultData = {
    name: '',
    version: '',
    compliance_project_id: '',
    attachments: [],
  };
  const [data, setData] = useState(defaultData);
  const [errors, setErrors] = useState({});
  const [submitClicked, setSubmitClicked] = useState(false);
  const type_id =
    framework === 'Portal Framework'
      ? 1
      : framework === 'Mobile Framework'
      ? 2
      : 3;

  const errorLabels = {
    name: 'File name',
    version: 'File version',
    compliance_project_id: 'Group/Framework',
    attachments: 'File',
  };

  const isEmpty = (name, value) =>
    value ? '' : errorLabels[name] + ' is a required field';

  const isInvalid = (name, value) => {
    switch (name) {
      case 'name':
      case 'version':
      case 'compliance_project_id':
      case 'attachments':
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

  const handleOnChange = ({ target: { value, name } }) => {
    updateData(name, value);
  };

  const setFile = (value) => {
    updateData('attachments', value || []);
  };

  const { name, version, attachments, compliance_project_id } = data;

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
      if (selectedProject) {
        const type_id = complianceProjects.find(
          ({ id }) => id === parseInt(compliance_project_id)
        )?.type_id;

        setLoading(true);
        const fileName = `${name} ${version}.${attachments[0].name
          .split('.')
          .pop()}`;

        uploadFile(`resources-${type_id}`, attachments[0], fileName)
          .then((response) => {
            create({
              data: {
                compliance_project_id: parseInt(compliance_project_id),
                attachments: [
                  {
                    name: fileName,
                    code: response.requestId,
                  },
                ],
              },
              cb: () => {
                setUploadMode(false);
                setData(defaultData);
                setLoading(false);
                setFramework(
                  type_id === 1
                    ? 'Portal Framework'
                    : type_id === 2
                    ? 'Mobile Framework'
                    : 'eService Framework'
                );
                load({ project_id: selectedProject, type_id }, (data) =>
                  setResources(data)
                );
              },
              project_id: selectedProject,
            });
          })
          .catch((e) => {
            console.log(e);
            setLoading(false);
          });
      }
    }
  };

  useEffect(() => {
    loadEntities('', (data) => {
      setEntities(data);
    });
  }, []);

  useEffect(() => {
    if (selectedProject) {
      load({ project_id: selectedProject, type_id }, (data) =>
        setResources(data)
      );
    }
  }, [selectedProject, framework]);

  useEffect(() => {
    if (uploadMode) {
      if (selectedProject) {
        loadComplianceProjects({ project_id: selectedProject }, (data) =>
          setComplianceProjects(data)
        );
      } else {
        setComplianceProjects([]);
      }
    }
  }, [uploadMode, selectedProject]);

  useEffect(() => {
    setData(defaultData);
    setErrors({});
    setSubmitClicked(false);
  }, [uploadMode]);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'entity') {
      setSelectedEntity(value);
    } else {
      setSelectedProject(value);
    }
  };

  useEffect(() => {
    setSelectedProject(null);
    if (selectedEntity) {
      loadProjects({ entity_id: selectedEntity });
    }
  }, [selectedEntity]);

  const handleDownload = async (name) => {
    setDownloading(name);

    try {
      await readFile(`resources-${type_id}`, name);
    } catch (e) {
      console.log(e);
    }

    setDownloading(null);
  };

  return (
    <NewLayout>
      <HeaderBar className="hb" />
      <FilterBreadcrumb className="custom_container">
        <div className="filter_breadcrumb">
          <ul>
            <li>
              <NavLink to="/">
                <img src={qgate} width="100%" />
              </NavLink>
            </li>

            {isJAWDAUser() && (
              <li>
                <div className="filter_sele active">
                  <label>State</label>
                  <label>QDG</label>
                </div>
              </li>
            )}

            <li>
              <div className="filter_sele">
                <label>Entity</label>
                <select
                  name="entity"
                  value={selectedEntity}
                  onChange={handleChange}
                >
                  <option value="">Select Entity</option>
                  {entities.map(({ id, name }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </li>

            <li>
              <div className="filter_sele">
                <label>Project</label>
                <select
                  name="project"
                  value={selectedProject}
                  onChange={handleChange}
                  disabled={!selectedEntity}
                >
                  <option value="">Select Project</option>
                  {projects.map(({ id, project_name }) => (
                    <option key={id} value={id}>
                      {project_name}
                    </option>
                  ))}
                </select>
              </div>
            </li>
          </ul>
        </div>
      </FilterBreadcrumb>
      <div className="custom_container">
        {uploadMode ? (
          <TopBar>
            <span onClick={() => setUploadMode(false)}>
              <LeftArrow />
              <span>Upload a Resource</span>
            </span>
          </TopBar>
        ) : (
          <TopBar>
            <span>Resources</span>
            {[0, 14].includes(role()) && (
              <button className="btn_solid" onClick={() => setUploadMode(true)}>
                Upload Resource
              </button>
            )}
          </TopBar>
        )}
      </div>
      {uploadMode ? (
        <div className="custom_container">
          <div className="flex_row">
            <div className="flex_col_6">
              <div className="flex_col_12">
                <div className="form_field_wrapper">
                  <label className="form_label">
                    Filename <mark>*</mark>
                  </label>
                  <input
                    type="text"
                    placeholder="File name"
                    name="name"
                    value={name}
                    onChange={handleOnChange}
                  />
                  <span className="error_messg">{errors.name}</span>
                </div>
              </div>
              <div className="flex_col_12">
                <div className="form_field_wrapper">
                  <label className="form_label">
                    Version <mark>*</mark>
                  </label>
                  <input
                    type="text"
                    placeholder="Version"
                    name="version"
                    value={version}
                    onChange={handleOnChange}
                  />
                  <span className="error_messg">{errors.version}</span>
                </div>
              </div>
              <div className="flex_col_12">
                <div className="form_field_wrapper">
                  <label className="form_label">
                    Select Group/Framework <mark>*</mark>
                  </label>
                  <select
                    name="compliance_project_id"
                    value={compliance_project_id}
                    onChange={handleOnChange}
                  >
                    <option value="">Select</option>
                    {complianceProjects.map(({ id, project_name }) => (
                      <option key={id} value={id}>
                        {project_name}
                      </option>
                    ))}
                  </select>
                  <span className="error_messg">
                    {errors.compliance_project_id}
                  </span>
                </div>
              </div>
              <div className="flex_col_12">
                <div className="form_field_wrapper">
                  <label className="form_label">
                    Upload Resource File <mark>*</mark>
                  </label>
                  <DropZone
                    files={[]}
                    setFiles={setFile}
                    maxSize={52428800}
                    accept=".xls, .zip, .pdf, .docx"
                    text1="Click here or drag and drop a file"
                    text2="Allowed file formats are PDF, DOC, XLS, ZIP within 50MB of size"
                  />
                </div>
              </div>
              <div className="flex_col_sm_12 text-right">
                <button
                  className="btn_solid"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? 'Saving...' : 'Submit'}
                </button>
              </div>
            </div>
            <div className="flex_col_6">
              <RightSection>
                <Heading>Uploaded File</Heading>
                {attachments.map(({ name }) => (
                  <div className="flex_col_sm_12">
                    <FileCard>
                      <div>
                        {types[name.split('.').pop()]}
                        <span>{name}</span>
                      </div>
                      <button onClick={() => updateData('attachments', [])}>
                        <CrossIcon />
                      </button>
                    </FileCard>
                  </div>
                ))}
              </RightSection>
            </div>
          </div>
        </div>
      ) : (
        <div className="custom_container">
          <div className="flex_row">
            <div className="flex_col_sm_4">
              <FolderButton
                active={type_id === 1}
                text={'Portal Framework'}
                onClick={() => setFramework('Portal Framework')}
              />
              <FolderButton
                active={type_id === 2}
                text={'Mobile Framework'}
                onClick={() => setFramework('Mobile Framework')}
              />
              <FolderButton
                active={type_id === 3}
                text={'eService Framework'}
                onClick={() => setFramework('eService Framework')}
              />
            </div>
            <Files className="flex_col_sm_8">
              <Heading>{framework}</Heading>
              <div className="flex_row">
                {resources.map(({ attachments }) => {
                  if (!attachments.length) {
                    return null;
                  }

                  return (
                    <div className="flex_col_sm_6">
                      <FileCard>
                        <div>
                          {types[attachments[0].name.split('.').pop()]}
                          <span>{attachments[0].name}</span>
                        </div>
                        <button
                          onClick={() => handleDownload(attachments[0].name)}
                          disabled={downloading}
                        >
                          {downloading === attachments[0].name ? '...' : <Download />}
                        </button>
                      </FileCard>
                    </div>
                  );
                })}
              </div>
            </Files>
          </div>
        </div>
      )}
    </NewLayout>
  );
}

const FilterBreadcrumb = styled.div`
  background-color: #f7fafd !important;
  margin-top: 75px;

  ul {
    padding-left: 0px;
  }
`;

export const FileCard = styled.div`
  padding: 0px 22px 0px 14px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  margin-bottom: 46px;
  overflow: hidden;

  button {
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
  }

  > div {
    display: flex;
    align-items: center;
    margin-right: 20px;
    width: calc(100% - 60px);

    > svg {
      margin-right: 12px;
    }

    > span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const RightSection = styled.div`
  padding: 0px 40px;

  ${FileCard} {
    svg:last-child {
      height: 30px;
      width: 30px;

      line {
        stroke: #666;
      }
    }
  }
`;

export const TopBar = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
  border-bottom: 1px solid #dddddd;
  margin-left: -100px;
  margin-right: -100px;
  padding: 0px 100px;

  > span {
    > svg {
      margin-right: 16px;
    }

    display: flex;
    align-items: center;
  }

  span {
    font: normal normal bold 25px/36px Muli;
    color: #666666;
  }
`;

const Files = styled.div`
  .flex_row {
    flex-wrap: wrap;
  }
`;

const Heading = styled.div`
  color: #666666;
  font: normal normal bold 25px/36px Muli;
  margin-bottom: 24px;
`;

const FolderCard = styled.div`
  ${({ active }) => `
  height: 63px;
  width: 387px;
  background: ${active ? '#E8EEF3' : '#ffffff'} 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 2px #00000029;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  font: normal normal normal 15px/19px Muli;
  margin-bottom: 12px;

  > div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 20px;

      path {
        fill: ${active ? '#666' : ''};
      }
    }
  }

  > svg {
    &:last-child {
      display: ${!active ? 'none' : 'block'};
    }
  }
`}
`;

const FolderIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26.09"
    height="20"
    viewBox="0 0 26.09 20"
  >
    <defs>
      <style></style>
    </defs>
    <g transform="translate(0 -47.619)">
      <g transform="translate(0 47.619)">
        <path
          fill="#ddd"
          d="M23.788,50.243H13.193l-2.11-2.509a.32.32,0,0,0-.256-.115H2.3A2.325,2.325,0,0,0,0,49.946V65.293a2.325,2.325,0,0,0,2.3,2.325H23.788a2.325,2.325,0,0,0,2.3-2.325V52.568A2.325,2.325,0,0,0,23.788,50.243Z"
          transform="translate(0 -47.619)"
        />
      </g>
    </g>
  </svg>
);

const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20.645"
    height="10"
    viewBox="0 0 20.645 10"
  >
    <defs>
      <style></style>
    </defs>
    <path
      fill="#666"
      d="M20.409,136.429h0l-4.214-4.194a.807.807,0,0,0-1.138,1.143l2.829,2.815H.806a.806.806,0,1,0,0,1.613H17.885l-2.829,2.816a.806.806,0,0,0,1.138,1.143l4.214-4.194h0A.807.807,0,0,0,20.409,136.429Z"
      transform="translate(0 -132)"
    />
  </svg>
);

// const PdfIcon = function() {
//   return(
//     <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-pdf" class="svg-inline--fa fa-file-pdf fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm250.2-143.7c-12.2-12-47-8.7-64.4-6.5-17.2-10.5-28.7-25-36.8-46.3 3.9-16.1 10.1-40.6 5.4-56-4.2-26.2-37.8-23.6-42.6-5.9-4.4 16.1-.4 38.5 7 67.1-10 23.9-24.9 56-35.4 74.4-20 10.3-47 26.2-51 46.2-3.3 15.8 26 55.2 76.1-31.2 22.4-7.4 46.8-16.5 68.4-20.1 18.9 10.2 41 17 55.8 17 25.5 0 28-28.2 17.5-38.7zm-198.1 77.8c5.1-13.7 24.5-29.5 30.4-35-19 30.3-30.4 35.7-30.4 35zm81.6-190.6c7.4 0 6.7 32.1 1.8 40.8-4.4-13.9-4.3-40.8-1.8-40.8zm-24.4 136.6c9.7-16.9 18-37 24.7-54.7 8.3 15.1 18.9 27.2 30.1 35.5-20.8 4.3-38.9 13.1-54.8 19.2zm131.6-5s-5 6-37.3-7.8c35.1-2.6 40.9 5.4 37.3 7.8z"></path></svg>
//   )
// }

// const Left = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   width: 270px;
// `

// const Data = styled.div`
//   background-color: #fff;
//   display: flex;
//   width: 100%;
//   grid-column: 1 / -1;
//   height: 500px;
//   padding: 20px 40px;

//   a {
//     width: 60px;
//     margin-right: 100px;
//     color: #e40017;
//     text-decoration: none;
//     span {
//       color: #000;
//       display: flex;
//       justify-content: center;
//       font-weight: bold;
//     }
//   }
// `
// const Content = styled.div`
//   margin-bottom: 30px;
//   display: grid;
//   grid-gap: 30px;
//   grid-template-columns: repeat(12, 1fr);
//   grid-auto-rows: auto;

//   .hb { grid-column: 1 / -1};
//   .bnr { grid-column: 1 / -1};
//   .tbl {
//     grid-column: 1 / -1;
//     height: 100%;
//     .row {
//       &:last-child {border-bottom: none;}
//     }
//   };
// `

// const Wrapper = styled.div`
//   display: flex;
//   width: 100%;
//   grid-column: 1 / -1;
//   flex-direction: column;
// `

// const Layout = styled.div`
//   padding-left: 270px;
// `

// const CLink = styled(Link)`
//   color: #000;
//   display: flex;
//   align-items: center;
// `

// const CustomInput = styled(Input)`
//   // margin: 0 0 10px 20px;
// `
