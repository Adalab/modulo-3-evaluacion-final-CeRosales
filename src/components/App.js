import { useEffect, useState } from 'react';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';


function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState("");
  const [filterYears, setFilterYears] = useState("");



//handles para los inputs
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  
  const handleFilterYear = (value) => {
    setFilterYears(value);
  };



  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataMovies(dataFromApi);
    });
  }, [])


  //filtros por peli y por año
  const movieFilters = dataMovies
  .filter((movie) => {
    return movie.movie.toLowerCase().includes(filterMovie.toLowerCase());
  })
  .filter((movie) => {
    if (filterYears.length === 0) {
      return true;
    } else {
      return filterYears.includes(movie.year);
    }
  });



  const getYear = () => {
    const userYear = dataMovies.map((movie) => movie.year);
    const uniqueYear = userYear.filter((year, index) => {
      return userYear.indexOf(year) === index
    });

    return uniqueYear;
  };
 

  return (
   <>
   <h1> Lista de pelis Wow</h1>
   <Filters
    handleFilterYear={handleFilterYear} 
    handleFilterMovie={handleFilterMovie}
    years ={getYear()}
    filterMovie={filterMovie}/>
  <MovieSceneList movies={movieFilters} />
  
   
   </>

  );
}

export default App;
