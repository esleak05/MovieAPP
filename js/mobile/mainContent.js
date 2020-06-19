const showSearchMovieMobile = () => {

    const divFilters =  document.querySelector('.filters-mobile');
    const divOverlay = document.querySelector('.overlay');

    if(divFilters && divOverlay){
        divOverlay.style.display = 'block';
        divFilters.style.display  = 'block';
    }
};

const bars = document.querySelector('.bars');

if(bars){
    bars.addEventListener('click', showSearchMovieMobile);
}

const closeSearchMovieMobile = () => {
    
    const divFilters =  document.querySelector('.filters-mobile');
    const divOverlay = document.querySelector('.overlay');

    if(divFilters && divOverlay){
        divOverlay.style.display = 'none';
        divFilters.style.display  = 'none';
    }
}

const faTimes = document.querySelector('.fa-times');

if(faTimes){
    faTimes.addEventListener('click', closeSearchMovieMobile);
}



const toggleSectionFilter = (e)=> {
    
    
    const parentNodeTarget  = e.target.parentNode.parentNode;

    if(parentNodeTarget){
        
        const children = Array.from(parentNodeTarget.children);

        children.forEach(child => {

            const childClassList  = Array.from(child.classList);
         
            if(!childClassList.includes('name')){

                child.classList.toggle('show');
            }
         
        });

    }

}

const nodeClassListFaChevronRight = document.querySelectorAll('.fa-chevron-right');

if(nodeClassListFaChevronRight ){

 const arrayFaChevronRigth = Array.from(nodeClassListFaChevronRight);
 
 arrayFaChevronRigth.forEach(faChevronRight => faChevronRight.addEventListener('click', toggleSectionFilter));

}
