import "./movieCard.scss";
import PropTypes from "prop-types";
import EditDeleteWindow from "../../../EditDeleteWindow/EditDeleteWindow";
import {useNavigate, useParams} from "react-router-dom";
import useQuery from "../../../../hooks/hooks";

const MovieCard = ({movie}) => {
    const navigate = useNavigate();
    const query = useQuery();
    const sortBy = query.get("sortBy");
    const genre = query.get("genre");
    const {searchQuery} = useParams();

    const showSelectedMovie = () => {
        if (genre) {
            navigate(`${searchQuery ? `/search/${values.search_query}` : '/search'}?genre=${genre}${sortBy ? `&sortBy=${sortBy}` : ''}&movie=${movie.id}`);
        } else if (sortBy) {
            navigate(`${searchQuery ? `/search/${values.search_query}` : '/search'}?sortBy=${sortBy}&movie=${movie.id}`);
        } else {
            navigate(`${searchQuery ? `/search/${values.search_query}` : '/search'}?movie=${movie.id}`);
        }
    }

    return (
        <div className="movie-card" id={`id${movie.id}`} onClick={showSelectedMovie}>
            <img className="movie-image" src={movie.poster_path} alt={movie.title} />
            <EditDeleteWindow movie={movie}/>
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
