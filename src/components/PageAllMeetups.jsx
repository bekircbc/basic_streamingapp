const DummyData = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "../../public/images/meetup.jpg",
    adresss: "Meetupstreet5, 12345 Meetup City",
    description:
      "This is a first amazing meetup which you definitely should not miss.",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "../../public/images/meetup.jpg",
    adresss: "Meetupstreet5, 12345 Meetup City",
    description:
      "This is a second amazing meetup which you definitely should not miss.",
  },
];

export function PageAllMeetups() {
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {DummyData.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
}
