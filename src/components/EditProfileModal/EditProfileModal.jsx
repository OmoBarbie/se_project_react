import React, { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const {
    values,
    errors,
    handleChange,
    handleSubmitAttempt,
    submitted,
    setSubmitted,
    setValues,
  } = useFormWithValidation({
    name: "",
    avatar: "",
  });

  React.useEffect(() => {
    if (isOpen) {
      setValues({
        name: currentUser.name || "",
        avatar: currentUser.avatar || "",
      });
      setSubmitted(false);
    }
  }, [isOpen, currentUser, setSubmitted, setValues]);

  function handleSubmit(evt) {
    const ok = handleSubmitAttempt(evt);
    if (!ok) return;

    onUpdateUser(values);
  }

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-profile"
      autoComplete="off"
      isSubmitDisabled={false}
    >
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
        Avatar URL
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

export default EditProfileModal;
