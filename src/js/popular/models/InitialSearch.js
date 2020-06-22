import * as Configuration from '../../config';

export default class InitialSearch {
  constructor(query) {
    this.query = query;
  }
  async getMovies() {
    const response = await fetch(
      `${Configuration.MOVIE_DB_API.url}movie/${this.query.filter}?api_key=${Configuration.MOVIE_DB_API.key}&lenguage=${this.query.lenguage}&page=${this.query.page}`
    );
    const jsonResponse = await response.json();
    this.movies = jsonResponse.results;
  }
}
