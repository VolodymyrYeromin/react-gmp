import "./header.scss";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import {useDispatch} from "react-redux";
import {setModal} from "../../redux/features/modal/modalSlice";
import constants from "../../constants";

const Header = () => {
    const dispatch = useDispatch();
    const openAddModal = () => {
        dispatch(setModal(constants.modals.ADD));
    }

    return (
        <header>
            <div className="header-top">
                <Link to="/" className="logo"><span className="bold">netflix</span>roulette</Link>
                <button className="add-movie-btn" onClick={openAddModal}>+ Add movie</button>
            </div>
            <SearchBar />
        </header>
    )
};

export default Header;
