import {Link} from 'react-router-dom';
function MovieSceneDetail(props) {
    return (
    <>
    <section>
        <div className='contenedor'>
        <div className='contenedor1'>
          <img 
          className="movie_poster"
          src ={props.movie.poster}
          alt={props.movie.movie} />
          </div>
          <div className='contenedor2'>
           <h3 className="movie_frase">{props.movie.frase}</h3>
          <h3 className="movie_movie">{props.movie.movie}</h3>
          <h4 className="movie_year">{props.movie.year}</h4>
          <h4>{props.movie.director}</h4>
          <a href={props.movie.audio} target="tab_blank">Audio</a>
      </div>  
      </div>
    </section>
    <Link to="/"> Atrás </Link>
    </>
    );
};


export default MovieSceneDetail;