// const APIKEY = "fb6738d1e38fb57e4cc12230923accd4";
const APIKEY = "2327293e082e9e16909f2313a690775a";
const baseUrl = "https://api.themoviedb.org/3";

const requests = {
  fetchNetflixOriginals: `${baseUrl}/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTrending: `${baseUrl}/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchTopRated: `${baseUrl}/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentries: `${baseUrl}/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
