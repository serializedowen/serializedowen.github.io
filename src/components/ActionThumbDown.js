import React, { useRef, useState } from 'react'
import { IconButton } from '@material-ui/core'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import { FormattedMessage } from 'react-intl'

export default function ActionThumbDown({ action, color }) {
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
      <ThumbDownIcon color={buttonColor} />
    </IconButton>
  )
}
