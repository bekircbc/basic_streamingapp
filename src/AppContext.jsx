import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

const firebaseUrl =
  "https://basic-streaming-app-default-rtdb.firebaseio.com/meetups.json";

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    (async () => {
      setLoadedMeetups((await axios.get(firebaseUrl)).data);
    })();
    setIsLoading(false);
    setLoadedMeetups(data);
    console.log(loadedMeetups);
  }, []);

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
