const Page = require('./page');

class SearchPage extends Page {

    get searchInput () {
        return $('.search-query');
    }

    get searchButton () {
        return $('.search-button');
    }

    get moviesList () {
        return $('.movies-list');
    }

    get movieCard () {
        return $('.movie-card')
    }

    get movieDetails () {
        return $('.movie-details-body')
    }

    get avengersMovieCard () {
        return $('#id299534')
    }

    async searchMovies (text) {
        try {
            await this.searchInput.setValue(text);
            await this.searchButton.click();
            await this.moviesList.waitForDisplayed({timeout: 2000});
        } catch (e) {
            throw new Error(`Couldn't load movies`)
        }
    }

    async showFirstSelectedMovie () {
        await this.movieCard.click();
    }

    open () {
        return super.open('/');
    }
}

module.exports = new SearchPage();
