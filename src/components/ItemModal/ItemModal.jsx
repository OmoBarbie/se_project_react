import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, onDeleteCard }) {
  if (!card) return null;

  const handleDeleteClick = () => {
    onDeleteCard(card);
  };

  return (
    <div className={`modal ${activeModal === "preview" ? "modal_open" : ""}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_type_preview"
        ></button>

        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <div className="modal__footer-top">
            <h2 className="modal__caption">{card.name}</h2>

            <button
              type="button"
              className="modal__delete-button"
              onClick={handleDeleteClick}
            >
              Delete item
            </button>
          </div>

          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
