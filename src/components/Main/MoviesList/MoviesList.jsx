import './moviesList.scss';
import MovieCard from "./MovieCard/MovieCard";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../../redux/features/movies/moviesSlice";
import {useEffect} from "react";

const MoviesList = ({movies, setMoviesState, setSelectedMovie}) => {
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
                {moviesFromAPI.map((movie, index)=> {
                    return (
                        <MovieCard key={movie.id} movie={movie} index={index} moviesState={movies} setMoviesState={setMoviesState} setSelectedMovie={setSelectedMovie} />
                    )
                })}
            </div>
        </>
    )
}

// MoviesList.propTypes = {
//     movies: PropTypes.arrayOf(PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         date: PropTypes.number.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.string.isRequired),
//         url: PropTypes.string.isRequired,
//         rating: PropTypes.string.isRequired,
//         runtime: PropTypes.string.isRequired,
//         overview: PropTypes.string.isRequired
//     })),
//     setMoviesState: PropTypes.func.isRequired,
//     setSelectedMovie: PropTypes.func.isRequired
// };

export default MoviesList;
