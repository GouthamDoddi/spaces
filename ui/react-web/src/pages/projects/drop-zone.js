import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import upload from '../../assets/images/upload.svg';
import attachment from '../../assets/images/attachment.svg'
import cancel from '../../assets/images/cancel.svg'
import styled from 'styled-components';

const DropZone = ({ files, setFiles, preview, formats, fetchFiles, maxFilesToUpload, sizeInMb, label, sub_label }) => {
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  useEffect(() => {
    return () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    }
  }, [files]);

  const SizeConversion = (bytes) => {
    var sizes = ['Byte', 'KB', 'MB'];
    for (var i = 0; i < sizes.length; i++) {
      if (bytes <= 1024) {
        return bytes + ' ' + sizes[i];
      } else {
        bytes = parseFloat(bytes / 1024).toFixed(2)
      }
    }
    return bytes + ' P';
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: formats,//'image/jpeg, image/png',
    maxFiles: maxFilesToUpload ? maxFilesToUpload : 1,
    maxSize: (sizeInMb * 1000000) //10000000,
  });

  const handleRemove = (e, index) => {
    e.stopPropagation();
    if (index > -1) {
      files.splice(index, 1);
    }
    setFiles(files);
    fetchFiles(files);
  }

  return (
    <React.Fragment>
      <div className="text_field_wrapper" {...getRootProps()}>
        <input type="file" className="hide" {...getInputProps()} />
        <label className="upload-icon">
          {preview ? (
            <img className="preview-img" src={preview} alt="preview" />
          ) : (
            <>
              <img src={upload} alt="upload icon" />
              <span className="click_label">
                {label}
              </span>
              <span className="extension">
                {sub_label}
              </span>
            </>
          )}
        </label>
      </div>

      {!preview && files.length ?
        <DownloadText className="text-right">
          Download Template
        </DownloadText>
        : null}

      {!preview && files.length ?
        files.map((item, index) => (
          <OuterAttachment key={index}>
            <OuterAttachmentSpan>
              <AttachmentIcon src={attachment} alt="attachment" />
            </OuterAttachmentSpan>
            <TextItem>
              {item.name}
            </TextItem>

            <TextItem>
              {SizeConversion(item.size)}
            </TextItem>

            <OuterAttachmentSpan>
              <AttachmentIcon src={cancel} alt="cancel" onClick={(e) => { handleRemove(e, index) }} />
            </OuterAttachmentSpan>
          </OuterAttachment>
        ))
        : null}
    </React.Fragment>
  );
};

const DownloadText = styled.div`
  font-size:12px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #2680EB;
  text-decoration: underline;
  font-weight: bold;
`

const AttachmentIcon = styled.img`
  height: 15px;
  width: 15px;
`

const TextItem = styled.span`
  font-size:10px;
`

const OuterAttachment = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 3px;
  margin-top: 5px;
  border: 1px solid #ccc;
  cursor: pointer;
`

const OuterAttachmentSpan = styled.span`
  
`

export default DropZone;
