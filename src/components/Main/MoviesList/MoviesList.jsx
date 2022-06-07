import './moviesList.scss';
import MovieCard from "./MovieCard/MovieCard";
import PropTypes from "prop-types";

const MoviesList = ({movies, setMoviesState}) => {
    return (
        <>
            <div className="total-movies"><span>{movies.length}</span> movies found</div>
            <div className="movies-list">
                {movies.map((movie, index)=> {
                    return (
                        <MovieCard key={index} movie={movie} index={index} moviesState={movies} setMoviesState={setMoviesState} />
                    )
                })}
            </div>
        </>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired),
        url: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    }))
};

export default MoviesList;
