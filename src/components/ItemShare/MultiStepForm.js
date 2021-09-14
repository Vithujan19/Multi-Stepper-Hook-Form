import React, { useState } from 'react';
import { General } from './StepForms/General';
import { SubCategory } from './StepForms/SubCategory';
import { Confirm } from './StepForms/Confirmation';
import { Success } from './StepForms/Success';
import { Category } from './StepForms/Category';
import { ImageForm } from './StepForms/ImageIndex';

const MultiStepForm = ({ activeStep, nextStep, prevStep }) => {
    //   const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        category: '',
        subcategory: '',
        image: '',
        err: '',
        success: '',
    });
    //   const nextStep = () => setStep(prev => prev + 1);
    //   const prevStep = () => setStep(prev => prev - 1);

   const [image, setImage] = useState("");
    switch (activeStep) {
        case 0:
            return (
                <Category
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />
            );
        case 1:
            return (
                <SubCategory
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 2:
            return (
                <General
                    formData={formData}
                    setFormData={setFormData}
                    nextStep={nextStep}
                    prevStep={prevStep}
                />
            );
        case 3:
            return (
                <ImageForm
                    formData={formData}
                    setFormData={setFormData}
                    image={image}
                    setImage={setImage}
                    nextStep={nextStep}
                    prevStep={prevStep} />
            );
        case 4:
            return (
                <Confirm
                    formData={formData}
                    setFormData={setFormData}
                    image={image}
                    nextStep={nextStep}
                    prevStep={prevStep} />
            );
        default:
            return <Success formData={formData} />;
    }
};

export default MultiStepForm;