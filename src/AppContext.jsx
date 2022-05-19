import { createContext, useState, useEffect } from "react";
// import axios from "axios";

import data from "./components/data/data.json";

export const AppContext = createContext();

const firebaseUrl =
  "https://basic-streaming-app-default-rtdb.firebaseio.com/meetups.json";

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // (async () => {
    //   const firebaseMeetups = (await axios.get(firebaseUrl)).data;
    //   const meetupArray = [];

    //   // setLoadedMeetups((await axios.get(firebaseUrl)).data);
    //   setLoadedMeetups(meetupArray);
    //   setIsLoading(false);
    // })();
    setTimeout(() => {
      setIsLoading(false);
      setLoadedMeetups(data);
    }, 2000);
  }, [loadedMeetups]);

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
