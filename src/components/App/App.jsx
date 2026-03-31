import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "./App.css";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Profile from "../Profile/Profile.jsx";
import Footer from "../Footer/Footer.jsx";
import AddItemModal from "../AddItemModal/AddItemModal.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";

import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { defaultCoordinates, APIkey } from "../../utils/constants.js";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { getItems, addItem, deleteItem } from "../../utils/api.js";
import * as auth from "../../utils/auth.js";

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

  const navigate = useNavigate();

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

  const handleLogin = ({ email, password }) => {
    auth
      .authorize({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return auth.checkToken(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeAllModals();
        navigate("/profile");
      })
      .catch(console.error);
  };

  const handleRegister = ({ name, avatar, email, password }) => {
    auth
      .register({ name, avatar, email, password })
      .then(() => {
        return auth.authorize({ email, password });
      })
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        return auth.checkToken(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        closeAllModals();
        navigate("/profile");
      })
      .catch(console.error);
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  useEffect(() => {
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

          getWeather(defaultCoordinates, APIkey)
            .then((data) => setWeatherData(filterWeatherData(data)))
            .catch(console.error);
        },
      );
    } else {
      console.warn("Geolocation not supported, using default coordinates");

      getWeather(defaultCoordinates, APIkey)
        .then((data) => setWeatherData(filterWeatherData(data)))
        .catch(console.error);
    }
  }, []);

  useEffect(() => {
    getItems().then(setClothingItems).catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) return;

    auth
      .checkToken(token)
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
      })
      .catch(console.error);
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
              isLoggedIn={isLoggedIn}
              onSignOut={handleSignOut}
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
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      clothingItems={clothingItems}
                      onCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                    />
                  </ProtectedRoute>
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
