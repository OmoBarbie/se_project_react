import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="User avatar" />
      <p className="sidebar__username">Terrance Tegegne</p>
    </div>
  );
}

export default SideBar;
