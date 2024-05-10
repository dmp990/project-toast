import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [shelf, setShelf] = React.useState([]);

  function handleDismiss(index) {
    setShelf((currentShelf) => {
      const copyShelf = JSON.parse(JSON.stringify(currentShelf));
      copyShelf.splice(index, 1);
      return copyShelf;
    });
  }

  return (
    <ToastContext.Provider value={{ shelf, setShelf, handleDismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
