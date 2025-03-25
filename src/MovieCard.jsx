import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';




function MovieCard({ movie }) {

    // return (

    //     <li className="content-card">
    //         <h3>{movie.show.name}</h3>
    //         <p>genre: {movie.show.genres}</p>
    //         <img src={movie.show.image?.medium} alt={movie.show.name} />
    //     </li>

    // )

    return (

        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="400"
                    image={movie.show.image?.medium}
                    alt={movie.show.name}
                />
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {movie.show.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {movie.show.genres && movie.show.genres.length > 0 ? movie.show.genres.join(', ') : 'Genre: unknown'}

                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )

}
export default MovieCard;