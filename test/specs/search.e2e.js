const SearchPage = require('../pageobjects/search.page');

describe('My Search page', () => {
    it('should render page without query', async () => {
        await SearchPage.open();
        await expect(SearchPage.searchInput).toBeExisting();
        await expect(SearchPage.searchInput).toHaveValue('');
        await expect(SearchPage.moviesList).toBeExisting();
        await expect(browser).toHaveUrl('http://localhost:3000/search');
    });

    it('should search movies', async () => {
        await SearchPage.open();
        await SearchPage.searchMovies('avengers');
        await expect(SearchPage.searchInput).toHaveValue('avengers');
        await expect(browser).toHaveUrl('http://localhost:3000/search/avengers');
        await expect(SearchPage.avengersMovieCard).toBeExisting();
    });

    it('should show selected movie', async () => {
        await SearchPage.open();
        await SearchPage.searchMovies('avengers');
        await SearchPage.showFirstSelectedMovie();
        await expect(SearchPage.movieDetails).toBeExisting()
        await expect(browser).toHaveUrl('http://localhost:3000/search/avengers?movie=299534');
    });
});
