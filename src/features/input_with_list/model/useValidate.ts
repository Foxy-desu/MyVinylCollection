import {useEffect, useState } from "react"
interface IUseValidateProps {
  inputValue: string;
  isRequiredField: boolean;
}
interface IErrorObject {
  emptyErr: string,
  symbolErr: string
};

export const useValidate =(InputValue: IUseValidateProps['inputValue'], isRequiredField:IUseValidateProps['isRequiredField'])=> {

  const [validationError, setValidationError] = useState<IErrorObject>({emptyErr: '', symbolErr: ''});
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
  function setErrorMessage(errorMessage: {emptyErr: string, symbolErr: string}){
    setValidationError(errorMessage);
  };
  function setLock(check1:boolean, check2:boolean){
    if(check1 && check2) {
      setIsLocked(false);
    } else {
      setIsLocked(true);
    }
  };
  function handleFieldValidation(value:IUseValidateProps['inputValue'], isRequired:IUseValidateProps['isRequiredField']) {
    const emptyCheckPass = isRequired ? checkIfEmpty(value) : true;
    const specialSymbolCheckPass = checkSpecialSymbols(value);
    let emptyMessage = emptyCheckPass ? '':'Field cannot be empty';
    let symbolMessage = specialSymbolCheckPass ? '':'Make sure not to use !@#$%^&*(),.?":{}|<>';
    setErrorMessage({emptyErr: emptyMessage, symbolErr: symbolMessage});
    setLock(emptyCheckPass, specialSymbolCheckPass);
  };
  function validateInput(input:IUseValidateProps['inputValue']) {
    //use input from the outside to prevent errors
    handleFieldValidation(input, isRequiredField);
  };

  useEffect(()=> {
    if(isRequiredField && !InputValue){
      setIsLocked(true);
    }
  },[InputValue])

  return {
    validationError,
    isLocked,
    validateInput
  }
}