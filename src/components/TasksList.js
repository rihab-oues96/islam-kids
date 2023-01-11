import { useContext } from "react";
import { AppContext } from "../context";

import close from "../assets/icons/close.svg";
import Task from "./Task";
import "./TasksList.scss";

const TasksList = () => {
  const { closeListTask, tasksList } = useContext(AppContext);
  return (
    <div className="task-list">
      <div className="task-list-heading">
        <h3> المهام المتاحة </h3>

        <div className="icon-close" onClick={closeListTask}>
          <img src={close} alt="icon-close" />
        </div>
      </div>

      <div className="tasks">
        {tasksList.map((item, index) => (
          <Task key={index} id={item.id} {...item} style="task-list" />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
