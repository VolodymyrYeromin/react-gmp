import './moviesList.scss';
import MovieCard from "./MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {useEffect} from "react";

const MoviesList = () => {
    const moviesFromAPI = useSelector(state => state.movies.data);
    const amountOfMovies = useSelector(state => state.movies.totalAmount)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getMovies());
    }, [])

    return (
        <>
            <div className="total-movies"><span>{amountOfMovies}</span> movies found</div>
            <div className="movies-list">
                {moviesFromAPI.map(movie => {
                    return (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                })}
            </div>
        </>
    )
}

export default MoviesList;
