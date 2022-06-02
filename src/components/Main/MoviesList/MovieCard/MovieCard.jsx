import "./movieCard.scss";
import PropTypes from "prop-types";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <img className="movie-image" src={movie.imageUrl} alt={movie.name} />
            <div className="movie-options">
                <div className="options-dot"></div>
                <div className="options-dot"></div>
                <div className="options-dot"></div>
            </div>
            <div className="movie-heading">
                <span className="movie-name">{movie.name}</span>
                <span className="movie-year">{movie.year}</span>
            </div>
            <span className="movie-genres">{movie.genre}</span>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    })
};

export default MovieCard;
