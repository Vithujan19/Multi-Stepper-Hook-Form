import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Select,Grid } from '@material-ui/core';

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

export const ResidenceSub = ({
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
                                <Field type="radio" name="subcategory" value="hut" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                    <i class="las la-warehouse"></i>
                                        <h3>Hut</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="upstair" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                    <i class="las la-city"></i>
                                        <h3>UpStair</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="palace" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                    <i class="las la-vihara"></i>
                                        <h3>Palace</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                        <Grid xs={6} sm={3} className="radio-buttons">
                            <label className="custom-radio">
                                <Field type="radio" name="subcategory" value="resort" />
                                <span className="radio-btn"><i class="las la-check"></i>
                                    <div className="category-icon">
                                    <i class="las la-building"></i>
                                        <h3>Resort</h3>
                                    </div>
                                </span>
                            </label>
                        </Grid>
                    </Grid>
                    {/* <Field as={Select} name="subcategory" required>
                        <option value="hut">Hut</option>
                        <option value="upstair">Upstair</option>
                        <option value="beachhouse">Beach House</option>
                        <option value="resort">Resort</option>
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

ResidenceSub.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
};