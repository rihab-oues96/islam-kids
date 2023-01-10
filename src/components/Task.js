import sadaka from "../assets/images/sadaka.png";
import plus from "../assets/icons/plus.svg";
import "./Task.scss";
import { AppContext } from "../context";
import { useContext } from "react";

const Task = ({ name, image, options, id }) => {
  const { addNewTask } = useContext(AppContext);
  return (
    <div className="task">
      <div className="task-content">
        <div className="image">
          <img src={image} alt="sadaka-img" />
        </div>
        <p>{name}</p>
      </div>

      <div className="icon" onClick={() => addNewTask(id)}>
        <img src={plus} alt="trash-icon" />
      </div>
    </div>
  );
};

export default Task;
