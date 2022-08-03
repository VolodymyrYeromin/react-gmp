import PropTypes from "prop-types";
import EditDeleteWindow from "../../../EditDeleteWindow/EditDeleteWindow";
import Link from "next/link";
import {useRouter} from "next/router";

const MovieCard = ({movie}) => {
    const {query} = useRouter();
    let href;
    if (query.filter) {
        href = `${query.search ? `/search/${query.search}` : '/search'}?filter=${query.filter}${query.sortBy ? `&sortBy=${query.sortBy}` : ''}&movie=${movie.id}`;
    } else if (query.sortBy) {
        href = `${query.search ? `/search/${query.search}` : '/search'}?sortBy=${query.sortBy}&movie=${movie.id}`;
    } else {
        href = `${query.search ? `/search/${query.search}` : '/search'}?movie=${movie.id}`;
    }

    return (
        <Link href={href}>
            <a>
                <div className="movie-card" id={`id${movie.id}`}>
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
            </a>
        </Link>
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
