import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav">
        <span>
          <Link to="/">مهامي</Link>
        </span>
        <span>
          <Link to="arkan-islam"> أركان اسلامي</Link>
        </span>
        <span>
          <Link to="douaa">أدعيتي و أذكاري</Link>
        </span>
      </div>
    </section>
  );
};

export default Header;
