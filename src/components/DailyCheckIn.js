import { useSnackbar } from 'notistack'
import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import http from 'src/utils/http'
import { FormattedMessage } from 'react-intl'
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'

dayjs.extend(isToday)

const LASTCHECKIN = 'LASTCHECKIN'
export default function DailyCheckIn() {
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    const lastCheckIn = localStorage.getItem(LASTCHECKIN)

    if (!lastCheckIn || !dayjs(lastCheckIn).isToday()) {
      http.get('/auth/days').then(res => {
        enqueueSnackbar(
          <Typography>
            <FormattedMessage
              id="checkInBanner"
              values={{ days: res.data }}
            ></FormattedMessage>
          </Typography>,
          {
            variant: 'success',
            anchorOrigin: { vertical: 'top', horizontal: 'right' }
          }
        )
      })
      localStorage.setItem(LASTCHECKIN, new Date().toJSON())
    }
    return () => {}
  }, [])

  return null
}
