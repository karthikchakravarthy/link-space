import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

function ToastMessage(props) {
  const { toastData, setToastData } = useContext(Context)

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return
    }
    setToastData((prevState) => ({
      ...prevState,
      open: false,
    }))
  }

  return (
    <Snackbar
      open={toastData.open}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert severity={toastData.severity} onClose={handleClose}>
        {toastData.message}
      </Alert>
    </Snackbar>
  )
}

export default ToastMessage
