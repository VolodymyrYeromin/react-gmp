import "./movieCard.scss";
import PropTypes from "prop-types";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <img className="movie-image" src={movie.url} alt={movie.title} />
            <div className="movie-options">
                <div className="options-dot"></div>
                <div className="options-dot"></div>
                <div className="options-dot"></div>
            </div>
            <div className="movie-heading">
                <span className="movie-name">{movie.title}</span>
                <span className="movie-year">{movie.date}</span>
            </div>
            <span className="movie-genres">{movie.genres.map((genre, index) => {
                return index < movie.genres.length - 1 ? `${genre}, ` : genre
            })}</span>
        </div>
    )
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired),
        url: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    })
};

export default MovieCard;
