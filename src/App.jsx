import "./styles/index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import {useState} from "react";
import ClickedMovieDetails from "./components/ClickedMovieDetails/ClickedMovieDetails";
import {MovieDetailsProvider} from "./components/ClickedMovieDetails/MovieDetailsContext";
import Modal from "./components/Modal/Modal";
import {useSelector} from "react-redux";

const App = () => {
    const [selectedMovie, setSelectedMovie] = useState({});
    const isModalOpen = useSelector(state => state.modal.isOpen)

    return (
        <MovieDetailsProvider>
            <Header />
            <ClickedMovieDetails selectedMovie={selectedMovie} />
            <Main setSelectedMovie={setSelectedMovie}/>
            {isModalOpen && <Modal />}
            <Footer />
        </MovieDetailsProvider>
    );
};

export default App;
