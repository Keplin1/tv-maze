import { useState } from "react";
import { Select } from '@base-ui-components/react/select';
const Sort = ({ setMovies, movies, resetMovies }) => {

    const [sortValue, setSort] = useState('')

    function handleSort(event) {
        event.preventDefault();


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
        <>
            <label htmlFor="sort-selector">Select something</label>
            <select id="sort-selector" name="choose-filter" onChange={handleSort} defaultValue={'none'}>
                <option value='none'>None</option>
                <option value='newest'>Newest Fist</option>
                <option value='oldest'>Oldest First</option>
                <option value='highest_rated'>Highest Rated</option>
                <option value='lowest_rated'>Lowest Rated</option>
            </select>
        </>
    )

}



export default Sort