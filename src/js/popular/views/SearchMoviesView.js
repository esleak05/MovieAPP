import * as BaseView from './baseView';
import * as Configuration from '../../config';
import * as InitialSearchView from './initialSearchView';

// export const displayRealeseDate = (type="asc", movies)=> {
//     movies.forEach(movie =>  InitialSearchView.renderMovie(movies));
// }

// export const displayPopularity = (type="asc") => {
//     movies.forEach(movie =>  InitialSearchView.renderMovie(movies));
// }

export const getSortOptions = () => {
    return {
        selectedOption: BaseView.elements.selectSortResult.options[BaseView.elements.selectSortResult.selectedIndex].value
    }
};

//estudiar caso
export const getFilterOptions = () => {
  return  {
    showMeSection: BaseView.elements.selectShowMeOption.value,
    releaseDate: {
      from: BaseView.elements.inputDateFrom.value,
      to: BaseView.elements.inputDateTo.value,
    },
    genres: BaseView.elements.genres,
    certificacions: BaseView.elements.certificacions,
  };
};

export const clearContainerMovies = () => {
  BaseView.elements.containerPopulars.innerHTML = '';
};
