import Search from './models/SigIn';
import * as SignView from './views/SigInView';
import { elements } from './views/baseView';
import * as URL from '../config';
/* 
 🔥 
 Global state login
*/
const state = {};

const searchUser = () => {
  const user = SignView.getInputs();

  state.search = new Search(user.inputUser, user.inputPassword);

  state.search.logInfoUser();

  if (state.search.validateUser())
    window.location.replace(`${URL.information.origin}/Popular.html`);
};

const addEventListenerElements = () => {
  elements.btnSign.addEventListener('click', searchUser);
};

const init = () => {
  addEventListenerElements();
};

(() => {
  init();
})();
