import "./TaskState.scss";
import Task from "./Task";
import { useContext } from "react";
import { AppContext } from "../context";

const TaskState = ({ title, style }) => {
  const { selectedTasks } = useContext(AppContext);

  return (
    <div className={`state ${style}`}>
      <div className="state-title">
        <h3>{title}</h3>
      </div>

      <div className="state-content">
        {style === "backlog" &&
          selectedTasks.map((item) => (
            <Task name={item.name} image={item.image} id={item.id} />
          ))}
      </div>
    </div>
  );
};

export default TaskState;
