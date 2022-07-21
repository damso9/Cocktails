import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cocktailInput, setCocktailInput] = useState("");
  

  const getInitialCocktails = async () => {
    try {
      const response = await fetch(url + "wine");
      const data = await response.json();
      // console.log(data.drinks);
      setIsLoading(false);
      setCocktails(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  const getNewCocktails = async () => {
    try {
      const response = await fetch(url + cocktailInput);
      const data = await response.json();
      // console.log(data.drinks);
      setIsLoading(false);
      setCocktails(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    getInitialCocktails();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getNewCocktails();
  }, [cocktailInput]);


  return (
    <AppContext.Provider
      value={{
        cocktails,
        setCocktailInput,
        isLoading,
        cocktailInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
