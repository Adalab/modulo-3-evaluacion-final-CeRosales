import '../styles/Movie.scss';
import {Link} from 'react-router-dom';


function Movie(props) {
    return (
      <>
      <div className='contenedor'>
        <div className='contenedor1'>
          <img 
          className="movie_poster"
          src ={props.movie.poster}
          alt={props.movie.movie}/>
          </div>
          <div className='contenedor2'>
           <h3 className="movie_frase">{props.movie.frase}</h3>
          <h3 className="movie_movie">{props.movie.movie}</h3>
         
          <h4 className="movie_year">{props.movie.year}</h4>
           </div>  
           </div>

          <Link to ={`/movie/${props.movie.id}`}>
        More details here
      </Link>
      </>
    );
};

export default Movie;