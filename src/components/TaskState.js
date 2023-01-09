import "./TaskState.scss";
import Task from "./Task";

const TaskState = ({ title, style }) => {
  return (
    <div className={`state ${style}`}>
      <div className="state-title">
        <h3>{title}</h3>
      </div>
      <Task />
    </div>
  );
};

export default TaskState;
