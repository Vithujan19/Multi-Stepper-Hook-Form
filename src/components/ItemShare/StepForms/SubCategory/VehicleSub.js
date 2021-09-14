import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Select, Grid } from '@material-ui/core';

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

export const VehicleSub = ({
    formData,
    setFormData,
    nextStep,
    prevStep
}) => {
    const classes = useStyles();
    const [direction, setDirection] = useState('back');
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
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="bike" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                        <i class="las la-bicycle"></i>
                                        <h3>Bicycle</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="bike" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                        <i class="las la-motorcycle"></i>
                                        <h3>Motor Bicycle</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="car" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                        <i class="las la-car"></i>
                                        <h3>Car</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="van" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                        <i class="las la-shuttle-van"></i>
                                        <h3>Van</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="truck" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                        <i class="las la-truck"></i>
                                        <h3>Truck</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="tractor" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                        <i class="las la-tractor"></i>
                                        <h3>Tractor</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="other" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                        <i class="las la-handshake"></i>
                                        <h3>Other</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                    </Grid>
                    {/* <Field as={Select} name="subcategory" required>
                        <option value="bike">Bike</option>
                        <option value="car">Car</option>
                        <option value="van">Van</option>
                        <option value="lorry">Lorry</option>
                    </Field> */}
                    {/* <Field name='city' label='City' margin='normal' as={TextField} />
          <Field name='bio' label='Bio' margin='normal' as={TextField} /> */}
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

VehicleSub.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
};