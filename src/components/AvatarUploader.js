import React, {
  useState,
  useCallback,
  useEffect,
  lazy,
  Suspense,
  useRef
} from 'react'
import {
  Avatar,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress
} from '@material-ui/core'
import { useDropzone } from 'react-dropzone'
import axios from 'src/utils/http'
import useAuthentication from 'src/hooks/useAuthentication'
import { FormattedMessage } from 'react-intl'
import useFileReader from 'src/hooks/useFileReader'

import 'cropperjs/dist/cropper.css'

const Cropper = lazy(() => import('react-cropper'))

export default function AvatarUploader(props) {
  const [open, setopen] = useState(false)
  const [avatarFile, setavatarFile] = useState(null)
  const { refresher } = useAuthentication()
  const { error, result, reading } = useFileReader(avatarFile)

  const [previewStyles, setpreviewStyles] = useState({})
  const [cropData, setcropData] = useState({})
  const cropperRef = useRef(null)

  const upload = useCallback(() => {
    const formData = new FormData()

    formData.append('file', avatarFile)

    return axios
      .post('/image/upload', formData, { params: cropData })
      .then(refresher)
      .then(() => setavatarFile(null))
  }, [avatarFile, cropData])

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    acceptedFiles.forEach(file => {
      setavatarFile(file)
    })
  }, [])

  const previewHandler = useCallback(() => {
    const data = cropperRef.current.cropper.getData()
    const scale = 200 / data.width

    setcropData(data)
    setpreviewStyles({
      transform: `translate(-${data.x * scale}px, -${data.y *
        scale}px) scale(${scale})`,
      transformOrigin: 'top left'
    })
  }, [])
  const { getRootProps, getInputProps, fileRejections } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
    maxSize: 500 * 1024
  })

  const { src, style, ...rest } = props

  return (
    <>
      <Avatar {...props} onClick={() => setopen(true)}></Avatar>

      <Dialog
        open={open}
        onClose={() => {
          setavatarFile(null)
          setopen(false)
        }}
      >
        <DialogTitle onClose={() => setopen(false)}>
          <Typography style={{ color: 'white' }}>设置新头像</Typography>
        </DialogTitle>
        <DialogContent dividers>
          {/* show custom image if in edit  */}
          {result ? (
            <div style={{ ...style, borderRadius: '50%', overflow: 'hidden' }}>
              <img
                src={result || src}
                alt="avatar"
                {...rest}
                {...getRootProps()}
                style={{ ...previewStyles, maxWidth: 'none' }}
              ></img>
            </div>
          ) : (
            <Avatar
              src={src}
              {...rest}
              {...getRootProps()}
              style={style}
            ></Avatar>
          )}

          <input {...getInputProps()}></input>
        </DialogContent>

        {avatarFile && (
          <Suspense fallback={<CircularProgress></CircularProgress>}>
            <Cropper
              style={{ height: 400, width: 500 }}
              aspectRatio={1}
              src={result}
              crop={previewHandler}
              viewMode={1}
              guides
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive
              autoCropArea={1}
              checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
              ref={cropperRef}
            ></Cropper>
          </Suspense>
        )}
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
