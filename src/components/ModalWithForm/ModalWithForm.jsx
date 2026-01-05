import "./ModalWithForm.css";

function ModalWithForm() {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2 className="modal__title">New garment</h2>
        <button type="button" className="modal__close">
          CLOSE
        </button>
        <form className="modal__form">
          <lable htmlfor="name" className="modal__lable">
            Name{" "}
            <input
              type="text"
              className="modal__input"
              id="name"
              placeholder="Name"
            />
          </lable>
          <lable htmlfor="ImageUrl" className="modal__lable">
            Image{" "}
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              placeholder="Image URL"
            />
          </lable>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>
            <label
              htmlfor="Hot"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" classname="modal__radio-input" />
            </label>
            <label
              htmlfor="Warm"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" classname="modal__radio-input" />
            </label>
            <label
              htmlfor="Cold"
              className="modal__label modal__label_type_radio"
            >
              <input type="radio" classname="modal__radio-input" />
            </label>
          </fieldset>
          <button type="submit" className="modal__submit">
            Add garment
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
