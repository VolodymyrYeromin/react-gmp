import './moviesList.scss';
import MovieCard from "./MovieCard/MovieCard";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import useQuery from "../../../hooks/useQuery";
import constants from "../../../constants";

const MoviesList = () => {
    const moviesFromAPI = useSelector(state => state.movies.data);
    const amountOfMovies = useSelector(state => state.movies.totalAmount)
    const dispatch = useDispatch();
    const searchQuery = useParams();
    const query = useQuery();
    const sortBy = query.get(constants.queryParams.SORT_BY);
    const genre = query.get(constants.queryParams.GENRE);
    const movie = query.get(constants.queryParams.MOVIE);

    useEffect(()=> {
        dispatch(getMovies({searchQuery: searchQuery.searchQuery ? searchQuery.searchQuery : '', sorting: sortBy, filtering: genre, movie}));
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
