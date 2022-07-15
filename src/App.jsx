import "./styles/index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ClickedMovieDetails from "./components/ClickedMovieDetails/ClickedMovieDetails";
import Modal from "./components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route, Navigate} from "react-router-dom";
import {useEffect} from "react";
import useQuery from "./hooks/useQuery";
import {getSelectedMovie} from "./redux/features/selectedMovie/selectedMovieSlice";
import NotFound from "./components/NotFound/NotFound";
import constants from "./constants";

const App = () => {
    const isModalOpen = useSelector(state => state.modal.isOpen);
    const query = useQuery();
    const selectedMovieParam = query.get(constants.queryParams.MOVIE);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedMovieParam) {
            dispatch(getSelectedMovie(selectedMovieParam));
        }
    }, [selectedMovieParam])

    return (
        <>
            <Routes>
                <Route path="/search" element={
                    <>
                        {selectedMovieParam ? <ClickedMovieDetails /> : <Header />}
                        <Main />
                        {isModalOpen && <Modal />}
                        <Footer />
                    </>
                }/>
                <Route path="/search/:searchQuery" element={
                    <>
                        {selectedMovieParam ? <ClickedMovieDetails /> : <Header />}
                        <Main />
                        {isModalOpen && <Modal />}
                        <Footer />
                    </>
                }/>
                <Route
                    path="/"
                    element={<Navigate to="/search" replace />}
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
