import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';

import useStyle from './styles';

const steps = ["Category", "SubCategory","Information","Upload Images", "Confirmation"];

const Main = () => {

    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => setActiveStep(prev => prev + 1);
    const prevStep = () => setActiveStep(prev => prev - 1);

    const classes = useStyle();

    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">List Your Items</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper} >
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <MultiStepForm activeStep={activeStep} nextStep={nextStep} prevStep={prevStep} />
                </Paper>
            </main>
        </>
    )
}

export default Main;
