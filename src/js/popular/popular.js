import InitialSearch from './models/InitialSearch';
import * as BaseView from './views/baseView';
import * as InitialSearchView from './views/initialSearchView';
import * as Configuration from '../config';
import * as SearchMoviesView from './views/SearchMoviesView';
import SearchMovies from './models/SearchMovies';

/*
🔥
Global state

*/
const state = {};

const searchMovies = async ()=> {

      const query = {          
        optionSelected:BaseView.elements.selectSortResult.options[BaseView.elements.selectSortResult.selectedIndex].value,
        page: 1

      }

     state.searchMovies= new SearchMovies(query); 
     await state.searchMovies.getMovies();     
     SearchMoviesView.clearContainerMovies();
     InitialSearchView.displayPopularMovies(state.searchMovies.movies);
}

const initialSearch =  async () => {

const query = {
    lenguage: Configuration.MOVIE_DB_API.lenguague,
    filter: 'popular',
    page: 1
}

state.popularMovies = new InitialSearch(query);

await state.popularMovies.getMovies();

InitialSearchView.displayPopularMovies(state.popularMovies.movies);

}
const closeSearchMovieMobileView = () => {
    InitialSearchView.closeVersionMobile();    
}

const showSearchMovieMobileView = () =>  {

    InitialSearchView.showVersionMobile()
};

const toggleSectionView = (e) => {

  const parentNodeTarget = e.target.parentNode.parentNode;

  if (parentNodeTarget) InitialSearchView.toggleSection(parentNodeTarget);
  
};

const addEventListenerElements = () => {

   BaseView.transformToArray(BaseView.elements.iconsFaChevronRight).forEach(element => {element.addEventListener('click', toggleSectionView);});
   BaseView.elements.bars.addEventListener('click', showSearchMovieMobileView);
   BaseView.elements.faTimes.addEventListener('click', closeSearchMovieMobileView);
   BaseView.transformToArray(BaseView.elements.btnSearch).forEach(element => element.addEventListener('click', searchMovies));
}

const init = () => {
    addEventListenerElements();
    initialSearch();
};

(() => {init()})();
