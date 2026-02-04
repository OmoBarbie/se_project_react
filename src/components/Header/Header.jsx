import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import "./Navigation.css";
import logoPath from "../../images/logo.svg";
import avatarDefault from "../../assets/avatar.png";

const Header = ({ weatherData, handleAddClick, paased_username }) => {
  if (!weatherData) return null;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const username = paased_username || "";
  const avatar = avatarDefault;

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img src={logoPath} alt="WTWR Logo" className="header__logo" />
        </Link>

        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <nav className="navigation">
        <ul className="navigation__container">
          <ToggleSwitch />

          <li>
            <button onClick={handleAddClick} className="navigation__button">
              + Add clothes
            </button>
          </li>

          <li>
            <Link to="/profile" className="navigation__link">
              {username}

              {avatar ? (
                <img
                  className="navigation__user"
                  src={avatar}
                  alt="user avatar"
                />
              ) : (
                <span className="navigation__user navigation__user_type_none">
                  {username?.toUpperCase().charAt(0) || ""}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
