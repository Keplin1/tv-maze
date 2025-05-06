import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

import { getMovieById } from './API'

const SingleMoviePage = () => {
    const { show_id } = useParams();
    const [movie, setSingleMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        getMovieById(show_id)
            .then((movie) => {

                setSingleMovie(movie);

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

        <section>
            <p> {movie.name} </p>
            <p> {movie.url} </p>
        </section>


    )
}

export default SingleMoviePage