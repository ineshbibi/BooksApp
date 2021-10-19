import React, { useState } from 'react';
import {TextField, Button, Grid} from '@mui/material';

function SearchBar({onSearch}) {
    const [filter, setFilter] = useState('')
    const handleChange = (event) => {
        event.persist();
          setFilter(event.target.value);
    }
    return (
        <div>
            <Grid container spacing={3} justifyContent='center' alignItems= 'center'>
            <Grid item xs = {6}>
                    <TextField id="outlined-basic" variant="outlined" fullWidth value={filter} onChange={handleChange} name="filter"/>
            </Grid>
            <Grid item xs ={3}>
                <Button variant="outlined" onClick={()=>onSearch(filter)}>Search</Button>
            </Grid>
            </Grid>
        </div>
    )
}

export default SearchBar
