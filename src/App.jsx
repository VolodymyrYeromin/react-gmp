import "./styles/index.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ClickedMovieDetails from "./components/ClickedMovieDetails/ClickedMovieDetails";
import Modal from "./components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {Routes, Route, Navigate} from "react-router-dom";
import {Fragment, useEffect} from "react";
import useQuery from "./hooks/hooks";
import {getSelectedMovie} from "./redux/features/selectedMovie/selectedMovieSlice";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
    const isModalOpen = useSelector(state => state.modal.isOpen);
    const query = useQuery();
    const selectedMovieParam = query.get("movie");
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedMovieParam) {
            dispatch(getSelectedMovie(selectedMovieParam));
        }
    }, [selectedMovieParam])

    return (
        <>
                {selectedMovieParam ? <ClickedMovieDetails /> : null}
                <Routes>
                    <Route path="/search" element={
                        <Fragment>
                            {selectedMovieParam ? null : <Header />}
                            <Main />
                            {isModalOpen && <Modal />}
                            <Footer />
                        </Fragment>
                    }/>
                    <Route path="/search/:searchQuery" element={
                        <Fragment>
                            {selectedMovieParam ? null : <Header />}
                            <Main />
                            {isModalOpen && <Modal />}
                            <Footer />
                        </Fragment>
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
