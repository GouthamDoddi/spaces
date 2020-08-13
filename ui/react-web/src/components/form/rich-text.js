import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

function converToDraft(data) {
    if(data && data.length > 0) {
      const blocksFromHtml = htmlToDraft(data);
      const { contentBlocks, entityMap } = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      return EditorState.createWithContent(contentState);  
    } else {
      return EditorState.createEmpty()
    }
}

export default function(props) {
  const { data, name, label, className } = props

  const [editorState, setEditorState] = useState(converToDraft(data))//EditorState.createEmpty())
  useEffect(() => {
    setEditorState(converToDraft(data))
  }, [data])
  return(
    <div className={className}>
      <Label>
        {label}
      </Label>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={setEditorState}
      />
      <textarea
        name={name}
        style={{display: 'none'}}
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  )
}

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #687c9d;
  margin-bottom: 10px;
`