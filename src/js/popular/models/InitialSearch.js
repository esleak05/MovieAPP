import * as Configuration from  '../../config';

export default class InitialSearch {
    constructor(query){
        this.query = query;
        
    }

    async getPopularMovies () {
        // https://api.themoviedb.org/3/movie/popular?api_key=d9887a31ff36f8c7291613df224c14b4&language=en-US&page=1  
        // fetch(`${Configuration.MOVIE_DB_API.URL}${this.query}?api_key=${Configuration.MOVIE_DB_API.KEY}&page=1`).then((response)=>{
        //     console.log(response);
        //     console.log(response.json());
        //     this.response = response.json();
        // });
        const response  = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d9887a31ff36f8c7291613df224c14b4&language=en-US&page=1');
        const jsonResponse = await response.json();
        this.movies = jsonResponse.results;
        
        // fetch('https://api.themoviedb.org/3/movie/popular?api_key=d9887a31ff36f8c7291613df224c14b4&language=en-US&page=1').then((response)=>{
        //     return response.json();
           
        // }).then((data)=> {
          
        //     console.log(data.results);
        //    this.movies = data.results;
        //    console.log(`Property movies: ${this.movies}`);
        // });
        
    } 
}