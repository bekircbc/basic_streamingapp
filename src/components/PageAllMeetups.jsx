import { useEffect, useState } from "react";
// const DummyData = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image: "../../public/images/meetup.jpg",
//     adress: "Meetupstreet5, 12345 Meetup City",
//     description:
//       "This is a first amazing meetup which you definitely should not miss.",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image: "../../public/images/meetup.jpg",
//     adress: "Meetupstreet5, 12345 Meetup City",
//     description:
//       "This is a second amazing meetup which you definitely should not miss.",
//   },
// ];

export async function PageAllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    fetch(
      "https://basic-streaming-app-default-rtdb.firebaseio.com/meetups.json"
    ).then((response) => {
      const data = await response.json();
      setLoadedMeetups(data);
      setIsLoading(false);
    });
    // .then((data) => {
    //   setIsLoading(false);
    //   setLoadedMeetups(data);
    // });
  }, []);

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
