import styles from './moviesList.module.scss';
import MovieCard from "./MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

const MoviesList = ({movies}) => {

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
