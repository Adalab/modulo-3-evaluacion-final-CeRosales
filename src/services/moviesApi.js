const getApiData = () => {
    return fetch("https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50")
    .then((response) => response.json())
    .then((data) => {
        const dataClean = data.map((movie, index) => {
            return {
            id: index,
            movie: movie.movie,
            year: movie.year,
            frase: movie.full_line,
            poster: movie.poster,
            director: movie.director,
            audio: movie.video.audio,
            };
        });
        return dataClean;
    });
};

export default getApiData;