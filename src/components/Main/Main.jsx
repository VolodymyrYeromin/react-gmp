import './main.scss';
import MoviesFilterBar from "./MoviesFilterBar/MoviesFilterBar";
import MoviesSortBar from "./MoviesSortBar/MoviesSortBar";
import MoviesList from "./MoviesList/MoviesList";
import ErrorBoundary from "./ErrorBoundary";
import PropTypes from "prop-types";

const Main = ({movies, setMoviesState, setSelectedMovie}) => {
    return (
        <main>
            <div className="main-heading">
                <MoviesFilterBar />
                <MoviesSortBar movies={movies} setMoviesState={setMoviesState} />
            </div>
            <ErrorBoundary>
                <MoviesList movies={movies} setMoviesState={setMoviesState} setSelectedMovie={setSelectedMovie}/>
            </ErrorBoundary>
        </main>
    )
};

Main.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired),
        url: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    })),
    setMoviesState: PropTypes.func.isRequired,
    setSelectedMovie: PropTypes.func.isRequired
};

export default Main;
