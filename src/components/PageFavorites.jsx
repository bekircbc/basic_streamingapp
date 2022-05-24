import { useContext } from "react";
import { AppContext } from "../AppContext";

export function PageFavorites() {
  const { loadedMeetups, toggleFavoriteStatusHandler } = useContext(AppContext);
  const filteredMeetups = loadedMeetups.filter((m) => m.isFavorite);

  return (
    <div className="pageFavorites">
      <h1>My Favorites</h1>

      {filteredMeetups.length > 0 ? (
        <ul className="favoriteMeetups">
          {filteredMeetups.map((meetup) => {
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
                  <button onClick={() => toggleFavoriteStatusHandler(meetup)}>
                    Remove from Favorites
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div>No Favorites added to my favorites</div>
      )}
    </div>
  );
}
