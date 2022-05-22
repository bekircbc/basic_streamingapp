import { useContext } from "react";
import { AppContext } from "../AppContext";

export function PageFavorites() {
  const { context } = useContext(AppContext);
  return (
    <div className="pageFavorites">
      <h1>Favorites Page</h1>
      {context.totalFavorites !== 0 ? (
        <ul className="favoriteMeetups">
          {context.userFavorites.map((meetup) => {
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
                  <button onClick={removeFavoriteHandler(meetup.id)}>
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
