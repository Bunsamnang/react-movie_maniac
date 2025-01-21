import { Route, Routes } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList type={"popular"} title={"Popular 🔥"} />}
          />
          <Route
            path="/latest"
            element={<MovieList type={"upcoming"} title={"Latest 🥳"} />}
          />
          <Route
            path="/top_rated"
            element={<MovieList type={"top_rated"} title={"Top Rated ⭐"} />}
          />

          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
