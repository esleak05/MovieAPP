export const elements = {

    iconsFaChevronRight: document.querySelectorAll('.fa-chevron-right'),
    bars: document.querySelector('.bars'),
    divFiltersMobile: document.querySelector('.filters-mobile'),
    divOverlay: document.querySelector('.overlay'),
    faTimes: document.querySelector('.fa-times'),
    containerPopulars: document.querySelector('.container-populars'),
    btnSearch: document.querySelectorAll('.btn-search'),
    selectSortResult: document.querySelector('.container-sort-result > select'),
    selectShowMeOption: document.querySelector('input[name="option-filter"]:checked'),
    inputDateFrom: document.querySelector('.from > input'),
    inputDateTo: document.querySelector('.to > input '),
    containerGenres: document.querySelector('.genres-movie > ul'),
    containerCertifications: document.querySelector('.container-certificacion > ul')

}


export const transformToArray = (iterable) => Array.from(iterable);  