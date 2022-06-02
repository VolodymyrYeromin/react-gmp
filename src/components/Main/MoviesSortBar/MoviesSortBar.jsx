import './moviesSortBar.scss';

const MoviesSortBar = () => {
    return (
        <div className="movies-sort-bar">
            <span>
                Sort by
            </span>
            <div className="select_box">
                <select>
                    <option>Release date</option>
                    <option>Test</option>
                </select>
            </div>
        </div>
    )
};

export default MoviesSortBar;
