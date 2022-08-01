import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ClickedMovieDetails from "./components/ClickedMovieDetails/ClickedMovieDetails";
import Modal from "./components/Modal/Modal";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";
import {FC} from "react";
import {appProps, modalSliceType} from "./types";

const App: FC<appProps> = ({movies, movie}) => {
    const isModalOpen = useSelector<modalSliceType>(state => state.modal.isOpen);
    const nextRouter = useRouter();

    return (
        <>
            {nextRouter.query.movie ? <ClickedMovieDetails movie={movie} /> : <Header />}
            <Main movies={movies} />
            {isModalOpen && <Modal />}
            <Footer />
        </>
    );
};

export default App;
