import search from "../assets/icons/search.svg";
import user from "../assets/icons/user.svg";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="search-bloc">
        <input type="text" placeholder="ابحث ..." />
        <div className="icon">
          <img src={search} alt="icon-search" />
        </div>
      </div>

      <div className="user">
        <div className="icon">
          <img src={user} alt="user-icon" />
        </div>
        <p>
          <span className="user-name">User</span>
          <span>Manager</span>
        </p>
      </div>

      <div className="mode">
        <div className="icon">
          <img src={moon} alt="icon-mode" />
        </div>
      </div>
    </div>
  );
};

export default Search;
