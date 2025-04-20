// Here we'll have all the url's for different api call necessary



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
  fetchTrending: `${import.meta.env.VITE_BASE_URL}/trending/all/week?api_key=${import.meta.env.VITE_API_KEY}`,

};

export default requests;
