import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import upload from '../../assets/images/upload.svg';

const DropZone = ({ files, setFiles, preview, accept, maxFiles, maxSize, text1, text2 }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (setFiles) {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    }
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
    accept: accept || 'image/jpeg, image/png',
    maxFiles: maxFiles || 1,
    maxSize: maxSize || 10000000,
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
              {text1 || 'Click here or drag and drop logo image'}
            </span>
            <span className="extension">
              {text2 || 'Allowed file formats are PNG, JPG within 10MB, Suggested dimensions are W-300px &amp; H-300px'}
            </span>
          </>
        )}
      </label>
    </div>
  );
};

export default DropZone;
