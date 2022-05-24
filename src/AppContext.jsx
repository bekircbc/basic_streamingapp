import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const firebaseUrl =
  "https://basic-streaming-app-default-rtdb.firebaseio.com/meetups.json";

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // const [userFavorites, setUserFavorites] = useState([
  //   {
  //     id: "m1",
  //     title: "This is a first meetup",
  //     image: "../../public/images/meetup.jpg",
  //     adress: "Meetupstreet5, 12345 Meetup City",
  //     Description:
  //       "This is a first amazing meetup which you definitely should not miss.",
  //   },
  // ]);
  // const [isItemFavorite, setIsItemFavorite] = useState();
  // const [addRemoveFavorites, setAddRemoveFavorites] = useState();

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

  // function addFavoriteHandler(favoriteMeetup) {
  //   setUserFavorites(() => {
  //     return userFavorites.push(favoriteMeetup);
  //   });
  // }

  // function removeFavoriteHandler(meetupId) {
  //   setUserFavorites(() => {
  //     return userFavorites.filter((meetup) => meetup.id !== meetupId);
  //   });
  // }

  // function itemIsFavoriteHandler(meetupId) {
  //   setIsItemFavorite(() => {
  //     return userFavorites.some((meetup) => meetup.id === meetupId);
  //   });
  // }

  function toggleFavoriteStatusHandler(meetup) {
    meetup.isFavorite = !meetup.isFavorite;
    setLoadedMeetups([...loadedMeetups]);
    // const favoriteMeetup = userFavorites.find((m) => meetupId === m.id);
    // addFavoriteHandler(favoriteMeetup);
    // setAddRemoveFavorites("Remove from Favorites");
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        loadedMeetups,
        toggleFavoriteStatusHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
