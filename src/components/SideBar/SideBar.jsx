import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar({ handleEditProfileClick, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img
          className="sidebar__avatar"
          src={currentUser.avatar || avatar}
          alt="User avatar"
        />
        <p className="sidebar__username">{currentUser.name || "Anonymous"}</p>
      </div>

      <button
        type="button"
        className="sidebar__button"
        onClick={handleEditProfileClick}
      >
        Change profile data
      </button>

      <button type="button" className="sidebar__button" onClick={onSignOut}>
        Sign out
      </button>
    </aside>
  );
}

export default SideBar;
