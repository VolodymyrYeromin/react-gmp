import React from 'react';
import {TextField, ThemeProvider} from "@mui/material";
import BasicDatePicker from "../BasicDatePicker/BasicDatePicker";
import MultipleSelectCheckmarks from "../MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import {setModal} from "../../redux/features/modal/modalSlice";
import constants from "../../constants";
import {useDispatch} from "react-redux";
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#F65261FF',
        },
    },
});

const MovieForm = ({formik}) => {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(setModal(constants.modals.CLOSE));
    }

    return (
        <ThemeProvider theme={theme}>
            <form onSubmit={formik.handleSubmit}>
                <div className="validated">
                    <TextField id="title" color="primary" name="title" variant="filled" label="Title"
                               placeholder="Title" InputLabelProps={{shrink: true}} value={formik.values.title}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.title && formik.errors.title ? <span className="validation">{formik.errors.title}</span> : null}
                </div>
                <div className="validated">
                    <BasicDatePicker id="date" name="release_date" form={formik} callback={formik.setFieldValue} onBlur={formik.handleBlur}/>
                    {formik.touched.release_date && formik.errors.release_date ? <span className="validation">{formik.errors.release_date}</span> : null}
                </div>
                <div className="validated">
                    <TextField id="url" name="poster_path" label="Movie URL" variant="filled"
                               placeholder="https://" InputLabelProps={{shrink: true}} value={formik.values.poster_path}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.poster_path && formik.errors.poster_path ? <span className="validation">{formik.errors.poster_path}</span> : null}
                </div>
                <div className="validated">
                    <TextField name="vote_average" id="rating" label="Rating" variant="filled" type="number"
                               placeholder="7.8" InputLabelProps={{shrink: true}} value={formik.values.vote_average}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.vote_average && formik.errors.vote_average ? <span className="validation">{formik.errors.vote_average}</span> : null}
                </div>
                <div className="validated">
                    <MultipleSelectCheckmarks name="genres" id="genres" form={formik} callback={formik.setFieldValue} onBlur={formik.handleBlur}/>
                    {formik.touched.genres && formik.errors.genres ? <span className="validation">{formik.errors.genres}</span> : null}
                </div>
                <div className="validated">
                    <TextField id="runtime" name="runtime" label="Runtime" variant="filled" type="number"
                               placeholder="minutes" InputLabelProps={{shrink: true}} value={formik.values.runtime}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.runtime && formik.errors.runtime ? <span className="validation">{formik.errors.runtime}</span> : null}
                </div>
                <div className="validated">
                    <TextField id="overview" name="overview" variant="filled" label="Overview" multiline maxRows={4}
                               placeholder="Movie description" InputLabelProps={{shrink: true}} value={formik.values.overview}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.overview && formik.errors.overview ? <span className="validation">{formik.errors.overview}</span> : null}
                </div>
                <div className="modal-buttons">
                    <button onClick={closeModal}>Reset</button>
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </ThemeProvider>
    );
};

export default MovieForm;
