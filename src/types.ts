export interface movieType {
    title: string,
    tagline?: string,
    vote_average: number | string,
    vote_count?: number,
    release_date: string,
    poster_path: string,
    overview: string,
    budget?: number,
    revenue?: number,
    runtime?: number | string,
    genres: string[],
    id?: number
}

export type moviesType = movieType[];

export type appProps = {
    movies: moviesResponseType,
    movie: movieType
}

export type modalSliceType = {
    modal: {
        isOpen: boolean,
        openedModal: string,
        chosenMovie: movieType,
    }
}

export type selectedMovieSliceType = {
    selectedMovie: {
        movie: movieType,
        isSelectedMovieShown: boolean
    }
}

export type customNavigationType = {
    navigate(param : string): void,
    searchQuery: string | string[],
    genre: string | string[],
    sortBy: string | string[],
    movie: string | string[]
}

export type moviesResponseType = {
    data: moviesType,
    limit: number,
    offset: number,
    totalAmount: number
}
