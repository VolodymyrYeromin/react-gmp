const constants = {
    genres: ['all', 'documentary', 'comedy', 'horror', 'crime'],
    sorting: [
        {
            title: 'Release date',
            value: 'release_date'
        },
        {
            title: 'Rating',
            value: 'vote_average'
        },
    ],
    modals: {
        ADD: 'add',
        EDIT: 'edit',
        DELETE: 'delete',
        CONGRATULATIONS: 'congratulations',
        CLOSE: 'close'
    },
    queryParams: {
        SORT_BY: "sortBy",
        GENRE: "genre",
        MOVIE: "movie"
    },
    BASE_URL: 'http://localhost:4000/movies',
}

export default constants;
