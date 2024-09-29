import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to={"/popular"} replace />} />

          <Route
            path="/popular"
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
        </Routes>
      </main>
    </div>
  );
};

export default App;
