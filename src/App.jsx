import "./styles/index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import PropTypes from "prop-types";

const App = ({movies}) => {
    return (
        <>
            <Header/>
            <Main movies={movies}/>
            <Footer />
        </>
    );
};

App.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }))
};

export default App;
