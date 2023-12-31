// const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";
const API_KEY = "a6908dd1493bbe0c1951f2b47555a236";

const requests = {
    
    fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchTrendingTv: `/trending/tv/week?api_key=${API_KEY}&language=en-US`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    // fetchDetails: `/movie/${movie.id}?api_key=${API_KEY}`
};

export default requests;