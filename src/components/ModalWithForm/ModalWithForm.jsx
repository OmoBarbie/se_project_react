import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  activeModal,
  onClose,
  name,
  validInput,
  onSubmit,
}) {
  return (
    <div
      className={`modal ${activeModal === "add-garment" ? "modal_open" : ""}`}
    >
      <div className="modal__content">
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit} name={name}>
          {children}
          <button
            type="submit"
            className={`modal__submit ${
              validInput ? "modal__submit-base" : ""
            }`}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
