import { useState } from "react";

export function useFormWithValidation(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const getErrorMessage = (input) => {
    input.checkValidity();
    return input.validationMessage;
  };

  const handleChange = (evt) => {
    const input = evt.target;
    const { name, value } = input;

    setValues((prev) => ({ ...prev, [name]: value }));

    const form = input.closest("form");
    if (!form) return;

    // ALWAYS update overall validity so the button can enable
    setIsValid(form.checkValidity());

    // ONLY show/update error messages after submit attempt
    if (!submitted) return;

    const errorMessage = input.validationMessage;

    setErrors((prev) => {
      const next = { ...prev };
      if (errorMessage) next[name] = errorMessage;
      else delete next[name];
      return next;
    });
  };

  const validateAll = (form) => {
    const inputs = Array.from(form.querySelectorAll("input, select, textarea"));
    const newErrors = {};

    inputs.forEach((input) => {
      // For radio groups: only validate one radio per name
      if (input.type === "radio") {
        const firstRadio = inputs.find(
          (el) => el.type === "radio" && el.name === input.name,
        );
        if (firstRadio !== input) return;
      }

      const msg = getErrorMessage(input);
      if (msg) newErrors[input.name] = msg;
    });

    setErrors(newErrors);
    setIsValid(form.checkValidity());

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitAttempt = (evt) => {
    evt.preventDefault();
    setSubmitted(true);
    return validateAll(evt.target);
  };

  const resetForm = () => {
    setValues(defaultValues);
    setErrors({});
    setIsValid(false);
    setSubmitted(false);
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    isValid,
    setIsValid,
    submitted,
    setSubmitted,
    handleChange,
    handleSubmitAttempt,
    resetForm,
  };
}
