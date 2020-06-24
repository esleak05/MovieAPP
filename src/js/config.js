export const information =  {
    protocol: window.location.protocol,
    hostName:  window.location.hostName,
    port: window.location.port,
    origin: window.location.origin,
    ancestorsOrigin: window.location.ancestorOrigins,
    hash: window.location.hash,
    host: window.location.host,
    path: window.location.pathname,   
    actual: window.location.href
}


export const MOVIE_DB_API  = {

    url_movie: 'https://api.themoviedb.org/3/discover/movie',
    url_genres: 'https://api.themoviedb.org/3/genre/movie/list',
    url_certifications_movies: 'https://api.themoviedb.org/3/certification/movie/list',
    url_server_image: 'https://image.tmdb.org/t/p/w220_and_h330_face/',    
    key: 'd9887a31ff36f8c7291613df224c14b4',
    languague: 'en-US' 

} 
