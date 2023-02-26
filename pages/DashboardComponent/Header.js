import React, { useState } from "react";
import "./Header.scss";
import Button from "../../component/button/Button";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import BackDrop from "../../component/backdrop/BackDrop";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {userName} from '../../App'
import profileImg from '../../assets/feelings/happy.jpg'
function Header(props) {
  const [profile, setProfile] = useState(false);
  const { handleSidebar, toggleSidebar } = props;

  const onProfileHandler = () => {
    setProfile(!profile);
  };
  const closeHanlder = () => {
    setProfile(false);
  };

  const name = useContext(userName);
  console.log(name)
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div className="nav-toggle">
          <div className="toggle" onClick={handleSidebar}>
            {toggleSidebar == true ? <MenuIcon /> : <CloseIcon />}
          </div>
          <div className="username">
            <h4>Welcome Back, &nbsp;</h4><h3>{name}</h3>
          </div>
          <ul className="toggle">
            <div className="marker"></div>
            <li className="bell-notification">
              <NotificationsIcon />
            </li>
            <li onClick={onProfileHandler}>
              <AccountCircleIcon />
            </li>
            <li>
              <img src={profileImg} className="profile-img" />
            </li>
          </ul>
        </div>
      </nav>
      {profile && <BackDrop onClick={closeHanlder} />}
      {profile && (
        <div className="profile-menu">
          <ul>
            <li>
              <Link to="/profile"> Profile</Link>
            </li>
            <li>Profile</li>
            <li>Log out</li>
          </ul>
        </div>
      )}
    </>
  );
}
export default Header;
