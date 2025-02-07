import React, { useRef } from 'react'
import ReactQuill from 'react-quill'

const Editor = () => {
    const quillRef = useRef<any>(null);



  return (
    <div>
      <ReactQuill/>
    </div>
  )
}

export default Editor




