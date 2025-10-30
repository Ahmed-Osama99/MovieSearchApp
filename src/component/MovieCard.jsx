import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id)

  function favoriteHandle(e) {
    e.preventDefault();
    if(favorite) removeFromFavorites(movie.id)
      else addToFavorites(movie)
  }

  return (
    <div className="movie_card">
      <div className="movie_poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie_overlay">
          <button className={`fav_btn ${favorite ? 'active' : ''}`} onClick={favoriteHandle}>
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
      </div>
      <div className="movie_info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
