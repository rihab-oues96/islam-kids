import { useContext } from "react";
import { AppContext } from "../context";
import { Tasks } from "../data";
import close from "../assets/icons/close.svg";
import Task from "./Task";
import "./TasksList.scss";

const maham = Tasks;

const TasksList = () => {
  const { closeListTask } = useContext(AppContext);
  return (
    <div className="task-list">
      <div className="task-list-heading">
        <h3> المهام المتاحة </h3>

        <div className="icon-close" onClick={closeListTask}>
          <img src={close} alt="icon-close" />
        </div>
      </div>

      <div className="tasks">
        {maham.map((item) => (
          <Task id={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TasksList;
