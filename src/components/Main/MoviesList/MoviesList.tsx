import styles from './moviesList.module.scss';
import MovieCard from "./MovieCard/MovieCard";
import {FC} from "react";
import {moviesResponseType} from "../../../types";

const MoviesList:FC<{movies: moviesResponseType}> = ({movies}) => {

    return (
        <>
            <div className={styles.totalMovies}><span>{movies.totalAmount}</span> movies found</div>
            <div className={styles.moviesList}>
                {movies.data.map(movie => {
                    return (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                })}
            </div>
        </>
    )
}

export default MoviesList;
