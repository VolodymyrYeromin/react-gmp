import "./header.scss";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import {useState} from "react";
import CongratulationsModal from "../CongratulationsModal/CongratulationsModal";
import PropTypes from "prop-types";
import {useMovieDetailsPage} from "../ClickedMovieDetails/MovieDetailsContext";
import {useDispatch, useSelector} from "react-redux";
import {openModal} from "../../redux/features/modal/modalSlice";

const Header = ({moviesState, setMoviesState}) => {
    const [showCongratulationsModal, setShowCongratulationsModal] = useState(false);
    const detailsPage = useMovieDetailsPage();
    const dispatch = useDispatch();
    const {isOpen} = useSelector(state => state.modal);


    if (detailsPage.visible) {
        return null;
    }

    return (
        <header>
            <div className="header-top">
                <Link to="/" className="logo"><span className="bold">netflix</span>roulette</Link>
                <button className="add-movie-btn" onClick={() => dispatch(openModal())}>+ Add movie</button>
            </div>
            <SearchBar/>
            {isOpen && <AddMovieModal moviesState={moviesState} setMoviesState={setMoviesState}
                                      onSuccess={() => setShowCongratulationsModal(true)}/>}
            <CongratulationsModal showCongratulationsModal={showCongratulationsModal}
                                  onClose={() => setShowCongratulationsModal(false)}/>
        </header>
    )
};

// Header.propTypes = {
//     moviesState: PropTypes.arrayOf(PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         date: PropTypes.number.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.string.isRequired),
//         url: PropTypes.string.isRequired,
//         rating: PropTypes.string.isRequired,
//         runtime: PropTypes.string.isRequired,
//         overview: PropTypes.string.isRequired
//     })),
//     setMoviesState: PropTypes.func.isRequired
// };

export default Header;
