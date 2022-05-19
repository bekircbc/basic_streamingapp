export function PageNewMeetup() {
  return (
    <section className="newMeetupPage">
      <h1>New Meetup Page</h1>
      <form className="formCard">
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" />

        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id="image" />

        <label htmlFor="address">Address</label>
        <input type="text" required id="address" />

        <label htmlFor="description">Meetup Description</label>
        <textarea id="description" required rows="5"></textarea>

        <button>Add Meetup</button>
      </form>
    </section>
  );
}
