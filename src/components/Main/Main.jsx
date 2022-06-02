import './main.scss';
import MoviesFilterBar from "./MoviesFilterBar/MoviesFilterBar";
import MoviesSortBar from "./MoviesSortBar/MoviesSortBar";
import MoviesList from "./MoviesList/MoviesList";
import ErrorBoundary from "./ErrorBoundary";
import PropTypes from "prop-types";

const Main = ({movies}) => {
    return (
        <main>
            <div className="main-heading">
                <MoviesFilterBar />
                <MoviesSortBar />
            </div>
            <ErrorBoundary>
                <MoviesList movies={movies} />
            </ErrorBoundary>
        </main>
    )
};

Main.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }))
};

export default Main;
