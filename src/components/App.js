import { useEffect, useState } from 'react';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
//import '../App.css';

function App() {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataMovies(dataFromApi);
    });
  }, [])

  return (
   <>
   <h1> Lista de pelis Wow</h1>
  <MovieSceneList movies={dataMovies} />
   
   </>

  );
}

export default App;
