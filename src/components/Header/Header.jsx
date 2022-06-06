import "./header.scss";
import {Link} from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
import AddMovieModal from "../AddMovieModal/AddMovieModal";
import {useState} from "react";

const Header = ({moviesState, setMoviesState}) => {
    const [showModal, setShowModal] = useState(false);

    return(
        <header>
            <div className="header-top">
                <Link to="/" className="logo"><span className="bold">netflix</span>roulette</Link>
                <button className="add-movie-btn" onClick={()=>setShowModal(true)}>+ Add movie</button>
            </div>
            <SearchBar />
            <AddMovieModal moviesState={moviesState} setMoviesState={setMoviesState} onClose={()=> setShowModal(false)} showModal={showModal}/>
        </header>
    )
};

export default Header;
