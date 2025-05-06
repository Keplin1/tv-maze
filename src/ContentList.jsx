import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";

function ContentList({ searchTerm, setMovies, movies, setOriginalMovies }) {


    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`).then((response) => {
            return (response.json())
        }).then((data) => {
            if (!data || data.length === 0) {
                return Promise.reject({ message: 'Something went wrong' })
            }

            setMovies(data);
            console.log(data)
            setOriginalMovies(data)

        }).catch((err) => {
            setIsError(true)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [searchTerm]);

    if (isLoading) {
        return (
            <div className="content-list">
                <p>Loading... please wait </p>
            </div>
        )

    }

    if (isError) {
        return (
            <div>
                <p>Something went wrong</p>

            </div>
        )
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {movies.map((movie) => (
                    <Grid key={movie.show.id} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Link to={`/shows/${movie.show.id}`}>
                            <MovieCard sx={{ height: '150%', boxSizing: 'border-box' }} movie={movie} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>


    )
}




export default ContentList;