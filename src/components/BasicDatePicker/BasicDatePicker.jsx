import * as React from 'react';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({form, callback, name, onBlur}) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker onBlur={onBlur}
                        label="Release date"
                value={typeof form.values.release_date === "number" ? new Date(form.values.release_date, 0) : form.values.release_date}
                onChange={(newValue) => {
                    callback(name, newValue);
                }}
                renderInput={(params) => <TextField {...params} name={name} variant="filled" onBlur={onBlur} inputProps={{
                    ...params.inputProps, placeholder: "Select Date"
                }} InputLabelProps={{shrink: true}}/>}
            />
        </LocalizationProvider>
    );
}
