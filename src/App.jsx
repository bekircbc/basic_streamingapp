import "./App.scss";
import { Route, Switch } from "react-router-dom";

import { PageAllMeetups } from "./components/PageAllMeetups";
import { PageFavorites } from "./components/PageFavorites";
import { PageNewMeetup } from "./components/PageNewMeetup";
import { MainNavigation } from "./components/layout/MainNavigation";

function App() {
  return (
    <div className="App">
      <h1>Video Film Streaming App</h1>
      <MainNavigation />
      <Switch>
        <Route path="/" element={<PageAllMeetups />} />
        <Route path="/newmeetup" element={<PageNewMeetup />} />
        <Route path="/favorites" element={<PageFavorites />} />
      </Switch>
    </div>
  );
}

export default App;
