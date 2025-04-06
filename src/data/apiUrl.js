// Here we'll have all the url's for different api call necessary

export const API_KEY = "a763a7b12d142dd8f8932fc5b3244e06";
export const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_URL  = "https://image.tmdb.org/t/p/";
export const VDO_URL = "https://www.youtube.com/embed/";

export const genreMap = {
    "Action Packed": [28, 12, 878],
    "Girls Night In": [10749, 35, 18],
    "Edge Of Your Seat": [53, 9648, 27],
    "Feel Good": [35, 10751, 10749],
    "Music And Musicals": [10402, 18],
    "Mind Bending Thrillers": [9648, 878, 53],
    "Chilling Horror": [27, 9648],
    "True Crime": [80, 99],
    "Comedy": 35,
    "Romance": 10749,
    "Thriller": 53,
    "Animation": 16,
    "Drama": 18,
    "Sci-Fi": 878,
    "Documentary": 99,
    "Feel Good Movies": [35, 10749, 10751],
    "Mystery": 9648,
    "Family Watch Together": [10751, 16, 35],
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
};

export default requests;
