import InitialSearch from "./InitialSearch";
import  * as Configuration from '../../config'

export default class SearchMovies extends InitialSearch{
    constructor(query){
        super(query)
        this.query =query;
    }

    async getMovies(){
        
        const response = await fetch(`${Configuration.MOVIE_DB_API.url}discover/movie?api_key=${Configuration.MOVIE_DB_API.key}&language=${Configuration.MOVIE_DB_API.languague}&sort_by=${this.query.optionSelected}&page=${this.query.page}`);
        const jsonReponse = await response.json();
        console.log(jsonReponse);
        this.movies = jsonReponse.results;
    }


}