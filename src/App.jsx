import "./styles/index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import PropTypes from "prop-types";
import {useState} from "react";

const App = ({movies}) => {
    const [moviesState, setMoviesState] = useState(movies);
    return (
        <>
            <Header moviesState={moviesState} setMoviesState={setMoviesState}/>
            <Main movies={moviesState} setMoviesState={setMoviesState}/>
            <Footer />
        </>
    );
};

App.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.number.isRequired,
        genres: PropTypes.arrayOf(PropTypes.string.isRequired),
        url: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        runtime: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired
    }))
};

export default App;
