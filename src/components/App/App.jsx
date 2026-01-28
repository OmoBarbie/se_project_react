import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { coordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { getItems, addItem, deleteItem } from "../../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    isDay: true,
    condition: "",
  });

  const [clothingItems, setClothingItems] = useState([]);

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");
  const [isValid, setIsValid] = useState(false);

  const closeAllModals = () => {
    setActiveModal("");
    setSelectedCard(null);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit((prev) => (prev === "F" ? "C" : "F"));
  };

  useEffect(() => {
    const isNameValid = name.trim().length > 0;
    const isImageValid = imageUrl.trim().length > 0;
    const isWeatherValid = weather !== "";

    setIsValid(isNameValid && isImageValid && isWeatherValid);
  }, [name, imageUrl, weather]);

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => setWeatherData(filterWeatherData(data)))
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems().then(setClothingItems).catch(console.error);
  }, []);

  const handleAddItemSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name,
      imageUrl,
      weather: weather.toLowerCase(),
    };

    addItem(newItem)
      .then((createdItem) => {
        setClothingItems((prev) => [createdItem, ...prev]);

        setName("");
        setImageUrl("");
        setWeather("");
        closeAllModals();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (item) => {
    deleteItem(item._id)
      .then(() => {
        setClothingItems((prev) => prev.filter((i) => i._id !== item._id));
        closeAllModals();
      })
      .catch(console.error);
  };

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  handleAddClick={handleAddClick}
                />
              }
            />
          </Routes>

          <Footer />
        </div>

        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          onClose={closeAllModals}
          onDeleteCard={handleDeleteItem}
        />

        <ModalWithForm
          title="New garment"
          buttonText="Add garment"
          activeModal={activeModal}
          onClose={closeAllModals}
          validInput={isValid}
          onSubmit={handleAddItemSubmit}
        >
          <label htmlFor="name" className="modal__label">
            Name
            <input
              type="text"
              className="modal__input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </label>

          <label htmlFor="imageUrl" className="modal__label">
            Image
            <input
              type="url"
              className="modal__input"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL"
              required
            />
          </label>

          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type:</legend>

            {["hot", "warm", "cold"].map((type) => (
              <label key={type} className="modal__label_type_radio">
                <input
                  required
                  type="radio"
                  name="weather"
                  value={type}
                  checked={weather === type}
                  onChange={(e) => setWeather(e.target.value)}
                />
                {type}
              </label>
            ))}
          </fieldset>
        </ModalWithForm>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
