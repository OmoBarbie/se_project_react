import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function RegisterModal({ isOpen, onClose, onRegister }) {
  const {
    values,
    errors,
    handleChange,
    handleSubmitAttempt,
    resetForm,
    submitted,
    setSubmitted,
  } = useFormWithValidation({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });

  React.useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen, setSubmitted]);

  function handleSubmit(evt) {
    const ok = handleSubmitAttempt(evt);
    if (!ok) return;

    onRegister(values);
    resetForm();
  }

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Next"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="register"
      autoComplete="off"
      isSubmitDisabled={false}
    >
      <label className="modal__label">
        Email*
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
        Password*
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

      <label className="modal__label">
        Name*
        <input
          type="text"
          name="name"
          autoComplete="off"
          className={`modal__input ${
            submitted && errors.name ? "modal__input_error" : ""
          }`}
          value={values.name}
          onChange={handleChange}
          required
          minLength="2"
        />
        <span
          className={`modal__error ${
            submitted && errors.name ? "modal__error_visible" : ""
          }`}
        >
          {errors.name}
        </span>
      </label>

      <label className="modal__label">
        Avatar URL*
        <input
          type="url"
          name="avatar"
          autoComplete="off"
          className={`modal__input ${
            submitted && errors.avatar ? "modal__input_error" : ""
          }`}
          value={values.avatar}
          onChange={handleChange}
          required
        />
        <span
          className={`modal__error ${
            submitted && errors.avatar ? "modal__error_visible" : ""
          }`}
        >
          {errors.avatar}
        </span>
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
