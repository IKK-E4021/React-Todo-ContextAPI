import React, { createContext, useState } from "react";

export const IncompleteTodoContext = createContext({});

export const IncompleteTodoProvider = (props) => {
  const { children } = props;
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  return (
    <IncompleteTodoContext.Provider
      value={{ incompleteTodo, setIncompleteTodo }}
    >
      {children}
    </IncompleteTodoContext.Provider>
  );
};
