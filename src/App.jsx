import "./styles/index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ClickedMovieDetails from "./components/ClickedMovieDetails/ClickedMovieDetails";
import Modal from "./components/Modal/Modal";
import {useSelector} from "react-redux";

const App = () => {
    const isModalOpen = useSelector(state => state.modal.isOpen);
    const {isSelectedMovieShown} = useSelector(state => state.selectedMovie)

    return (
        <>
            {isSelectedMovieShown ? <ClickedMovieDetails /> : <Header />}
            <Main />
            {isModalOpen && <Modal />}
            <Footer />
        </>
    );
};

export default App;
