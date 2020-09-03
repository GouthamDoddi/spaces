import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import uuid from 'react-uuid'

import { FilePond } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import S3 from '../../utils/upload_to_s3'
import { get, post } from '../../store/api'

import styled from 'styled-components'


function getFiles({param_id, setCurrentFiles}) {
  get(`compliance/parameter/files/${param_id}`, {success: (resp) => {
    setCurrentFiles(resp.data || [])
  }})
}

function addFiles({param_id, data, load, setCurrentFiles}) {
  post(`compliance/parameter/files/${param_id}`, {success: (resp) => {
    setCurrentFiles(resp.data.images)
    load(data)
  }, data: {files: [data]}})
}

function deleteFile({param_id, file_name}) {

}

const HOST = 'https://spaces2.s3-eu-central-1.amazonaws.com'

export default function({_files=[], hide_upload=false, param_id, ...props}) {
  const [files, setFiles] = useState(_files)
  const [currentFiles, setCurrentFiles] = useState([])

  useEffect(() => {
    getFiles({param_id, setCurrentFiles})
  }, [param_id])
  return (
    <div className="App">
      { !hide_upload ? 
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={1}
          server= {{
            process: function(fieldName, file, metadata, load, error, progress, abort) {
              S3.uploadFile(file, uuid())
                .then(data => {
                  addFiles({data: data.key, param_id, setCurrentFiles, load})                
                })
                .catch(err => { console.log(err); error('Error uploading file'); return})
            }
          }}
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        /> : null
      }
      <Files>
        {
          currentFiles.map((file) => (
            <File href={`${HOST}/${file}`} target='_blank'> File  </File>
          ))
        }
      </Files>
    </div>
  )
}

const Files = styled.div`
  display: flex;
  flex-wrap: wrap;

`

const File = styled.a`
  width: 60px;
  height: 80px;
  margin: 5px;
  border: 1px solid #777;
  box-shadow: 0 6px 6px -6px #777;
  text-align: center;
  color: #000;
  line-height: 70px;
`