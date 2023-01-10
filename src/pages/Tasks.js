import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useContext } from "react";
import { AppContext } from "../context";

import TaskState from "../components/TaskState";
import TasksList from "../components/TasksList";

import plus from "../assets/icons/plus.svg";

import "./Tasks.scss";

const Tasks = () => {
  const { isOpenListTasks, openListTask } = useContext(AppContext);
  return (
    <section className="tasks">
      <div className="btn" onClick={openListTask}>
        <span>أضف مهمة جديدة</span>
        <img src={plus} />
      </div>

      {isOpenListTasks && <TasksList />}

      <div className="states">

        <TaskState title="قائمة المهام" style="backlog" selectedTasks/>
        <TaskState title="في طور الإنجاز" style="in-progress" />
        <TaskState title="تم إنجازها" style="completed" />
      </div>
    </section>
  );
};

export default Tasks;
