import "./Header.css";
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="WTWR logo" />

      <p className="header__date-and-location">DATE, LOCATION</p>

      <button className="header__add-clothes-btn">+ Add Clothes</button>

      <div className="header__user-container">
        <p className="username">Terrance Tegegne</p>
        <img src={avatar} alt="Terrance Tegegne" className="username__avatar" />
      </div>
    </header>
  );
};

export default Header;
