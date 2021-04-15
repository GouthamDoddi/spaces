import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import upload from '../../assets/images/upload.svg';

const DropZone = ({ files, setFiles, preview }) => {
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    maxSize: 10000000,
  });

  return (
    <div className="text_field_wrapper" {...getRootProps()}>
      <input type="file" className="hide" {...getInputProps()} />
      <label className="upload-icon">
        {preview ? (
          <img className="preview-img" src={preview} />
        ) : (
          <>
            <img src={upload} alt="upload icon" />
            <span className="click_label">
              Click here or drag and drop logo image
            </span>
            <span className="extension">
              Allowed file formats are PNG, JPG within 10MB, Suggested
              dimensions are W-300px &amp; H-300px
            </span>
          </>
        )}
      </label>
    </div>
  );
};

export default DropZone;
