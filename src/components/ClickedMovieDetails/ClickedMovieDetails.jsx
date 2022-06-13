import "./clickedMovieDetails.scss"
import {Link} from "react-router-dom";
import searchImage from '../../assets/SearchButton.png'
import {useMovieDetailsPage} from "./MovieDetailsContext";

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
                <img className="movie-details-img" src={selectedMovie.url} alt={selectedMovie.title}/>
                <div className="movie-details-info">
                    <div className="movie-heading">
                        <h2>{selectedMovie.title}</h2>
                        <div className="rating">{selectedMovie.rating}</div>
                    </div>
                    <p className="genres">{selectedMovie.genres.map((genre, index) => {
                        return index < selectedMovie.genres.length - 1 ? `${genre}, ` : genre
                    })}</p>
                    <span className="year">{selectedMovie.date}</span>
                    <span className="length">{selectedMovie.runtime}</span>
                    <div className="description">{selectedMovie.overview}</div>
                </div>
            </div>
        </div>
    );
};

ClickedMovieDetails.propTypes = {};

export default ClickedMovieDetails;