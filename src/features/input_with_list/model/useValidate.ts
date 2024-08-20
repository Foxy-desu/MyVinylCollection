import { useEffect, useState } from "react"
interface IUseValidateProps {
  inputValue: string;
  isRequiredField: boolean;
}
export const useValidate =(inputValue:IUseValidateProps['inputValue'], isRequiredField:IUseValidateProps['isRequiredField'])=> {
  const [validationError, setValidationError] = useState('');
  const [isLocked, setIsLocked] = useState(()=> {
    return isRequiredField
  });
  function checkIfEmpty(value:string){
    if(value.trim() === ''){
      //the check hasn't been passed
      return false;
    } else {
      //the check has been passed
      return true;
    }
  };
  function checkSpecialSymbols(value:string){
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if(specialChars.test(value)){
      //the check hasn't been passed
      return false;
    } else {
      //the check has been passed
      return true;
    }
  };
  function setErrorMessage(errorMessage:string){
    setValidationError(errorMessage);
  };
  function handleFieldValidation(value:IUseValidateProps['inputValue'], isRequired:IUseValidateProps['isRequiredField']) {
    const emptyCheckPass = isRequired ? checkIfEmpty(value) : true;
    const specialSymbolCheckPass = checkSpecialSymbols(value);

    if(!emptyCheckPass){
      setErrorMessage('This field is required');
    } else {
      setErrorMessage('');
    };

    if(!specialSymbolCheckPass){
      setErrorMessage('Make sure not to use !@#$%^&*(),.?":{}|<> symbols');
    } else {
      setErrorMessage('');
    };

    if(emptyCheckPass && specialSymbolCheckPass) {
      setIsLocked(false);
    } else {
      setIsLocked(true);
    }
  };

  useEffect(() => {
    handleFieldValidation(inputValue, isRequiredField);
  }, [inputValue, isRequiredField]);

  return {
    validationError,
    isLocked
  }
}