import { useEffect, useState } from 'react';
import getApiData from '../services/moviesApi';
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
   <h1> Lista de pelis</h1>

   
   </>

  );
}

export default App;
