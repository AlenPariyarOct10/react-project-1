import React from "react";


const AppContext = React.createContext();
export const useAppContext = () => React.useContext(AppContext);
export const AppContextProvider = ({ children }) => {
  const [appState, setAppState] = React.useState({
    data: [],
    cart: [],
  });

  const updateState = (newState) => {
    setAppState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  return (
    <AppContext.Provider value={{ appState, updateState }}>
      {children}
    </AppContext.Provider>
  );
};
