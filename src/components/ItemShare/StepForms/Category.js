import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Select, MenuItem, InputLabel, Grid } from '@material-ui/core';
import './Category.css';

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

// const categories = ["Vehicle", "Residencies", "Cloth", "Other"];



export const Category = ({ formData, setFormData, nextStep }) => {
    const classes = useStyles();
    return (
        <>
            <Formik
                initialValues={formData}
                onSubmit={values => {
                    setFormData(values);
                    nextStep();
                }}
            >
                {({ errors, touched }) => (
                    <Form className={classes.form}>
                        {/* <Select name="category" margin='normal'>
                            {categories.map((category) => (
                                <MenuItem value={category}>{category}</MenuItem>
                            ))}
                        </Select> */}
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid xs={6} sm={3} className="radio-buttons">
                                <label className="custom-radio">
                                    <Field type="radio" name="category" value="vehicles" />
                                    <span className="radio-btn"><i class="las la-check"></i>
                                        <div className="category-icon">
                                            <i class="las la-car-side"></i>
                                            <h3>Vehicle</h3>
                                        </div>
                                    </span>
                                </label>
                            </Grid>
                            <Grid xs={6} sm={3} className="radio-buttons">
                                <label className="custom-radio">
                                    <Field type="radio" name="category" value="residencies" />
                                    <span className="radio-btn"><i class="las la-check"></i>
                                        <div className="category-icon">
                                            <i class="las la-home"></i>
                                            <h3>Residence</h3>
                                        </div>
                                    </span>
                                </label>
                            </Grid>
                            <Grid xs={6} sm={3} className="radio-buttons">
                                <label className="custom-radio">
                                    <Field type="radio" name="category" value="cloths" />
                                    <span className="radio-btn"><i class="las la-check"></i>
                                        <div className="category-icon">
                                            <i class="las la-tshirt"></i>
                                            <h3>Apparel</h3>
                                        </div>
                                    </span>
                                </label>
                            </Grid>
                            <Grid xs={6} sm={3} className="radio-buttons">
                                <label className="custom-radio">
                                    <Field type="radio" name="category" value="other" />
                                    <span className="radio-btn"><i class="las la-check"></i>
                                        <div className="category-icon">
                                            <i class="las la-handshake"></i>
                                            <h3>Other</h3>
                                        </div>
                                    </span>
                                </label>
                            </Grid>
                            {/* <Grid xs={12} sm={6}>
                                <i class="fas fa-truck" style={{ fontSize: 25 }}>Vehicle</i>
                                <br />
                                <Field type="radio" name="category" value="vehicles" />
                            </Grid> */}
                            {/* <Grid xs={12} sm={6}>
                                <i class="fas fa-truck" style={{ fontSize: 25 }}>Residence</i>
                                <br />
                                <Field type="radio" name="category" value="residencies" />
                            </Grid>
                            <Grid xs={12} sm={6}>
                                <i class="fas fa-truck" style={{ fontSize: 25 }}>Apparel</i>
                                <br />
                                <Field type="radio" name="category" value="cloths" />
                            </Grid>
                            <Grid xs={12} sm={6}>
                                <i class="fas fa-truck" style={{ fontSize: 25 }}>Other</i>
                                <br />
                                <Field type="radio" name="category" value="other" />
                            </Grid> */}
                        </Grid>

                        {/* <Field as={Select} name="category" required>
                            <option value="vehicles">Vehicle</option>
                            <option value="residencies">Residence</option>
                            <option value="cloths">Cloth</option>
                            <option value="other">Other</option>
                        </Field> */}
                        <Button
                            type='submit'
                            variant='contained'
                            color='primary'
                            className={classes.button}
                        >
                            Continue
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

Category.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
};