import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

import { getMovieById, getCastById } from './API'
import Grid from '@mui/joy/Grid';
import CastCard from './CastCard'

const SingleMoviePage = () => {
    const { show_id } = useParams();
    const [movie, setSingleMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cast, setCast] = useState([])


    useEffect(() => {

        getMovieById(show_id)
            .then((movie) => {
                console.log(movie)
                setSingleMovie(movie);

                setIsLoading(false);

            }).catch((err) => {
                setIsLoading(false);
                setError(err);
                console.log(err)
            })
    }, []);
    useEffect(() => {

        getCastById(show_id)
            .then((cast) => {

                setCast(cast);
                console.log(cast)

                setIsLoading(false);

            }).catch((err) => {
                setIsLoading(false);
                setError(err);
                console.log(err)
            })
    }, []);


    if (isLoading) {
        return (
            <section className="loading">
                <p>Loading... please wait </p>
            </section>
        )
    }

    if (error) {

        return (
            <p>sorry...an error has occured</p>
        )

    }



    return (
        <div className="bg-gray-400 bg-opacity-40 text-white">
            {/* Header section with movie image and overlay text */}
            <div className="mb-8 relative">
                {/* Image container with fixed height */}
                <div style={{ height: "400px", overflow: "hidden" }}>
                    <img
                        alt=''
                        src={movie.image.original}
                        className="w-full h-full object-cover object-center"

                    />
                </div>

                {/* Text overlay on the image */}
                <div className="absolute  bottom-0 left-0  flex flex-col justify-end p-6">
                    <h2 className="text-9xl font-semibold bg-black tracking-tight text-white">{movie.name}</h2>
                    <p className="mt-2 text-lg font-medium text-white bg-black bg-opacity-50 px-2 py-1 inline-block rounded size-fit">
                        Genre: {movie.genres}
                    </p>
                    <p className="mt-2 text-lg font-medium text-white bg-black bg-opacity-50 px-2 py-1 inline-block rounded size-fit">
                        Rating: {movie.rating.average}
                    </p>
                </div>
            </div>

            {/* Cast grid below */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Grid container spacing={5} sx={{ mt: 2 }}>
                    {cast.map((castMember) => (
                        <Grid xs={11} sm={6} md={4} lg={3} key={castMember.character.id}>
                            <CastCard castMember={castMember} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    )
}

export default SingleMoviePage