const DummyData = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "../../public/images/meetup.jpg",
    adress: "Meetupstreet5, 12345 Meetup City",
    description:
      "This is a first amazing meetup which you definitely should not miss.",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "../../public/images/meetup.jpg",
    adress: "Meetupstreet5, 12345 Meetup City",
    description:
      "This is a second amazing meetup which you definitely should not miss.",
  },
];

export function PageAllMeetups() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul className="allMeetups">
        {DummyData.map((meetup) => {
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
                <button>To Favorites</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
