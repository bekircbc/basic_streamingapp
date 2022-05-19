import "./App.scss";
import { Navigate, NavLink, Outlet, Route, Routes } from "react-router-dom";

import { PageAllMeetups } from "./components/PageAllMeetups";
import { PageFavorites } from "./components/PageFavorites";
import { PageNewMeetup } from "./components/PageNewMeetup";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="logo">React Meetups</h1>
        <nav>
          <span>
            <NavLink to="allmeetups">All Meetups</NavLink>
          </span>
          <span>
            <NavLink to="newmeetup">Add New Meetup</NavLink>
          </span>
          <span>
            <NavLink to="favorites">My Favorites</NavLink>
          </span>
        </nav>

        <Outlet />
      </div>
      <div>
        <Routes>
          <Route>
            <Route path="allmeetups" element={<PageAllMeetups />} />
            <Route path="newmeetup" element={<PageNewMeetup />} />
            <Route path="favorites" element={<PageFavorites />} />
            <Route path="/" element={<Navigate to="allmeetups" replace />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
