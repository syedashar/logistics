import { createContext, useState } from "react";

//create contextApi
const LogisticContext = createContext();
export default LogisticContext;

//context api provider

export const SellerInfoProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // all function use in context api

  const ExmapleFunction = async (trigger) => {
    let isValid = false;

    switch (activeStep) {
      case 0:
        console.log("0");

        break;
    }
    console.log(!isValid);
    if (true) {
      nextStep();
    }
  };
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  const handleBack = () =>
    setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return (
    <LogisticContext.Provider
      value={{
        ExmapleFunction,
        isLoading,
        activeStep,
        nextStep,
        backStep,
        handleBack,
      }}
    >
      {children}
    </LogisticContext.Provider>
  );
};
