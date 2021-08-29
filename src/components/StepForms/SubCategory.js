import React from 'react';
import { Grid, Container, Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const SubCategory = ({ next }) => {

    const methods = useForm();

    return (
        <Container maxWidth="xs">
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit((data) => next({ ...data }))}>
                    <Grid container spacing={3}>
                        <FormInput name='subcategory' label='SubCategory' />
                        {/* <FormInput name='price' label='Price' /> */}
                        {/* <FormInput name='address1' label='Address' />
                        <FormInput name='email' label='Email' />
                        <FormInput name='city' label='City' />
                        <FormInput name='zip' label='ZIP / Postal Code' /> */}
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Countries</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>{subdivision.label}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Option</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>{option.label}</MenuItem>
                                ))}
                            </Select>
                        </Grid> */}
                    </Grid>
                    <br />
                    <div style={{ display: "flex", justifyContent: 'space-between' }}>
                        {/* <Button component={Link} to="/cart" variant='outlined' >Back to cart</Button> */}
                        <Button type='submit' variant='contained' color='primary' >Next</Button>
                    </div>
                </form>
             {/* <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button> */}
              </FormProvider>
        </Container>
    )
}

export default SubCategory
