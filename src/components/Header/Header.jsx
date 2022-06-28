import "./header.scss";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import {useMovieDetailsPage} from "../ClickedMovieDetails/MovieDetailsContext";
import {useDispatch} from "react-redux";
import {toggleAddModal, toggleModal} from "../../redux/features/modal/modalSlice";

const Header = () => {
    const detailsPage = useMovieDetailsPage();
    const dispatch = useDispatch();

    if (detailsPage.visible) {
        return null;
    }

    return (
        <header>
            <div className="header-top">
                <Link to="/" className="logo"><span className="bold">netflix</span>roulette</Link>
                <button className="add-movie-btn" onClick={() => {
                    dispatch(toggleModal());
                    dispatch(toggleAddModal());
                }}>+ Add movie</button>
            </div>
            <SearchBar/>
        </header>
    )
};

export default Header;
