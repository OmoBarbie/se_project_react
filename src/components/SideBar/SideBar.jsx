import "./SideBar.css";
import avatar from "../../assets/avatar.png";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function SideBar() {
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
    </aside>
  );
}

export default SideBar;
