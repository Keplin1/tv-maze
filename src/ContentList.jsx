import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
function ContentList({ searchTerm }) {

    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);

        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`).then((response) => {
            if (response.status < 200 || response.status > 299) {

                return Promise.reject({ message: 'Something went wrong' })

            }
            console.log(response.status)
            return (response.json())

        }).then((data) => {


            setMovies(data)
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

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {movies.map((movie) => (
                    <Grid key={movie.show.id} size={{ xs: 4, sm: 4, md: 4 }}>
                        <MovieCard key={movie.show.id} movie={movie} />
                    </Grid>
                ))}
            </Grid>
        </Box>
        // <div className="content-list">
        //     <h2>Movie list</h2>
        //     {movies.map((movie) => {

        //         return <MovieCard key={movie.show.id} movie={movie} />
        //     })}

        // </div>

    )
}




export default ContentList;