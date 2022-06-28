import "./movieCard.scss";
import PropTypes from "prop-types";
import {useState} from "react";
import EditDeleteWindow from "../../../EditDeleteWindow/EditDeleteWindow";
import {useMovieDetailsPage} from "../../../ClickedMovieDetails/MovieDetailsContext";

const MovieCard = ({movie, setSelectedMovie}) => {
    const [showWindow, setShowWindow] = useState(false);
    const {showDetailsPage} = useMovieDetailsPage();

    return (
        <div className="movie-card">
            <img className="movie-image" src={movie.poster_path} alt={movie.title} onClick={() => {
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
            <EditDeleteWindow showWindow={showWindow} onClose={() => setShowWindow(false)} movie={movie}/>
            <div className="movie-heading">
                <span className="movie-name" onClick={() => {
                    setSelectedMovie(movie);
                    showDetailsPage();
                }}>{movie.title}</span>
                <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
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
            tagline: PropTypes.string,
            vote_average: PropTypes.number.isRequired,
            vote_count: PropTypes.number,
            release_date: PropTypes.string.isRequired,
            poster_path: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            budget: PropTypes.number,
            revenue: PropTypes.number,
            runtime: PropTypes.number,
            genres: PropTypes.arrayOf(PropTypes.string).isRequired
        }
    ),
    setSelectedMovie: PropTypes.func.isRequired
};

export default MovieCard;
