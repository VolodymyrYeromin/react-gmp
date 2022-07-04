import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({form, callback}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Release date"
                value={typeof form.release_date === "number" ? new Date(form.release_date, 0) : form.release_date}
                onChange={(newValue) => {
                    callback({...form, release_date:newValue});
                }}
                renderInput={(params) => <TextField {...params} required variant="filled" inputProps={{
                    ...params.inputProps, placeholder: "Select Date"
                }} InputLabelProps={{shrink: true}}/>}
            />
        </LocalizationProvider>
    );
}
