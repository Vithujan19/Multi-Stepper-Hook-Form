import React from 'react';
import './Notification.css';
import Alert from '@material-ui/lab/Alert';

export const showErrMsg = (msg) => {
    return <div className=""><Alert elevation={6} variant="filled" severity="error">{msg}</Alert></div>
}

export const showSuccessMsg = (msg) => {
    return <div className=""><Alert elevation={6} variant="filled" severity="success">{msg}</Alert></div>
}