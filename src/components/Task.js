import sadaka from "../assets/images/sadaka.png";
import trash from "../assets/icons/trash.svg";
import "./Task.scss";

const Task = () => {
  return (
    <div className="task">
      <div className="image">
        <img src={sadaka} alt="sadaka-img" />
      </div>
      <p>صدقة</p>

      <div className="icon">
        <img src={trash} alt="trash-icon" />
      </div>
    </div>
  );
};

export default Task;
