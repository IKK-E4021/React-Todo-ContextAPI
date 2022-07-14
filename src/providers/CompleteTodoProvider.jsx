import React, { createContext, useState } from "react";

export const CompleteTodoContext = createContext({});

export const CompleteTodoProvider = (props) => {
  const { children } = props;
  const [completeTodo, setCompleteTodo] = useState([]);
  return (
    <CompleteTodoContext.Provider value={{ completeTodo, setCompleteTodo }}>
      {children}
    </CompleteTodoContext.Provider>
  );
};
