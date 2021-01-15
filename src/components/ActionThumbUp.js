import React, { useRef, useState } from 'react'
import { IconButton } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import { FormattedMessage } from 'react-intl'

export default function ActionThumbUp({ action, color }) {
  const buttonColor = color || 'inherit'
  return (
    <IconButton
      aria-label="delete"
      size="small"
      onClick={e => {
        action()
      }}
      title={<FormattedMessage id="upvote"></FormattedMessage>}
    >
      <ThumbUpIcon color={buttonColor} />
    </IconButton>
  )
}
