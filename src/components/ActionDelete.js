import React, { useRef, useState } from 'react'
import {
  IconButton,
  Popper,
  Fade,
  Card,
  CardContent,
  CardActions,
  Button
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { FormattedMessage } from 'react-intl'

export default function ActionDelete({ action }) {
  const [anchorEl, setanchorEl] = useState(null)

  const open = Boolean(anchorEl)
  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={e => {
          setanchorEl(e.target)
        }}
        title={<FormattedMessage id="delete"></FormattedMessage>}
      >
        <DeleteIcon />
      </IconButton>

      <Popper
        style={{ zIndex: 999 }}
        open={open}
        anchorEl={anchorEl}
        placement={'bottom'}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card elevation={2}>
              <CardContent>确认删除这条评论吗</CardContent>
              <CardActions>
                <Button
                  onClick={e => {
                    setanchorEl(null)
                  }}
                >
                  <FormattedMessage id="no"></FormattedMessage>
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => {
                    setanchorEl(null)
                    action()
                  }}
                >
                  <FormattedMessage id="yes"></FormattedMessage>
                </Button>
              </CardActions>
            </Card>
          </Fade>
        )}
      </Popper>
    </>
  )
}
