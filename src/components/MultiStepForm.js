import React, { useState } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import useStyle from './styles';
import General from './StepForms/General';
import SubCategory from './StepForms/SubCategory';
import Policy from './StepForms/policy';
import Confirmation from './StepForms/Confirmation';

// const initialState = {
//     title: "",
//     price: "",
//     category: "",
//     subcategory: "",
//     policy: "",
//     description: "",
// }

const steps = ["General", "SubCategory", "Policy"];

const MultiStepForm = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({});
    const classes = useStyle();

    // const handleNext = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //   };
    
    //   const handleBack = () => {
    //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
    //   };
    
    //   const handleReset = () => {
    //     setActiveStep(0);
    //   };

    const nextStep = () => setActiveStep((previousActiveStep) => previousActiveStep + 1);
    const backStep = () => setActiveStep((previousActiveStep) => previousActiveStep - 1);

    const next = (data) => {
        setFormData(data);

        nextStep();
    }

    const Form = () => activeStep === 0
        ? <General next={next} />
        : activeStep === 1 ? <SubCategory next={next} />
            : activeStep === 2 ? <Policy />
                : <Confirmation />
    // {
    //     switch (activeStep) {
    //         case 0:
    //             return <General {...props} />;
    //         case 1:
    //             return <SubCategory {...props} />;
    //         case 2:
    //             return <Policy {...props} />;
    //     }
    // }

    return (
        <>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">List Your Vehicle</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>
            </main>
        </>
    )
}

export default MultiStepForm;
