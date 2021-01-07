import React, { useState, useEffect, useRef } from 'react'
import dayjs from 'dayjs'
import { FormattedDate, FormattedRelativeTime, FormattedTime } from 'react-intl'
// import duration from 'dayjs/plugin/duration'
import Popover from '@material-ui/core/Popover'

// dayjs.extend(duration)
export default function RelativeTimeStamp({ time, popover }) {
  const [relativeTime, setrelativeTime] = useState(-50)
  const [anchorEl, setanchorEl] = useState(null)
  const handlePopoverOpen = event => {
    setanchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setTimeout(() => {
      setanchorEl(null)
    }, 1000)
  }

  const open = Boolean(anchorEl)

  useEffect(() => {
    setrelativeTime(dayjs(time).diff(dayjs(), 'second'))
    return () => {}
  }, [time])

  return (
    <>
      <span onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        <FormattedRelativeTime
          value={relativeTime}
          updateIntervalInSeconds={10}
        />
      </span>

      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        // onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <FormattedDate value={dayjs(time)}></FormattedDate>
        <FormattedTime value={dayjs(time)}></FormattedTime>
      </Popover>
    </>
  )
}
