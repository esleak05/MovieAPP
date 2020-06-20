import Search from './models/SigIn';
import * as SignView from './views/SigInView';
import { elements } from './views/baseView';
import * as  URL from '../config';
/* 
 🔥 
 Global state login
*/
const state = {}; 

const searchUser = () =>{
   console.log('inside searchUser function');
   const user = SignView.getInputs();
   
   state.search = new Search(user);

   alert(`${state.search} object Search`);

    if(state.search.validateUser()){
        console.log(`${URL.getLocal()}`);
        
        window.location.replace(`${URL.getLocal()}pages/Popular.html`); 
    }
};

export const init =  ()=> {
    console.log('register events listeners.');
    elements.btnSign.addEventListener('click', searchUser); 
}



