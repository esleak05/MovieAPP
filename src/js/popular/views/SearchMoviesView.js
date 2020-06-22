import * as BaseView from './baseView';
import * as Configuration from '../../config';
import * as InitialSearchView from './initialSearchView';

// export const displayRealeseDate = (type="asc", movies)=> {
//     movies.forEach(movie =>  InitialSearchView.renderMovie(movies));
// } 


// export const displayPopularity = (type="asc") => {
//     movies.forEach(movie =>  InitialSearchView.renderMovie(movies));
// }

// export const sortOptions = {selectedOption: BaseView.elements.selectSortResult.options[BaseView.elements.selectSortResult.selectedIndex]};

export const filterOptions = {};

export const  clearContainerMovies = () => {BaseView.elements.containerPopulars.innerHTML = ''};