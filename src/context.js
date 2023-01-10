import React, { useEffect, useState } from "react";

import { Tasks } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpenListTasks, setIsOpenListTasks] = useState(false);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [videoUrl, setVideoUrl] = useState();

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

  const addNewTask = (id) => {
    const SelectedTask = Tasks.find((item) => item.id === id);
    setSelectedTasks([...selectedTasks, SelectedTask]);
  };

  const deleteTask = (id) => {
    const newTaskList = selectedTasks.filter((item) => item.id !== id);
    setSelectedTasks(newTaskList);
  };

  return (
    <AppContext.Provider
      value={{
        isOpenListTasks,
        selectedTasks,
        isModalOpen,
        openListTask,
        closeListTask,
        addNewTask,
        deleteTask,
        openModal,
        closeModal,
        videoUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
