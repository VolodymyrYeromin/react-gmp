import "./header.scss";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
    return(
        <header>
            <div className="header-top">
                <Link to="/" className="logo"><span className="bold">netflix</span>roulette</Link>
                <button className="add-movie-btn">+ Add movie</button>
            </div>
            <SearchBar />
        </header>
    )
};

export default Header;
