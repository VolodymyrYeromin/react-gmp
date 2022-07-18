const useCustomNavigation = ({navigate, searchQuery, genre, sortBy, movie}) => {
    if (genre) {
        navigate(`${searchQuery ? `/search/${searchQuery}` : '/search'}?genre=${genre}${sortBy ? `&sortBy=${sortBy}` : ''}${movie ? `&movie=${movie}` : ''}`);
    } else if (sortBy) {
        navigate(`${searchQuery ? `/search/${searchQuery}` : '/search'}?sortBy=${sortBy}${movie ? `&movie=${movie}` : ''}`);
    } else if (movie) {
        navigate(`${searchQuery ? `/search/${searchQuery}` : '/search'}?movie=${movie}`);
    } else {
        navigate(`${searchQuery ? `/search/${searchQuery}` : '/search'}`);
    }
};

export default useCustomNavigation;
