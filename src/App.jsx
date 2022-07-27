import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ClickedMovieDetails from "./components/ClickedMovieDetails/ClickedMovieDetails";
import Modal from "./components/Modal/Modal";
import {useSelector} from "react-redux";

const App = ({movies}) => {
    const isModalOpen = useSelector(state => state.modal.isOpen);

    return (
        <>
            <Header />
            {/*<ClickedMovieDetails />*/}
            <Main movies={movies} />
            {isModalOpen && <Modal />}
            <Footer />
        </>
    );
};

export default App;
