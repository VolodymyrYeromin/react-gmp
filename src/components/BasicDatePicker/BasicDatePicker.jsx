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
                value={typeof form.date === "number" ? new Date(form.date, 0) : form.date}
                onChange={(newValue) => {
                    callback({...form, date:newValue});
                }}
                renderInput={(params) => <TextField {...params} required variant="filled" inputProps={{
                    ...params.inputProps, placeholder: "Select Date"
                }} InputLabelProps={{shrink: true}}/>}
            />
        </LocalizationProvider>
    );
}