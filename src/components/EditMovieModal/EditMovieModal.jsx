import "./editMovieModal.scss";
import MultipleSelectCheckmarks from "../MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import {TextField, ThemeProvider} from "@mui/material";
import BasicDatePicker from "../BasicDatePicker/BasicDatePicker";
import {createTheme} from '@mui/material/styles';
import {useState} from "react";
import {setModal} from "../../redux/features/modal/modalSlice";
import {useDispatch, useSelector} from "react-redux";
import constants from "../../constants";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F65261FF',
        },
    },
});

const EditMovieModal = () => {
    const movie = useSelector(state => state.modal.chosenMovie)
    const dispatch = useDispatch();
    const [form, setForm] = useState(movie);
    const closeModal = () => {
        dispatch(setModal(constants.modals.CLOSE));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const transformedDate = typeof form.release_date === "number" ? form.release_date : form.release_date.getFullYear();
        const formattedForm = {...form, release_date: transformedDate};

        closeModal();
    }

    return (
        <div className="edit-movie-content">
                <h2>Edit movie</h2>
                <ThemeProvider theme={theme}>
                    <form onSubmit={handleSubmit}>
                        <TextField id="title" color="primary" required name="title" variant="filled" label="Title"
                                   placeholder="Title" InputLabelProps={{shrink: true}} value={form.title}
                                   onChange={e => setForm(prevState => ({...prevState, title: e.target.value}))}/>
                        <BasicDatePicker id="date" name="date" form={form} callback={setForm}/>
                        <TextField id="url" name="url" label="Movie URL" required variant="filled"
                                   placeholder="https://" InputLabelProps={{shrink: true}} value={form.poster_path}
                                   onChange={e => setForm(prevState => ({...prevState, poster_path: e.target.value}))}/>
                        <TextField name="rating" id="rating" label="Rating" required variant="filled" type="number"
                                   placeholder="7.8" InputLabelProps={{shrink: true}} value={form.vote_average}
                                   onChange={e => setForm(prevState => ({...prevState, vote_average: e.target.value}))}/>
                        <MultipleSelectCheckmarks name="genres" id="genres" form={form} callback={setForm}/>
                        <TextField id="runtime" name="runtime" required label="Runtime" variant="filled"
                                   placeholder="minutes" InputLabelProps={{shrink: true}} value={form.runtime}
                                   onChange={e => setForm(prevState => ({...prevState, runtime: e.target.value}))}/>
                        <TextField id="overview" name="overview" variant="filled" required label="Overview" multiline maxRows={4}
                                   placeholder="Movie description" InputLabelProps={{shrink: true}} value={form.overview}
                                   onChange={e => setForm(prevState => ({...prevState, overview: e.target.value}))}/>
                        <div className="modal-buttons">
                            <button onClick={closeModal}>Reset</button>
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </ThemeProvider>
        </div>
    );
};

export default EditMovieModal;
