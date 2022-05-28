import "./searchBar.scss";

const SearchBar = () => {
    return (
        <div className="search-block">
            <h1>Find your movie</h1>
            <form className="search-bar">
                <input className="search-query" type="text" placeholder="What do you want to watch?"/>
                <input className="search-button" type="submit" value="Search"/>
            </form>
        </div>
    );
};

export default SearchBar;
