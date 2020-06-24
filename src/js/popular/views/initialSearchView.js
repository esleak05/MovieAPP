import * as BaseView from './baseView';
import * as Configuration from '../../config';

const renderMovie  = movie => {
    
    const html = `<div class="container-movie">
    <div class="container-img-movie"><img src="${Configuration.MOVIE_DB_API.url_server_image}${movie.poster_path}" alt="${movie.title}"></div>
    <div class="descripcion-movie">
    <p class="movie-title">${movie.title} </p>
    <p class="movie-date">${movie.release_date}</p>
    </div>
    <div>
    <button class="btn btn-black">View</button>
    </div>
    </div>`;
    
    
    BaseView.elements.containerPopulars.insertAdjacentHTML('afterbegin', html);
    
}

export const  displayPopularMovies = (movies) => {

    movies.forEach(movie => renderMovie(movie));
}

const renderGenrs = genr  => {

    const html  = `<li><a href="#" data-id=${genr.id}>${genr.name}</a></li>`;    
    BaseView.elements.containerGenres.insertAdjacentHTML('afterbegin', html);
} 

export const displayGenres = genres => {

    genres.forEach(genr => renderGenrs(genr));

}


const renderCertifications = certificate => {
    const html = `<li><a href="#" data-order="${certificate.order}">${certificate.certification}</a></li>`;
    BaseView.elements.containerCertifications.insertAdjacentHTML('afterbegin', html);

}

export const displayCertifications = certifications=> {
    
    certifications.forEach(certificate=> renderCertifications(certificate));
}


export const toggleSection = (parentNode) => {

  const children = BaseView.transformToArray(parentNode.children);

  children.forEach((child) => {
    const childClassList = BaseView.transformToArray(child.classList);

    if (!childClassList.includes('name')) {
      child.classList.toggle('show');
    }
  });
};

export const showVersionMobile = () => {
  const divFilters = BaseView.elements.divFiltersMobile;
  const divOverlay = BaseView.elements.divOverlay;

  if (divFilters && divOverlay) {
    divOverlay.style.display = 'block';
    divFilters.style.display = 'block';
  }
};

export const closeVersionMobile = () => {
  const divFilters = BaseView.elements.divFiltersMobile;
  const divOverlay = BaseView.elements.divOverlay;

  if (divFilters && divOverlay) {
    divOverlay.style.display = 'none';
    divFilters.style.display = 'none';
  }
};
