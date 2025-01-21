import "./MovieCard.css";

interface Movie {
  title: string;
  release_date: string;
  rating: number;
  description: string;
  image_path: string;
  movie_id: number;
}

const MovieCard = ({
  title,
  release_date,
  rating,
  description,
  image_path,
  movie_id,
}: Movie) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${image_path}`;

  return (
    <a
      href={`https://www.themoviedb.org//movie/${movie_id}`}
      target="_blank"
      className="movie-card"
    >
      <img src={imageUrl} alt="movie poster" className="movie-poster" />

      <div className="movie-details">
        <h3 className="movie-details__heading">{title}</h3>
        <div className="movie-date-rate">
          <p className="movie-date">{release_date}</p>
          <p className="movie-rate">{rating.toFixed(1)} ⭐</p>
        </div>
        <p className="movie-description">{description.slice(0, 100) + "..."}</p>
      </div>
    </a>
  );
};

export default MovieCard;
