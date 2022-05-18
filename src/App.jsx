import "./App.scss";
import { Route } from "react-router-dom";

import { PageAllMeetups } from "./components/PageAllMeetups";
import { PageFavorites } from "./components/PageFavorites";
import { PageNewMeetup } from "./components/PageNewMeetup";

function App() {
  return (
    <div className="App">
      <h1>Video Film Streaming App</h1>
      <Route path="/" element={<PageAllMeetups />} />
      <Route path="/newmeetup" element={<PageNewMeetup />} />
      <Route path="/favorites" element={<PageFavorites />} />
    </div>
  );
}

export default App;
