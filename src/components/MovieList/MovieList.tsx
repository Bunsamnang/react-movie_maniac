import { useEffect, useState } from "react";
import _ from "lodash";

import MovieCard from "./MovieCard";
import "./MovieList.css";
import FilterGroup from "./FilterGroup";

interface MovieType {
  type: string;
  title: string;
}

interface Movie {
  id: number;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  poster_path: string;
}

const MovieList = ({ type, title }: MovieType) => {
  // *Important note*
  // Always create two arrays preserving the same data, keep one as the original
  // and the other one for filtering purpose
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setfilteredMovies] = useState<Movie[]>([]);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=e861f02026cd129cf14d67a498015126`
      );
      const data = await response.json();
      setMovies(data.results);
      setfilteredMovies(data.results);
      console.log(data.results);
    };
    fetchMovies();
  }, [type]);

  const handleFilter = (rate: number) => {
    if (minRating === rate) {
      // check if user click the tag twice
      setMinRating(0);
      setfilteredMovies(movies);
    } else {
      setMinRating(rate);

      // we compare to rate because we want immediate response
      const filterMovies = movies.filter((movie) => movie.vote_average >= rate);
      setfilteredMovies(filterMovies);
    }
  };

  const [sort, setSort] = useState<{ by: string; order: "asc" | "desc" }>({
    by: "default",
    order: "asc",
  });

  // keep track of sort object
  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      setfilteredMovies(sortedMovies);
    } else {
      setfilteredMovies(movies);
    }
  }, [sort, filteredMovies, movies]);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setSort((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className="movie-list">
      <header className="movie-list__header">
        <h2 className="movie-list__heading">{title}</h2>
        <div className="movie-list__fs">
          <FilterGroup
            onRatingClick={handleFilter}
            minRating={minRating}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            className="movie-list__sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="">Sort by</option>
            <option value="default">Default</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            name="order"
            id=""
            className="movie-list__sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie-cards">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.original_title}
            release_date={movie.release_date}
            rating={movie.vote_average}
            description={movie.overview}
            image_path={movie.poster_path}
            movie_id={movie.id}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
