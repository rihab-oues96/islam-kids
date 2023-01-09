import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpenListTasks, setIsOpenListTasks] = useState(false);

  const openListTask = () => {
    setIsOpenListTasks(true);
  };
  const closeListTask = () => {
    setIsOpenListTasks(false);
  };
  return (
    <AppContext.Provider
      value={{ isOpenListTasks, openListTask, closeListTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
