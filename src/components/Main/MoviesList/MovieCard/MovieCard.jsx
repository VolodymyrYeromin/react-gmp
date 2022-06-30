import "./movieCard.scss";
import PropTypes from "prop-types";
import {useState} from "react";
import EditDeleteWindow from "../../../EditDeleteWindow/EditDeleteWindow";
import {useMovieDetailsPage} from "../../../ClickedMovieDetails/MovieDetailsContext";

const MovieCard = ({movie, index, moviesState, setMoviesState, setSelectedMovie}) => {
    const [showWindow, setShowWindow] = useState(false)
    const {showDetailsPage} = useMovieDetailsPage()

    return (
        <div className="movie-card">
            <img className="movie-image" src={movie.url} alt={movie.title} onClick={() => {
                setSelectedMovie(movie);
                showDetailsPage();
            }}/>
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
                <span className="movie-name" onClick={() => {
                    setSelectedMovie(movie);
                    showDetailsPage();
                }}>{movie.title}</span>
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
    }),
    index: PropTypes.number.isRequired,
    moviesState: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired),
        url: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    })),
    setMoviesState: PropTypes.func.isRequired,
    setSelectedMovie: PropTypes.func.isRequired
};

export default MovieCard;
