import close from "../assets/icons/close.svg";

import "./TasksList.scss";
import Task from "./Task";
import { useContext } from "react";
import { AppContext } from "../context";

const TasksList = () => {
  const { closeListTask } = useContext(AppContext);
  return (
    <div className="task-list">
      <h3> المهام المتاحة </h3>

      <div className="icon-close" onClick={closeListTask}>
        <img src={close} alt="icon-close" />
      </div>

      <div className="tasks">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
};

export default TasksList;
