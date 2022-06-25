import "./clickedMovieDetails.scss"
import {Link} from "react-router-dom";
import searchImage from '../../assets/SearchButton.png'
import {useMovieDetailsPage} from "./MovieDetailsContext";
import PropTypes from "prop-types";

const transformDuration = (numberOfMinutes) => {
    let string = `${Math.floor(numberOfMinutes / 60)}h `;
    if (numberOfMinutes % 60 < 10) {
        string += `0${numberOfMinutes % 60} min`;
    } else {
        string += `${numberOfMinutes % 60} min`;
    }
    return string;
};

const ClickedMovieDetails = ({selectedMovie}) => {
    const detailsPage = useMovieDetailsPage();

    if (!detailsPage.visible) {
        return null;
    }

    return (
        <div className="clicked-movie-details">
            <div className="movie-details-header">
                <Link to="/" className="logo">netflixroulette</Link>
                <button className="search-movie-btn" onClick={detailsPage.hideDetailsPage}><img src={searchImage} alt="search"/></button>
            </div>
            <div className="movie-details-body">
                <img className="movie-details-img" src={selectedMovie.poster_path} alt={selectedMovie.title}/>
                <div className="movie-details-info">
                    <div className="movie-heading">
                        <h2>{selectedMovie.title}</h2>
                        <div className="rating">{selectedMovie.vote_average}</div>
                    </div>
                    <p className="genres">{selectedMovie.genres.map((genre, index) => {
                        return index < selectedMovie.genres.length - 1 ? `${genre}, ` : genre
                    })}</p>
                    <span className="year">{selectedMovie.release_date.substring(0, 4)}</span>
                    <span className="length">{transformDuration(selectedMovie.runtime)}</span>
                    <div className="description">{selectedMovie.overview}</div>
                </div>
            </div>
        </div>
    );
};

// ClickedMovieDetails.propTypes = {
//     selectedMovie: PropTypes.shape({
//         title: PropTypes.string,
//         date: PropTypes.number,
//         genres: PropTypes.arrayOf(PropTypes.string),
//         url: PropTypes.string,
//         rating: PropTypes.string,
//         runtime: PropTypes.string,
//         overview: PropTypes.string
//     })
// };

export default ClickedMovieDetails;
