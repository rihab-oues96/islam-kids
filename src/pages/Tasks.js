import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";

import TaskState from "../components/TaskState";
import TasksList from "../components/TasksList";

import plus from "../assets/icons/plus.svg";

import "./Tasks.scss";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

import ReactConfetti from "react-confetti";
import { useSearchParams } from "react-router-dom";

const Tasks = () => {
  const { isOpenListTasks, openListTask, closeListTask, confetti } =
    useContext(AppContext);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const DetectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    useEffect(() => {
      window.addEventListener("resize", DetectSize);
      return () => {
        window.removeEventListener("resize", DetectSize);
      };
    }, [windowDimension]);
  };
  return (
    <section className="tasks">
      <Header />
      <div className="btn" onClick={openListTask}>
        <span>أضف مهمة جديدة</span>
        <img src={plus} />
      </div>

      {isOpenListTasks && <TasksList />}
      {confetti && (
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
        />
      )}

      <DragDropContext>
        <div className="states characters" onClick={closeListTask}>
          <TaskState title="قائمة المهام" style="backlog" />
          <TaskState title="في طور الإنجاز " style="in-progress" />
          <TaskState title="تم إنجازها " style="completed" />
        </div>
      </DragDropContext>
      <Footer />
    </section>
  );
};

export default Tasks;
