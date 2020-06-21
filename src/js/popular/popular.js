import InitialSearch from './models/InitialSearch';
import FilterTab from './models/FilterTab';
import SortTab from './models/SortTab';
import * as BaseView from './views/baseView';
import * as InitialSearchView from './views/initialSearchView';
import * as FilterTabView from './views/filterTabView';
import * as SortTabView from './views/sorTabView';

/*
🔥
Global state

*/
const state = {};

const initialSearch =  async () => {

state.popularMovies = new InitialSearch('movie');
await state.popularMovies.getPopularMovies();
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

   BaseView.transformToArray(BaseView.elements.iconsFaChevronRight).forEach((element) => {element.addEventListener('click', toggleSectionView);});
   BaseView.elements.bars.addEventListener('click', showSearchMovieMobileView);
   BaseView.elements.faTimes.addEventListener('click', closeSearchMovieMobileView);
}

const init = () => {
    addEventListenerElements();
    initialSearch();
};

(() => {init()})();
