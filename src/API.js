import axios from "axios";

const newApi = axios.create({
    baseURL: 'https://api.tvmaze.com'
});
export const getMovieById = (show_id) => {

    return newApi.get(`/shows/${show_id}`).then(({ data }) => {
        return data
    })
}

export const getCastById = (show_id) => {

    return newApi.get(`/shows/${show_id}/cast`).then(({ data }) => {
        return data
    })
}