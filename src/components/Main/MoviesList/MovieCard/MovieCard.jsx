import "./movieCard.scss";
import PropTypes from "prop-types";
import {useState} from "react";
import EditDeleteWindow from "../../../EditDeleteWindow/EditDeleteWindow";
import {useDispatch} from "react-redux";
import {setSelectedMovie} from "../../../../redux/features/selectedMovie/selectedMovieSlice";

const MovieCard = ({movie}) => {
    const [showWindow, setShowWindow] = useState(false);
    const dispatch = useDispatch();
    const showSelectedMovie = () => {
        dispatch(setSelectedMovie(movie));
    }

    return (
        <div className="movie-card" onClick={showSelectedMovie}>
            <img className="movie-image" src={movie.poster_path} alt={movie.title} />
            <div className="movie-options" onClick={() => {
                setShowWindow(true)
            }}>
                <div className="options-dot"></div>
                <div className="options-dot"></div>
                <div className="options-dot"></div>
            </div>
            <EditDeleteWindow showWindow={showWindow} onClose={() => setShowWindow(false)} movie={movie}/>
            <div className="movie-heading">
                <span className="movie-name">{movie.title}</span>
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
};

export default MovieCard;
