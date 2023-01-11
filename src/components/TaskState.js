import "./TaskState.scss";
import Task from "./Task";
import { useContext } from "react";
import { AppContext } from "../context";

const TaskState = ({ title, style }) => {
  const { selectedTasks, inProgressTasks, doneTasks } = useContext(AppContext);

  return (
    <div className={`state ${style}`}>
      <div className="state-title">
        <h3>{title}</h3>
      </div>

      <div className="state-content">
        {style === "backlog" &&
          selectedTasks.map((item, index) => (
            <Task
              key={index}
              name={item.name}
              image={item.image}
              id={item.id}
              style={style}
            />
          ))}

        {style === "in-progress" &&
          inProgressTasks.map((item, index) => (
            <Task
              key={index}
              name={item.name}
              image={item.image}
              id={item.id}
              style={style}
            />
          ))}

        {style === "completed" &&
          doneTasks.map((item, index) => (
            <Task
              key={index}
              name={item.name}
              image={item.image}
              id={item.id}
              style={style}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskState;
