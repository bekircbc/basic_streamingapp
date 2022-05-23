import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useState } from "react";

export function PageAllMeetups() {
  const {
    isLoading,
    loadedMeetups,
    itemIsFavoriteHandler,
    addFavoriteHandler,
  } = useContext(AppContext);

  const [isItemFavorite, setIsItemFavorite] = useState(false);

  function toggleFavoriteStatusHandler(meetupId) {
    setIsItemFavorite(itemIsFavoriteHandler(meetupId));
    isItemFavorite === false && addFavoriteHandler(meetupId);
  }

  return (
    <section className="allMeetupsPage">
      <h1>All Meetups</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="allMeetups">
          {loadedMeetups.map((meetup) => {
            return (
              <li key={meetup.id}>
                <div>
                  <img src={meetup.image} alt="" />
                </div>
                <div>
                  <h3>{meetup.title}</h3>
                  <address>{meetup.adress}</address>
                  <p>{meetup.description}</p>
                </div>
                <div>
                  <button onClick={toggleFavoriteStatusHandler(meetup.id)}>
                    {_itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
