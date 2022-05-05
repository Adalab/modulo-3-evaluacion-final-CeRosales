import Movie from './Movie';

function MovieSceneList(props) {
    const movieElements = props.movies.map((movie) => { 
        return (
             <li>
            <Movie movie={movie}/>
        </li>
        );
    });
    return (
        <section>
            <ul>
                {movieElements}
            </ul>
        </section>
    );
}

export default MovieSceneList;