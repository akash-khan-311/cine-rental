import { getAllMovies } from "../data/movies";
import MovieCard from "./MovieCard";
const MovieList = () => {
  const movies = getAllMovies();
  console.log(movies);
  return (
    <>
      {/* Content */}
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {/* Begin Card */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};
export default MovieList;
