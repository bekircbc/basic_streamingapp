import { useContext } from "react";
import { AppContext } from "../AppContext";

export function PageFavorites() {
  const { context } = useContext(AppContext);
  return (
    <div>
      <h1>Favorites Page</h1>
      {Object.value(context[1]) !== 0 ? (
        <ul className="allMeetups">
          {context.map((meetup) => {
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
                  <button onClick={}>To Favorites</button>
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
