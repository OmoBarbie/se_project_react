import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function AddItemModal({ onCloseModal, onAddItem, isOpen }) {
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
    imageUrl: "",
    weather: "",
  });

  // Reset submit state when modal opens (so errors don't show immediately next time)
  React.useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen, setSubmitted]);

  function handleSubmit(evt) {
    const ok = handleSubmitAttempt(evt); // prevents default + validates all + fills errors
    if (!ok) return;

    onAddItem(values, resetForm);
  }

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      name="add-garment"
      autoComplete="off"
      isSubmitDisabled={false}
    >
      <label className="modal__label">
        Name
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
        Image
        <input
          type="url"
          name="imageUrl"
          autoComplete="off"
          className={`modal__input ${
            submitted && errors.imageUrl ? "modal__input_error" : ""
          }`}
          value={values.imageUrl}
          onChange={handleChange}
          required
        />
        <span
          className={`modal__error ${
            submitted && errors.imageUrl ? "modal__error_visible" : ""
          }`}
        >
          {errors.imageUrl}
        </span>
      </label>

      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>

        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            required
          />
          Hot
        </label>

        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          Warm
        </label>

        <label className="modal__radio-label">
          <input
            type="radio"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>

        <span
          className={`modal__error ${
            submitted && errors.weather ? "modal__error_visible" : ""
          }`}
        >
          {errors.weather}
        </span>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
