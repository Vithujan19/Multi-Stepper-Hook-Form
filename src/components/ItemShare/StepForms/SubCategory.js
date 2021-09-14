import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Select } from '@material-ui/core';
import { VehicleSub } from './SubCategory/VehicleSub';
import { ResidenceSub } from './SubCategory/ResidenceSub';
import { ClothSub } from './SubCategory/ClothSub';
import { OtherSub } from './SubCategory/OtherSub';

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

export const SubCategory = ({
  formData,
  setFormData,
  nextStep,
  prevStep
}) => {
  const classes = useStyles();
  const [direction, setDirection] = useState('back');
  const { category } = formData;
  return (
    <>
      {category === 'vehicles' ? <VehicleSub formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
        : category === 'residencies' ? <ResidenceSub formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
          : category === 'cloths' ? <ClothSub formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
            : <OtherSub formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />
      }
    </>
  );
};

SubCategory.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};