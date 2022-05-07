import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import {matchPath, useLocation} from 'react-router';
import getApiData from '../services/moviesApi';
import MovieSceneList from './MovieSceneList';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
import localStorage from '../services/localStorageMovies';


function App() {
  const [dataMovies, setDataMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState(
    localStorage.get("name", "")
  );
  const [filterYears, setFilterYears] = useState(
    localStorage.get("year", "")
  );


useEffect(() => {
  if (dataMovies.length === 0) {
  getApiData().then((dataClean) => {
    setDataMovies(dataClean);
  });
 }
}, []);  

useEffect(() => {
  localStorage.set("movies", dataMovies);
  localStorage.set("movie", filterMovie);
  localStorage.set("years", filterYears);
}, [dataMovies, filterMovie, filterYears]); // cuando cambie lo guarda aquí


//handles para los inputs
  const handleFilterMovie = (value) => {
    setFilterMovie(value);
  };
  
  const handleFilterYear = (value) => {
    setFilterYears(value);
  };

  const PreventSubmitDefault = (ev) => {
    ev.preventDefault();
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
 

  // traemos el id que hemos creado en la api con index
  const {pathname} = useLocation();
  const dataPath = matchPath("/movie/:id", pathname)
  const movieId = dataPath !== null ? dataPath.params.id : null;
  const movieFound = movieFilters.find((movie) => movie.id === parseInt(movieId));

  return (
   <>
   <h1> Lista de pelis Wow</h1>
   <div>

   <Routes>
     <Route path="/" element={
    <>
    <Filters
    handleFilterYear={handleFilterYear} 
    handleFilterMovie={handleFilterMovie}
    PreventSubmitDefault={PreventSubmitDefault}
    years ={getYear()}
    filterMovie={filterMovie}/>

   <MovieSceneList movies={movieFilters} />
   </>
   }
     
  />
  
  <Route
  path="/movie/:id"
  element={<MovieSceneDetail movie ={movieFound} />}
   />

   </Routes>  
   </div>
  
   
   </>

  );
}

export default App;
