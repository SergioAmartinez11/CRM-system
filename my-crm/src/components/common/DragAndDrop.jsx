import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'

// STYLE
import '../../styles/DropZone.module.css'
import { Button } from '@mui/material'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,

}

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box',
}

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
}

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
}

function Dropzone(props) {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const removeFile = (file) => () => {
    const newFiles = [...files]
    newFiles.splice(newFiles.indexOf(file), 1)
    setFiles(newFiles)
  }

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt={file.name} />
      </div>
      <Button onClick={removeFile(file)}>Borrar</Button>
    </div>
  ))

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <section className="container">
      <div
        {...getRootProps({ className: 'dropzone' })}
        onClick={(e) => e.stopPropagation}
      >
        <input {...getInputProps()} />
        <p>Arrastra una imagen hasta aqui</p>
        <div>
          <Button type="button" onClick={open}>
            Abrir archivos
          </Button>
        </div>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  )
}

export default Dropzone
