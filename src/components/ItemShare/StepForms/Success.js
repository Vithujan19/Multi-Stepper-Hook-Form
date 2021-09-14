import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {showSuccessMsg,showErrMsg} from '../../utils/Notification/Notification';

const initialState = {
    err: '',
    success: '',
}

const useStyles = makeStyles(theme => ({
  textCenter: {
    textAlign: 'center'
  }
}));

export const Success = ({formData}) => {
  const classes = useStyles();
  const { err, success } = formData;
  return (
    <div className={classes.textCenter}>
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions</p>
      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}
    </div>
  );
};