function Movie(props) {
    return (
      <div>
          <img 
          className="movie_poster"
          src ={props.movie.poster}
          alt="foto peli"/>
           <h3 className="movie_frase">{props.movie.frase}</h3>
          <h3 className="movie_movie">{props.movie.movie}</h3>
         
          <h4 className="movie_year">{props.movie.year}</h4>
      </div>  
    )
};

export default Movie;