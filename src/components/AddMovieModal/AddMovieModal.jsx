import "./addMovieModal.scss";
import MultipleSelectCheckmarks from "../MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import {TextField, ThemeProvider} from "@mui/material";
import BasicDatePicker from "../BasicDatePicker/BasicDatePicker";
import {createTheme} from '@mui/material/styles';
import {useState} from "react";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {closeModal} from "../../redux/features/modal/modalSlice";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F65261FF',
        },
    },
});

const AddMovieModal = ({moviesState, setMoviesState, onSuccess}) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        title: '',
        date: null,
        url: '',
        rating: '',
        genres: [],
        runtime: '',
        overview: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedForm = {...form, date: form.date.getFullYear()}
        setMoviesState(() => [...moviesState, formattedForm]);
        dispatch(closeModal());
        onSuccess();
    }
    return (
        <div className="overlay">
            <div className="modal-window">
                <div className="modal-top">
                    <button onClick={() => dispatch(closeModal())} className="close-button">&#10005;</button>
                </div>
                <h2>Add movie</h2>
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
                            <button onClick={() => dispatch(closeModal())}>Reset</button>
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </ThemeProvider>
            </div>
        </div>
    );
};

// AddMovieModal.propTypes = {
//     moviesState: PropTypes.arrayOf(PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         date: PropTypes.number.isRequired,
//         genres: PropTypes.arrayOf(PropTypes.string.isRequired),
//         url: PropTypes.string.isRequired,
//         rating: PropTypes.string.isRequired,
//         runtime: PropTypes.string.isRequired,
//         overview: PropTypes.string.isRequired
//     })),
//     setMoviesState: PropTypes.func.isRequired,
//     onClose: PropTypes.func.isRequired,
//     showModal: PropTypes.bool.isRequired,
//     onSuccess: PropTypes.func.isRequired,
// };

export default AddMovieModal;
