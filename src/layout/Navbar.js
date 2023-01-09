import home from "../assets/icons/home.svg";
import task from "../assets/icons/task.svg";
import users from "../assets/icons/user.svg";
import logout from "../assets/icons/logout.svg";

import "./Navbar.scss";
const Navbar = () => {
  return (
    <section className="navbar">
      <div className="logo"></div>

      <div className="nav">
        <div className="page-name">
          <div className="icon">
            <img src={home} alt="icon-home" />
          </div>
          <p>Home </p>
        </div>

        <div className="page-name">
          <div className="icon">
            <img src={task} alt="icon-task" />
          </div>
          <p>Task </p>
        </div>

        <div className="page-name">
          <div className="icon">
            <img src={users} alt="icon-users" />
          </div>
          <p>Team </p>
        </div>
      </div>

      <div className="logout">
        <div className="icon">
          <img src={logout} alt="icon-logout" />
        </div>
        <p>Logout</p>
      </div>
    </section>
  );
};

export default Navbar;
