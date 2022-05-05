import '../styles/Movie.scss';

function Movie(props) {
    return (
      <div className='contenedor'>
        <div className='contenedor1'>
          <img 
          className="movie_poster"
          src ={props.movie.poster}
          alt="foto peli"/>
          </div>
          <div className='contenedor2'>
           <h3 className="movie_frase">{props.movie.frase}</h3>
          <h3 className="movie_movie">{props.movie.movie}</h3>
         
          <h4 className="movie_year">{props.movie.year}</h4>
      </div>  
      </div>
    )
};

export default Movie;