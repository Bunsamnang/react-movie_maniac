interface MovieFilter {
  onRatingClick: (rate: number) => void;
  minRating: number;
  ratings: number[];
}

const FilterGroup = ({ onRatingClick, minRating, ratings }: MovieFilter) => {
  return (
    <ul className="movie-list__filter">
      {ratings.map((rating) => (
        <li
          className={`movie-list__filter__item ${
            minRating === rating ? "active" : ""
          }`}
          key={rating}
          onClick={() => onRatingClick(rating)}
        >
          {rating}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
