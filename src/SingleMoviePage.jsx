import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

import { getMovieById, getCastById } from './API'
import Grid from '@mui/joy/Grid';
import CastCard from './CastCard'
import stockImage from './assets/no_img_picture.jpg'

const SingleMoviePage = () => {
    const { show_id } = useParams();
    const [movie, setSingleMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cast, setCast] = useState([]);
    const imdbLink = 'https://www.imdb.com/title/';


    useEffect(() => {

        getMovieById(show_id)
            .then((movie) => {
                // console.log(movie)
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
        <div className="bg-gray-900 text-white">

            {/* Header section with image */}
            <div className="relative">
                {/* Image container */}
                <div className="h-96 overflow-hidden">
                    <img
                        alt=""
                        src={movie.image.original ?? stockImage}
                        className="w-full h-full object-cover"
                    />

                </div>
                {/*imdb button*/}
                <a
                    href={imdbLink + movie.externals.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                >
                    <div className="absolute top-4 right-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg ">
                            IMDB
                        </button>
                    </div>
                </a>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex justify-between items-end">
                        {/* Left side: title and info with their own backgrounds */}
                        <div>
                            <h2 className="text-5xl font-semibold bg-black bg-opacity-70 p-2 inline-block">{movie.name}</h2>
                            <div className="mt-2">
                                <p className="text-lg font-medium text-white bg-black bg-opacity-70 px-2 py-1 inline-block rounded">
                                    Genre: {movie.genres}
                                </p>
                                <p className="ml-2 text-lg font-medium text-white bg-black bg-opacity-70 px-2 py-1 inline-block rounded">
                                    Rating: {movie.rating.average}
                                </p>
                            </div>
                        </div>


                        {/*  button */}
                        <a
                            href={movie.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline"
                        >

                            <button className="bg-sky-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mb-10 px-5 py-5">
                                Watch Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>


            {/* Cast grid */}
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