import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useContext } from "react";
import { AppContext } from "../context";

import TaskState from "../components/TaskState";
import TasksList from "../components/TasksList";

import plus from "../assets/icons/plus.svg";

import "./Tasks.scss";

const Tasks = () => {
  const { isOpenListTasks, openListTask, closeListTask } =
    useContext(AppContext);
  return (
    <section className="tasks">
      <div className="btn" onClick={openListTask}>
        <span>أضف مهمة جديدة</span>
        <img src={plus} />
      </div>

      {isOpenListTasks && <TasksList />}

      <DragDropContext>
        <div className="states characters" onClick={closeListTask}>
          <TaskState title="قائمة المهام" style="backlog" />
          <TaskState title="في طور الإنجاز " style="in-progress" />
          <TaskState title="تم إنجازها " style="completed" />
        </div>
      </DragDropContext>
    </section>
  );
};

export default Tasks;
