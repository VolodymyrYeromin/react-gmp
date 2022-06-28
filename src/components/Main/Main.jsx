import './main.scss';
import MoviesFilterBar from "./MoviesFilterBar/MoviesFilterBar";
import MoviesSortBar from "./MoviesSortBar/MoviesSortBar";
import MoviesList from "./MoviesList/MoviesList";
import ErrorBoundary from "./ErrorBoundary";
import PropTypes from "prop-types";

const Main = ({setSelectedMovie}) => {

    return (
        <main>
            <div className="main-heading">
                <MoviesFilterBar />
                <MoviesSortBar />
            </div>
            <ErrorBoundary>
                <MoviesList setSelectedMovie={setSelectedMovie}/>
            </ErrorBoundary>
        </main>
    )
};

Main.propTypes = {
    setSelectedMovie: PropTypes.func.isRequired
};

export default Main;
