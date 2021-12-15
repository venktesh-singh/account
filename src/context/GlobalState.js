import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  amounts: [
        {
            id: 1,
            name: "Rohit",
            designation: "Magento Develoer",
            rupee: 10
        },
        {
            id: 2,
            name: "Ajit",
            designation: "PHP Developer",
            rupee: 30
        },
        {
          id: 3,
          name: "Pradeep",
          designation: "ReactJS And NodeJS Developer",
          rupee: 50
      }  
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  function addAmount(amount) {
    dispatch({
      type: "ADD_AMOUNT",
      payload: amount
    });
  }

  function editAmount(amount) {
    dispatch({
      type: "EDIT_AMOUNT",
      payload: amount
    });
  }

  function removeAmount(id) {
    dispatch({
      type: "REMOVE_AMOUNT",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        amounts: state.amounts,
        addAmount,
        editAmount,
        removeAmount
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};