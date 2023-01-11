import React, { useState } from "react";

import { Tasks } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState(Tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isOpenListTasks, setIsOpenListTasks] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [videoUrl, setVideoUrl] = useState();
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const openListTask = () => {
    setIsOpenListTasks(true);
  };

  const closeListTask = () => {
    setIsOpenListTasks(false);
  };

  const openModal = (video) => {
    setIsModalOpen(true);
    setVideoUrl(video);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const navbarTarget = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const addNewTask = (id) => {
    const SelectedTask = tasksList.find((item) => item.id === id);
    setSelectedTasks([...selectedTasks, SelectedTask]);
    const newTaskList = tasksList.filter((item) => item.id !== id);
    setTasksList(newTaskList);
  };

  const InProgressTaskHandler = (id) => {
    const inProgressTask = selectedTasks.find((item) => item.id === id);
    setInProgressTasks([...inProgressTasks, inProgressTask]);
    const newSelectedTasks = selectedTasks.filter((item) => item.id !== id);
    setSelectedTasks(newSelectedTasks);
  };

  const doneTaskHandler = (id) => {
    const doneTask = inProgressTasks.find((item) => item.id === id);
    setDoneTasks([...doneTasks, doneTask]);
    const newInProgressTasks = inProgressTasks.filter((item) => item.id !== id);
    setInProgressTasks(newInProgressTasks);
  };

  const deleteTask = (id, style) => {
    if (style === "backlog") {
      const newTaskList = selectedTasks.filter((item) => item.id !== id);
      setSelectedTasks(newTaskList);
    }
    if (style === "in-progress") {
      const newInProgressTasks = inProgressTasks.filter(
        (item) => item.id !== id
      );
      setInProgressTasks(newInProgressTasks);
    }
    if (style === "completed") {
      const newDoneTasks = doneTasks.filter((item) => item.id !== id);
      setDoneTasks(newDoneTasks);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isOpenListTasks,
        selectedTasks,
        isModalOpen,
        isNavbarOpen,
        tasksList,
        videoUrl,
        inProgressTasks,
        doneTasks,
        openListTask,
        closeListTask,
        addNewTask,
        deleteTask,
        openModal,
        closeModal,
        navbarTarget,
        InProgressTaskHandler,
        doneTaskHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
