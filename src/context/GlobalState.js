import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [],
};

// create context
export const GlobalContext = createContext(initialState);

//create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function deleteTransaction(id) {
    dispatch({
      payload: id,
      type: "DELETE_TRANSACTION",
    });
  }

  function addTransaction(transcation) {
    dispatch({
      payload: transcation,
      type: "ADD_TRANSACTION",
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
