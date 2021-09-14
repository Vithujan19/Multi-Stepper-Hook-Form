import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { showSuccessMsg, showErrMsg } from '../../utils/Notification/Notification';
import loading from '../../utils/loading/Loading';
import Alert from '@material-ui/lab/Alert';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const initialState = {
  err: '',
  success: ''
}


export const ImageForm = ({
  formData,
  setFormData,
  nextStep,
  prevStep,
  image,
  setImage
}) => {


  const classes = useStyles();
  const [direction, setDirection] = useState('back');
  const { err, success } = formData;

  const auth = useSelector(state => state.auth)
  const token = useSelector(state => state.token)

  // const [image, setImage] = useState(false)
  const [loading, setLoading] = useState(false)

  const changeAvatar = async (e) => {
    e.preventDefault()
    try {
      const file = e.target.files[0]

      if (!file) return setFormData({ formData, err: "No files were uploaded.", success: '' })

      if (file.size > 1024 * 1024)
        return setFormData({ formData, err: "Size too large.", success: '' })

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        return setFormData({ formData, err: "File format is incorrect.", success: '' })

      let formData = new FormData()
      formData.append('file', file)

      setLoading(true)
      const res = await axios.post('/api/upload', formData, {
        headers: { 'content-type': 'multipart/form-data', Authorization: token }
      })

      setLoading(false)
      setImage(res.data.url)

    } catch (err) {
      setFormData({ formData, err: err.response.data.msg, success: '' })
    }
  }

  return (
    <>
      <Formik
        initialValues={formData}
        onSubmit={values => {
          setFormData(values);
          direction === 'back' ? prevStep() : nextStep();
        }}
      >
        <Form className={classes.form}>
          <Grid item style={{ padding: 10 }}>

            {err && showErrMsg(err)}
            {success && showSuccessMsg(success)}
            {loading && <Alert elevation={6} variant="filled" severity="success">Loading</Alert>}
            {/* <div className="avatar"> */}
            {/* <img src={avatar ? avatar : user.avatar} alt="" style={{ height: 120, width: 120 }} />
  <span>
    <i className="fas fa-camera"></i>
    <p>Change</p>
    <input type="file" name="file" id="file_up" onChange={changeAvatar} />
  </span>
  
</div> */}

          </Grid>
          <Grid container item direction="row" style={{ paddingTop: 10, }}>

            <Grid item container
              direction="row"
              justifyContent="flex-start"
              alignItems="center" xl={3} lg={3} md={3} sm={3} xs={3}>
              <input type="file" name="file" onChange={changeAvatar}/>
              {image && <img alt="Travis Howard" src={image} style={{ height: 100, width: 100 }} />}

              {/* <Avatar
  alt="Remy Sharp"
  src={avatar ? avatar : user.avatar} style={{ height: 80, width:80 }}
 
/> */}
            </Grid>
            {/* <Grid container
              direction="row"
              justifyContent="flex-end"
              alignItems="center" item xl={2} lg={2} md={2} sm={2} xs={2}>
              <Button style={{ backgroundColor: "#1976d2", color: "#FFF", fontWeight: "600", fontFamily: 'Georama sans-serif', textTransform: 'none' }} onClick={changeAvatar}>Update</Button>

            </Grid> */}

          </Grid>

          <div>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => setDirection('back')}
            >
              Back
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.button}
              onClick={() => setDirection('forward')}
            >
              Continue
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

ImageForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};