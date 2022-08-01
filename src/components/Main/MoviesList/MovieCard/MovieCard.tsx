import EditDeleteWindow from "../../../EditDeleteWindow/EditDeleteWindow";
import Link from "next/link";
import {useRouter} from "next/router";
import {FC} from "react";
import {movieType} from "../../../../types";

const MovieCard:FC<{movie: movieType}> = ({movie}) => {
    const {query} = useRouter();
    let href;
    if (query.filter) {
        href = `${query.searchQuery ? `/search/${query.searchQuery}` : '/search'}?filter=${query.filter}${query.sortBy ? `&sortBy=${query.sortBy}` : ''}&movie=${movie.id}`;
    } else if (query.sortBy) {
        href = `${query.searchQuery ? `/search/${query.searchQuery}` : '/search'}?sortBy=${query.sortBy}&movie=${movie.id}`;
    } else {
        href = `${query.searchQuery ? `/search/${query.searchQuery}` : '/search'}?movie=${movie.id}`;
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

export default MovieCard;
