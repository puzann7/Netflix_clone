// Here we'll have all the url's for different api call necessary

export const API_KEY = "a763a7b12d142dd8f8932fc5b3244e06";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL  = "https://image.tmdb.org/t/p/w500/";
export const genreMap = {
    action: 28,
    comedy: 35,
    horror: 27,
    romance: 10749,
    thriller: 53,
    animation: 16,
    crime: 80,
    drama: 18,
    scifi: 878,
    documentary: 99,
  };

const requests = {
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
  fetchLatestMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc`,
  fetchLatestTVShows: `${BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=first_air_date.desc`,
  fetchCategory: ``,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchPopularTV: `${BASE_URL}/tv/popular?api_key=${API_KEY}`,
  fetchMovieTrailer: (movieId) =>
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`,
  fetchTVTrailer: (tvId) => `${BASE_URL}/tv/${tvId}/videos?api_key=${API_KEY}`,
};

export default requests;
