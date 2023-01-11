import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import logout from "../assets/icons/logout.svg";
import hamberger from "../assets/icons/menu-burger.svg";

import "./Header.scss";
import { useContext } from "react";
import { AppContext } from "../context";

const Header = () => {
  const { navbarTarget } = useContext(AppContext);
  return (
    <section className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav">
        <span>
          <NavLink to="/">مهامي</NavLink>
        </span>
        <span>
          <NavLink to="arkan-islam"> أركان اسلامي</NavLink>
        </span>
        <span>
          <NavLink to="douaa">أدعيتي و أذكاري</NavLink>
        </span>
      </div>

      <div className="logout">
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
