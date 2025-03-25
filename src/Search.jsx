import { useState } from "react";
import { Box, TextField, Button } from '@mui/material';

function Search({ setSearchTerm }) {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (event) => {
        setSearchInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchTerm(searchInput);
        setSearchInput("");
    }

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{
            width: '100%', width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            my: 3
        }}>
            <Box sx={{
                display: "flex",
                gap: 2,
                width: '100%',
                maxWidth: { xs: '100%', sm: '600px' }
            }}>
                <TextField
                    onChange={handleChange}
                    value={searchInput}
                    fullWidth
                    label="Enter movie name..."
                    id="movie-search"
                    variant="outlined"
                    placeholder="Enter movie name..."
                />
                <Button type="submit" variant="contained" color="success">
                    Search
                </Button>
            </Box>
        </Box>
    )
}

export default Search;