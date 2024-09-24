import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <MovieList type={"upcoming"} title={"Latest 🥳"} />
      <MovieList type={"popular"} title={"Popular 🔥"} />
      <MovieList type={"top_rated"} title={"Top Rated ⭐"} />
    </div>
  );
};

export default App;
