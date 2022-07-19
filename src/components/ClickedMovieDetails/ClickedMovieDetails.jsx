import "./clickedMovieDetails.scss"
import {Link, useNavigate, useParams} from "react-router-dom";
import searchImage from '../../assets/SearchButton.png'
import {useSelector} from "react-redux";
import useQuery from "../../hooks/useQuery";
import constants from "../../constants";
import useCustomNavigation from "../../hooks/useCustomNavigation";

const transformDuration = (numberOfMinutes) => {
    let string = `${Math.floor(numberOfMinutes / 60)}h `;
    if (numberOfMinutes % 60 < 10) {
        string += `0${numberOfMinutes % 60} min`;
    } else {
        string += `${numberOfMinutes % 60} min`;
    }
    return string;
};

const ClickedMovieDetails = () => {
    const selectedMovie = useSelector(state => state.selectedMovie.movie);
    const navigate = useNavigate();
    const query = useQuery();
    const sortBy = query.get(constants.queryParams.SORT_BY);
    const genre = query.get(constants.queryParams.GENRE);
    const {searchQuery} = useParams();

    const hideSelectedMovie = () => {
        useCustomNavigation({navigate, searchQuery, genre, sortBy})
    }

    return (
        <div className="clicked-movie-details">
            <div className="movie-details-header">
                <Link to="/" className="logo">netflixroulette</Link>
                <button className="search-movie-btn" onClick={hideSelectedMovie}><img src={searchImage} alt="search"/></button>
            </div>
            <div className="movie-details-body">
                <img className="movie-details-img" src={selectedMovie.poster_path} alt={selectedMovie.title}/>
                <div className="movie-details-info">
                    <div className="movie-heading">
                        <h2>{selectedMovie.title}</h2>
                        <div className="rating">{selectedMovie.vote_average}</div>
                    </div>
                    <p className="genres">{selectedMovie.genres ? selectedMovie.genres.map((genre, index) => {
                        return index < selectedMovie.genres.length - 1 ? `${genre}, ` : genre
                    }) : null}</p>
                    <span className="year">{selectedMovie.release_date ? selectedMovie.release_date.substring(0, 4) : null}</span>
                    <span className="length">{transformDuration(selectedMovie.runtime)}</span>
                    <div className="description">{selectedMovie.overview}</div>
                </div>
            </div>
        </div>
    );
};

export default ClickedMovieDetails;
