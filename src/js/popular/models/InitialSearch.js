import * as Configuration from '../../config';

export default class InitialSearch {
  constructor(query) {
    this.query = query;
  }
  async getMovies() {
    try {
      const response = await fetch(
        `${Configuration.MOVIE_DB_API.url_movie}?api_key=${Configuration.MOVIE_DB_API.key}&lenguage=${Configuration.MOVIE_DB_API.lenguage}&page=${this.query.page}`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      this.movies = jsonResponse.results;
    } catch (error) {alert(`Error method getMovies() \n ${error}`)}
  }
  async getGenres() {
    try {
      const response = await fetch(
        `${Configuration.MOVIE_DB_API.url_genres}?api_key=${Configuration.MOVIE_DB_API.key}&lenguage=${Configuration.MOVIE_DB_API.languague}`
      );
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      this.genres = jsonResponse.genres;
    } catch (error) {alert(`Error method getGenres() \n ${error}`)}
  }
  async getCertifications(region = 'US') {
    try {
      const response = await fetch(
        `${Configuration.MOVIE_DB_API.url_certifications_movies}?api_key=${Configuration.MOVIE_DB_API.key}`
      );
      const jsonResponse = await response.json();
      this.certifications = jsonResponse.certifications.US;
    } catch (error) {alert(`Error method getCertifications(). \n ${error}`)}
  }
}
