import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {FilledInput} from "@mui/material";

const ITEM_HEIGHT = 48;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: 250,
    },
  },
};

const mockGenres = [
  "Crime",
  "Documentary",
  "Horror",
  "Comedy"
];

export default function MultipleSelectCheckmarks({form, callback}) {

  const transformString = (event) => {
    callback({...form, genres: typeof event.target.value === 'string' ? event.target.value.split(',') : event.target.value});
  };

  return (
      <FormControl required variant="filled" sx={{ m: 1, width: 300, color:"white" }}>
        <InputLabel id="genre-id-label">Genre</InputLabel>
        <Select
          labelId="genre-id-label"
          id="genre-id"
          multiple
          value={form.genres}
          onChange={(e) => {
              transformString(e);
          }}
          input={<FilledInput label="Genre" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {mockGenres.map((genre) => (
            <MenuItem key={genre} value={genre}>
              <Checkbox checked={form.genres.indexOf(genre) > -1} />
              <ListItemText primary={genre} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}
