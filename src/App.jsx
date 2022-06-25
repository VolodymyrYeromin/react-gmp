import "./styles/index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import PropTypes from "prop-types";
import {useState} from "react";
import ClickedMovieDetails from "./components/ClickedMovieDetails/ClickedMovieDetails";
import {MovieDetailsProvider} from "./components/ClickedMovieDetails/MovieDetailsContext";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const moviesFromAPI = useSelector((state) => state.movies.data);
    const [moviesState, setMoviesState] = useState(moviesFromAPI);
    const [selectedMovie, setSelectedMovie] = useState({});

    return (
        <MovieDetailsProvider>
            <Header moviesState={moviesState} setMoviesState={setMoviesState}/>
            <ClickedMovieDetails selectedMovie={selectedMovie} />
            <Main movies={moviesState} setMoviesState={setMoviesState} setSelectedMovie={setSelectedMovie}/>
            <Footer />
        </MovieDetailsProvider>
    );
};

// App.propTypes = {
//     movies: PropTypes.arrayOf(PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         date: PropTypes.number.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.string.isRequired),
//         url: PropTypes.string.isRequired,
//         rating: PropTypes.string.isRequired,
//         runtime: PropTypes.string.isRequired,
//         overview: PropTypes.string.isRequired
//     }))
// };

export default App;
