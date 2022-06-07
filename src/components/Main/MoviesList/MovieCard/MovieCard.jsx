import "./movieCard.scss";
import PropTypes from "prop-types";
import {useState} from "react";
import EditDeleteWindow from "../../../EditDeleteWindow/EditDeleteWindow";

const MovieCard = ({movie, index, moviesState, setMoviesState}) => {
    const [showWindow, setShowWindow] = useState(false)
    return (
        <div className="movie-card">
            <img className="movie-image" src={movie.url} alt={movie.title}/>
            <div className="movie-options" onClick={() => {
                setShowWindow(true)
            }}>
                <div className="options-dot"></div>
                <div className="options-dot"></div>
                <div className="options-dot"></div>
            </div>
            <EditDeleteWindow showWindow={showWindow} onClose={() => setShowWindow(false)} movie={movie}
                              moviesState={moviesState} setMoviesState={setMoviesState} index={index}/>
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
