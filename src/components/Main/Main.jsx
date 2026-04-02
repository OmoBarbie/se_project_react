import { useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";

const Main = ({
  weatherData,
  clothingItems,
  onCardClick,
  onCardLike,
  isLoggedIn,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  if (!weatherData) return null;

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />

      <section className="main__clothes">
        <div className="main__info">
          <div className="main__description-container">
            <p className="main__description">
              Today is {Math.round(weatherData.temp[currentTemperatureUnit])}°
              {currentTemperatureUnit} and it is {weatherData.type}
            </p>

            <p className="main__description_slash"> / </p>

            <p className="main__description">You may want to wear:</p>
          </div>
        </div>

        <ul className="main__items">
          {clothingItems
            .filter((item) => item.weather === weatherData.type)
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                isLoggedIn={isLoggedIn}
              />
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
