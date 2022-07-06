import "./addMovieModal.scss";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {createMovie} from "../../redux/features/movies/moviesSlice";
import MovieForm from "../MovieForm/MovieForm";

const AddMovieModal = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            title: '',
            release_date: null,
            poster_path: '',
            vote_average: '',
            genres: [],
            runtime: '',
            overview: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Required"),
            release_date: Yup.date().nullable().required("Required"),
            poster_path: Yup.string().url("Provide URL").required("Required"),
            vote_average: Yup.number().max(100, "Rating must be <= 100"),
            genres: Yup.array().min(1, "Required").required("Required"),
            runtime: Yup.number().min(0, "Enter correct runtime").integer("Enter integer").required("Required"),
            overview: Yup.string().required("Required")
        }),
        onSubmit: (values) => {
            const formattedForm = values;
            if (values.release_date) {
                formattedForm.release_date = values.release_date.toISOString().split('T')[0];
            }
            if (!values.vote_average) {
                formattedForm.vote_average = 0;
            }
            dispatch(createMovie(formattedForm));
        }
    })
    return (
        <div className="add-movie-content">
            <h2>Add movie</h2>
            <MovieForm formik={formik} />
        </div>
    );
};

export default AddMovieModal;
