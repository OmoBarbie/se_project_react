import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function LoginModal({ isOpen, onClose, onLogin }) {
  const {
    values,
    errors,
    handleChange,
    handleSubmitAttempt,
    resetForm,
    submitted,
    setSubmitted,
  } = useFormWithValidation({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen, setSubmitted]);

  function handleSubmit(evt) {
    const ok = handleSubmitAttempt(evt);
    if (!ok) return;

    onLogin(values);
    resetForm();
  }

  return (
    <ModalWithForm
      title="Log In"
      buttonText="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="login"
      autoComplete="off"
      isSubmitDisabled={false}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          autoComplete="off"
          className={`modal__input ${
            submitted && errors.email ? "modal__input_error" : ""
          }`}
          value={values.email}
          onChange={handleChange}
          required
        />
        <span
          className={`modal__error ${
            submitted && errors.email ? "modal__error_visible" : ""
          }`}
        >
          {errors.email}
        </span>
      </label>

      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          autoComplete="off"
          className={`modal__input ${
            submitted && errors.password ? "modal__input_error" : ""
          }`}
          value={values.password}
          onChange={handleChange}
          required
        />
        <span
          className={`modal__error ${
            submitted && errors.password ? "modal__error_visible" : ""
          }`}
        >
          {errors.password}
        </span>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
