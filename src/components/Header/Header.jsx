import "./header.scss";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import {useDispatch} from "react-redux";
import {toggleAddModal, toggleModal} from "../../redux/features/modal/modalSlice";

const Header = () => {
    const dispatch = useDispatch();

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
