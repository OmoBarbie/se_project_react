import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="WTWR logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button onClick={handleAddClick} className="header__add-clothes-btn">
        + Add Clothes
      </button>

      <Link to="/profile" className="header__user-container">
        <p className="header__username">Terrance Tegegne</p>
        <img src={avatar} alt="Terrance Tegegne" className="username__avatar" />
      </Link>
    </header>
  );
}

export default Header;
