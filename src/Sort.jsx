import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import { useState } from "react";
const Sort = ({ setMovies, movies, resetMovies }) => {

    const [sortValue, setSort] = useState('')

    function handleSort(event) {
        event.preventDefault();
        setSort(event.target.value)


        if (event.target.value === "none") {

            resetMovies();
            return;
        }
        let moviesCopy = [...movies]
        if (event.target.value === "newest") {
            console.log(movies[0].show.premiered)
            moviesCopy.sort((a, b) => {
                const dateA = new Date(a.show.premiered);
                const dateB = new Date(b.show.premiered);
                return dateB - dateA
            })
        } else if (event.target.value === "oldest") {
            moviesCopy.sort((a, b) => {

                const dateA = a.show.premiered ? new Date(a.show.premiered) : new Date(0);
                const dateB = b.show.premiered ? new Date(b.show.premiered) : new Date(0);
                return dateA - dateB;
            });
        }
        else if (event.target.value === "oldest") {
            moviesCopy.sort((a, b) => {

                const dateA = a.show.premiered ? new Date(a.show.premiered) : new Date(0);
                const dateB = b.show.premiered ? new Date(b.show.premiered) : new Date(0);
                return dateA - dateB;
            });
        } else if (event.target.value === "highest_rated") {
            moviesCopy.sort((a, b) => {

                const ratingA = a.show.rating?.average || 0;
                const ratingB = b.show.rating?.average || 0;
                return ratingB - ratingA;
            });
        } else if (event.target.value === 'lowest_rated') {
            moviesCopy.sort((a, b) => {

                const ratingA = a.show.rating?.average || 0;
                const ratingB = b.show.rating?.average || 0;
                return ratingA - ratingB;
            });
        }
        setMovies(moviesCopy);
    }


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth sx={{ fontSize: '18', fontWeight: '1000' }} >
                <InputLabel id="sort-selector" sx={{ fontSize: '24', fontWeight: '1000' }}>Select Sort Value</InputLabel>
                {/* <label htmlFor="sort-selector">Select something</label> */}

                <Select
                    labelId="sort-selector"
                    id="demo-simple-select"
                    value={sortValue}
                    label="None"
                    onChange={handleSort}
                >
                    {/* <select id="sort-selector" name="choose-filter" onChange={handleSort} defaultValue={'none'}> */}

                    <MenuItem value={'none'}>None</MenuItem>
                    <MenuItem value={'newest'}>Newest Fist</MenuItem>
                    <MenuItem value={'oldest'}>Oldest First</MenuItem>
                    <MenuItem value={'highest_rated'}>Highest Rated</MenuItem>
                    <MenuItem value={'lowest_rated'}>Lowest Rated</MenuItem>

                </Select>
            </FormControl>
        </Box>
    )

}



export default Sort