import "./editMovieModal.scss";
import MultipleSelectCheckmarks from "../MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import {TextField, ThemeProvider} from "@mui/material";
import BasicDatePicker from "../BasicDatePicker/BasicDatePicker";
import {createTheme} from '@mui/material/styles';
import {useState} from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F65261FF',
        },
    },
});

const EditMovieModal = ({movie, showEditModal, onClose, index, moviesState, setMoviesState, closeEditWindow}) => {
    if (!showEditModal) {
        return null;
    }
    const [form, setForm] = useState(movie)

    const handleSubmit = (e) => {
        e.preventDefault();
        const transformedDate = typeof form.date === "number" ? form.date : form.date.getFullYear();
        const formattedForm = {...form, date: transformedDate};
        const newState = [...moviesState];
        newState[index] = formattedForm;
        setMoviesState(newState);
        onClose();
        closeEditWindow();
    }

    return (
        <div className="overlay">
            <div className="modal-window">
                <div className="modal-top">
                    <button onClick={onClose} className="close-button">&#10005;</button>
                </div>
                <h2>Edit movie</h2>
                <ThemeProvider theme={theme}>
                    <form onSubmit={handleSubmit}>
                        <TextField id="title" color="primary" required name="title" variant="filled" label="Title"
                                   placeholder="Title" InputLabelProps={{shrink: true}} value={form.title}
                                   onChange={e => setForm(prevState => ({...prevState, title: e.target.value}))}/>
                        <BasicDatePicker id="date" name="date" form={form} callback={setForm}/>
                        <TextField id="url" name="url" label="Movie URL" required variant="filled"
                                   placeholder="https://" InputLabelProps={{shrink: true}} value={form.url}
                                   onChange={e => setForm(prevState => ({...prevState, url: e.target.value}))}/>
                        <TextField name="rating" id="rating" label="Rating" required variant="filled" type="number"
                                   placeholder="7.8" InputLabelProps={{shrink: true}} value={form.rating}
                                   onChange={e => setForm(prevState => ({...prevState, rating: e.target.value}))}/>
                        <MultipleSelectCheckmarks name="genres" id="genres" form={form} callback={setForm}/>
                        <TextField id="runtime" name="runtime" required label="Runtime" variant="filled"
                                   placeholder="minutes" InputLabelProps={{shrink: true}} value={form.runtime}
                                   onChange={e => setForm(prevState => ({...prevState, runtime: e.target.value}))}/>
                        <TextField id="overview" name="overview" variant="filled" required label="Overview" multiline maxRows={4}
                                   placeholder="Movie description" InputLabelProps={{shrink: true}} value={form.overview}
                                   onChange={e => setForm(prevState => ({...prevState, overview: e.target.value}))}/>
                        <div className="modal-buttons">
                            <button onClick={onClose}>Reset</button>
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </ThemeProvider>
            </div>
        </div>
    );
};

export default EditMovieModal;