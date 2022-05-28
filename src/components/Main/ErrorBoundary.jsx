import mockMovies from "../../data/mockData";

const ErrorBoundary = (props) => {
    const ErrorText = () => {
        return(
            <h2 className="error-message">Oops, something went wrong... We are doing our best to fix the issue</h2>
        )
    }
    return (
        <>
            {Array.isArray(mockMovies)? props.children : <ErrorText />}
        </>
    )
}

export default ErrorBoundary;
