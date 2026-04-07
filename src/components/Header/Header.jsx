import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.css";
import "./Navigation.css";
import logoPath from "../../images/logo.svg";
import avatarDefault from "../../assets/avatar.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  weatherData,
  handleAddClick,
  handleRegisterClick,
  handleLoginClick,
  isLoggedIn,
  onSignOut,
  passedUsername,
}) => {
  if (!weatherData) return null;
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

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

          {isLoggedIn ? (
            <>
              <li>
                <button onClick={handleAddClick} className="navigation__button">
                  + Add clothes
                </button>
              </li>

              <li>
                <Link to="/profile" className="navigation__link">
                  {currentUser.name || "Anonymous"}

                  {currentUser ? (
                    <img
                      className="navigation__user"
                      src={currentUser.avatar || avatar}
                      alt="user avatar"
                    />
                  ) : (
                    <span className="navigation__user navigation__user_type_none">
                      {currentUser.name?.toUpperCase().charAt(0) || ""}
                    </span>
                  )}
                </Link>
              </li>

              <li>
                <button onClick={onSignOut} className="navigation__button">
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={handleRegisterClick}
                  className="navigation__button"
                >
                  Sign Up
                </button>
              </li>

              <li>
                <button
                  onClick={handleLoginClick}
                  className="navigation__button"
                >
                  Log In
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
