import './moviesList.scss';
import MovieCard from "./MovieCard/MovieCard";
import PropTypes from "prop-types";

const MoviesList = ({movies}) => {
    return (
        <>
            <div className="total-movies"><span>{movies.length}</span> movies found</div>
            <div className="movies-list">
                {movies.map((movie, index)=> {
                    return (
                        <MovieCard key={index} movie={movie} />
                    )
                })}
            </div>
        </>
    )
}

MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }))
};

export default MoviesList;
