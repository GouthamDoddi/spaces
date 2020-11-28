import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import uuid from 'react-uuid'

import { FilePond } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import S3 from '../../utils/upload_to_s3'
import { get, post, del } from '../../store/api'

import styled from 'styled-components'


const HOST = 'https://spaces2.s3-eu-central-1.amazonaws.com'

export default function({_files=[], hide_upload=false, source, param_id, ...props}) {
  const [files, setFiles] = useState(_files)
  const [currentFiles, setCurrentFiles] = useState([])

  const  getFiles = () => {
    get(`assets/images/${source}/${param_id}`, {success: (resp) => {
      setCurrentFiles(resp.data || [])
    }})
  }
  
  const addFiles = ({data, load, setCurrentFiles}) => {
    post(`assets/images/${source}/${param_id}`, {success: (resp) => {
      setCurrentFiles(resp.data.images)
      load(data)
    }, data: {files: [data]}})
  }
  
  const deleteFile = ({fileName}) => {
    del(`assets/images/${source}/${param_id}`, {success: (resp) => {
      getFiles({param_id, setCurrentFiles})
    }, data: { file_name: fileName }})
  }

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
              const fn = file.name.split('.')
              fn.pop()
              S3.uploadFile(file, `${uuid()}-${fn.join('_')}`)
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
          (currentFiles || []).map((file) => (
            <File href={`${HOST}/${file}`} target='_blank'> 
              <span> {nameFor(file)}  </span>
              {
                !hide_upload ? <Close onClick={(e) => {
                  e.preventDefault()
                  const approve = window.confirm("Are you sure?")
                  if(approve) { 
                    console.log("delete")
                    deleteFile({param_id, fileName: file, setCurrentFiles})
                  }
                }}>X</Close> : null
              }

            </File>
          ))
        }
      </Files>
    </div>
  )
}

function nameFor(file) {
  const possible = file.split('-').pop()
  return possible.split('.')[0]
}
const Files = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const File = styled.a`
  position: relative;
  width: 60px;
  height: 80px;
  margin: 5px;
  border: 1px solid #777;
  box-shadow: 0 6px 6px -6px #777;
  color: #000;
  display: flex;
  font-size: 10px;
  align-items: center;
  span {
    width: 60px;
    display: inline-block;
    word-wrap: break-word;
    align-self: center;
    text-align: center;
  }
`

const Close = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  padding: 4px;
  background-color: black;
  position: absolute;
  top: -6px;
  right: -6px;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
  cursor: pointer;
`