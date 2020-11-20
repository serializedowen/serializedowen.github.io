import React, { useState, useCallback } from 'react'
import {
  Avatar,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button
} from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import axios from 'src/utils/http'
import useAuthentication from 'src/hooks/useAuthentication'
import { FormattedMessage } from 'react-intl'

export default function AvatarUploader(props) {
  const [open, setopen] = useState(false)
  const [avatarFile, setavatarFile] = useState(null)
  const { refresher } = useAuthentication()

  const upload = useCallback(() => {
    const formdata = new FormData()
    formdata.append('file', avatarFile)

    axios
      .post('/image/upload', formdata)
      .then(refresher)
      .then(() => setavatarFile(null))
  }, [avatarFile])

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    acceptedFiles.forEach(file => {
      setavatarFile(file)
      // const reader = new FileReader()
      // reader.onabort = () => console.log('file reading was aborted')
      // reader.onerror = () => console.log('file reading has failed')
      // reader.onload = () => {
      //   // Do whatever you want with the file contents
      //   const formdata = new FormData()
      //   formdata.append('file', file)
      //   axios.post('/image/upload', formdata).then(refresher)
      // }
      // reader.readAsDataURL(file)
    })
  }, [])
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    fileRejections
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
    maxSize: 500 * 1024
  })

  return (
    <>
      <Avatar {...props} onClick={() => setopen(true)}></Avatar>

      <Dialog open={open} onClose={() => setopen(false)}>
        <DialogTitle onClose={() => setopen(false)}>
          <Typography style={{ color: 'white' }}>设置新头像</Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Avatar {...props} {...getRootProps()}></Avatar>

          <input {...getInputProps()}></input>
        </DialogContent>
        <DialogActions>
          {fileRejections.length > 0 &&
            fileRejections[0].errors.map(error => (
              <FormattedMessage id={error.code}></FormattedMessage>
            ))}
          <Button onClick={() => setopen(false)}>取消</Button>
          <Button
            disabled={Boolean(fileRejections.length)}
            onClick={() => {
              upload()
              setopen(false)
            }}
          >
            确认
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
