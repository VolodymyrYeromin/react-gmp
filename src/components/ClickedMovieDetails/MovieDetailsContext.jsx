import React, {createContext, useContext, useState} from 'react';

const MovieDetailsContext = createContext();

export const useMovieDetailsPage = () => {
    return useContext(MovieDetailsContext)
}

export const MovieDetailsProvider = ({children}) => {
    const [detailsPage, setDetailsPage] = useState(false);
    const showDetailsPage = () => setDetailsPage(true);
    const hideDetailsPage = () => setDetailsPage(false)

    return (
        <MovieDetailsContext.Provider value={{
            visible: detailsPage,
            showDetailsPage,
            hideDetailsPage
        }}>
            {children}
        </MovieDetailsContext.Provider>
    )
}