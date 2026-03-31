import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { defaultCoordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { getItems, addItem, deleteItem } from "../../utils/api.js";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

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
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    // Get user's location and fetch weather
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          getWeather(coordinates, APIkey)
            .then((data) => setWeatherData(filterWeatherData(data)))
            .catch(console.error);
        },
        (error) => {
          console.warn("Geolocation failed, using default coordinates:", error);
          // Fall back to default coordinates
          getWeather(defaultCoordinates, APIkey)
            .then((data) => setWeatherData(filterWeatherData(data)))
            .catch(console.error);
        },
      );
    } else {
      console.warn("Geolocation not supported, using default coordinates");
      // Geolocation not supported, use default
      getWeather(defaultCoordinates, APIkey)
        .then((data) => setWeatherData(filterWeatherData(data)))
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    getItems().then(setClothingItems).catch(console.error);
  }, []);

  const handleAddItemSubmit = (values, resetForm) => {
    const newItem = {
      name: values.name,
      imageUrl: values.imageUrl,
      weather: values.weather.toLowerCase(),
    };

    addItem(newItem)
      .then((createdItem) => {
        setClothingItems((prev) => [createdItem, ...prev]);
        resetForm();
        closeAllModals();
      })
      .catch(console.error);
  };

  const handleDeleteItem = (item) => {
    const itemId = item?.id ?? item?._id;

    if (!itemId) {
      console.error("Delete failed: item has no id/_id", item);
      return;
    }

    deleteItem(itemId)
      .then(() => {
        setClothingItems((prev) =>
          prev.filter((i) => (i.id ?? i._id) !== itemId),
        );
        closeAllModals();
      })
      .catch(console.error);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              passedUsername={"Tayo"}
            />

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

          <AddItemModal
            onCloseModal={closeAllModals}
            onAddItem={handleAddItemSubmit}
            isOpen={activeModal === "add-garment"}
          />

          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeAllModals}
            onDeleteCard={handleDeleteItem}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
