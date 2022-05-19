import { useContext } from "react";
import { AppContext } from "../AppContext";

export function PageAllMeetups() {
  const { isLoading, loadedMeetups } = useContext(AppContext);
  console.log(loadedMeetups);
  return (
    <section className="allMeetupsPage">
      <h1>All Meetups</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="allMeetups">
          {loadedMeetups.map((meetup, index) => {
            return (
              <li key="index">
                <div>
                  <img src={meetup.image} alt="" />
                </div>
                <div>
                  <h3>{meetup.title}</h3>
                  <address>{meetup.adress}</address>
                  <p>{meetup.description}</p>
                </div>
                <div>
                  <button>To Favorites</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
