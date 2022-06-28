import "./editMovieModal.scss";
import MultipleSelectCheckmarks from "../MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import {TextField, ThemeProvider} from "@mui/material";
import BasicDatePicker from "../BasicDatePicker/BasicDatePicker";
import {createTheme} from '@mui/material/styles';
import {useState} from "react";
import {toggleEditModal, toggleModal} from "../../redux/features/modal/modalSlice";
import {useDispatch} from "react-redux";
import img1 from "../../assets/pulpfiction.png"

const theme = createTheme({
    palette: {
        primary: {
            main: '#F65261FF',
        },
    },
});

const EditMovieModal = () => {
    const movie = {
        title: 'Pulp Fiction',
        release_date: '2018-02-07',
        poster_path: img1,
        vote_average: '1',
        genres: ['Action & Adventure'],
        runtime: '1h 23min',
        overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra'
    };
    const dispatch = useDispatch();
    const [form, setForm] = useState(movie);

    const handleSubmit = (e) => {
        e.preventDefault();
        const transformedDate = typeof form.release_date === "number" ? form.release_date : form.release_date.getFullYear();
        const formattedForm = {...form, release_date: transformedDate};

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
                            <button onClick={() => {
                                dispatch(toggleEditModal());
                                dispatch(toggleModal());
                            }}>Reset</button>
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                </ThemeProvider>
        </div>
    );
};

export default EditMovieModal;
