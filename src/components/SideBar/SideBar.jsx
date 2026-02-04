import "./SideBar.css";
import avatar from "../../assets/avatar.png";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={avatar} alt="User avatar" />
        <p className="sidebar__username">Terrance Tegegne</p>
      </div>
    </aside>
  );
}

export default SideBar;
