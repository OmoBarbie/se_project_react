import { useState } from "react";

export function useFormWithValidation(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Get the form element and the input
    const form = evt.target.closest("form");
    const input = evt.target;

    // Check validity of the individual input
    const errorMessage = input.validationMessage;

    setErrors((prev) => {
      const newErrors = { ...prev };

      if (errorMessage) {
        newErrors[name] = errorMessage;
      } else {
        delete newErrors[name];
      }

      return newErrors;
    });

    // Check overall form validity
    if (form) {
      setIsValid(form.checkValidity());
    }
  };

  const resetForm = () => {
    setValues(defaultValues);
    setErrors({});
    setIsValid(false);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    handleChange,
    resetForm,
  };
}
