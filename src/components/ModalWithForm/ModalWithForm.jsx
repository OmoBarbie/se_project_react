import { useEffect } from "react";
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
  isSubmitDisabled,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClose = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isOpen ? "modal_open" : ""}`}
      onClick={handleOverlayClose}
    >
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

          <button
            type="submit"
            className="modal__submit"
            disabled={isSubmitDisabled}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
