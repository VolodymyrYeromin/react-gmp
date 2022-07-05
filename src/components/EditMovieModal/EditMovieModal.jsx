import "./editMovieModal.scss";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {updateMovie} from "../../redux/features/movies/moviesSlice";
import MovieForm from "../MovieForm/MovieForm";

const EditMovieModal = () => {
    const movie = useSelector(state => state.modal.chosenMovie)
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            genres: movie.genres,
            runtime: movie.runtime || '',
            overview: movie.overview,
            id: movie.id
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Required"),
            release_date: Yup.date().nullable(),
            poster_path: Yup.string().url("Provide URL").required("Required"),
            vote_average: Yup.number().max(100, "Rating must be <= 100"),
            genres: Yup.array().min(1, "Required").required("Required"),
            runtime: Yup.number().min(0, "Enter correct runtime").integer("Enter integer").required("Required"),
            overview: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            const formattedForm = values;
            if (typeof(values.release_date) === 'object') {
                formattedForm.release_date = values.release_date.toISOString().split('T')[0];
            } else {
                formattedForm.release_date = values.release_date;
            }
            if (!values.vote_average) {
                formattedForm.vote_average = 0;
            }
            dispatch(updateMovie(formattedForm));
        }
    })

    return (
        <div className="edit-movie-content">
                <h2>Edit movie</h2>
                <MovieForm formik={formik}/>
        </div>
    );
};

export default EditMovieModal;
