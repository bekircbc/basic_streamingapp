import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const firebaseUrl =
  "https://basic-streaming-app-default-rtdb.firebaseio.com/meetups.json";

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const [userFavorites, setUserFavorites] = useState([]);
  const [isItemFavorite, setIsItemFavorite] = useState();

  useEffect(() => {
    (async () => {
      const firebaseObj = (await axios.get(firebaseUrl)).data;
      const _loadedMeetups = Object.entries(firebaseObj).map(
        (entry) => entry[1]
      );
      setLoadedMeetups(_loadedMeetups);
      setIsLoading(false);
    })();
  }, []);

  const _userFavorites = userFavorites;

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites(() => {
      return _userFavorites.push(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites(() => {
      return _userFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    setIsItemFavorite(() => {
      return _userFavorites.some((meetup) => meetup.id === meetupId);
    });
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isItemFavorite,
        setIsItemFavorite,
        loadedMeetups,
        userFavorites,
        addFavoriteHandler,
        removeFavoriteHandler,
        itemIsFavoriteHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
