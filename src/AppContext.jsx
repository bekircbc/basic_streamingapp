import { createContext, useState, useEffect } from "react";
import axios from "axios";

// import data from "./components/data/data.json";

export const AppContext = createContext();

const firebaseUrl =
  "https://basic-streaming-app-default-rtdb.firebaseio.com/meetups.json";

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    (async () => {
      const firebaseObj = (await axios.get(firebaseUrl)).data;
      const _loadedMeetups = Object.entries(firebaseObj).map(
        (entry) => entry[1]
      );
      console.log(_loadedMeetups);
      setLoadedMeetups(_loadedMeetups);
      setIsLoading(false);
    })();
  }, []);

  function FavoritesContext() {
    const [userFavorites, setUserFavorites] = useState([]);
    function addFavoriteHandler() {}
    function removeFavoriteHandler() {}
    function itemIsFavoriteHandler() {}

    const context = {
      favorites: userFavorites,
      totalFavorites: userFavorites.length,
    };
  }
  //   setTimeout(() => {
  //     setIsLoading(false);
  //     setLoadedMeetups(data);
  //   }, 2000);
  // }, [loadedMeetups]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        loadedMeetups,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
