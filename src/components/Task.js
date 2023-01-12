import plus from "../assets/icons/plus.svg";
import done from "../assets/icons/done.svg";
import close from "../assets/icons/close.svg";
import pending from "../assets/icons/pending.svg";
import { AppContext } from "../context";
import { useContext } from "react";
import "./Task.scss";

const Task = ({ name, image, id, style }) => {
  const { addNewTask, InProgressTaskHandler, doneTaskHandler, deleteTask } =
    useContext(AppContext);
  console.log(style, "from task");
  return (
    <div className="task">
      {(style === "backlog" ||
        style === "in-progress" ||
        style === "completed") && (
        <div className="icon-close" onClick={() => deleteTask(id, style)}>
          {console.log(style, "from delete icon")}
          <img src={close} alt="icon-close" />
        </div>
      )}
      <div className="task-content">
        <div className="image">
          <img src={image} alt="sadaka-img" />
        </div>
        <p>{name}</p>
      </div>

      <div className="icon">
        {style === "task-list" && (
          <img
            src={plus}
            alt="plus-icon"
            className="task-list-icon"
            onClick={() => addNewTask(id)}
          />
        )}
        {style === "backlog" && (
          <img
            src={pending}
            alt="pending-icon"
            className="pending-icon"
            onClick={() => InProgressTaskHandler(id)}
          />
        )}
        {style === "in-progress" && (
          <img
            src={done}
            alt="done-icon"
            className="done-icon"
            onClick={() => doneTaskHandler(id)}
          />
        )}
      </div>
    </div>
  );
};

export default Task;
