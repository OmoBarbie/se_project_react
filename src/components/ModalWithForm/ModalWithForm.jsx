import "./ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  name,
  onSubmit,
  autoComplete,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__content">
        <button onClick={onClose} type="button" className="modal__close" />
        <h2 className="modal__title">{title}</h2>

        <form
          className="modal__form"
          onSubmit={onSubmit}
          name={name}
          autoComplete={autoComplete}
        >
          {children}

          <button type="submit" className="modal__submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
