const API_KEY = '2ae38842787efa9a82a6936b15852ad3';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_netwroks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomcanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumetaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;