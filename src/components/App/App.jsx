import { useState, useEffect } from "react";
import "./App.css";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
// import Footer from "../Footer/Footer.jsx";
// import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
// import ItemModal from "../ItemModal/ItemModal.jsx";

function App() {
  const [weatherData, setweatherData] = useState({ type: "cold" });
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main weatherData={weatherData} />
        {/* <Footer /> */}
        {/*<ItemModal /> */}
      </div>
      <ModalWithForm title="New garment" buttonText="Add garment">
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>

        <label htmlFor="ImageUrl" className="modal__lable">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="ImageUrl"
            placeholder="Image URL"
          />
        </label>

        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="Hot" className="modal__label modal__label_type_radio">
            <input type="radio" id="Hot" className="modal__radio-input" />
          </label>
          <label
            htmlFor="Warm"
            className="modal__label modal__label_type_radio"
          >
            <input type="radio" id="Warm" className="modal__radio-input" />
          </label>
          <label
            htmlFor="Cold"
            className="modal__label modal__label_type_radio"
          >
            <input type="radio" id="Cold" className="modal__radio-input" />
          </label>
        </fieldset>
      </ModalWithForm>
    </div>
  );
}

export default App;
