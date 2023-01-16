import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import logo from "../assets/images/logo.png";
import logout from "../assets/icons/logout.svg";
import hamberger from "../assets/icons/menu-burger.svg";

import "./Header.scss";
import { useContext } from "react";
import { AppContext } from "../context";
import { AuthContext } from "../AuthContext";

const Header = () => {
  const { navbarTarget, isNavbarOpen } = useContext(AppContext);
  const { logOutHandler } = useContext(AuthContext);

  const logOut = async () => {
    try {
      await logOutHandler();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav">
        <span>
          <NavLink to="/tasks">مهامي</NavLink>
        </span>
        <span>
          <NavLink to="/arkan-islam"> أركان اسلامي</NavLink>
        </span>
        <span>
          <NavLink to="/douaa">أدعيتي و أذكاري</NavLink>
        </span>
      </div>

      <div className="logout" onClick={logOut}>
        <p>مغادرة</p>
        <img src={logout} alt="logout-icon" />
      </div>

      <div className="hamberger-icon" onClick={navbarTarget}>
        <img src={hamberger} alt="berger-icon" />
      </div>
     
    </section>
  );
};

export default Header;
