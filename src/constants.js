const constants = {
    genres: {
        ALL: 'all',
        DOCUMENTARY: 'Documentary',
        COMEDY: 'Comedy',
        HORROR: 'Horror',
        CRIME: 'Crime',
    },
    sorting: {
        RELEASE_DATE: 'release_date',
        VOTE_AVERAGE: 'vote_average',
    },
    modals: {
        ADD: 'add',
        EDIT: 'edit',
        DELETE: 'delete',
        CONGRATULATIONS: 'congratulations',
        CLOSE: 'close'
    },
    BASE_URL: 'http://localhost:4000/movies'
}

export const genres = ['all', 'Documentary', 'Comedy', 'Horror', 'Crime'];
export const sortings = [
    {
        title: 'Release date',
        value: 'release_date'
    },
    {
        title: 'Rating',
        value: 'vote_average'
    },
]

export default constants;
