import { useContext } from "react";
import { Link } from "react-router-dom";
import logout from "../assets/icons/logout.svg";
import { AppContext } from "../context";

import "./Navbar.scss";
const Navbar = () => {
  const { isNavbarOpen } = useContext(AppContext);
  return (
    <>
      {isNavbarOpen && (
        <div className="navbar">
          <div className="nav">
            <span>
              <Link to="tasks">مهامي</Link>
            </span>
            <span>
              <Link to="arkan-islam"> أركان اسلامي</Link>
            </span>
            <span>
              <Link to="douaa">أدعيتي و أذكاري</Link>
            </span>
          </div>

          <div className="logout">
            <p>مغادرة</p>
            <img src={logout} alt="logout-icon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
