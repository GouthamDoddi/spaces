import React from 'react';
import styled from 'styled-components';
import { TopBar, FileCard } from '.';
import { ReactComponent as Docs } from '../../assets/images/doc.svg';
import { ReactComponent as XLS } from '../../assets/images/xls.svg';
import { ReactComponent as PDF } from '../../assets/images/pdf.svg';
import { ReactComponent as Zip } from '../../assets/images/zip.svg';
import { ReactComponent as LeftArrow } from '../../assets/images/left-arrow.svg';
import HeaderBar from '../../shared/header_bar';
import { NewLayout } from '../entities';
import DropZone from '../entities/drop-zone';
import { CrossIcon } from '../projects/case-management/action';
import { NavLink } from 'react-router-dom';

const data = [
  {
    name: 'Government Mobile Applications Framework [AR] v1.1.4.pdf',
    url: '/resources/file1.pdf',
    type: 'docs',
  },
  {
    name: 'Government Mobile Applications Framework [EN] v1.1.4.pdf',
    url: '/resources/file2.pdf',
    type: 'xls',
  },
  {
    name: 'Government Websites Framework [AR] v1.1.4.pdf',
    url: '/resources/file3.pdf',
    type: 'pdf',
  },
  {
    name: 'Government Websites Framework [EN] v1.1.4.pdf',
    url: '/resources/file4.pdf',
    type: 'docs',
  },
  {
    name: 'Government eServices Framework [AR] v1.1.4.pdf',
    url: '/resources/file5.pdf',
    type: 'zip',
  },
];

const types = {
  docs: <Docs />,
  xls: <XLS />,
  pdf: <PDF />,
  zip: <Zip />,
};

const ResourceUpload = () => {
  return (
    <NewLayout>
      <HeaderBar className="hb" />

      <div className="custom_container">
        <TopBar>
          <NavLink to="/resources">
            <LeftArrow />
            <span>Upload a Resource</span>
          </NavLink>
        </TopBar>

        <div className="flex_row">
          <div className="flex_col_6">
            <div className="flex_col_12">
              <div className="form_field_wrapper">
                <label className="form_label">
                  Filename <mark>*</mark>
                </label>
                <input type="text" placeholder="File name" />
                {/* <span className="error_messg">{errors.logo}</span> */}
              </div>
            </div>
            <div className="flex_col_12">
              <div className="form_field_wrapper">
                <label className="form_label">
                  Version <mark>*</mark>
                </label>
                <input type="text" placeholder="Version" />
                {/* <span className="error_messg">{errors.logo}</span> */}
              </div>
            </div>
            <div className="flex_col_12">
              <div className="form_field_wrapper">
                <label className="form_label">
                  Select Group/Framework <mark>*</mark>
                </label>
                <select></select>
                {/* <span className="error_messg">{errors.logo}</span> */}
              </div>
            </div>
            <div className="flex_col_12">
              <div className="form_field_wrapper">
                <label className="form_label">
                  Upload Resource Files <mark>*</mark>
                </label>
                <DropZone
                  files={[]}
                  // setFiles={setFiles}
                  // preview={logo}
                  sizeInMb={20}
                  maxFilesToUpload={4}
                  // fetchFiles={fetchFiles}
                  formats={['.xls', '.zip', '.pdf', '.docx']}
                  label={'Click here or drag and drop attachments'}
                  sub_label={
                    'Allowed file formats are PDF, DOC, XLS, ZIP within 50MB of size'
                  }
                />
                {/* <span className="error_messg">{errors.logo}</span> */}
              </div>
            </div>
          </div>
          <div className="flex_col_6">
            <RightSection>
              <Heading>Uploaded Files</Heading>
              {data.map(({ name, type }) => (
                <div className="flex_col_sm_12">
                  <FileCard>
                    <div>
                      {types[type]}
                      <span>{name}</span>
                    </div>
                    <CrossIcon />
                  </FileCard>
                </div>
              ))}
            </RightSection>
          </div>
        </div>
      </div>
    </NewLayout>
  );
};

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

const Heading = styled.div`
  font: normal normal normal 20px/25px Muli;
  margin-bottom: 8px;
`;

export default ResourceUpload;
